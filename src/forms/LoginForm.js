import React, { useState } from "react";
import styles from "./LoginForm.module.css";
function LoginForm() {
  return (
    <>
      <form className={styles.loginForm}>
        <div className={styles.formGroup}>
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            name="eamil"
            className={styles.formGroupInput}
          ></input>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            name="password"
            className={styles.formGroupInput}
          ></input>
        </div>
        <p className={styles.helperText}>*helper-text</p>
        <button className={styles.loginButton}>로그인</button>
      </form>
    </>
  );
}

export default LoginForm;
