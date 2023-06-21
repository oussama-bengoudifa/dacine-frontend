//react-icons
import { BsArrowUpRight } from "react-icons/bs";

//react router dom
import { Link } from "react-router-dom";

//mantine
import { Popover } from "@mantine/core";

//i18n
import { useTranslation } from "react-i18next";

//constants
import { LANGUAGES } from "../constants/languages";

export const Header = ({ signup }) => {
  const { i18n, t } = useTranslation();

  const onChangeLang = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <div className="bg-[#E7D9CDE6] fixed top-0 left-0 right-0 w-full px-8">
      <div className="container mx-auto py-4">
        <div className="flex justify-end items-center gap-8">
          <Popover width={120} position="bottom" shadow="sm">
            <Popover.Target>
              <img
                src="/svg/lang.svg"
                alt="language"
                className="w-6 h-6 object-contain cursor-pointer"
              />
            </Popover.Target>
            <Popover.Dropdown>
              <div className="flex flex-col">
                {LANGUAGES(i18n.language).map(({ code, label }) => (
                  <div
                    key={code}
                    onClick={() => onChangeLang(code)}
                    className={`flex items-center gap-2 ${
                      i18n.language !== code &&
                      "hover:bg-gray-100 hover:text-secondary cursor-pointer"
                    }  p-2 rounded `}
                  >
                    <span
                      className={`text-sm ${
                        i18n.language === code && "font-bold"
                      } text-black`}
                    >
                      {label}
                    </span>
                    <BsArrowUpRight
                      fontSize={12}
                      color="gray"
                      className={`${
                        i18n.language !== code ? "visible" : "invisible"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </Popover.Dropdown>
          </Popover>
          <Link to={!signup ? "/signup" : "/login"}>
            <span className="font-medium text-sm text-primary tracking-wider">
              {signup ? t("Sign in") : t("Sign up")}
            </span>
          </Link>
          <button className="bg-primary hover:bg-primaryDark duration-300 text-white h-[45px] w-[164px] rounded flex justify-center gap-3 items-center font-medium text-sm tracking-wider">
            <span>{t("Request Demo")}</span>
            <BsArrowUpRight fontSize={16} color="#FFFF" />
          </button>
        </div>
      </div>
    </div>
  );
};
