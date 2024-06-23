import styled from "styled-components";
import { useData } from "../../context/dataCtx";

const Tab = styled.li<ITabProps>`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    font-size: ${({ theme }) => theme.text.lg};
    gap: 0.75rem;
    cursor: pointer;
    transition: ${({ theme }) => theme.transition.base};
    &:hover {
        opacity: 0.7;
    }
    &:active {
        opacity: 0.3;
    }
    background-color: ${({ theme, $isActive }) =>
        $isActive ? theme.color.primary : theme.color.bg};
    border-bottom: ${({ theme }) => theme.border.base};
    color: ${({ theme, $isActive }) =>
        $isActive ? theme.color.darkgray : theme.color.text};
`;

const Heading = styled.h3<ITabProps>`
    overflow: hidden;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: ${({ theme, $isActive }) =>
        $isActive ? theme.font.bold : theme.font.light};
`;

const UpdatedAt = styled.span`
    font-weight: ${({ theme }) => theme.font.light};
    font-size: ${({ theme }) => theme.text.sm};
    opacity: 0.5;
    font-style: italic;
`;

interface ITabProps {
    $isActive: boolean;
}

interface IFirstDepthTabProps {
    isActive: boolean;
    label: string;
    id: number;
    createdAt: string;
    updatedAt: string;
    type: "tab" | "memo";
}

const FirstDepthTab = ({
    id,
    isActive,
    label,
    updatedAt,
    type,
}: IFirstDepthTabProps) => {
    const {
        setTabId,
        unsetTabId,
        currentTabId,
        setMemoId,
        unsetMemoId,
        currentMemoId,
    } = useData();

    return (
        <Tab
            $isActive={isActive}
            onClick={() => {
                if (type === "tab") {
                    id === currentTabId ? unsetTabId() : setTabId(id);
                    unsetMemoId();
                } else {
                    id === currentMemoId ? unsetMemoId() : setMemoId(id);
                }
            }}
        >
            <Heading $isActive={isActive}>{label}</Heading>
            <UpdatedAt>Updated At, {updatedAt}</UpdatedAt>
        </Tab>
    );
};

export default FirstDepthTab;
