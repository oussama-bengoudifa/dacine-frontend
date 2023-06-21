import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        "Sign up": "Sign up",
        "Request Demo": "Request Demo",
        "Sign in": "Sign in",
        "Hey, Enter your details to login to your account":
          "Hey, Enter your details to login to your account",
        "Enter email": "Enter email",
        Password: "Password",
        "Don’t have an account yet?": "Don’t have an account yet?",
        "Register now!": "Register now!",
        "Hey, Enter your details to create and account":
          "Hey, Enter your details to create and account",
        "Already have an account ?": "Already have an account ?",
        "Login now": "Login now",
      },
    },
    fr: {
      translation: {
        "Sign up": "S'inscrire",
        "Sign in": "Connexion",
        "Request Demo": "Démonstration",
        "Hey, Enter your details to login to your account":
          "Hey, Entrez vos détails pour vous connecter à votre compte",
        "Enter email": "Saisir l'email",
        Password: "Mot de passe",
        "Don’t have an account yet?": "Vous n'avez pas encore de compte ?",
        "Register now!": "Inscrivez-vous dès maintenant !",
        "Hey, Enter your details to create and account":
          "Hey, Entrez vos coordonnées pour créer un compte",
        "Already have an account ?": "Vous avez déjà un compte ?",
        "Login now": "Se connecter maintenant",
      },
    },
  },
});

export default i18n;
