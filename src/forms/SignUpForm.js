import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpForm.module.css";

function SignUpForm({ profileImage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [emailHelperText, setEmailHelperText] = useState("");
  const [passwordHelperText, setPasswordHelperText] = useState("");
  const [confirmPasswordHelperText, setConfirmPasswordHelperText] =
    useState("");
  const [nicknameHelperText, setNicknameHelperText] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    return passwordRegex.test(password);
  };

  const validateNickname = (nickname) => {
    const nicknameRegex = /^[^\s]{1,10}$/;
    return nicknameRegex.test(nickname);
  };

  useEffect(() => {
    let isValid = true;

    if (!email) {
      setEmailHelperText("*이메일을 입력해주세요.");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailHelperText(
        "*올바른 이메일 주소 형식을 입력해주세요. (예: example@example.com)"
      );
      isValid = false;
    } else {
      setEmailHelperText("");
    }

    if (!password) {
      setPasswordHelperText("*비밀번호를 입력해주세요.");
      isValid = false;
    } else if (!validatePassword(password)) {
      setPasswordHelperText(
        "*비밀번호는 8자 이상, 20자 이하이며, 대문자, 소문자, 숫자, 특수문자를 각각 최소 1개 포함해야 합니다."
      );
      isValid = false;
    } else {
      setPasswordHelperText("");
    }

    if (!confirmPassword) {
      setConfirmPasswordHelperText("*비밀번호를 한번 더 입력해주세요.");
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordHelperText("*비밀번호가 다릅니다.");
      isValid = false;
    } else {
      setConfirmPasswordHelperText("");
    }

    if (!nickname) {
      setNicknameHelperText("*닉네임을 입력해주세요.");
      isValid = false;
    } else if (!validateNickname(nickname)) {
      if (nickname.length > 10) {
        setNicknameHelperText("*닉네임은 최대 10자까지 작성 가능합니다.");
      } else {
        setNicknameHelperText("*띄어쓰기를 없애주세요.");
      }
      isValid = false;
    } else {
      setNicknameHelperText("");
    }

    if (!profileImage) {
      setEmailHelperText("*프로필 사진을 추가해주세요.");
      isValid = false;
    } else {
      setEmailHelperText("");
    }

    setIsFormValid(isValid);
  }, [email, password, confirmPassword, nickname, profileImage]);

  const handleEmailBlur = () => {
    //중복 이메일 체크 서버에 보내는 곳
    //지금은 그냥 하나만
    if (email === "duplicate@example.com") {
      setEmailHelperText("*중복된 이메일 입니다.");
    }
  };

  const handleNicknameBlur = () => {
    //중복 닉네임 체크 서버에 보내는 곳
    //지금은 그냥 하나만
    if (nickname === "duplicateNickname") {
      setNicknameHelperText("*중복된 닉네임 입니다.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      //여기에서 서버에 회원가입 요청함
      navigate("/login");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={handleEmailBlur}
          required
        />
        <p className={styles.helperText} id="email-helper">
          {emailHelperText}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <p className={styles.helperText} id="password-helper">
          {passwordHelperText}
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
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <p className={styles.helperText} id="confirm-password-helper">
          {confirmPasswordHelperText}
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
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          onBlur={handleNicknameBlur}
          required
        />
        <p className={styles.helperText} id="nickname-helper">
          {nicknameHelperText}
        </p>
      </div>

      <button
        className={styles.signupButton}
        id="signup-button"
        type="submit"
        style={{
          marginTop: "10px",
          backgroundColor: isFormValid ? "#7E6AEE" : "#ACA0EB",
        }}
        disabled={!isFormValid}
      >
        회원가입
      </button>
    </form>
  );
}

export default SignUpForm;
