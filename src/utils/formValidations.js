export const nameValidation = {
  required: "O nome é obrigatório",
  minLength: {
    value: 3,
    message: "O nome precisa ter pelo menos 3 caracteres",
  },
  validate: (value) => {
    const regex = /^[A-Za-zÀ-ÿ\s-]+$/;
    return regex.test(value) || "O nome deve conter apenas letras";
  },
};

export const emailValidation = {
  required: "O e-mail é obrigatório",
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Digite um e-mail válido",
  },
};

export const passwordValidation = {
  required: "Uma senha de 6 caracteres é necessario",
  minLength: {
    value: 6,
    message: "A senha precisa ter pelo menos 6 caracteres",
  },
};

export const confirmPasswordValidation = (watchPassword) => ({
  required: "Confirmação de senha é necessario",
  validate: (value) => value === watchPassword || "As senhas não coincidem",
});


