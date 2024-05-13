import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import PostForm from "../forms/PostForm";
import styles from "../style/PostCreatePage.module.css";

function PostEditPage() {
  const { postId } = useParams();
  const [post, setPost] = useState({ title: "", content: "" });

  useEffect(() => {
    //  API 호출해야함
    // 아래는 예시 데이터임
    setPost({ title: "기존 게시글 제목", content: "기존 게시글 내용" });
  }, [postId]);

  // 폼 제출 핸들러, API 업데이트 로직을 여기에 구현
  const handleSubmit = (title, content, image) => {
    console.log("수정된 데이터:", { title, content, image });
  };

  return (
    <>
      <Navbar showBackButton={true} showProfileImage={true} />
      <div className={styles.pageBody}>
        <h3 className={styles.postCreationTitle}>게시글 수정</h3>
        <PostForm
          initialTitle={post.title}
          initialContent={post.content}
          onSubmit={handleSubmit}
          buttonText="수정하기"
        />
      </div>
    </>
  );
}

export default PostEditPage;
