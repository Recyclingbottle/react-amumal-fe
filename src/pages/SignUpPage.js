import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import SignUpForm from "../forms/SignUpForm";
import "../style/SignUpPage.css";
import addIcon from "../assets/images/add-icon.png";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const [profileImage, setProfileImage] = useState({
    src: addIcon,
    style: { width: "24px", height: "24px" },
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [helperTexts, setHelperTexts] = useState({
    email: "*helper text",
    password: "*helper text",
    confirmPassword: "*helper text",
    nickname: "*helper text",
    profileImage: "*helper text",
  });
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    //회원가입 서버 통신 로직 추가 예정
  };
  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <Navbar showBackButton={true} showProfile={false} />
      <div className="page-container">
        <div className="signup-container">
          <p className="page-header">회원가입</p>
          <SignUpForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            nickname={nickname}
            setNickname={setNickname}
            profileImage={profileImage}
            setProfileImage={setProfileImage}
            helperTexts={helperTexts}
            setHelperTexts={setHelperTexts}
            handleSignUp={handleSignUp}
            fileInputRef={fileInputRef}
          />
          <div class="a-container">
            <p className="go-to-login" onClick={goToLogin}>
              로그인하러 가기
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
