import React, { useRef, useEffect } from "react";
import addIcon from "../assets/images/add-icon.png";
import styles from "./ProgileInput.module.css";
function ProfileInput({ image }) {
  const fileInputRef = useRef();

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

  return (
    <>
      <div className={styles.uploadContainer}>
        <label className={styles.profileLabel}>프로필 사진</label>
        <p className={styles.helperText}>*helper text</p>
        <div className={styles.profileAddBox}>
          {image ? (
            <img
              src={image}
              alt="Profile"
              style={{ width: "149px", height: "149px", borderRadius: "100%" }}
            />
          ) : (
            <img src={addIcon} alt="Add icon" style={{ width: "24px" }} />
          )}
          <input type="file" ref={fileInputRef} style={{ display: "none" }} />
        </div>
      </div>
    </>
  );
}

export default ProfileInput;
