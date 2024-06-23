import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeModeProvider } from "./context/themeCtx";
import { DataProvider } from "./context/dataCtx";
import { UIProvider } from "./context/uiCtx";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <DataProvider>
        <UIProvider>
            <ThemeModeProvider>
                <App />
            </ThemeModeProvider>
        </UIProvider>
    </DataProvider>
);
