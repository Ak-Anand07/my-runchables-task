import { NextResponse } from 'next/server';
import { ensureSchema, query } from '../../../../lib/server/db';
import bcrypt from 'bcryptjs';

export const runtime = 'nodejs';

export async function POST(req) {
  try {
    await ensureSchema();

    const { username, email, password } = await req.json();

    const userNameValue = (username || email || '').trim().toLowerCase();

    if (!userNameValue || !password) {
      return NextResponse.json(
        { ok: false, message: 'Username and password are required.' },
        { status: 400 }
      );
    }

    const existing = await query(
      'SELECT id FROM users WHERE username = ? LIMIT 1',
      [userNameValue]
    );

    if (existing.length > 0) {
      return NextResponse.json(
        { ok: false, message: 'User already exists.' },
        { status: 409 }
      );
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    await query(
      'INSERT INTO users (username, password) VALUES (?, ?)',
      [userNameValue, hashedPassword]
    );

    return NextResponse.json({
      ok: true,
      message: 'Signup successful.',
    });

  } catch (error) {
    console.error('Signup API error:', error);
    return NextResponse.json(
      { ok: false, message: 'Server error. Please try again.' },
      { status: 500 }
    );
  }
}
