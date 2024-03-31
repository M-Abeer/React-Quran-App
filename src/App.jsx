import Footer from "./components/utils/Footer"
import Header from "./components/utils/Header"
import Live from "./pages/Live";
import Surah from "./pages/Surah"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tafsir from "./pages/Tafsir";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { changeLanguage, setDirection } from "./store/Reducers/languageReducer";

function App() {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const { language, dir } = useSelector(state => state.lang);
  const [langs, setLangs] = useState(language);
  const [dirs, setDirs] = useState(dir);

  const handleChangeLang = (lang) => {
    i18n.changeLanguage(lang)
    dispatch(changeLanguage(lang))
    setLangs(lang)
    
    const newDir = lang === 'eng' ? 'ltr' : 'rtl';
    dispatch(setDirection(newDir));
    setDirs(newDir);
  }
  document.dir = dirs;

  return (
    <BrowserRouter>
      <Header langs={langs} handleChangeLang={handleChangeLang} />
      <Routes>
        <Route index element={<Surah />} />
        <Route path="/live" element={<Live />} />
        <Route path="/tafsir" element={<Tafsir />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
