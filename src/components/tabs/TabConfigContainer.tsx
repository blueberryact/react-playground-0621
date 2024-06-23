import styled from "styled-components";
import { ILayout } from "../../types/layouts";
import { useUI } from "../../context/uiCtx";

const Container = styled.section`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    bottom: 0;
    left: 1rem;
`;

const BtnWrapper = styled.section`
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TabConfigContainer = ({ children }: ILayout) => {
    const { isShowTabConfig } = useUI();

    if (!isShowTabConfig) return <></>;

    return (
        <Container>
            <BtnWrapper>{children}</BtnWrapper>
        </Container>
    );
};

export default TabConfigContainer;
