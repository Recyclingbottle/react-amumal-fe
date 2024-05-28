import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import styles from "./PostDetailPage.module.css";
import df_profile_img from "../../assets/images/profile_img.webp";
import CommentInputForm from "../../forms/CommentInputForm";
import CommentCard from "../../components/posts/CommentCard";
import Modal from "../../components/common/Modal";

const dummyPost = {
  id: 1,
  title: "제목 1",
  author: { nickname: "더미 작성자 1", profileImagePath: df_profile_img },
  date: "2021-01-01 00:00:00",
  content: `
    무엇을 얘기할까요? 아무말이라면, 삶은 항상 놀라운 모험이라고 생각합니다.
    우리는 매일 새로운 경험을 하고 배우며 성장합니다. 때로는 어려움과 도전이 있지만,
    그것들이 우리를 더 강하고 지혜롭게 만듭니다. 또한 우리는 주변의 사람들과 연결되며
    사랑과 지지를 받습니다. 그래서 우리의 삶은 소중하고 의미가 있습니다.
    <br />
    자연도 아름다운 이야기입니다. 우리 주변의 자연은 끝없는 아름다움과 신비로움을
    담고 있습니다. 산, 바다, 숲, 하늘 등 모든 것이 우리를 놀라게 만들고 감동시킵니다.
    자연은 우리의 생명과 안정을 지키며 우리에게 힘을 주는 곳입니다.
    <br />
    마지막으로, 지식을 향한 탐구는 항상 흥미로운 여정입니다. 우리는 끝없는 지식의
    바다에서 배우고 발견할 수 있으며, 이것이 우리를 더 깊이 이해하고 세상을 더 넓게
    보게 해줍니다.
    <br />
    그런 의미에서, 삶은 놀라움과 경이로움으로 가득 차 있습니다. 새로운 경험을 즐기고
    항상 앞으로 나아가는 것이 중요하다고 생각합니다.
  `,
  views: 123,
  commentsCount: 3,
  imagePath: "",
};

const dummyComments = [
  {
    id: 1,
    author: { nickname: "더미 작성자 1" },
    date: "2021-01-01 00:00:00",
    content: "댓글 내용",
  },
  {
    id: 2,
    author: { nickname: "더미 작성자 1" },
    date: "2021-01-01 00:00:00",
    content: "댓글 내용",
  },
  {
    id: 3,
    author: { nickname: "더미 작성자 1" },
    date: "2021-01-01 00:00:00",
    content: "댓글 내용",
  },
];

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
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingComment, setEditingComment] = useState(null);

  const gotoEditPost = () => {
    navigate(`/edit-post/${postId}`, { state: { post: dummyPost } });
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

  return (
    <>
      <Navbar showBackButton={true} showProfileImage={true} />
      <div className={styles.contentContainer}>
        <div className={styles.titleContainer}>
          <h2 className={styles.postTitle}>{dummyPost.title}</h2>
          <div className={styles.postAuthor}>
            <img
              className={styles.postProfilePic}
              src={dummyPost.author.profileImagePath || df_profile_img}
              alt="Profile"
            />
            <p className={styles.authorName}>{dummyPost.author.nickname}</p>
            <span className={styles.postDate}>{dummyPost.date}</span>
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
            {dummyPost.imagePath && (
              <img
                className={styles.postImage}
                src={dummyPost.imagePath}
                alt="Post"
              />
            )}
          </div>
          <p
            className={styles.postText}
            dangerouslySetInnerHTML={{ __html: dummyPost.content }}
          />
          <div className={styles.postInteraction}>
            <button className={styles.viewCountBtn}>
              {formatCount(dummyPost.views)}
              <br />
              조회수
            </button>
            <button className={styles.commentCountBtn}>
              {formatCount(dummyPost.commentsCount)}
              <br />
              댓글
            </button>
          </div>
        </div>
        <CommentInputForm editingComment={editingComment} />
        {dummyComments.map((comment) => (
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
