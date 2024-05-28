import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import styles from "./PasswordChangePage.module.css";

function PasswordChangePage() {
  //const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordHelper, setPasswordHelper] = useState("* helper text");
  const [confirmPasswordHelper, setConfirmPasswordHelper] =
    useState("* helper text");
  const [isFormValid, setIsFormValid] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validateForm(e.target.value, confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    validateForm(password, e.target.value);
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    return passwordRegex.test(password);
  };

  const validateForm = (password, confirmPassword) => {
    let isValid = true;

    if (!password) {
      setPasswordHelper("* 비밀번호를 입력해주세요.");
      isValid = false;
    } else if (!validatePassword(password)) {
      setPasswordHelper(
        "* 비밀번호는 8자 이상, 20자 이하이며, 대문자, 소문자, 숫자, 특수문자를 각각 최소 1개 포함해야 합니다."
      );
      isValid = false;
    } else {
      setPasswordHelper("");
    }

    if (!confirmPassword) {
      setConfirmPasswordHelper("* 비밀번호를 한번 더 입력해주세요.");
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordHelper("* 비밀번호와 다릅니다.");
      isValid = false;
    } else {
      setConfirmPasswordHelper("");
    }

    setIsFormValid(isValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      //여기에 서버 로직 추가하면됨
      showToast("수정 완료");
      //로그인페이지로 가야하나? 피그마엔 없으니 일단 주석
      //navigate("/login");
    }
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage("");
    }, 3000);
  };

  return (
    <>
      <Navbar showBackButton={false} ShowProfileImage={true}></Navbar>
      <div className={styles.pageContainer}>
        <div className={styles.changePWContainer}>
          <p className={styles.pageHeader}>비밀번호 수정</p>
          <form onSubmit={handleSubmit}>
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
                onChange={handlePasswordChange}
                required
              />
              <p className={styles.helperText} id="passwordHelper">
                {passwordHelper}
              </p>
            </div>
            <div className={styles.formGroup}>
              <label
                className={styles.formGroupLabel}
                htmlFor="confirmPassword"
              >
                비밀번호 확인*
              </label>
              <input
                className={styles.formGroupInput}
                type="password"
                id="confirmPassword"
                name="confirm_password"
                placeholder="비밀번호를 한번 더 입력하세요"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
              <p className={styles.helperText} id="confirmPasswordHelper">
                {confirmPasswordHelper}
              </p>
            </div>
            <div className={styles.btnContainer}>
              <button
                className={styles.changeButton}
                type="submit"
                style={{ backgroundColor: isFormValid ? "#7F6AEE" : "#ACA0EB" }}
                disabled={!isFormValid}
              >
                수정하기
              </button>
            </div>
          </form>
          {toastMessage && <div className={styles.toast}>{toastMessage}</div>}
        </div>
      </div>
    </>
  );
}

export default PasswordChangePage;
