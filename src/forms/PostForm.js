import React, { useEffect, useState } from "react";
import styles from "../style/PostCreatePage.module.css"; // CSS 모듈 임포트

const PostForm = ({
  initialTitle = "",
  initialContent = "",
  onFileChange,
  onSubmit,
  buttonText = "완료",
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const [image, setImage] = useState(null);
  useEffect(() => {
    setTitle(initialTitle);
    setContent(initialContent);
  }, [initialTitle, initialContent]);

  // 폼 제출 핸들러
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(title, content, image);
  };

  // 파일 입력 핸들러
  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
    onFileChange(event.target.files[0]); //외부로 이미지 데이터를 전달
  };

  return (
    <form id="post-form" className={styles.formSection} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="post-title" className={styles.formLabel}>
          제목*
        </label>
        <input
          type="text"
          id="post-title"
          className={styles.formInput}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="post-content" className={styles.formLabel}>
          내용*
        </label>
        <textarea
          id="post-content"
          className={styles.formTextarea}
          cols="30"
          rows="10"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <p className={styles.helperText} id="create-helper">
        * helper text
      </p>
      <div className={styles.formGroup} style={{ marginTop: "5px" }}>
        <label htmlFor="post-image" className={styles.formLabel}>
          이미지
        </label>
        <input
          type="file"
          id="post-image"
          className={styles.formFileInput}
          onChange={handleFileChange}
        />
      </div>
      <div className={styles.submitLink}>
        <button type="submit" className={styles.submitButton}>
          {buttonText}
        </button>
      </div>
    </form>
  );
};

export default PostForm;
