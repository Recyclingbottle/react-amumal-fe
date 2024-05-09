import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        <Routes>
          <Route path="/" element={<PostsListPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/posts/:id" element={<PostDetailPage />} />
          <Route path="/create-post" element={<PostCreatePage />} />
          <Route path="/edit-post/:id" element={<PostEditPage />} />
          <Route path="/edit-profile" element={<UserProfileEditPage />} />
          <Route path="/change-password" element={<PasswordChangePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
