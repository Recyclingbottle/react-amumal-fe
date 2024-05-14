import React, { useEffect, useState } from "react";
import styles from "../style/PostCreatePage.module.css";

const PostForm = ({
  initialTitle = "",
  initialContent = "",
  onFileChange = () => {}, // 기본값으로 빈 함수 설정
  onSubmit,
  buttonText = "완료",
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const [image, setImage] = useState(null);
  const [helperText, setHelperText] = useState("* helper text");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setTitle(initialTitle);
    setContent(initialContent);
  }, [initialTitle, initialContent]);

  useEffect(() => {
    setIsFormValid(title.length > 0 && content.length > 0);
  }, [title, content]);

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    if (newTitle.length <= 26) {
      setTitle(newTitle);
    }
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || !content) {
      setHelperText("*제목, 내용을 모두 작성해주세요");
    } else {
      onSubmit(title, content, image);
    }
  };

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
    onFileChange(event.target.files[0]); // 이미지 전달
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
          onChange={handleTitleChange}
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
          onChange={handleContentChange}
        ></textarea>
      </div>
      <p className={styles.helperText} id="create-helper">
        {helperText}
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
        <button
          type="submit"
          className={styles.submitButton}
          style={{
            backgroundColor: isFormValid ? "#7F6AEE" : "#ACAOEB",
          }}
          disabled={!isFormValid}
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
};

export default PostForm;
