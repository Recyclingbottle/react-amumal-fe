import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import "../style/PostListPage.css";
import df_profile_img from "../assets/images/profile_img.webp";
function PostsListPage() {
  const [profileImage, setProfileImage] = useState("");
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "첫 번째 게시글",
      likes: 150,
      commentsCount: 3,
      views: 200,
      date: new Date().toISOString(),
      author: {
        nickname: "홍길동",
        profileImage_path: df_profile_img,
      },
    },
    {
      id: 2,
      title: "두 번째 게시글",
      likes: 250,
      commentsCount: 5,
      views: 400,
      date: new Date().toISOString(),
      author: {
        nickname: "김철수",
        profileImage_path: df_profile_img,
      },
    },
  ]);
  const navigate = useNavigate();

  useEffect(() => {
    setProfileImage(df_profile_img);
  }, []);

  const formatCount = (num) => {
    if (num >= 1000) return `${(num / 1000).toFixed(0)}k`;
    return num;
  };

  return (
    <>
      <Navbar
        userProfileImage={profileImage}
        showBackButton={false}
        showProfile={true}
      />
      <div className="page-container">
        <div className="content-container">
          <div className="welcome-message">
            <p>
              안녕하세요,
              <br />
              아무 말 대잔치 <span>게시판</span>입니다.
            </p>
          </div>
          <div className="posts-container">
            <div className="button-right-align">
              <button
                className="post-create-btn"
                onClick={() => navigate("/posts/new")}
              >
                게시글 작성
              </button>
            </div>
            {posts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                navigate={navigate}
                formatCount={formatCount}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PostsListPage;
