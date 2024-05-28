import { API_BASE_URL } from "./config";

// 게시글 목록 조회 API
export const getPosts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`, {
      method: "GET",
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("게시글 목록 조회 중 오류 발생");
    }
    return await response.json();
  } catch (error) {
    console.error("게시글 목록 조회 중 오류 발생:", error);
    throw error;
  }
};

// 특정 게시글 상세 조회 API
export const getPostById = async (postId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${postId}`, {
      method: "GET",
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("게시글 상세 조회 중 오류 발생");
    }
    return await response.json();
  } catch (error) {
    console.error("게시글 상세 조회 중 오류 발생:", error);
    throw error;
  }
};

// 게시글 작성 API
export const createPost = async (postData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("게시글 작성 중 오류 발생");
    }
    return await response.json();
  } catch (error) {
    console.error("게시글 작성 중 오류 발생:", error);
    throw error;
  }
};

// 게시글 삭제 API
export const deletePost = async (postId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${postId}`, {
      method: "DELETE",
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("게시글 삭제 중 오류 발생");
    }
    return await response.json();
  } catch (error) {
    console.error("게시글 삭제 중 오류 발생:", error);
    throw error;
  }
};

// 게시글 수정 API
export const updatePost = async (postId, postData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${postId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("게시글 수정 중 오류 발생");
    }
    return await response.json();
  } catch (error) {
    console.error("게시글 수정 중 오류 발생:", error);
    throw error;
  }
};
