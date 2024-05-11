import React from "react";
import styles from "./PostCard.module.css"; // CSS 모듈 임포트
import df_profile_img from "../assets/images/profile_img.webp";
import { useNavigate } from "react-router-dom";
function formatCount(count) {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(0)}k`;
  }
  return count.toString();
}

function PostCard({ post }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/posts/${post.id}`);
  };

  return (
    <div className={styles.postCard} onClick={handleNavigate}>
      <h3 className={styles.postTitle}>{post.title}</h3>
      <div className={styles.postMeta}>
        <span className={styles.likes}>좋아요 {formatCount(post.likes)}</span>
        <span className={styles.comments}>
          댓글수 {formatCount(post.commentsCount)}
        </span>
        <span className={styles.views}>조회수 {formatCount(post.views)}</span>
        <time className={styles.postDate}>
          {new Date(post.date).toLocaleString()}
        </time>
      </div>
      <div className={styles.authorInfo}>
        <img
          src={post.author.profileImagePath || df_profile_img}
          alt={`${post.author.nickname}의 프로필 이미지`}
          className={styles.authorProfilePicture}
        />
        <span className={styles.authorName}>{post.author.nickname}</span>
      </div>
    </div>
  );
}

export default PostCard;
