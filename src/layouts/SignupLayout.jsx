//mantine
import { TextInput, PasswordInput } from "@mantine/core";
import { useForm } from "@mantine/form";

//react router dom
import { Link } from "react-router-dom";

//i18n
import { useTranslation } from "react-i18next";

export const SignupLayout = () => {
  const { t } = useTranslation();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => (value === "" ? "Field required" : null),
    },
  });

  const handleForm = ({ email, password }) => {
    console.log({ email, password });
  };

  return (
    <div className="w-full h-screen">
      <div className="flex justify-center h-full items-center gap-20">
        <img
          src="/svg/dashboard.svg"
          alt="sign up"
          className="object-contain w-96 h-96 lg:block hidden"
        />
        <form
          onSubmit={form.onSubmit((values) => handleForm(values))}
          className="px-8 bg-[#FFFF] max-w-sm rounded-3xl py-12"
        >
          <div className="flex justify-center items-center w-full h-full">
            <div className="flex items-center w-full flex-col gap-6">
              <div className="flex flex-col items-center gap-3">
                <h1 className="text-secondary font-bold text-3xl">
                  {t("Sign up")}
                </h1>
                <span className="text-center text-base text-black">
                  {t("Hey, Enter your details to create and account")}
                </span>
              </div>
              <div className="flex w-full flex-col items-center gap-2">
                <TextInput
                  placeholder={t("Enter email")}
                  label={t("Enter email")}
                  withAsterisk
                  {...form.getInputProps("email")}
                  sx={{
                    width: "100%",
                    fontSize: "16px",
                  }}
                />
                <PasswordInput
                  placeholder={t("Password")}
                  label={t("Password")}
                  withAsterisk
                  {...form.getInputProps("password")}
                  sx={{
                    width: "100%",
                    fontSize: "16px",
                  }}
                />
                <span className="text-xs text-[#797979] w-full">
                  {t("Already have an account ?")}{" "}
                  <Link to={"/login"} className="text-black">
                    {t("Login now")}
                  </Link>{" "}
                </span>
              </div>
              <button
                type="submit"
                className="bg-secondary duration-300 hover:bg-[#e55603] w-full text-white h-[45px] rounded flex justify-center items-center font-semibold text-base"
              >
                {t("Sign up")}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
