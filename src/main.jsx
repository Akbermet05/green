import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ProductContext from "./context/ProductContext.jsx";
import Scroll from "./ui/scroll/Scroll.jsx";
import AuthContext from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthContext>
    <BrowserRouter>
      <Scroll />
      <ProductContext>
        <App />
      </ProductContext>
    </BrowserRouter>
  </AuthContext>
);
