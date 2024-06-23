import styled from "styled-components";
import { fadeIn, slideIn } from "../../styles/keyframes";
import { useUI } from "../../context/uiCtx";

const Btn = styled.button<{ $index: number }>`
    border-radius: 1.25rem;
    padding: 1rem 1.5rem;
    opacity: 0;
    animation: ${fadeIn} 0.5s ease-in-out forwards,
        ${slideIn} 0.3s ease-in-out forwards;
    transform: translateX(-9rem);
    font-size: ${({ theme }) => theme.text.xl};
    font-weight: ${({ theme }) => theme.font.base};
    background-color: ${({ theme }) => theme.color.darkgray};
    color: ${({ theme }) => theme.color.primary};
    margin: 0.5rem;
    transition: all 0.15s ease-in-out;
    &:hover {
        background-color: ${({ theme }) => theme.color.primary};
        color: ${({ theme }) => theme.color.darkgray};
        opacity: 0.7;
    }
    &:active {
        opacity: 0.3;
    }

    animation-delay: ${({ $index }) => $index * 0.05 + "s"};
`;

interface IConfigBtnProps {
    label: string;
    onClickBtn(): void;
    index?: number;
}

const ConfigBtn = ({ label, onClickBtn, index = 1 }: IConfigBtnProps) => {
    const { toggleTabConfig } = useUI();

    const onClickConfigBtn = () => {
        toggleTabConfig();
        onClickBtn();
    };

    return (
        <Btn $index={index} onClick={onClickConfigBtn}>
            {label}
        </Btn>
    );
};

export default ConfigBtn;
