import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App.jsx";
import "./index.css";
import StoreProvider from "./providers/storeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StoreProvider>
    <App />
    <Toaster />
  </StoreProvider>
);
