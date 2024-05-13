import React, { useState } from "react";
import Navbar from "../components/Navbar";
import styles from "../style/PasswordChangePage.module.css";

function PasswordChangePage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <>
      <Navbar showBackButton={false} ShowProfileImage={true}></Navbar>
      <div className={styles.pageContainer}>
        <div className={styles.changePWContainer}>
          <p className={styles.pageHeader}>비밀번호 수정</p>
          <form>
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
                *helper text
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
                *helper text
              </p>
            </div>
            <div className={styles.btnContainer}>
              <button className={styles.changeButton} type="button">
                수정하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default PasswordChangePage;
