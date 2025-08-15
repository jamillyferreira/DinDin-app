import { EXPENSE_CATEGORIES } from "./constants/expenseCategories";
import { INCOME_CATEGORIES } from "./constants/incomeCategories";

// funcao remove acentos
export const removeAccents = (str) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

// Detecta o tipo de transação: Entrada ou Gasto
const detectTransactionType = (normalizedText) => {
  for (const { match } of Object.values(INCOME_CATEGORIES)) {
    if (match.test(normalizedText)) return "income"; // Detecta se é uma entrada
  }
  return "expense"; // Se não for uma entrada, é um gasto
};

const detectExpenseCategory = (normalizedText) => {
  for (const [key, data] of Object.entries(EXPENSE_CATEGORIES)) {
    if (key === "outros") continue;
    if (data.match.test(normalizedText)) {
      return { key, label: data.label };
    }
  }
  return { key: "outros", label: EXPENSE_CATEGORIES.outros.label };
};

const detectIncomeCategory = (normalizedText) => {
  for (const [key, data] of Object.entries(INCOME_CATEGORIES)) {
    if (key === "outros") continue;
    if (data.match.test(normalizedText)) {
      return { key, label: data.label };
    }
  }
  return { key: "outros", label: INCOME_CATEGORIES.outros.label };
};

// Funçao para extrair valores
const extractValue = (text) => {
  // Padrões para identificar valores monetários no texto
  const patterns = [
    /(\d+)[,.](\d{2})\s*(reais?|r\$|$)/i,
    /r\$\s*(\d+)[,.]?(\d{2})?/i,
    /(\d+)[,.](\d{2})/,
    /(\d+)\s*(reais?|real)/i,
    /(\d+)/,
  ];

  // Testa cada padrão até encontrar um correspondente
  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) {
      if (match[2]) {
        return parseFloat(`${match[1]}.${match[2]}`);
      } else {
        return parseFloat(match[1]);
      }
    }
  }
  return 0;
};

// Funçao para extrair parcelas
const extractInstallments = (text) => {
  const patterns = [
    /(\d+)x/i,
    /(\d+)\s*parcel/i,
    /(\d+)\s*vez/i,
    /em\s*(\d+)/i,
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) {
      const installments = parseInt(match[1]);
      return installments > 1 ? installments : null;
    }
  }
  return null;
};

// Funçao para extrair descricao
const extractDescription = (text) => {
  // Remove valores monetários, parcelas e verbos comuns
  let description = text
    .replace(/\d+[,.]?\d*\s*(reais?|r\$|$)/gi, "")
    .replace(/r\$\s*\d+[,.]?\d*/gi, "")
    .replace(/\d+x/gi, "")
    .replace(/(recebi|ganhei|comprei|paguei|gastei|)/gi, "")
    .trim();

  if (description.length < 3) {
    const words = text.split("");
    description =
      words.find(
        (word) =>
          word.length > 2 && !word.match(/\d/) && !word.match(/(reais?|r\$)/i)
      ) || "Transação";
  }
  return description.charAt(0).toUpperCase() + description.slice(1);
};

export function interpretMessage(text) {
  if (!text || typeof text !== "string") {
    throw new Error("Mensagem inválida");
  }

  const normalizedText = removeAccents(text);

  const transactionType = detectTransactionType(normalizedText);

  const category =
    transactionType === "income"
      ? detectIncomeCategory(normalizedText)
      : detectExpenseCategory(normalizedText);

  return {
    originalText: text,
    normalizedText,
    description: extractDescription(text),
    transactionType,
    category,
    value: extractValue(text),
    installments: extractInstallments(text),
    date: new Date().toLocaleDateString("pt-BR"),
  };
}

export default interpretMessage;
