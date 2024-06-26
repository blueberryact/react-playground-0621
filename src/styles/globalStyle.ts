import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { media } from "./theme";

export const GlobalStyle = createGlobalStyle`
    ${reset}             

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    a {
        padding: 0;
        margin: 0;
        text-decoration: none;
        :link, :-webkit-any-link, :visited, :hover, :active {
            text-decoration: none !important;
        }
    }
    
    :focus {
        outline: none;
        border: none;
    }

    ::-webkit-scrollbar {
        display: none;
    }
    html{
        font-size: 11px;
        -webkit-text-size-adjust: none;
        font-family: -apple-system,BlinkMacSystemFont,helvetica,Apple SD Gothic Neo,sans-serif;       
        font-display: fallback;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    button {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer;
        &:disabled {
            cursor: default;
            fill: #f2f3f4;
        }
    }

    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        color: ${(props) => props.theme.color.text};
        background-color: ${(props) => props.theme.color.bg};
    }

    .pc-tablet-only {
        display: block;
        ${media.mobile} {
            display: none;
        }
    }
    .tablet-mobile-only{
        display: none;
        ${media.tablet}{
            display:block;
        }
    }
    .mobile-only {
        display: none;
        ${media.mobile} {
            display: block;
        }
    }
`;
