import React from "react";
import styles from "./SignUpForm.module.css";

function SignUpForm() {
  return (
    <form>
      <div className={styles.formGroup}>
        <label className={styles.formGroupLabel} htmlFor="email">
          이메일*
        </label>
        <input
          className={styles.formGroupInput}
          type="email"
          id="email"
          name="email"
          placeholder="이메일을 입력하세요"
          required
        />
        <p className={styles.helperText} id="email-helper">
          *helper text
        </p>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formGroupLabel} htmlFor="password">
          비밀번호*
        </label>
        <input
          className={styles.formGroupInput}
          type="password"
          id="password"
          name="password"
          placeholder="비밀번호를 입력하세요"
          required
        />
        <p className={styles.helperText} id="password-helper">
          *helper text
        </p>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formGroupLabel} htmlFor="confirm-password">
          비밀번호 확인*
        </label>
        <input
          className={styles.formGroupInput}
          type="password"
          id="confirm-password"
          name="confirm_password"
          placeholder="비밀번호를 한번 더 입력하세요"
          required
        />
        <p className={styles.helperText} id="confirm-password-helper">
          *helper text
        </p>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formGroupLabel} htmlFor="nickname">
          닉네임*
        </label>
        <input
          className={styles.formGroupInput}
          type="text"
          id="nickname"
          name="nickname"
          placeholder="닉네임을 입력하세요"
          required
        />
        <p className={styles.helperText} id="nickname-helper">
          *helper text
        </p>
      </div>
      <button
        className={styles.signupButton}
        id="signup-button"
        type="button"
        style={{ marginTop: "10px" }}
      >
        회원가입
      </button>
    </form>
  );
}

export default SignUpForm;
