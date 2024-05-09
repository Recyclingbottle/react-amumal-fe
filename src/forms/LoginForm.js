import React from "react";
import "../style/LoginPage.css";

function LoginForm({
  email,
  setEmail,
  password,
  setPassword,
  helperText,
  setHelperText,
  handleLogin,
}) {
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.length === 0) {
      return "*이메일을 입력해주세요";
    } else if (email.length < 5) {
      return "*이메일 주소가 너무 짧습니다";
    } else if (!emailRegex.test(email)) {
      return "*올바른 이메일 주소형식을 입력해주세요. (예: example@example.com)";
    }
    return "";
  };

  const validatePassword = (password) => {
    if (password.length === 0) {
      return "*비밀번호를 입력해주세요";
    }
    return "";
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    if (setter === setEmail) {
      setHelperText(validateEmail(e.target.value));
    } else if (setter === setPassword) {
      setHelperText(validatePassword(e.target.value));
    }
  };

  return (
    <form className="login-form" onSubmit={(e) => e.preventDefault()}>
      <div className="form-group">
        <label htmlFor="email">이메일</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={handleInputChange(setEmail)}
        />
      </div>
      <div className="form-group" style={{ marginTop: "10px" }}>
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={handleInputChange(setPassword)}
        />
        <p className="helper-text" id="login-helper">
          {helperText}
        </p>
      </div>
      <button className="login-button" type="button" onClick={handleLogin}>
        로그인
      </button>
    </form>
  );
}

export default LoginForm;
