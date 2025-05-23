export const CATEGORIES = {
  alimentacao: {
    label: "Alimentação",
    match:
      /comida|almoco|almoço|alimento|bebida|café|mercado|lanche|supermecado|pizza|refrigerante|cerveja|suco|hamburguer|padaria|pao|pão|salgado|carne|frango/i,
  },
  transporte: {
    label: "Transporte",
    match: /moto|carro|gasolina|passagem|uber|moto taxi|taxi|combustivel/i,
  },
  trabalho: {
    label: "Trabalho",
    match: /salario|salário|bônus|bonus|extra|renda/i,
  },
  saude: {
    label: "Saúde",
    match: /medico|farmacia|remedio|consulta|exame/i,
  },
  casa: {
    label: "Casa",
    match: /aluguel|luz|agua|internet|wifi|gas|condominio/i,
  },
  streamingEassinaturas: {
    label: "Streaming e Assinaturas",
    match:
      /netflix|spotify|max|amazon|disney|prime video|vivo|youcine|hulu|youtube|paramount|prime|crunchyroll/i,
  },
  lazer: {
    label: "Lazer",
    match: /cinema|bar|parque|festa|balada|jogo|show/,
  },
  outros: {
    label: "Outros",
    match: /.*/,
  },
};
