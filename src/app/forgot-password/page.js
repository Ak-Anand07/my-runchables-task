export default function ForgotPasswordPage() {
  return (
    <main className="login-page">
      <section className="login-section" aria-label="Forgot password">
        <div className="login-card">
          <a className="login-brand" href="/">
            <span className="login-brand-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="login-brand-text">FounderRise</span>
          </a>

          <p className="eyebrow">Account Recovery</p>
          <h1>Reset your password</h1>
          <p className="login-subtitle">
            Enter your account email and we will send a password reset link.
          </p>

          <form className="login-form" action="#" method="post">
            <label className="login-field">
              <span>Email</span>
              <input type="email" name="email" placeholder="you@company.com" required />
            </label>

            <div className="login-actions">
              <button className="btn btn-solid btn-apply-join" type="submit">
                Send Reset Link
              </button>
              <a className="login-forgot" href="/login">
                Already have an account? Sign in
              </a>
            </div>
          </form>

          <a className="login-back" href="/login">
            Back to login
          </a>
        </div>
      </section>
    </main>
  );
}

