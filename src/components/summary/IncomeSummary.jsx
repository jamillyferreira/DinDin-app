import React from "react";
import { useTransactions } from "../../context/TransactionContext";

export const IncomeSummary = React.memo(() => {
  const { transactions } = useTransactions();

  console.log("Todas as transaçoes:", transactions);

  const incomeData = transactions.reduce((acc, transaction) => {
    const { category, value, transactionType } =
      transaction.interpretedData || {
        transactionType: transaction.transactionType,
        category: transaction.category,
        value: transaction.value,
      };
    console.log("Tipo de transacao:", {
      transactionType,
      category,
      value,
    });

    if (transactionType === "income") {
      console.log("É uma entrada:", category, value);

      const label = category?.label || "Outros";
      const key = label.toLowerCase().trim();

      if (!acc[key]) {
        acc[key] = {
          label,
          amount: 0,
        };
      }
      acc[key].amount += Number(value);
    }
    return acc;
  }, {});

  // Orderna por valor
  const sortedIncome = Object.values(incomeData).sort(
    (a, b) => b.amount - a.amount
  );

  return (
    <div className="bg-white mt-4 rounded-md p-4 shadow-sm">
      <h2 className="text-sm text-primary font-medium mb-3">Recebidos</h2>
      {sortedIncome.length > 0 ? (
        <div className="space-y-3">
          {sortedIncome.map((item, index) => (
            <div
              key={`${item.label}-${index}`}
              className="flex justify-between items-center border-b border-gray-300 text-darkGray"
            >
              <span className="text-sm font-medium">{item.label}</span>
              <span className="text-sm font-medium text-primary">
                {formatCurrency(item.amount)}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-500 py-2">Nenhuma receita registrada</p>
      )}
    </div>
  );
});

function formatCurrency(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}
