import styled from "styled-components";
import { ILayout } from "../../types/layouts";
import { media } from "../../styles/theme";

const MainLayout = styled.main`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr 4fr;
    align-items: start;
    justify-content: start;

    ${media.tablet} {
        grid-template-columns: 1fr 1fr 3fr;
    }

    ${media.mobile} {
        grid-template-columns: 1fr 1fr 2fr;
    }
`;

const Layout = ({ children }: ILayout) => {
    return <MainLayout>{children}</MainLayout>;
};

export default Layout;
