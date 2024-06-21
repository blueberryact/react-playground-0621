import styled from "styled-components";
import { ILayout } from "../../types/layouts";

const Container = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 1rem;
    padding-top: 6rem;
`;

const EditorContainer = ({ children }: ILayout) => {
    return <Container>{children}</Container>;
};

export default EditorContainer;
