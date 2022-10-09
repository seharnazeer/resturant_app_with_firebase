import { AddItem, Header, Main, Middle, AllProducts,About} from "./components";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import React from "react";
function App() {
  const Data = () => {
    return (
      <>
        
        <Main />
        <Middle />
        <AllProducts />
      </>
    );
  };
  return (
    <ThemeProvider theme={Theme}>
      <AnimatePresence>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Data />}></Route>
            <Route path="/add" element={<AddItem />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
