import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpForm.module.css";
import { uploadProfileImage } from "../utils/uploadApi";
import { checkEmail, checkNickname, signup } from "../utils/userApi";

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

  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
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

    setIsFormValid(isValid);
  }, [email, password, confirmPassword, nickname, profileImage]);

  const handleEmailChange = useCallback(
    debounce(async (email) => {
      if (email && validateEmail(email)) {
        try {
          const result = await checkEmail(email);
          if (result.exists) {
            setEmailHelperText("*중복된 이메일 입니다.");
            setIsFormValid(false);
          } else {
            setEmailHelperText("");
          }
        } catch (error) {
          setEmailHelperText("*이메일 중복 체크 중 오류가 발생했습니다.");
          setIsFormValid(false);
        }
      }
    }, 500),
    []
  );

  const handleNicknameChange = useCallback(
    debounce(async (nickname) => {
      if (nickname && validateNickname(nickname)) {
        try {
          const result = await checkNickname(nickname);
          if (result.exists) {
            setNicknameHelperText("*중복된 닉네임 입니다.");
            setIsFormValid(false);
          } else {
            setNicknameHelperText("");
          }
        } catch (error) {
          setNicknameHelperText("*닉네임 중복 체크 중 오류가 발생했습니다.");
          setIsFormValid(false);
        }
      }
    }, 500),
    []
  );

  useEffect(() => {
    handleEmailChange(email);
  }, [email, handleEmailChange]);

  useEffect(() => {
    handleNicknameChange(nickname);
  }, [nickname, handleNicknameChange]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormValid) {
      try {
        // 프로필 이미지 업로드
        const formData = new FormData();
        formData.append("profileImage", profileImage);
        const uploadResponse = await uploadProfileImage(formData);

        // 회원가입 요청
        const userData = {
          email,
          password,
          nickname,
          profileImage: uploadResponse.filename, // 업로드된 이미지 URL 사용
        };
        console.log(userData);
        await signup(userData);

        navigate("/login");
      } catch (error) {
        console.error("회원가입 중 오류 발생:", error);
        // 추가적인 오류 처리 로직을 여기에 작성할 수 있습니다.
      }
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
