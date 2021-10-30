import React from "react";
import GlobalStyle from "./Styles/global";
import { Toaster } from "react-hot-toast";
import Routes from "../src/Routes/index"
function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Toaster />
      </div>
      <Routes />
    </>
  );
}

export default App;
