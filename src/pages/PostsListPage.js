import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../style/PostsListPage.module.css";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
const dummyPosts = [
  {
    id: 1,
    title: "첫 번째 게시글",
    likes: 150,
    commentsCount: 10,
    views: 200,
    date: new Date().toISOString(),
    author: {
      nickname: "홍길동",
    },
  },
  {
    id: 2,
    title: "두 번째 게시글",
    likes: 250,
    commentsCount: 40,
    views: 500,
    date: new Date().toISOString(),
    author: {
      nickname: "김철수",
    },
  },
  {
    id: 3,
    title: "세 번째 게시글",
    likes: 90,
    commentsCount: 5,
    views: 120,
    date: new Date().toISOString(),
    author: {
      nickname: "이영희",
    },
  },
];

function PostsListPage() {
  const navigate = useNavigate();

  // 이벤트 핸들러 함수
  const handleCreatePostClick = () => {
    navigate("/create-post"); // '/create-post' 경로로 이동
  };

  return (
    <>
      <Navbar showBackButton={false} ShowProfileImage={true}></Navbar>
      <div className={styles.pageContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.welcomeMessage}>
            <p>
              안녕하세요,
              <br />
              아무 말 대잔치 <span>게시판</span>입니다.
            </p>
          </div>
          <div className={styles.postsContainer}>
            <div className={styles.buttonRightAlign}>
              <button
                className={styles.postCreateBtn}
                onClick={handleCreatePostClick}
              >
                게시글 작성
              </button>
            </div>
            <div className={styles.postsContainer}>
              {dummyPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostsListPage;
