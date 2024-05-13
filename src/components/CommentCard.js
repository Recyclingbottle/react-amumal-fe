import React, { useState } from "react";
import styles from "./CommentCard.module.css";
import df_profile_img from "../assets/images/profile_img.webp";
import Modal from "./Modal";

function CommentCard({ comment }) {
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
  return (
    <>
      <div className={styles.commentContainer}>
        <img
          src={df_profile_img}
          alt="댓글 작성자 프로필 사진"
          className={styles.commentProfilePicture}
        />
        <div className={styles.commentContent}>
          <div className={styles.commentTopRow}>
            <span className={styles.commentAuthorName}>
              {comment.author.nickname}
            </span>

            <span className={styles.commentDate}>{comment.date}</span>

            <div className={styles.commentBtnContainer}>
              <button
                className={styles.editCommentBtn}
                data-comment-id={comment.id}
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
