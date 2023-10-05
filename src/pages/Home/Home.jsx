// import PropTypes from "prop-types";

import styled from "@emotion/styled";
import Content from "../../components/Content/Content";
import Data from "../../components/Data";
import LandingSpace from "../../components/LandingSpace";

const StyledSection = styled.div`
    background-color: rgb(15, 15, 15);
`;

const Home = () => {
    return (
        <StyledSection>
            <LandingSpace />
            <Content title={"Top Searches"} data={Data} time={2000} index={1} />
            <Content title={"Action"} data={Data} time={2000} index={4} />
            <Content
                title={"Romance & Drama"}
                data={Data}
                time={2000}
                index={2}
            />
            <Content title={"Comedy"} data={Data} time={2000} index={5} />
        </StyledSection>
    );
};

Home.propTypes = {};

export default Home;
