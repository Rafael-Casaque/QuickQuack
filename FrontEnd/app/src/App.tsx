import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { FeedPage } from "./pages/FeedPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { AccessPage } from "./pages/AccessPage";
import { UserProfilePage } from "./pages/UserProfilePage";
import { UnauthenticatedError } from "./pages/UnauthenticatedError";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AccessPage />} />
        <Route path="/unauthenticated" element={<UnauthenticatedError />} />
        <Route path="/home" element={<FeedPage />} />
        <Route
          path="/profile"
          element={
            <UserProfilePage
              avatar="http://benini.paginas.scl.ifsp.edu.br/img/Rafael%20Rocha%20Casaque.jpeg"
              name={"Rafael Rocha Casaque"}
              bio={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur amet, rem inventore iste, eum provident ut expedita dolores voluptatibus odit deserunt, excepturi architecto! Quasi soluta aperiam minus illo ut. Culpa!"
              }
              password={"minhasenha"}
            />
          }
        />

        {/* <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <UserProfilePage name={""} bio={""} password={""} />
            </ProtectedRoute>
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
};

// interface ProtectedRouteProps {
//   isAuthenticated: boolean;
//   children: React.ReactElement;
// }

// const ProtectedRoute = (props: ProtectedRouteProps) => {
//   if (!props.isAuthenticated) {
//     return <Navigate to="/unauthenticated" replace />;
//   }
//   return props.children;
// };
