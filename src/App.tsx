import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/globalStyle";
import { ThemeModeProvider, useTheme } from "./context/themeCtx";
import Temp from "./Temp";

function App() {
    const { isDark } = useTheme();

    return (
        <ThemeModeProvider>
            <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
                <GlobalStyle />
                <div className="App">
                    <Temp />
                </div>
            </ThemeProvider>
        </ThemeModeProvider>
    );
}

export default App;
