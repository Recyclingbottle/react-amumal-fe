import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";
import { login } from "../utils/authApi";
import { useAuthDispatch } from "../context/AuthContext";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [helperText, setHelperText] = useState("");
  const [isValid, setIsValid] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAuthDispatch();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = useCallback(() => {
    if (!email) {
      setHelperText(
        "*올바른 이메일 주소 형식을 입력해주세요. (예:example@example.com)"
      );
      setIsValid(false);
      return;
    } else if (!validateEmail(email)) {
      setHelperText(
        "*올바른 이메일 주소 형식을 입력해주세요. (예:example@example.com)"
      );
      setIsValid(false);
      return;
    }

    if (!password) {
      setHelperText("비밀번호를 입력해주세요");
      setIsValid(false);
      return;
    } else if (password.length < 8) {
      setHelperText("비밀번호가 짧습니다");
      setIsValid(false);
      return;
    } else if (password.length > 20) {
      setHelperText("비밀번호가 너무 깁니다");
      setIsValid(false);
      return;
    }

    setHelperText("");
    setIsValid(true);
  }, [email, password]);

  useEffect(() => {
    validateForm();
  }, [email, password, validateForm]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValid) {
      try {
        const response = await login({ email, password });
        dispatch({ type: "LOGIN", payload: response.user });
        localStorage.setItem("user", JSON.stringify(response.user));
        navigate("/");
      } catch (error) {
        setHelperText("로그인 중 오류가 발생했습니다. 다시 시도해주세요.");
      }
    }
  };

  return (
    <>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.formGroupInput}
            value={email}
            onChange={handleEmailChange}
          ></input>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            className={styles.formGroupInput}
            onChange={handlePasswordChange}
          ></input>
        </div>
        <p className={styles.helperText}>{helperText}</p>
        <button
          className={styles.loginButton}
          style={{ backgroundColor: isValid ? "#7E6AEE" : "#ACA0EB" }}
          type="submit"
        >
          로그인
        </button>
      </form>
    </>
  );
}

export default LoginForm;
