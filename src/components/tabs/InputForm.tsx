import { forwardRef } from "react";
import styled from "styled-components";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
`;

const LabelContainer = styled.label`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: start;
    justify-content: center;
`;

const LabelSpan = styled.span`
    color: ${({ theme }) => theme.color.text};
    padding-bottom: 0.25rem;
    text-align: left;
    width: 100%;
    font-size: ${({ theme }) => theme.text.xl};
    font-weight: ${({ theme }) => theme.font.bold};
    /* border-bottom: ${({ theme }) => theme.border.base}; */
`;

const Input = styled.input`
    outline: none;
    font-size: ${({ theme }) => theme.text.xl};
    color: ${({ theme }) => theme.color.text};
    font-weight: ${({ theme }) => theme.font.light};
    background-color: ${({ theme }) => theme.color.bg};
    text-align: left;
    padding: 1.5rem;
    border: ${({ theme }) => theme.border.base};
    border-radius: 1rem;
    width: 100%;
    transition: ${({ theme }) => theme.transition.base};

    &:focus {
        outline: 2px solid ${({ theme }) => theme.color.primary};
    }
`;

const Submitter = styled.button`
    border-radius: 1rem;
    border: ${({ theme }) => theme.font.bold};
    color: ${({ theme }) => theme.color.darkgray};
    background-color: ${({ theme }) => theme.color.primary};
    padding: 1rem 2rem;
    font-size: ${({ theme }) => theme.text.xl};
    font-weight: ${({ theme }) => theme.font.bold};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    transition: ${({ theme }) => theme.transition.base};

    &:hover {
        opacity: 0.7;
        box-shadow: inset ${({ theme }) => theme.boxShadow.normal};
    }
    &:active {
        opacity: 0.3;
    }
`;

interface IInputForm {
    onSubmit(): void;
    label: string;
}

const InputForm = forwardRef<HTMLInputElement, IInputForm>(
    ({ onSubmit, label }, ref) => {
        return (
            <Form
                onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit();
                }}
            >
                <LabelContainer>
                    <LabelSpan>{label}</LabelSpan>
                    <Input type="text" ref={ref} />
                </LabelContainer>
                <Submitter>제출하기</Submitter>
            </Form>
        );
    }
);

export default InputForm;
