const validateEmail = (id: string) => {
  const emailReg =
    /^[!$^()-_0-9a-zA-Z!$^()-_]([-_.]?[!$^()-_0-9a-zA-Z!$^()-_])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*/i;

  return emailReg.test(id);
};

const validatePassword = (password: string) => {
  const passwordReg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}$/;

  return passwordReg.test(password);
};

export { validateEmail, validatePassword };
