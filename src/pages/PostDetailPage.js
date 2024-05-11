import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const PostDetailPage = () => {
  const { postId } = useParams();

  return (
    <>
      <Navbar showBackButton={true} ShowProfileImage={true}></Navbar>
      <div>이 게시글의 번호는 {postId}번입니다.</div>
    </>
  );
};

export default PostDetailPage;
