import { useTransactions } from "../../context/TransactionContext";
import { EXPENSE_CATEGORIES } from "../../utils/constants/expenseCategories";

export const TopExpenses = () => {
  const { transactions } = useTransactions();

  const expenses = transactions.filter((t) => t.transactionType === "expense");

  // Calcula o total gasto por categoria usando reduce
  const categoryTotal = expenses.reduce((acc, curr) => {
    // Extrai a categoria e valor da transacao atual
    const { category, value } = curr;

    // Verifica se a categoria é um objeto com propriedade label ou string
    // Se for objeto, usa o label, senao usa a propria categoria
    const categoryLabel = category.label || category;

    if (!acc[categoryLabel]) {
      acc[categoryLabel] = 0;
    }
    acc[categoryLabel] += Number(value);
    return acc;
  }, {}); //  {} é o valor inicial (objeto vazio)

  // Calcula o total de entradas (receitas) para calcular a porcentagem
  const incomeTotal = transactions
    .filter((t) => t.transactionType === "income") // Filtra apenas as transações de entrada
    .reduce((sum, t) => sum + Number(t.value), 0); // usa reduce para somar os valores. Se não houver entradas, a porcentagem será 0

  const TopExpenses = Object.entries(categoryTotal).map(
    ([category, amount]) => {
      const categoryData = Object.values(EXPENSE_CATEGORIES).find(
        (cat) => cat.label === category
      );

      // Obtém o icone correspondente a categoria
      // Se não encontrar, usa o icone da categoria 'outros' como fallback
      const Icon = categoryData?.icon || EXPENSE_CATEGORIES.outros.icon;

      // Retorna um objeto formatado com os dados para exibição
      return {
        category,
        amount,
        percent: incomeTotal > 0 ? Math.round((amount / incomeTotal) * 100) : 0,
        icon: <Icon />,
      };
    }
  );

  return (
    <div className="bg-white rounded-md shadow-sm mt-4 p-4 relative">
      <button className="bg-primary text-white text-sm px-2 py-1 rounded-es-md absolute right-0 top-0 cursor-pointer">
        Ver tudo
      </button>
      <h2 className="text-sm text-primary font-medium mb-5">
        Gastei mais com:
      </h2>
      <div className="flex flex-col gap-4">
        {TopExpenses.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <span className="text-primary">{item.icon}</span>
                <span className="text-sm font-medium text-darkGray">
                  {item.category}
                </span>
              </div>
              <span className="text-darkGray text-sm font-medium">
                -R${item.amount.toFixed(2).replace(".", ",")}
              </span>
            </div>

            {/* Barra progressiva */}
            <div className="flex items-center gap-3">
              <div className=" relative bg-zinc-300 w-full h-1 rounded-full">
                <div
                  className="absolute h-full bg-primary rounded-full"
                  style={{ width: `${item.percent}%` }}
                ></div>
              </div>
              <div className="text-right text-xs text-lightGray mt-1">
                {item.percent}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
