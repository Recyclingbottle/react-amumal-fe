import React, { useState } from "react";
import styles from "../style/LoginPage.module.css";
import Navbar from "../components/Navbar";
import LoginForm from "../forms/LoginForm";
function LoginPage() {
  return (
    <>
      <Navbar showBackButton={false} ShowProfileImage={false} />
      <div className={styles.pageContainer}>
        <div className={styles.loginContainer}>
          <p className={styles.pageHeader}>로그인</p>
          <LoginForm></LoginForm>
          <p className={styles.signupLink}>회원가입</p>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
