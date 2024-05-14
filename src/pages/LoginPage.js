import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../style/LoginPage.module.css";
import Navbar from "../components/Navbar";
import LoginForm from "../forms/LoginForm";
function LoginPage() {
  const navigate = useNavigate();
  const gotosingup = () => {
    navigate("/signup");
  };
  return (
    <>
      <Navbar showBackButton={false} ShowProfileImage={false} />
      <div className={styles.pageContainer}>
        <div className={styles.loginContainer}>
          <p className={styles.pageHeader}>로그인</p>
          <LoginForm></LoginForm>
          <p className={styles.signupLink} onClick={gotosingup}>
            회원가입
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
