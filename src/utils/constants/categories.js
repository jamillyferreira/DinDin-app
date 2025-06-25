import {
  FaMotorcycle,
  FaHouse,
  FaShirt,
  FaUtensils,
  FaMoneyBill,
  FaHeartPulse,
  FaTv,
  FaGamepad,
  FaQuestion,
} from "react-icons/fa6";

export const CATEGORIES = {
  alimentacao: {
    icon: FaUtensils,
    label: "Alimentação",
    className: "text-primary",
    match:
      /comida|almoco|almoço|alimento|bebida|café|mercado|lanche|supermecado|pizza|refrigerante|cerveja|suco|hamburguer|padaria|pao|pão|salgado|carne|frango/i,
  },
  transporte: {
    icon: FaMotorcycle,
    label: "Transporte",
    className: "text-primary",
    match: /moto|carro|gasolina|passagem|uber|moto taxi|taxi|combustivel/i,
  },
  trabalho: {
    icon: FaMoneyBill,
    label: "Trabalho",
    className: "text-primary",
    match: /salario|salário|bônus|bonus|extra|renda/i,
  },
  saude: {
    icon: FaHeartPulse,
    label: "Saúde",
    className: "text-primary",
    match: /medico|farmacia|remedio|consulta|exame/i,
  },
  casa: {
    icon: FaHouse,
    label: "Casa",
    className: "text-primary",
    match: /aluguel|luz|agua|internet|wifi|gas|condominio/i,
  },
  vestiario: {
    icon: FaShirt,
    label: "Vestiário",
    className: "text-primary",
    match:
      /camisa|calça|short|shorts|regata|moletom|jaqueta|calça jeans|tênis|tenis|sandália|sandalia|sapato|calcinha|cueca|box|cueca box|/i,
  },
  streamingEassinaturas: {
    icon: FaTv,
    label: "Streaming e Assinaturas",
    className: "text-primary",
    match:
      /netflix|spotify|max|amazon|disney|prime video|vivo|youcine|hulu|youtube|paramount|prime|crunchyroll/i,
  },
  lazer: {
    icon: FaGamepad,
    label: "Lazer",
    className: "text-primary",
    match: /cinema|bar|parque|festa|balada|jogo|show/,
  },
  outros: {
    icon: FaQuestion,
    label: "Outros",
    className: "text-primary",
    match: /.*/,
  },
};
