import { CATEGORIES } from "./constants/categories";
import { INCOME_KEYWORS } from "./constants/incomeKeywords";

// funcao remove acentos
export const removeAccents = (str) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

// funcao de detectar tipo
const detectTransactionType = (normalizedText) => {
  for (const keyword of INCOME_KEYWORS) {
    if (normalizedText.includes(keyword.toLowerCase())) {
      return "entrada";
    }
  }
  return "gasto";
};

// Funçao para extrair categoria
const detectCategory = (normalizedText) => {
  for (const [categoryKey, categoryData] of Object.entries(CATEGORIES)) {
    if (categoryKey === "outros") continue;
    if (categoryData.match.test(normalizedText)) {
      return {
        key: categoryKey,
        label: categoryData.label,
      };
    }
  }
  return {
    key: "outros",
    label: CATEGORIES.outros.label,
  };
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

  return {
    originalText: text,
    normalizedText,
    description: extractDescription(text),
    transactionType: detectTransactionType(normalizedText),
    category: detectCategory(text),
    value: extractValue(text),
    installments: extractInstallments(text),
    date: new Date().toLocaleDateString("pt-BR"),
  };
}

export default interpretMessage;
