import { ModalType, useUI } from "../../context/uiCtx";
import ConfigBtn from "./ConfigBtn";
import TabConfigContainer from "./TabConfigContainer";

const TabConfiguration = () => {
    const { toggleModal } = useUI();

    const onClickCreateTab = () => {
        toggleModal(ModalType.CREATE_TAB);
    };

    const onClickUpdateTab = () => {
        toggleModal(ModalType.UPDATE_TAB);
    };

    const onClickDeleteTab = () => {
        toggleModal(ModalType.DELETE_TAB);
    };

    return (
        <TabConfigContainer>
            <ConfigBtn
                index={1}
                label="탭 생성"
                onClickBtn={onClickCreateTab}
            />
            <ConfigBtn
                index={2}
                label="탭 수정"
                onClickBtn={onClickUpdateTab}
            />
            <ConfigBtn
                index={3}
                label="탭 삭제"
                onClickBtn={onClickDeleteTab}
            />
        </TabConfigContainer>
    );
};

export default TabConfiguration;
