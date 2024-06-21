import { useRef } from "react";
import Editor from "./Editor";
import EditorContainer from "./EditorContainer";
import styled from "styled-components";
import { useTheme } from "../../context/themeCtx";

const Btn = styled.button`
    position: absolute;
    padding: 1rem 2rem;
    font-weight: ${({ theme }) => theme.font.bold};
    font-size: ${({ theme }) => theme.text.xl};
    transition: ${({ theme }) => theme.transition.base};
    width: 12rem;
    white-space: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    top: 1rem;

    &:hover {
        opacity: 0.7;
    }
    &:active {
        opacity: 0.3;
    }
`;

const ResetBtn = styled(Btn)`
    right: 14rem;
    background-color: ${({ theme }) => theme.color.sub};
    &:hover {
        box-shadow: ${({ theme }) => theme.boxShadow.sub};
    }
`;

const SaveBtn = styled(Btn)`
    right: 1rem;
    background-color: ${({ theme }) => theme.color.primary};
    &:hover {
        box-shadow: ${({ theme }) => theme.boxShadow.primary};
    }
`;

const DeleteBtn = styled(Btn)`
    right: 27rem;
    background-color: ${({ theme }) => theme.color.bg};
    color: ${({ theme }) => theme.color.text};
    &:hover {
        box-shadow: ${({ theme }) => theme.boxShadow.strong};
    }
`;

const ThemeBtn = styled(Btn)`
    left: 1rem;
    background-color: ${({ theme }) => theme.color.text};
    color: ${({ theme }) => theme.color.bg};
    &:hover {
        box-shadow: ${({ theme }) => theme.boxShadow.normal};
    }
`;

const TextEditor = () => {
    const { isDark, toggleTheme } = useTheme();
    const editorRef = useRef<HTMLTextAreaElement>(null);

    const onClickReset = () => {
        if (editorRef.current) {
            editorRef.current.value = "";
            editorRef.current.focus();
        }
    };

    return (
        <EditorContainer>
            <ThemeBtn onClick={toggleTheme}>
                {isDark ? "라이트 모드" : "다크 모드"}
            </ThemeBtn>
            <DeleteBtn>삭제하기</DeleteBtn>
            <ResetBtn onClick={onClickReset}>초기화하기</ResetBtn>
            <SaveBtn>저장하기</SaveBtn>
            <Editor ref={editorRef} />
        </EditorContainer>
    );
};

export default TextEditor;
