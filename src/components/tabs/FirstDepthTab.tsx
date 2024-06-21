import styled from "styled-components";

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
}

const FirstDepthTab = ({
    createdAt,
    id,
    isActive,
    label,
    updatedAt,
}: IFirstDepthTabProps) => {
    return (
        <Tab $isActive={isActive}>
            <Heading $isActive={isActive}>{label}</Heading>
            <UpdatedAt>Updated At, {updatedAt}</UpdatedAt>
        </Tab>
    );
};

export default FirstDepthTab;
