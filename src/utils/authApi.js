import { API_BASE_URL } from "./config";

// 로그인 API
export const login = async (credentials) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("로그인 중 오류 발생");
    }
    return await response.json();
  } catch (error) {
    console.error("로그인 중 오류 발생:", error);
    throw error;
  }
};

// 로그아웃 API
export const logout = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("로그아웃 중 오류 발생");
    }
    return await response.json();
  } catch (error) {
    console.error("로그아웃 중 오류 발생:", error);
    throw error;
  }
};

// 로그인 상태 확인 API
export const checkAuthStatus = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/auth/check`, {
      method: "GET",
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("로그인 상태 확인 중 오류 발생");
    }
    return await response.json();
  } catch (error) {
    console.error("로그인 상태 확인 중 오류 발생:", error);
    throw error;
  }
};
