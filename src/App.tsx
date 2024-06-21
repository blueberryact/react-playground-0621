import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/globalStyle";
import { useTheme } from "./context/themeCtx";
import Layout from "./components/layouts/Layout";
import TabContainer from "./components/layouts/TabContainer";
import FirstDepthTab from "./components/tabs/FirstDepthTab";
import TextEditor from "./components/editor/TextEditor";

/**
 * **같은 컴포넌트 레벨에서 상태를 공급하면 제대로 인식하지 못함**
 */

function App() {
    const { isDark } = useTheme();

    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <GlobalStyle />
            <Layout>
                <TabContainer>
                    <FirstDepthTab
                        createdAt="test"
                        id={1}
                        isActive={true}
                        label="테스트탭"
                        updatedAt={new Date().toLocaleDateString("ko-kr")}
                    />
                </TabContainer>
                <TabContainer>
                    <FirstDepthTab
                        createdAt="test"
                        id={1}
                        isActive={false}
                        label="테스트탭"
                        updatedAt={new Date().toLocaleDateString("ko-kr")}
                    />
                </TabContainer>
                <TextEditor />
            </Layout>
        </ThemeProvider>
    );
}

export default App;
