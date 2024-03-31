import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();

  return (
    <div className="banner relative top-[70px] sm:top-[60px] md:top-[70px]">
      <div className="overlay"></div>
      <div className="banner-text">
        <h6 className="text-[10px] sm:text-[15px] md:text-[18px] uppercase font-[700] tracking-[2.5px]">
          {t("In the name of God (Allah), the Compassionate and Merciful.")}
        </h6>
        <h2 className="text-[30px] sm:text-[40px] md:text-[45px] font-[700] uppercase mt-[15px] mb-[25px]">
          <span className="text-[#335c67]">{t("Quran")}</span> {t("Karem")}
        </h2>
      </div>
    </div>
  );
};

export default Banner;
