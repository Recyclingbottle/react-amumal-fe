import React from "react";
import Navbar from "../components/Navbar";
function UserProfileEditPage() {
  return (
    <>
      <Navbar showBackButton={true} ShowProfileImage={false}></Navbar>
      <div>회원정보수정 페이지</div>
    </>
  );
}

export default UserProfileEditPage;
