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

    const rows = await query(
      'SELECT id, username, password FROM users WHERE username = ? LIMIT 1',
      [userNameValue]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { ok: false, message: 'Invalid username or password.' },
        { status: 401 }
      );
    }

    const user = rows[0];

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json(
        { ok: false, message: 'Invalid username or password.' },
        { status: 401 }
      );
    }

    delete user.password;

    return NextResponse.json({
      ok: true,
      message: 'Login successful.',
      user,
    });

  } catch (error) {
    console.error('Login API error:', error);
    return NextResponse.json(
      { ok: false, message: 'Server error. Please try again.' },
      { status: 500 }
    );
  }
}
