import React from "react";

function SignUpForm({
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  nickname,
  setNickname,
  profileImage,
  setProfileImage,
  helperTexts,
  setHelperTexts,
  handleSignUp,
  fileInputRef,
}) {
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage({
          src: reader.result,
          style: { width: "149px", height: "149px", borderRadius: "100%" },
        });
        setHelperTexts((prev) => ({ ...prev, profileImage: "" }));
      };
      reader.readAsDataURL(file);
    } else {
      setHelperTexts((prev) => ({
        ...prev,
        profileImage: "*프로필 사진을 추가해주세요.",
      }));
    }
  };
  const validateEmail = (email) => {
    if (!email) return "*이메일을 입력해주세요.";
    if (email.length < 5 || !/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
      return "*올바른 이메일 주소 형식을 입력해주세요. (예: example@example.com)";
    }
    return "";
  };

  const validatePassword = (password) => {
    if (!password) return "*비밀번호를 입력해주세요";
    if (
      password.length < 8 ||
      !/[A-Za-z]/.test(password) ||
      !/[0-9]/.test(password) ||
      !/[!@#$%^&*]/.test(password)
    ) {
      return "*비밀번호는 8자 이상이며, 대문자, 소문자, 숫자, 특수문자를 각각 최소 1개 포함해야 합니다.";
    }
    return "";
  };

  const validateConfirmPassword = () => {
    if (!confirmPassword) return "*비밀번호를 한번 더 입력해주세요";
    if (confirmPassword !== password) return "*비밀번호가 다릅니다.";
    return "";
  };

  const validateNickname = (nickname) => {
    if (!nickname) return "*닉네임을 입력해주세요.";
    if (/\s/.test(nickname)) return "*띄어쓰기를 없애주세요";
    if (nickname.length > 10) return "*닉네임은 최대 10자까지 작성 가능합니다.";
    return "";
  };

  const handleInputChange = (setter, validationFunc, fieldName) => (event) => {
    const value = event.target.value;
    setter(value);
    const validationResult = validationFunc(value);
    setHelperTexts((prev) => ({
      ...prev,
      [fieldName]: validationResult,
    }));
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="form-group">
        <label className="profile-img-label" htmlFor="profile-img">
          프로필 사진
        </label>
        <p className="helper-text">{helperTexts.profileImage}</p>
        <div
          className="upload-container"
          onClick={() => fileInputRef.current.click()}
        >
          <div className="profile-add-img">
            <img
              id="profile-img-preview"
              src={profileImage.src}
              style={profileImage.style}
              alt="프로필 사진 추가"
            />
            <input
              type="file"
              id="profile-img"
              name="profile_image"
              style={{ display: "none" }}
              onChange={handleImageChange}
              ref={fileInputRef}
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="email">이메일*</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="이메일을 입력하세요"
          required
          value={email}
          onChange={(e) =>
            handleInputChange(setEmail, validateEmail, "email")(e)
          }
        />
        <p className="helper-text">{helperTexts.email}</p>
      </div>
      <div className="form-group">
        <label htmlFor="password">비밀번호*</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="비밀번호를 입력하세요"
          required
          value={password}
          onChange={(e) =>
            handleInputChange(setPassword, validatePassword, "password")(e)
          }
        />
        <p className="helper-text">{helperTexts.password}</p>
      </div>
      <div className="form-group">
        <label htmlFor="confirm-password">비밀번호 확인*</label>
        <input
          type="password"
          id="confirm-password"
          name="confirm_password"
          placeholder="비밀번호를 한번 더 입력하세요"
          required
          value={confirmPassword}
          onChange={(e) =>
            handleInputChange(
              setConfirmPassword,
              validateConfirmPassword,
              "confirmPassword"
            )(e)
          }
        />
        <p className="helper-text">{helperTexts.confirmPassword}</p>
      </div>
      <div className="form-group">
        <label htmlFor="nickname">닉네임*</label>
        <input
          type="text"
          id="nickname"
          name="nickname"
          placeholder="닉네임을 입력하세요"
          required
          value={nickname}
          onChange={(e) =>
            handleInputChange(setNickname, validateNickname, "nickname")(e)
          }
        />
        <p className="helper-text">{helperTexts.nickname}</p>
      </div>
      <button
        className="signup-button"
        type="button"
        onClick={handleSignUp}
        style={{ marginTop: "10px" }}
      >
        회원가입
      </button>
    </form>
  );
}

export default SignUpForm;
