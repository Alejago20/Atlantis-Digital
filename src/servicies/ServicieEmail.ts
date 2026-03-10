import emailjs from "@emailjs/browser";

export const enviarEmail = (form: HTMLFormElement) => {
  return emailjs.sendForm(
    "service_xobfk9l",
    "template_qjixule",
    form,
    "pSGEUDAzBCiw2Y8dK"
  );
};