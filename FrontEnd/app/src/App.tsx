import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { FeedPage } from "./pages/FeedPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { AccessPage } from "./pages/AccessPage";
import { UserProfilePage } from "./pages/UserProfilePage";
import { UnauthenticatedError } from "./pages/UnauthenticatedError";
import { useAuthStore } from "./contexts/AuthStore";

export const App = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AccessPage />} />
        <Route path="/unauthenticated" element={<UnauthenticatedError />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <FeedPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <UserProfilePage name={""} bio={""} password={""} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  children: React.ReactElement;
}

const ProtectedRoute = (props: ProtectedRouteProps) => {
  if (!props.isAuthenticated) {
    return <Navigate to="/unauthenticated" replace />;
  }
  return props.children;
};
