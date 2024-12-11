import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./styles.css"; // Импорт глобальных стилей

// Рендеринг корневого компонента App в элемент с id="root"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
