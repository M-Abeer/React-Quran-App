import React, { useState } from "react";
import logo from ".././../assets/images/logo.png";
import { Typography, Button } from "@material-tailwind/react";
import { Cross as Hamburger } from "hamburger-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = ({ langs, handleChangeLang }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="bg-[#335c67]
            fixed
            top-0
            left-0
            right-0
            w-full
            z-[100]
            transition-all
            duration-500
            ease-in-out"
    >
      <div className="container mx-auto flex justify-between items-center pb-[10px] align-middle">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-[45px] md:w-[55px] lg:w-[65px]"
          />
        </Link>

        <div className="flex items-center gap-x-1 sm:gap-x-5">
          <ul
            className={`flex
                        sm-max:flex-col
                        gap-[50px]
                        text-white
                        sm:mt-[10px]
                        nav

                        sm-max:fixed
                        sm-max:top-[60px]
                        sm-max:w-full
                        sm-max:bg-[#fff]
                        sm-max:text-[#000]
                        sm-max:duration-1000
                        sm-max:gap-[0]
                        sm-max:shadow
                        sm-max:rounded-b-[30px]
                        ${!isOpen ? "sm-max:left-[100%]" : "sm-max:left-0"}
                        `}
          >
            <Typography
              as="li"
              className={
                location.pathname === "/"
                  ? "font-bold text-[16px] sm-max:text-[#22b3c1]"
                  : "font-normal text-[15px]"
              }
              onClick={() => setIsOpen(false)}
            >
              <Link to="/">{t("Surah")}</Link>
            </Typography>
            <Typography
              as="li"
              className={
                location.pathname === "/live"
                  ? "font-bold text-[16px] sm-max:text-[#22b3c1]"
                  : "font-normal text-[15px]"
              }
              onClick={() => setIsOpen(false)}
            >
              <Link to="/live">{t("Live")}</Link>
            </Typography>
            <Typography
              as="li"
              className={
                location.pathname === "/tafsir"
                  ? "font-bold text-[16px] sm-max:text-[#22b3c1]"
                  : "font-normal text-[15px]"
              }
              onClick={() => setIsOpen(false)}
            >
              <Link to="/tafsir">{t("Tafasir")}</Link>
            </Typography>
          </ul>

          {langs === "ar" ? (
            <Button
              variant="text"
              size="sm"
              className="mt-3 sm:mt-[10px] capitalize text-white iconLang"
              onClick={() => handleChangeLang("eng")}
            >
              <span>en</span>
            </Button>
          ) : (
            <Button
              variant="text"
              size="sm"
              className="mt-3 sm:mt-[10px] capitalize text-white iconLang"
              onClick={() => handleChangeLang("ar")}
            >
              <span>ar</span>
            </Button>
          )}

          <div className="sm:hidden mt-3">
            <Hamburger
              toggled={isOpen}
              toggle={setIsOpen}
              size={20}
              color="#fff"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
