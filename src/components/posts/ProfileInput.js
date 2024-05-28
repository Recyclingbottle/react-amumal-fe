import React, { useRef, useEffect, useState } from "react";
import addIcon from "../../assets/images/add-icon.png";
import styles from "./ProfileInput.module.css";

function ProfileInput({ image, onImageChange }) {
  const [profileImage, setProfileImage] = useState(image);
  const [helperText, setHelperText] = useState("");
  const fileInputRef = useRef();

  useEffect(() => {
    if (image) {
      setHelperText("");
    } else {
      setHelperText("*프로필 사진을 추가해주세요.");
    }
    setProfileImage(image);
  }, [image]);

  useEffect(() => {
    const handleDivClick = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      } else {
        console.error("에러남");
      }
    };

    const div = document.querySelector(`.${styles.profileAddBox}`);
    div.addEventListener("click", handleDivClick);

    return () => {
      div.removeEventListener("click", handleDivClick);
    };
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        setHelperText(""); // 이미지 추가되면 helper text 안보임
        // 나중에 서버에 업로드 로직 여기에 추가하면 됨
        onImageChange(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      // 파일이 선택되지 않으면 이미지 제거
      setProfileImage(null);
      setHelperText("*프로필 사진을 추가해주세요.");
      onImageChange(null);
    }
  };

  // 파일 선택 취소 시 input의 value를 초기화
  const handleInputClick = (event) => {
    event.target.value = null;
  };

  return (
    <>
      <div className={styles.uploadContainer}>
        <label className={styles.profileLabel}>프로필 사진</label>
        <p className={styles.helperText}>{helperText}</p>
        <div className={styles.profileAddBox}>
          <img
            src={profileImage || addIcon}
            alt="Profile"
            style={{
              width: profileImage ? "149px" : "24px",
              height: profileImage ? "149px" : "24px",
              borderRadius: profileImage ? "100%" : "0",
            }}
          />
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
            onClick={handleInputClick}
          />
        </div>
      </div>
    </>
  );
}

export default ProfileInput;
