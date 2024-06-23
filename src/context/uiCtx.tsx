import {
    FC,
    ReactNode,
    createContext,
    useCallback,
    useContext,
    useMemo,
    useReducer,
} from "react";

export enum ModalType {
    CREATE_TAB = "CREATE_TAB",
    UPDATE_TAB = "UPDATE_TAB",
    DELETE_TAB = "DELETE_TAB",
}

interface IUIState {
    isShowTabConfig: boolean;
    isShowModal: boolean;
    modalState?: ModalType;
}

const initialState: IUIState = {
    isShowTabConfig: false,
    isShowModal: false,
    modalState: undefined,
};

type TUIAction =
    | {
          type: "TOGGLE_MODAL";
          payload?: ModalType;
      }
    | {
          type: "TOGGLE_TAB_CONFIG";
      };

export const UIContext = createContext<IUIState | any>(initialState);
UIContext.displayName = "uiContext";

const uiReducer = (state: IUIState, action: TUIAction): IUIState => {
    switch (action.type) {
        case "TOGGLE_MODAL":
            return {
                ...state,
                isShowModal: !state.isShowModal,
                modalState: action.payload,
            };
        case "TOGGLE_TAB_CONFIG":
            return { ...state, isShowTabConfig: !state.isShowTabConfig };
        default:
            return state;
    }
};

export const UIProvider: FC<{
    children?: string | ReactNode | JSX.Element;
}> = (props) => {
    const [state, dispatch] = useReducer(uiReducer, initialState);

    const toggleModal = useCallback(
        (type?: ModalType) => dispatch({ type: "TOGGLE_MODAL", payload: type }),
        [dispatch]
    );

    const toggleTabConfig = useCallback(
        () => dispatch({ type: "TOGGLE_TAB_CONFIG" }),
        [dispatch]
    );

    // const toggleTheme = useCallback(() => {
    //     return dispatch({ type: "TOGGLE_THEME" });
    // }, [dispatch]);

    const value = useMemo(
        () => ({ ...state, toggleModal, toggleTabConfig }),
        [state, toggleModal, toggleTabConfig]
    );
    // const value = useMemo(() => {
    //     return {
    //         isDark: state.isDark,
    //         toggleTheme: toggleTheme
    //     }
    // }, [])

    return <UIContext.Provider value={value} {...props} />;
};

interface IUseUI extends IUIState {
    toggleModal(type?: ModalType): void;
    toggleTabConfig(): void;
}

export const useUI = () => {
    const ctx = useContext<IUseUI>(UIContext);

    if (!ctx) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return ctx;
};
