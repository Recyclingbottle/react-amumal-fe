import { API_BASE_URL } from "./config";

// 회원가입 API
export const signup = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("회원가입 중 오류 발생");
    }
    return await response.json();
  } catch (error) {
    console.error("회원가입 중 오류 발생:", error);
    throw error;
  }
};

// 이메일 중복 체크 API
export const checkEmail = async (email) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/users/check-email?email=${encodeURIComponent(email)}`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    if (!response.ok) {
      throw new Error("이메일 중복 체크 중 오류 발생");
    }
    return await response.json();
  } catch (error) {
    console.error("이메일 중복 체크 중 오류 발생:", error);
    throw error;
  }
};

// 닉네임 중복 체크 API
export const checkNickname = async (nickname) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/users/check-nickname?nickname=${encodeURIComponent(
        nickname
      )}`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    if (!response.ok) {
      throw new Error("닉네임 중복 체크 중 오류 발생");
    }
    return await response.json();
  } catch (error) {
    console.error("닉네임 중복 체크 중 오류 발생:", error);
    throw error;
  }
};

// 사용자 정보 수정 API
export const updateUser = async (userId, userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("사용자 정보 수정 중 오류 발생");
    }
    return await response.json();
  } catch (error) {
    console.error("사용자 정보 수정 중 오류 발생:", error);
    throw error;
  }
};

// 비밀번호 변경 API
export const updatePassword = async (userId, passwordData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}/password`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(passwordData),
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("비밀번호 변경 중 오류 발생");
    }
    return await response.json();
  } catch (error) {
    console.error("비밀번호 변경 중 오류 발생:", error);
    throw error;
  }
};

// 사용자 삭제 API
export const deleteUser = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
      method: "DELETE",
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("사용자 삭제 중 오류 발생");
    }
    return await response.json();
  } catch (error) {
    console.error("사용자 삭제 중 오류 발생:", error);
    throw error;
  }
};

// 유저 정보 조회 API
export const getUser = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
      method: "GET",
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("유저 정보 조회 중 오류 발생");
    }
    return await response.json();
  } catch (error) {
    console.error("유저 정보 조회 중 오류 발생:", error);
    throw error;
  }
};
