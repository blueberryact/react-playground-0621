import {
    FC,
    ReactNode,
    createContext,
    useCallback,
    useContext,
    useMemo,
    useReducer,
} from "react";

interface IMemo {
    id: number;
    content: string;
    updatedAt: string;
    createdAt: string;
}

interface ITab<T> {
    id: number;
    label: string;
    updatedAt: string;
    createdAt: string;
    data: T[];
}

interface IDataState {
    currentTabId?: number;
    currentMemoId?: number;
    data: ITab<IMemo>[];
}

const initialState: IDataState = {
    data: [],
};

type TDataAction =
    | {
          type: "SET_TAB";
          id: number;
      }
    | {
          type: "SET_MEMO";
          id: number;
      }
    | {
          type: "UNSET_TAB";
      }
    | {
          type: "UNSET_MEMO";
      }
    | {
          type: "CREATE_MEMO";
          content: string;
      }
    | {
          type: "UPDATE_MEMO";
          id: number;
          content: string;
      }
    | {
          type: "DELETE_MEMO";
          id: number;
      }
    | {
          type: "DELETE_TAB";
          id: number;
      }
    | {
          type: "CREATE_TAB";
          label: string;
      }
    | {
          type: "UPDATE_TAB";
          id: number;
          label: string;
      };

export const DataContext = createContext<IDataState | any>(initialState);
DataContext.displayName = "dataContext";

const dataReducer = (state: IDataState, action: TDataAction): IDataState => {
    switch (action.type) {
        case "SET_TAB":
            return {
                ...state,
                currentMemoId: undefined,
                currentTabId: action.id,
            };
        case "SET_MEMO":
            return { ...state, currentMemoId: action.id };
        case "UNSET_TAB":
            return {
                ...state,
                currentTabId: undefined,
                currentMemoId: undefined,
            };
        case "UNSET_MEMO":
            return { ...state, currentMemoId: undefined };
        case "CREATE_MEMO": {
            const tabIndex = state.data.findIndex(
                (tab) => tab.id === state.currentTabId
            );
            if (tabIndex === -1) return state;
            const newMemo: IMemo = {
                id: Date.now(),
                content: action.content,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            };
            const newData = [...state.data];
            newData[tabIndex] = {
                ...newData[tabIndex],
                data: [...newData[tabIndex].data, newMemo],
                updatedAt: new Date().toISOString(),
            };
            return { ...state, data: newData };
        }
        case "UPDATE_MEMO": {
            const tabIndex = state.data.findIndex(
                (tab) => tab.id === state.currentTabId
            );
            if (tabIndex === -1) return state;
            const memoIndex = state.data[tabIndex].data.findIndex(
                (memo) => memo.id === action.id
            );
            if (memoIndex === -1) return state;
            const newData = [...state.data];
            newData[tabIndex].data[memoIndex] = {
                ...newData[tabIndex].data[memoIndex],
                content: action.content,
                updatedAt: new Date().toISOString(),
            };
            newData[tabIndex] = {
                ...newData[tabIndex],
                updatedAt: new Date().toISOString(),
            };
            return { ...state, data: newData };
        }
        case "DELETE_MEMO": {
            const tabIndex = state.data.findIndex(
                (tab) => tab.id === state.currentTabId
            );
            if (tabIndex === -1) return state;
            const newData = [...state.data];
            newData[tabIndex] = {
                ...newData[tabIndex],
                data: newData[tabIndex].data.filter(
                    (memo) => memo.id !== action.id
                ),
                updatedAt: new Date().toISOString(),
            };
            return { ...state, data: newData };
        }
        case "CREATE_TAB": {
            const newTab: ITab<IMemo> = {
                id: Date.now(),
                label: action.label,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                data: [],
            };
            return { ...state, data: [...state.data, newTab] };
        }
        case "DELETE_TAB": {
            const newData = state.data.filter((tab) => tab.id !== action.id);
            return { ...state, data: newData };
        }
        case "UPDATE_TAB": {
            const tabIndex = state.data.findIndex(
                (tab) => tab.id === action.id
            );
            if (tabIndex === -1) return state;
            const newData = [...state.data];
            newData[tabIndex] = {
                ...newData[tabIndex],
                label: action.label,
                updatedAt: new Date().toISOString(),
            };
            return { ...state, data: newData };
        }
        default:
            return state;
    }
};

export const DataProvider: FC<{
    children?: string | ReactNode | JSX.Element;
}> = (props) => {
    const [state, dispatch] = useReducer(dataReducer, initialState);

    const createMemo = useCallback(
        (content: string) => dispatch({ type: "CREATE_MEMO", content }),
        [dispatch]
    );

    const updateMemo = useCallback(
        (id: number, content: string) =>
            dispatch({ type: "UPDATE_MEMO", id, content }),
        [dispatch]
    );

    const deleteMemo = useCallback(
        (id: number) => dispatch({ type: "DELETE_MEMO", id }),
        [dispatch]
    );

    const setTabId = useCallback(
        (id: number) => dispatch({ type: "SET_TAB", id }),
        [dispatch]
    );

    const setMemoId = useCallback(
        (id: number) => dispatch({ type: "SET_MEMO", id }),
        [dispatch]
    );

    const unsetTabId = useCallback(
        () => dispatch({ type: "UNSET_TAB" }),
        [dispatch]
    );

    const unsetMemoId = useCallback(
        () => dispatch({ type: "UNSET_MEMO" }),
        [dispatch]
    );

    const createTab = useCallback(
        (label: string) => dispatch({ type: "CREATE_TAB", label }),
        [dispatch]
    );

    const updateTab = useCallback(
        (id: number, label: string) =>
            dispatch({ type: "UPDATE_TAB", id, label }),
        [dispatch]
    );

    const deleteTab = useCallback(
        (id: number) => dispatch({ type: "DELETE_TAB", id }),
        [dispatch]
    );

    const value = useMemo(
        () => ({
            ...state,
            createMemo,
            updateMemo,
            deleteMemo,
            setTabId,
            setMemoId,
            unsetTabId,
            unsetMemoId,
            createTab,
            updateTab,
            deleteTab,
        }),
        [
            state,
            createMemo,
            updateMemo,
            deleteMemo,
            setTabId,
            setMemoId,
            unsetTabId,
            unsetMemoId,
            createTab,
            updateTab,
            deleteTab,
        ]
    );

    return <DataContext.Provider value={value} {...props} />;
};

interface IUseData extends IDataState {
    createMemo(content: string): void;
    updateMemo(id: number, content: string): void;
    deleteMemo(id: number): void;
    setTabId(id: number): void;
    setMemoId(id: number): void;
    unsetTabId(): void;
    unsetMemoId(): void;
    createTab(label: string): void;
    updateTab(id: number, label: string): void;
    deleteTab(id: number): void;
}

export const useData = () => {
    const ctx = useContext<IUseData>(DataContext);

    if (!ctx) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return ctx;
};
