import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

import before_img from "../../assets/images/navigate-before.png";
import { useAuthState } from "../../context/AuthContext";
import { API_BASE_URL } from "../../utils/config";

function Navbar({ showBackButton, ShowProfileImage }) {
  const { user } = useAuthState();

  const [menuVisible, setMenuVisible] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const handleBack = () => {
    navigate(-1);
  };
  function toggleMenu() {
    setMenuVisible((prev) => !prev);
  }

  return (
    <div className={styles.navbar}>
      {showBackButton && (
        <img
          className={styles.beforeImage}
          onClick={handleBack}
          src={before_img}
          alt="back-img"
        />
      )}
      <p className={styles.logoText}>아무 말 대잔치</p>
      {ShowProfileImage && user && (
        <div ref={menuRef} onClick={toggleMenu}>
          <img
            className={styles.profileImage}
            src={`${API_BASE_URL}/images/profile/${user.profile_image}`}
            alt="profile-img"
          />
        </div>
      )}
      {menuVisible && (
        <ul className={styles.menu}>
          <li
            className={styles.menuItem}
            onClick={() => navigate("/edit-profile")}
          >
            회원정보수정
          </li>
          <li
            className={styles.menuItem}
            onClick={() => navigate("/change-password")}
          >
            비밀번호수정
          </li>
          <li className={styles.menuItem} onClick={() => navigate("/login")}>
            로그아웃
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
