import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { TransactionProvider } from "./context/TransactionContext";
import { useEffect, useState } from "react";
import SplashScreen from "./components/summary/SplashScreen";
import Signup from "./pages/Signup";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simula um delay de 2 segundo
    return () => clearTimeout(timer);
  }, []);

  return (
    <TransactionProvider>
      <BrowserRouter>
        {/* {isLoading ? <SplashScreen /> : <AppRoutes />} */}
        <Signup />
      </BrowserRouter>
    </TransactionProvider>
  );
}

export default App;
