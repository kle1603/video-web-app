import PropTypes from "prop-types";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import "swiper/css";

const StyledSection = styled.div`
    background-color: rgb(15, 15, 15);
`;

const OnlyHeader = ({ children }) => {
    return (
        <StyledSection>
            <Header />
            {children}
        </StyledSection>
    );
};

OnlyHeader.propTypes = {
    children: PropTypes.node.isRequired,
};

export default OnlyHeader;
