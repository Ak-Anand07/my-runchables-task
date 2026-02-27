'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from '../../lib/auth';
import { useAuth } from '../../context/AuthContext';

export default function LoginPage() {
  const router = useRouter();
  const { setUser } = useAuth();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    const result = await loginUser(form);

    if (!result.ok) {
      setError(result.message);
      return;
    }

    setSuccess(result.message);
    setUser(result.user || { username: form.email });
    setTimeout(() => router.push('/account/profile'), 500);
  };

  return (
    <main className="login-page">
      <section className="login-section" aria-label="Login">
        <div className="login-card">
          <Link className="login-brand" href="/">
            <span className="login-brand-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="login-brand-text">FounderRise</span>
          </Link>

          <p className="eyebrow">Member Login</p>
          <h1>Welcome back to FounderRise</h1>
          <p className="login-subtitle">
            Log in to access your founder dashboard, sessions, and resources.
          </p>

          <form className="login-form" onSubmit={onSubmit}>
            <label className="login-field">
              <span>Email</span>
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={onChange}
                required
              />
            </label>

            <label className="login-field">
              <span>Password</span>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={form.password}
                onChange={onChange}
                required
              />
            </label>

            {error ? <p className="form-feedback form-feedback-error">{error}</p> : null}
            {success ? <p className="form-feedback form-feedback-success">{success}</p> : null}

            <div className="login-actions">
              <button className="btn btn-solid btn-apply-join" type="submit">
                Log In
              </button>
            </div>

            <div className="login-alt-actions">
              <Link className="login-forgot" href="/forgot-password">
                Forgot password?
              </Link>
              <Link className="login-signup" href="/account/signup">
                Create an account
              </Link>
            </div>
          </form>

          <Link className="login-back" href="/">
            Back to homepage
          </Link>
        </div>
      </section>
    </main>
  );
}

