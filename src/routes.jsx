import { Route, Routes, useLocation } from "react-router-dom";
import { Summary } from "./pages/Summary";
import { Chat } from "./pages/Chat";
import Navbar from "./components/summary/Navbar";
import Signup from "./pages/Signup";

export function AppRoutes() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/chat";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Summary />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  );
}
