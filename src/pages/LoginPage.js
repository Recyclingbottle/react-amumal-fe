import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import LoginForm from "../forms/LoginForm"; // LoginForm 컴포넌트를 임포트합니다.
import "../style/LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [helperText, setHelperText] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    //console.log("로그인", email, password);
  };

  const navigateToSignup = () => {
    navigate("/signup");
  };

  return (
    <>
      <Navbar showBackButton={false} showProfile={false} />
      <div className="page-container">
        <div className="login-container">
          <p className="page-header">로그인</p>
          <LoginForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            helperText={helperText}
            setHelperText={setHelperText}
            handleLogin={handleLogin}
          />
          <button
            id="signup-button"
            className="signup-link"
            onClick={navigateToSignup}
          >
            회원가입
          </button>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
