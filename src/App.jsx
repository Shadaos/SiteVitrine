import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { MyProjects } from "./pages/MyProjects";
import { NotFound } from "./pages/NotFound";

import { useTranslation } from "react-i18next";
import useWindowDimensions from './components/useWindowDimensions';

function App() {
const { width, height } = useWindowDimensions();
const { t } = useTranslation(); 
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="MyProjects" element={<MyProjects />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
