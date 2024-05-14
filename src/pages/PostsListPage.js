import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../style/PostsListPage.module.css";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
const initialPosts = [
  {
    id: 1,
    title: "첫 번째 게시글",
    likes: 1150,
    commentsCount: 1120,
    views: 23200,
    date: new Date().toISOString(),
    author: {
      nickname: "홍길동",
    },
  },
  {
    id: 2,
    title: "두 번째 게시글",
    likes: 25110,
    commentsCount: 4110,
    views: 51100,
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
  const [posts, setPosts] = useState(initialPosts);
  const [hasMore, setHasMore] = useState(true); // 게시글이 더 있는지 여부
  const handleCreatePostClick = () => {
    navigate("/create-post");
  };
  const loadMorePosts = useCallback(() => {
    // 지금은 서버 없이 하니 랜덤 레츠고
    const newPosts = [
      {
        id: posts.length + 1,
        title: `추가된 게시글 ${posts.length + 1}`,
        likes: Math.floor(Math.random() * 100),
        commentsCount: Math.floor(Math.random() * 50),
        views: Math.floor(Math.random() * 200),
        date: new Date().toISOString(),
        author: {
          nickname: `사용자 ${posts.length + 1}`,
        },
      },
    ];

    setPosts((prevPosts) => [...prevPosts, ...newPosts]);

    if (posts.length >= 20) {
      // 게시글이 20개면 너무 많다 그죠?
      setHasMore(false);
    }
  }, [posts]);
  useEffect(() => {
    //스크롤 인피니트
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight &&
        hasMore
      ) {
        loadMorePosts();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadMorePosts, hasMore]);
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
              {posts.map((post) => (
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
