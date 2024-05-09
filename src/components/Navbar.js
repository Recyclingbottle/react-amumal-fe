import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import before_img from "../assets/images/navigate-before.png";
import df_profile_img from "../assets/images/profile_img.webp";

function Navbar({
  userProfileImage,
  showBackButton = false,
  showProfile = false,
}) {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="banner-container">
      {showBackButton && (
        <button
          className="navigate-before-button"
          onClick={() => navigate(-1)}
          aria-label="뒤로 가기"
        >
          <img
            className="navigate-before-img"
            src={before_img}
            alt="뒤로가기"
          />
        </button>
      )}
      <p className="banner-text">아무 말 대잔치</p>
      {showProfile && (
        <div
          className="profile-hover"
          onMouseEnter={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
        >
          <img
            src={df_profile_img}
            alt="프로필 사진"
            className="profile-picture"
          />
          {showMenu && (
            <div className="menu">
              <p>회원정보수정</p>
              <p>비밀번호수정</p>
              <p>로그아웃</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;
