import { Route, Routes, useLocation } from "react-router-dom";
import { Summary } from "./pages/Summary";
import { Chat } from "./pages/Chat";
import { Navbar } from "./components/nav/Navbar";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { UpdatePassword } from "./pages/UpdatePassword";

export function AppRoutes() {
  const location = useLocation();

  const hideNavbarRoutes = ["/chat", "/login", "/signup"];
  const hideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Summary />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/update-password" element={<UpdatePassword />} />
      </Routes>
    </>
  );
}
