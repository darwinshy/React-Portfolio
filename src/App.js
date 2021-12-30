import { Route, Routes } from "react-router";
import { ThemeProvider } from "styled-components";
import { light } from "./themes/Themes";
import GlobalStyles from "./globalStyles";

import Main from "./component/Main";
import AboutPage from "./component/AboutPage";
import MySkillsPage from "./component/MySkillsPage";
import Work from "./component/Work";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Contact from "./component/Contact";

function App() {
  const location = useLocation();
  return (
    <div>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<MySkillsPage />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </div>
  );
}

export default App;
