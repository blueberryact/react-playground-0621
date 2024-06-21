import { forwardRef } from "react";
import styled from "styled-components";

const TextArea = styled.textarea`
    line-height: 165%;
    font-size: ${({ theme }) => theme.text.xl};
    font-weight: ${({ theme }) => theme.font.base};
    width: 100%;
    height: 100%;
    border-radius: 2.5rem;
    border: ${({ theme }) => theme.border.base};
    background-color: ${({ theme }) => theme.color.bg};
    color: ${({ theme }) => theme.color.text};
    padding: 1.5rem;
`;
const Editor = forwardRef<HTMLTextAreaElement>(({ ...props }, ref) => {
    return <TextArea ref={ref} {...props} />;
});

export default Editor;
