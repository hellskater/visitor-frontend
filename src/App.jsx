import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { isAuthenticated } from "@/lib/utils";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<div>login</div>} />
        <Route
          path="/protected"
          element={
            <AuthenticatedRoute>
              <div>Hello Auth</div>
            </AuthenticatedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

const AuthenticatedRoute = ({ children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};
