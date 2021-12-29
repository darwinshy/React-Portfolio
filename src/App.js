import { Route, Routes } from "react-router";
import { ThemeProvider } from "styled-components";
import { light } from "./themes/Themes";
import GlobalStyles from "./globalStyles";

import Main from "./component/Main";
import AboutPage from "./component/AboutPage";
import MySkillsPage from "./component/MySkillsPage";
import Work from "./component/Work";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<MySkillsPage />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </div>
  );
}

export default App;
