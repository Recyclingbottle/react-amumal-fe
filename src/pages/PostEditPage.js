import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import PostForm from "../forms/PostForm";
import styles from "../style/PostCreatePage.module.css";

function PostEditPage() {
  const { postId } = useParams();
  const [post, setPost] = useState({ title: "", content: "" });

  // 게시글 데이터 로딩 시뮬레이션
  useEffect(() => {
    // 실제 환경에서는 여기서 API 호출을 통해 postId에 해당하는 게시글 정보를 가져옵니다.
    // 아래는 데이터 로딩을 시뮬레이션 하는 예시 코드입니다.
    setPost({ title: "기존 게시글 제목", content: "기존 게시글 내용" });
  }, [postId]);

  // 폼 제출 핸들러, API 업데이트 로직을 여기에 구현
  const handleSubmit = (title, content, image) => {
    console.log("수정된 데이터:", { title, content, image });
    // API 호출로 게시글을 수정하는 로직을 구현합니다.
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
