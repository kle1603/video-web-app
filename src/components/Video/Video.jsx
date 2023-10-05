import PropTypes from "prop-types";

import { Box } from "@mui/material";
import * as St from "./Video.styled";

const Video = ({ open, setOpen, src }) => {
    const handleModal = () => setOpen(!open);
    return (
        <St.StyledModal open={open} onClose={handleModal}>
            <Box className="modal__wrapper">
                <iframe
                    className="video"
                    // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
                    src={`${src}`}
                    // allowFullScreen
                />
            </Box>
        </St.StyledModal>
    );
};

Video.propTypes = {
    handleModal: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.bool.isRequired,
    src: PropTypes.string.isRequired,
};

export default Video;
