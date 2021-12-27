import { Route, Routes } from "react-router";
import { ThemeProvider } from "styled-components";
import { light } from "./component/Themes";
import GlobalStyles from "./globalStyles";

import Main from "./component/Main";
import AboutPage from "./component/AboutPage";
import MySkillsPage from "./component/MySkillsPage";
import Work from "./component/Work";

function App() {
  return (
    <div>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<MySkillsPage />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
