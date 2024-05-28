import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import styles from "./PostDetailPage.module.css";
import df_profile_img from "../../assets/images/profile_img.webp";
import CommentInputForm from "../../forms/CommentInputForm";
import CommentCard from "../../components/posts/CommentCard";
import Modal from "../../components/common/Modal";
import { getPostById } from "../../utils/postApi";
import { API_BASE_URL } from "../../utils/config";

const formatCount = (count) => {
  if (count >= 100000) {
    return `${(count / 1000).toFixed(0)}k`;
  } else if (count >= 10000) {
    return `${(count / 1000).toFixed(0)}k`;
  } else if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count.toString();
};

const PostDetailPage = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingComment, setEditingComment] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const fetchedPost = await getPostById(postId);
        setPost(fetchedPost);
      } catch (error) {
        console.error("게시글을 가져오는 중 오류 발생:", error);
      }
    };

    fetchPost();
  }, [postId]);

  const gotoEditPost = () => {
    navigate(`/edit-post/${postId}`, { state: { post } });
  };

  const handleDelete = () => {
    setModalOpen(true);
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  const handlePostConfirm = () => {
    console.log("게시글 삭제 확인 누름");
    setModalOpen(false);
  };

  const handleEditComment = (comment) => {
    setEditingComment(comment);
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar showBackButton={true} showProfileImage={true} />
      <div className={styles.contentContainer}>
        <div className={styles.titleContainer}>
          <h2 className={styles.postTitle}>{post.title}</h2>
          <div className={styles.postAuthor}>
            <img
              className={styles.postProfilePic}
              src={
                post.author.profile_image
                  ? `${API_BASE_URL}/images/profile/${post.author.profile_image}`
                  : df_profile_img
              }
              alt="Profile"
            />
            <p className={styles.authorName}>{post.author.nickname}</p>
            <span className={styles.postDate}>{post.date}</span>
            <div className={styles.postBtnContainer}>
              <button className={styles.editPostBtn} onClick={gotoEditPost}>
                수정
              </button>
              <button className={styles.deletePostBtn} onClick={handleDelete}>
                삭제
              </button>
              <Modal
                isOpen={isModalOpen}
                title="게시글을 삭제하시겠습니까?"
                content="삭제한 내용은 복구할 수 없습니다."
                onCancel={handleCancel}
                onConfirm={handlePostConfirm}
              />
            </div>
          </div>
        </div>
        <div className={styles.postContent}>
          <div className={styles.imgBox}>
            {post.post_image && (
              <img
                className={styles.postImage}
                src={`${API_BASE_URL}/images/posts/${post.post_image}`}
                alt="Post"
              />
            )}
          </div>
          <p
            className={styles.postText}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className={styles.postInteraction}>
            <button className={styles.viewCountBtn}>
              {formatCount(post.views)}
              <br />
              조회수
            </button>
            <button className={styles.commentCountBtn}>
              {formatCount(post.commentsCount)}
              <br />
              댓글
            </button>
          </div>
        </div>
        <CommentInputForm editingComment={editingComment} />
        {post.comments.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            onEdit={() => handleEditComment(comment)}
          />
        ))}
      </div>
    </>
  );
};

export default PostDetailPage;
