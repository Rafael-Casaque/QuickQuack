import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { FeedPage } from "./pages/FeedPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { AccessPage } from "./pages/AccessPage";
import { UserProfilePage } from "./pages/UserProfilePage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<FeedPage />} />
        <Route path="/login" element={<AccessPage />} />
        <Route path="/profile" element={<UserProfilePage name={""} bio={""} password={""} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};