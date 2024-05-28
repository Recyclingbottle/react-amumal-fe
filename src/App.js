import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import PostsListPage from "./pages/PostsListPage/PostsListPage";
import PostDetailPage from "./pages/PostDetailPage/PostDetailPage";
import PostCreatePage from "./pages/PostCreatePage/PostCreatePage";
import PostEditPage from "./pages/PostEditPage/PostEditPage";
import UserProfileEditPage from "./pages/UserProfileEditPage/UserProfileEditPage";
import PasswordChangePage from "./pages/PasswordChangePage/PasswordChangePage";

function App() {
  return (
    <div className="App">
      <Router>
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
