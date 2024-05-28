import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import styles from "./SignUpPage.module.css";
import SignUpForm from "../../forms/SignUpForm";
import ProfileInput from "../../components/posts/ProfileInput";

function SignUpPage() {
  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate();

  function goLogin() {
    navigate("/login");
  }

  return (
    <>
      <Navbar showBackButton={true} ShowProfileImage={false}></Navbar>
      <div className={styles.pageContainer}>
        <div className={styles.signUpContainer}>
          <p className={styles.pageHeader}>회원가입</p>
          <ProfileInput onImageChange={setProfileImage}></ProfileInput>
          <SignUpForm profileImage={profileImage}></SignUpForm>
          <p className={styles.goLogin} onClick={goLogin}>
            로그인 하러가기
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
