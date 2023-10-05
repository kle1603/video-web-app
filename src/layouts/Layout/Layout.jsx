import PropTypes from "prop-types";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import styled from "styled-components";
import "swiper/css";

const StyledSection = styled.div`
    background-color: rgb(15, 15, 15);
`;

const Layout = ({ children }) => {
    return (
        <StyledSection>
            <Header />
            {children}
            <Footer />
        </StyledSection>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
