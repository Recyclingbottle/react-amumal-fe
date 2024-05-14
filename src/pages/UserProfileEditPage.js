import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProfileInput from "../components/ProfileInput";
import styles from "../style/UserProfileEditPage.module.css";
import Modal from "../components/Modal";
import df_profile_img from "../assets/images/profile_img.webp";

function UserProfileEditPage() {
  const [nickname, setNickname] = useState("jun.park (박원준)");
  const [email] = useState("hoholeo382@gmail.com");
  const [isModalOpen, setModalOpen] = useState(false);
  const [helperText, setHelperText] = useState("*helper text");
  const [toastMessage, setToastMessage] = useState("");

  const navigate = useNavigate();

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
    navigate("/login");
  };

  const validateNickname = () => {
    if (!nickname) {
      setHelperText("*닉네임을 입력해주세요.");
      return false;
    }
    if (nickname.length > 10) {
      setHelperText("*닉네임은 최대 10자까지 작성 가능합니다.");
      return false;
    }
    //여기에서 서버와 닉중복확인하면됨
    setHelperText("");
    return true;
  };

  const handleSubmit = () => {
    if (validateNickname()) {
      //여기에서 수정 메소드 쓰면됨

      showToast("수정 완료");
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
        <div className={styles.profileEditContainer}>
          <p className={styles.pageHeader}>회원 정보 수정</p>
          {/* 나중에 진짜 사용자의 이미지로 해야함 */}
          <ProfileInput image={df_profile_img} />
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
            <p className={styles.helperText}>{helperText}</p>
          </form>
          <div className={styles.btnContainer}>
            <button
              className={styles.EditButton}
              type="button"
              style={{ marginTop: 5 }}
              onClick={handleSubmit}
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
            <button className={styles.backBtn} onClick={() => navigate("/")}>
              수정완료
            </button>
          </div>
          {toastMessage && <div className={styles.toast}>{toastMessage}</div>}
        </div>
      </div>
    </>
  );
}

export default UserProfileEditPage;
