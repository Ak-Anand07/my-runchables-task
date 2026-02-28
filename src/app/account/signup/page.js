'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signupUser } from '../../../lib/auth';

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '', confirmPassword: '' });
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

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (form.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    const result = await signupUser(form);

    if (!result.ok) {
      setError(result.message);
      return;
    }

    setSuccess(result.message);
    setForm({ email: '', password: '', confirmPassword: '' });
    setTimeout(() => router.push('/login'), 700);
  };

  return (
    <main className="login-page">
      <section className="login-section" aria-label="Sign up">
        <div className="login-card">
          <Link className="login-brand" href="/">
            <span className="login-brand-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="login-brand-text">FounderRise</span>
          </Link>

          <p className="eyebrow">Create Account</p>
          <h1>Join FounderRise</h1>
          <p className="login-subtitle">
            Create your account to access your founder dashboard and community resources.
          </p>

          <form className="login-form" onSubmit={onSubmit}>
            <label className="login-field" htmlFor="email">
              <span>Email</span>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={onChange}
                required
              />
            </label>

            <label className="login-field" htmlFor="password">
              <span>Password</span>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Create password"
                value={form.password}
                onChange={onChange}
                required
              />
            </label>

            <label className="login-field" htmlFor="confirmPassword">
              <span>Confirm Password</span>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                value={form.confirmPassword}
                onChange={onChange}
                required
              />
            </label>

            {error ? <p className="form-feedback form-feedback-error">{error}</p> : null}
            {success ? <p className="form-feedback form-feedback-success">{success}</p> : null}

            <div className="login-actions">
              <button className="btn btn-solid btn-apply-join" type="submit">
                Create Account
              </button>
              <Link className="login-forgot" href="/login">
                Already have an account?
              </Link>
            </div>
          </form>

          <Link className="login-back" href="/login">
            Back to login
          </Link>
        </div>
      </section>
    </main>
  );
}
