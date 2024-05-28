import React, { useState } from "react";
import styles from "./CommentCard.module.css";
import Modal from "../common/Modal";
import { API_BASE_URL } from "../../utils/config";

function CommentCard({ comment, onEdit }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleDelete = () => {
    setModalOpen(true);
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  const handleCommentConfirm = () => {
    console.log("댓글 삭제 확인 누름");
    setModalOpen(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  return (
    <>
      <div className={styles.commentContainer}>
        <img
          src={`${API_BASE_URL}/images/profile/${comment.author.profileImage}`}
          alt="댓글 작성자 프로필 사진"
          className={styles.commentProfilePicture}
        />
        <div className={styles.commentContent}>
          <div className={styles.commentTopRow}>
            <span className={styles.commentAuthorName}>
              {comment.author.nickname}
            </span>

            <span className={styles.commentDate}>
              {formatDate(comment.date)}
            </span>

            <div className={styles.commentBtnContainer}>
              <button
                className={styles.editCommentBtn}
                data-comment-id={comment.id}
                onClick={onEdit}
              >
                수정
              </button>
              <button
                className={styles.deleteCommentBtn}
                data-comment-id={comment.id}
                onClick={handleDelete}
              >
                삭제
              </button>
              <Modal
                isOpen={isModalOpen}
                title="댓글을 삭제하시겠습니까?"
                content="삭제한 내용은 복구할 수 없습니다."
                onCancel={handleCancel}
                onConfirm={handleCommentConfirm}
              />
            </div>
          </div>
          <div className={styles.commentBody}>
            <p>{comment.content}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommentCard;
