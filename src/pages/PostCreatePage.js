import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import PostForm from "../forms/PostForm";
import styles from "../style/PostCreatePage.module.css";

const PostCreatePage = () => {
  const navigate = useNavigate();
  const handleSubmit = (title, content, image) => {
    console.log({ title, content, image });
    navigate("/");
    // 대충 여기에 서버와 통신하는 거 넣으면 됨
  };

  return (
    <>
      <Navbar showBackButton={true} showProfileImage={true} />
      <div className={styles.pageBody}>
        <h3 className={styles.postCreationTitle}>게시글 작성</h3>
        <PostForm onSubmit={handleSubmit} buttonText="완료" />
      </div>
    </>
  );
};

export default PostCreatePage;
