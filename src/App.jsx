import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AuthenticatedContent from "./pages/AuthenticatedContent.jsx";
import { SupabaseAuthProvider, useSupabaseAuth } from "./integrations/supabase/auth.jsx";

function App() {
  return (
    <SupabaseAuthProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/authenticated" element={<ProtectedRoute><AuthenticatedContent /></ProtectedRoute>} />
        </Routes>
      </Router>
    </SupabaseAuthProvider>
  );
}

const ProtectedRoute = ({ children }) => {
  const { session } = useSupabaseAuth();

  if (!session) {
    return <Index />;
  }

  return children;
};

export default App;