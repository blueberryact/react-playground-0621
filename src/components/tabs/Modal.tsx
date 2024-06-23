import styled from "styled-components";
import { ILayout } from "../../types/layouts";
import { useUI } from "../../context/uiCtx";
import { fadeIn } from "../../styles/keyframes";

const Bg = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 99;
    opacity: 0;
    animation: ${fadeIn} 0.15s ease-in-out forwards;
`;

const Container = styled.div<IContainerProps>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({ theme }) => theme.color.bg};
    color: ${({ theme }) => theme.color.text};
    width: ${({ $width }) => $width || "auto"};
    height: ${({ $height }) => $height || "auto"};
    border-radius: 1.5rem;
    box-shadow: ${({ theme }) => theme.boxShadow.strong};
    padding: 2.5rem 3.5rem;
    z-index: 100;
`;

interface IContainerProps {
    $width?: string;
    $height?: string;
}

interface IModalProps extends ILayout {
    width?: string;
    height?: string;
}

const MODAL_DATA_VALUE = "modal-background";

const Modal = ({ height, width, children }: IModalProps) => {
    const { isShowModal, toggleModal } = useUI();

    if (!isShowModal) return <></>;

    // How to scroll lock if on modal

    return (
        <Bg
            data-value={MODAL_DATA_VALUE}
            onClick={() => {
                toggleModal();
            }}
        >
            <Container
                $height={height}
                $width={width}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </Container>
        </Bg>
    );
};

export default Modal;
