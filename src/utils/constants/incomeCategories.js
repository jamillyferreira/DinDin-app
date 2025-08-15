export const INCOME_CATEGORIES = {
  salario: {
    label: "Salário",
    match: /salario|salário|renda|trabalho/i,
  },
  bonus: {
    label: "Bônus",
    match: /bonus|bônus/i,
  },
  pix: {
    label: "Pix",
    match: /pix/i,
  },
  comissao: {
    label: "Comissão",
    match: /comissao|comissão/i,
  },
  lucro: {
    label: "Lucro",
    match: /lucro|rendimento/i,
  },
  reembolso: {
    label: "Reembolso",
    match: /reembolso|devolucao|devolução/i,
  },
  dinheiro: {
    label: "Dinheiro",
    match: /dinheiro|grana|bufunfa|cash/i,
  },
  outros: {
    label: "Outros",
    match: /recebi|recebido|ganhei|ganho|entrada/i,
  },
};

// export const detectIncomeSource = (text) => {
//   const lower = text.toLowerCase();
//   for (const [source, keywords] of Object.entries(INCOME_CATEGORIES)) {
//     if (keywords.some((keyword) => lower.includes(keyword))) {
//       return source;
//     }
//   }
//   return "outros";
// };

// export const INCOME_KEYWORDS = Object.values(INCOME_CATEGORIES).flat();
// export const INCOME_KEYWORDS_SET = new Set(INCOME_KEYWORDS);
