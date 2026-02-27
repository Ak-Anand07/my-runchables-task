import { NextResponse } from 'next/server';
import { query } from '../../../../lib/server/db';
import bcrypt from 'bcryptjs';

export const runtime = 'nodejs';

export async function POST(req) {
  try {
    const { username, email, newPassword } = await req.json();

    const userNameValue = (username || email || '').trim().toLowerCase();

    if (!userNameValue || !newPassword) {
      return NextResponse.json(
        { ok: false, message: 'Username and new password are required.' },
        { status: 400 }
      );
    }

    const rows = await query(
      'SELECT id FROM users WHERE username = ? LIMIT 1',
      [userNameValue]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { ok: false, message: 'User not found.' },
        { status: 404 }
      );
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

    await query(
      'UPDATE users SET password = ? WHERE username = ?',
      [hashedPassword, userNameValue]
    );

    return NextResponse.json({
      ok: true,
      message: 'Password reset successful.',
    });

  } catch (error) {
    return NextResponse.json(
      { ok: false, message: 'Server error. Please try again.' },
      { status: 500 }
    );
  }
}