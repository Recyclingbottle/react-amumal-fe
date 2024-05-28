import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
//import { useParams } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import PostForm from "../../forms/PostForm";
import styles from "./PostEditPage.module.css";

function PostEditPage() {
  //const { postId } = useParams();
  const location = useLocation();
  const [post, setPost] = useState({ title: "", content: "" });

  useEffect(() => {
    if (location.state && location.state.post) {
      setPost(location.state.post);
    }
  }, [location.state]);

  const handleSubmit = (title, content, image) => {
    console.log("수정된 데이터:", { title, content, image });
    // 서버와 통신 로직 추가해야함
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
