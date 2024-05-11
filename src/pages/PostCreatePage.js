import React from "react";
import Navbar from "../components/Navbar";
import PostForm from "../forms/PostForm";
import styles from "../style/PostCreatePage.module.css";

const PostCreatePage = () => {
  const handleSubmit = (title, content, image) => {
    console.log({ title, content, image });
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
