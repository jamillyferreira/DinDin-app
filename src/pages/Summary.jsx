import { Financial } from "../components/summary/Financial";
import { IncomeSummary } from "../components/summary/IncomeSummary";
import { TopExpenses } from "../components/summary/TopExpenses";
import { useTransactions } from "../context/TransactionContext";

export const Summary = () => {
  const { transactions } = useTransactions();

  const totalReceived = transactions
    .filter((t) => t.transactionType === "entrada")
    .reduce((acc, curr) => acc + curr.value, 0);

  const totalGastos = transactions
    .filter((t) => t.transactionType === "gasto")
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
    </div>
  );
};
