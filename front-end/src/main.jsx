import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./context/userContext.jsx";
import CaptianContext from "./context/CatianContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* chilldren because if you want to show its */}
    <CaptianContext>
      <UserContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserContext>
    </CaptianContext>
  </StrictMode>
);
