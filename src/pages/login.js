import React from 'react';
import cx from 'classnames';
import styles from '../styles/Signin.module.css'

const Login = () => {
    return (
        <div>
          <main className={cx(styles["form-signin"],"text-center","mt-5","bg-light")}>
        <form>
          <h1 className="h3 mb-3 fw-normal">Please Login in</h1>
          <p>Create account <a >Signup</a></p>

          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
      </main>

        </div>
    );
}

export default Login;
