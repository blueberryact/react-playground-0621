import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeModeProvider } from "./context/themeCtx";
import { DataProvider } from "./context/dataCtx";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <DataProvider>
        <ThemeModeProvider>
            <App />
        </ThemeModeProvider>
    </DataProvider>
);
