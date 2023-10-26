import PropTypes from "prop-types";

import { Box } from "@mui/material";
import * as St from "./Video.styled";

const Video = ({ open, setOpen, src }) => {
    const handleModal = () => setOpen(!open);
    return (
        <St.StyledModal open={open} onClose={handleModal}>
            <Box className="modal__wrapper">
                <iframe className="video" src={`${src}`} />
            </Box>
        </St.StyledModal>
    );
};

Video.propTypes = {
    handleModal: PropTypes.func,
    open: PropTypes.bool,
    setOpen: PropTypes.func,
    src: PropTypes.string,
};

export default Video;
