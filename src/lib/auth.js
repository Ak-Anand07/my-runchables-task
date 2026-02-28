'use client';

async function post(url, data) {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const payload = await res.json().catch(() => null);
    if (!res.ok) {
      return payload || { ok: false, message: 'Request failed. Please try again.' };
    }

    return payload || { ok: false, message: 'Invalid server response.' };
  } catch {
    return { ok: false, message: 'Network error. Please try again.' };
  }
}

export async function signupUser({ name, email, password }) {
  return post('/api/auth/signup', {
    name,
    username: String(email || '').trim().toLowerCase(),
    password,
  });
}

export async function loginUser({ email, password }) {
  return post('/api/auth/login', {
    username: String(email || '').trim().toLowerCase(),
    password,
  });
}

export async function resetPassword({ email, newPassword }) {
  return post('/api/auth/reset-password', {
    username: String(email || '').trim().toLowerCase(),
    newPassword,
  });
}
