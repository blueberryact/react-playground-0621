import styled from "styled-components";
import { ILayout } from "../../types/layouts";

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    overflow-y: auto;
    border-right: ${({ theme }) => theme.border.base};
`;
const TabContainer = ({ children }: ILayout) => {
    return <Section>{children}</Section>;
};

export default TabContainer;
