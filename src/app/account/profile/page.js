'use client';

import Link from 'next/link';
import { useAuth } from '../../../context/AuthContext';

export default function ProfilePage() {
  const { user } = useAuth();

  if (!user) {
    return (
      <main className="login-page">
        <div className="login-card profile-card profile-empty">
          <p className="form-feedback form-feedback-error">
            No user data found. Please login again.
          </p>
          <Link className="btn btn-solid" href="/login">
            Go to Login
          </Link>
        </div>
      </main>
    );
  }

  const displayName = user.name || user.username || 'Founder';
  const username = user.username || '-';
  const initials = displayName
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
  const memberSince = new Date().toLocaleDateString();
  const lastActive = new Date().toLocaleString();

  return (
    <main className="login-page">
      <section className="login-section" aria-label="Profile dashboard">
      <div className="login-card profile-card profile-shell">
        <div className="profile-header">
          <div className="profile-meta">
            <div className="profile-avatar-lg" aria-hidden="true">{initials}</div>
            <div className="profile-meta-text">
              <p className="eyebrow">Member Dashboard</p>
              <h1>{displayName}</h1>
              <p>{username}</p>
            </div>
          </div>
          <span className="profile-status">Verified</span>
        </div>

        <div className="profile-grid">
          <div className="profile-panel">
            <p className="profile-panel-title">Account Information</p>
            <div className="profile-row">
              <span className="profile-label">User ID</span>
              <span className="profile-value">{user.id}</span>
            </div>
            <div className="profile-row">
              <span className="profile-label">Display Name</span>
              <span className="profile-value">{displayName}</span>
            </div>
            <div className="profile-row">
              <span className="profile-label">Username</span>
              <span className="profile-value">{username}</span>
            </div>
          </div>

          <div className="profile-panel">
            <p className="profile-panel-title">Activity & Security</p>
            <div className="profile-row">
              <span className="profile-label">Member Since</span>
              <span className="profile-value">{memberSince}</span>
            </div>
            <div className="profile-row">
              <span className="profile-label">Last Active</span>
              <span className="profile-value">{lastActive}</span>
            </div>
            <div className="profile-row">
              <span className="profile-label">Security</span>
              <span className="profile-value">Password Protected</span>
            </div>
          </div>
        </div>

        <div className="profile-actions">
          <Link className="btn btn-solid btn-apply-join" href="/forgot-password">
            Change Password
          </Link>
          <Link className="btn btn-ghost profile-home-btn" href="/">
            Back to Home
          </Link>
        </div>
      </div>
      </section>
    </main>
  );
}
