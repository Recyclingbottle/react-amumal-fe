import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProfileInput from "../components/ProfileInput";
import styles from "../style/UserProfileEditPage.module.css";
import Modal from "../components/Modal";

function UserProfileEditPage() {
  const [nickname, setNickname] = useState("jun.park (박원준)");
  const [email, setEmail] = useState("hoholeo382@gmail.com");
  const [isModalOpen, setModalOpen] = useState(false);

  const navigator = useNavigate();

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };
  const handleDelete = () => {
    setModalOpen(true);
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  const handleConfirm = () => {
    console.log("회원탈퇴 확인 누름");
    setModalOpen(false);
    navigator("/login");
  };

  return (
    <>
      <Navbar showBackButton={false} ShowProfileImage={true}></Navbar>
      <div className={styles.pageContainer}>
        <div className={styles.profileEditContainer}>
          <p className={styles.pageHeader}>회원 정보 수정</p>
          <ProfileInput />
          <form>
            <div className={styles.formGroup}>
              <label className={styles.formGroupLabel} htmlFor="email">
                이메일
              </label>
              <p id="email">{email}</p>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formGroupLabel} htmlFor="nickname">
                닉네임
              </label>
              <input
                className={styles.formGroupInput}
                type="text"
                id="nickname"
                name="nickname"
                value={nickname}
                onChange={handleNicknameChange}
                required
              />
            </div>
            <p className={styles.helperText}>*helper text</p>
          </form>
          <div className={styles.btnContainer}>
            <button
              className={styles.EditButton}
              type="button"
              style={{ marginTop: 5 }}
            >
              수정하기
            </button>

            <p className={styles.goToLogin} onClick={handleDelete}>
              회원탈퇴
            </p>
            <Modal
              isOpen={isModalOpen}
              title="회원탈퇴 하시겠습니까?"
              content="작성된 게시글과 댓글은 삭제됩니다."
              onCancel={handleCancel}
              onConfirm={handleConfirm}
            />
            <input type="checkbox" id="modalToggle" hidden />
          </div>
          <div className={styles.backBtnBox}>
            <button className={styles.backBtn} onClick={() => navigator(-1)}>
              수정완료
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfileEditPage;
