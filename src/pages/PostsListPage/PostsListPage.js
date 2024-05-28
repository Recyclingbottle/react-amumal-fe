import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PostsListPage.module.css";
import Navbar from "../../components/common/Navbar";
import PostCard from "../../components/posts/PostCard";
import { getPosts } from "../../utils/postApi";

function PostsListPage() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  const handleCreatePostClick = () => {
    navigate("/create-post");
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("게시글을 가져오는 중 오류 발생:", error);
      }
    };

    fetchPosts();
  }, []);

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
