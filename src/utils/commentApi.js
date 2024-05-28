import { API_BASE_URL } from "./config";

// 댓글 추가 API
export const addComment = async (postId, commentData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${postId}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("댓글 추가 중 오류 발생");
    }
    return await response.json();
  } catch (error) {
    console.error("댓글 추가 중 오류 발생:", error);
    throw error;
  }
};

// 댓글 목록 조회 API
export const getComments = async (postId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${postId}/comments`, {
      method: "GET",
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("댓글 목록 조회 중 오류 발생");
    }
    return await response.json();
  } catch (error) {
    console.error("댓글 목록 조회 중 오류 발생:", error);
    throw error;
  }
};

// 댓글 삭제 API
export const deleteComment = async (postId, commentId) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/posts/${postId}/comments/${commentId}`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );
    if (!response.ok) {
      throw new Error("댓글 삭제 중 오류 발생");
    }
    return await response.json();
  } catch (error) {
    console.error("댓글 삭제 중 오류 발생:", error);
    throw error;
  }
};

// 댓글 수정 API
export const updateComment = async (postId, commentId, commentData) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/posts/${postId}/comments/${commentId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentData),
        credentials: "include",
      }
    );
    if (!response.ok) {
      throw new Error("댓글 수정 중 오류 발생");
    }
    return await response.json();
  } catch (error) {
    console.error("댓글 수정 중 오류 발생:", error);
    throw error;
  }
};
