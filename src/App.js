import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import PostsListPage from "./pages/PostsListPage";
import PostDetailPage from "./pages/PostDetailPage";
import PostCreatePage from "./pages/PostCreatePage";
import PostEditPage from "./pages/PostEditPage";
import UserProfileEditPage from "./pages/UserProfileEditPage";
import PasswordChangePage from "./pages/PasswordChangePage";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">게시글 목록 조회 페이지</Link>
            </li>
            <li>
              <Link to="/posts/1">게시글 상세 조회 페이지</Link>
            </li>
            <li>
              <Link to="/edit-post/1">게시글 수정 페이지</Link>
            </li>
            <li>
              <Link to="/login">로그인 페이지</Link>
            </li>
            <li>
              <Link to="/signup">회원가입 페이지</Link>
            </li>
            <li>
              <Link to="/create-post">게시글 생성 페이지</Link>
            </li>
            <li>
              <Link to="/edit-profile">회원정보수정 페이지</Link>
            </li>
            <li>
              <Link to="/change-password">비밀번호 수정 페이지</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<PostsListPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/posts/:postId" element={<PostDetailPage />} />
          <Route path="/create-post" element={<PostCreatePage />} />
          <Route path="/edit-post/:postId" element={<PostEditPage />} />
          <Route path="/edit-profile" element={<UserProfileEditPage />} />
          <Route path="/change-password" element={<PasswordChangePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
