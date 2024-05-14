import React, { useState, useEffect } from "react";
import styles from "./CommentInputForm.module.css";

function CommentInputForm({ editingComment }) {
  const [isRegistering, setIsRegistering] = useState(true);
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    if (editingComment) {
      setIsRegistering(false);
      setCommentText(editingComment.content);
    } else {
      setIsRegistering(true);
      setCommentText("");
    }
  }, [editingComment]);

  const handleCommentSubmit = () => {
    if (isRegistering) {
      console.log("댓글 등록");
    } else {
      console.log("댓글 수정 중");
    }
    setIsRegistering(true);
    setCommentText("");
  };

  return (
    <>
      <div className={styles.postComments}>
        <textarea
          placeholder="댓글을 남겨주세요!"
          className={styles.commentTextarea}
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        ></textarea>
        <div className={styles.commentsRegisterButtonContainer}>
          <button
            className={styles.commentsRegisterButton}
            onClick={handleCommentSubmit}
          >
            {isRegistering ? "댓글 등록" : "수정하기"}
          </button>
        </div>
      </div>
    </>
  );
}

export default CommentInputForm;
