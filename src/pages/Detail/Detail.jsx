// import PropTypes from 'prop-types'

import { useParams } from "react-router-dom";
import DetailLanding from "../../components/DetailLanding";
import DetailContent from "../../components/DetailContent";

const Detail = () => {
    const { id } = useParams();

    return (
        <div>
            <DetailLanding id={id} time={2000} link={"/detail/"} />
            <DetailContent id={id} time={2000} link={"/detail/"} index={1} />
        </div>
    );
};

Detail.propTypes = {};

export default Detail;
