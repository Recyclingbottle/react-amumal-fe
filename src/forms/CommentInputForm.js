import React, { useState } from "react";
import styles from "./CommentInputForm.module.css";

function CommentInputForm() {
  // 현재 댓글 작성 모드 상태 관리 true는 등록, false는 수정
  const [isRegistering, setIsRegistering] = useState(true);

  // 댓글 등록 혹은 수정 처리
  const handleCommentSubmit = () => {
    if (isRegistering) {
      console.log("댓글 등록");
    } else {
      console.log("댓글 수정 중");
    }
    // 댓글 작성 후에는 버튼을 "댓글 등록" 상태로 돌려놓기
    setIsRegistering(true);
  };

  // 수정 모드로 전환 함수
  const handleEditClick = () => {
    setIsRegistering(false);
  };

  return (
    <>
      <div className={styles.postComments}>
        <textarea
          placeholder="댓글을 남겨주세요!"
          className={styles.commentTextarea}
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
