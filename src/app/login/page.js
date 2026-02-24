export default function LoginPage() {
  return (
    <main className="login-page">
      <section className="login-section" aria-label="Login">
        <div className="login-card">
          <a className="login-brand" href="/">
            <span className="login-brand-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="login-brand-text">FounderRise</span>
          </a>

          <p className="eyebrow">Member Login</p>
          <h1>Welcome back to FounderRise</h1>
          <p className="login-subtitle">
            Log in to access your founder dashboard, sessions, and resources.
          </p>

          <form className="login-form" action="#" method="post">
            <label className="login-field">
              <span>Email</span>
              <input type="email" name="email" placeholder="you@company.com" required />
            </label>

            <label className="login-field">
              <span>Password</span>
              <input type="password" name="password" placeholder="Enter password" required />
            </label>

            <div className="login-actions">
              <button className="btn btn-solid btn-apply-join" type="submit">
                Log In
              </button>
              <a className="login-forgot" href="/forgot-password">
                Forgot password?
              </a>
            </div>
          </form>

          <a className="login-back" href="/">
            Back to homepage
          </a>
        </div>
      </section>
    </main>
  );
}

