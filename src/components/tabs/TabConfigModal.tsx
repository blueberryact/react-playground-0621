import { useEffect, useRef } from "react";
import { useData } from "../../context/dataCtx";
import { ModalType, useUI } from "../../context/uiCtx";
import InputForm from "./InputForm";
import Modal from "./Modal";

const TabConfigModal = () => {
    const { modalState, toggleModal } = useUI();
    const { createTab, deleteTab, updateTab, currentTabId, data } = useData();

    const inputRef = useRef<HTMLInputElement>(null);

    const getFormLabel = () => {
        switch (modalState) {
            case "CREATE_TAB":
                return "탭 생성";
            case "UPDATE_TAB":
                return "탭 이름 변경";
            case "DELETE_TAB":
                return "탭을 삭제하시려면 '삭제'를 입력해주세요.";
            default:
                return "";
        }
    };

    const onSubmit = () => {
        if (inputRef.current) {
            const { value } = inputRef.current;

            switch (modalState) {
                case "CREATE_TAB":
                    createTab(value);
                    break;
                case "UPDATE_TAB": {
                    if (!currentTabId) return;
                    updateTab(currentTabId, value);
                    break;
                }
                case "DELETE_TAB": {
                    if (!currentTabId) return;
                    if (inputRef.current?.value === "삭제") {
                        deleteTab(currentTabId);
                    }

                    if (inputRef.current) {
                        inputRef.current.value = "";
                    }
                    break;
                }
                default:
                    break;
            }
        }

        toggleModal();
    };

    useEffect(() => {
        if (modalState === "UPDATE_TAB" && inputRef.current) {
            inputRef.current.value = data.find(
                ({ id }) => id === currentTabId
            )!.label;
        }
    }, [modalState, currentTabId, data]);

    useEffect(() => {
        if (inputRef.current) {
            switch (modalState) {
                case ModalType.CREATE_TAB:
                case ModalType.UPDATE_TAB:
                case ModalType.DELETE_TAB:
                    inputRef.current.focus();
                    break;
                default:
                    break;
            }
        }
    }, [modalState]);

    return (
        <Modal>
            <InputForm
                onSubmit={onSubmit}
                ref={inputRef}
                label={getFormLabel()}
            />
        </Modal>
    );
};

export default TabConfigModal;
