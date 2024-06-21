import styled from "styled-components";
import { useTheme } from "./context/themeCtx";

const Span = styled.span`
    color: ${(props) => props.theme.color.bg};
    background-color: ${(props) => props.theme.color.text};
    padding: 4rem;
    font-size: 2rem;
`;

const Background = styled.div`
    background-color: ${(props) => props.theme.color.bg};
`;

const Temp = () => {
    const { isDark, toggleTheme } = useTheme();

    console.log(isDark);

    return (
        <Background>
            <Span>hihihi</Span>
            <button onClick={toggleTheme}>Toggle</button>
        </Background>
    );
};

export default Temp;
