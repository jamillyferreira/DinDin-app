import { useState } from "react";
import BottomSeet from "../components/drawer/BottomSeet";
import UserModal from "../components/drawer/UserModal";
import { Navbar } from "../components/nav/Navbar";
import { Financial } from "../components/summary/Financial";
import { IncomeSummary } from "../components/summary/IncomeSummary";
import { TopExpenses } from "../components/summary/TopExpenses";
import { useTransactions } from "../context/TransactionContext";

export const Summary = () => {
  const { transactions } = useTransactions();

  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
    setShowProfile((prev) => !prev);
  };

  const totalReceived = transactions
    .filter((t) => t.transactionType === "income")
    .reduce((acc, curr) => acc + curr.value, 0);

  const totalGastos = transactions
    .filter((t) => t.transactionType === "expense")
    .reduce((acc, curr) => acc + curr.value, 0);

  const saldo = totalReceived - totalGastos;

  return (
    <div className="bg-background dark:bg-dark-background h-screen overflow-y-auto">
      <Financial
        saldo={saldo}
        totalReceived={totalReceived}
        totalGastos={totalGastos}
      />
      <div className="px-5">
        <TopExpenses />
        <IncomeSummary />
      </div>

      <BottomSeet isOpen={showProfile} onClose={() => setShowProfile(false)}>
        <UserModal />
      </BottomSeet>

      <Navbar onToggleProfile={toggleProfile} />
    </div>
  );
};
