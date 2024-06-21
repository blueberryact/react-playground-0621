import {
    FC,
    ReactNode,
    createContext,
    useCallback,
    useContext,
    useMemo,
    useReducer,
} from "react";

interface IThemeState {
    isDark: boolean;
}

const initialState: IThemeState = {
    isDark: false,
};

type TThemeAction = {
    type: "TOGGLE_THEME";
};

export const ThemeContext = createContext<IThemeState | any>(initialState);
ThemeContext.displayName = "themeContext";

const themeReducer = (
    state: IThemeState,
    action: TThemeAction
): IThemeState => {
    switch (action.type) {
        case "TOGGLE_THEME":
            return { isDark: !state.isDark };
        default:
            return state;
    }
};

export const ThemeModeProvider: FC<{
    children?: string | ReactNode | JSX.Element;
}> = (props) => {
    const [state, dispatch] = useReducer(themeReducer, initialState);

    const toggleTheme = useCallback(
        () => dispatch({ type: "TOGGLE_THEME" }),
        [dispatch]
    );

    // const toggleTheme = useCallback(() => {
    //     return dispatch({ type: "TOGGLE_THEME" });
    // }, [dispatch]);

    const value = useMemo(
        () => ({ ...state, toggleTheme }),
        [state, toggleTheme]
    );
    // const value = useMemo(() => {
    //     return {
    //         isDark: state.isDark,
    //         toggleTheme: toggleTheme
    //     }
    // }, [])

    return <ThemeContext.Provider value={value} {...props} />;
};

interface IUseTheme extends IThemeState {
    toggleTheme(): void;
}

export const useTheme = () => {
    const ctx = useContext<IUseTheme>(ThemeContext);

    if (!ctx) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return ctx;
};

export const ManagedThemeProvider: FC<{ children?: ReactNode }> = ({
    children,
}) => {
    return <ThemeModeProvider>{children}</ThemeModeProvider>;
};
