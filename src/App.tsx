import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/globalStyle";
import { useTheme } from "./context/themeCtx";
import Layout from "./components/layouts/Layout";
import TabContainer from "./components/layouts/TabContainer";
import FirstDepthTab from "./components/tabs/FirstDepthTab";
import TextEditor from "./components/editor/TextEditor";
import TabConfiguration from "./components/tabs/TabConfiguration";
import { useData } from "./context/dataCtx";
import TabConfigModal from "./components/tabs/TabConfigModal";

/**
 * **같은 컴포넌트 레벨에서 상태를 공급하면 제대로 인식하지 못함**
 */

function App() {
    const { isDark } = useTheme();
    const { data, currentTabId, currentMemoId } = useData();

    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <GlobalStyle />

            <TabConfigModal />

            <Layout>
                <TabConfiguration />

                <TabContainer>
                    {data?.map((tab) => (
                        <FirstDepthTab
                            key={tab.id}
                            createdAt={tab.createdAt}
                            id={tab.id}
                            updatedAt={tab.updatedAt}
                            label={tab.label}
                            isActive={tab.id === currentTabId}
                            type="tab"
                        />
                    ))}
                </TabContainer>
                <TabContainer>
                    {data
                        .find(({ id }) => id === currentTabId)
                        ?.data?.map((tab) => (
                            <FirstDepthTab
                                key={tab.id}
                                createdAt={tab.createdAt}
                                id={tab.id}
                                updatedAt={tab.updatedAt}
                                label={tab.content}
                                isActive={tab.id === currentMemoId}
                                type="memo"
                            />
                        ))}
                </TabContainer>
                <TextEditor />
            </Layout>
        </ThemeProvider>
    );
}

export default App;
