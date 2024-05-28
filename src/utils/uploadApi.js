import { API_BASE_URL } from "./config";

// 프로필 사진 업로드 API
export const uploadProfileImage = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/upload/profile`, {
      method: "POST",
      body: formData,
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("프로필 사진 업로드 중 오류 발생");
    }
    return await response.json();
  } catch (error) {
    console.error("프로필 사진 업로드 중 오류 발생:", error);
    throw error;
  }
};

// 게시글 사진 업로드 API
export const uploadPostImage = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/upload/post`, {
      method: "POST",
      body: formData,
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("게시글 사진 업로드 중 오류 발생");
    }
    return await response.json();
  } catch (error) {
    console.error("게시글 사진 업로드 중 오류 발생:", error);
    throw error;
  }
};
