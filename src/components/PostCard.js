import React from "react";

function PostCard({ post, navigate, formatCount }) {
  return (
    <div className="post" onClick={() => navigate(`/posts/${post.id}`)}>
      <h3 className="post-title">{post.title}</h3>
      <div className="post-meta">
        <span className="likes">좋아요 {formatCount(post.likes)}</span>
        <span className="comments">
          댓글수 {formatCount(post.commentsCount)}
        </span>
        <span className="views">조회수 {formatCount(post.views)}</span>
        <time className="post-date">
          {new Date(post.date).toLocaleString()}
        </time>
      </div>
      <div className="author-info">
        <img
          src={post.author.profileImage_path}
          alt={`${post.author.nickname}의 프로필 이미지`}
          className="author-profile-picture"
        />
        <span className="author-name">{post.author.nickname}</span>
      </div>
    </div>
  );
}

export default PostCard;
