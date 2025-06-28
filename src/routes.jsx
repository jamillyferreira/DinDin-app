import { Route, Routes, useLocation } from "react-router-dom";
import { Summary } from "./pages/Summary";
import { Chat } from "./pages/Chat";
import Navbar from "./components/summary/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

export function AppRoutes() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/chat";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Summary />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}
