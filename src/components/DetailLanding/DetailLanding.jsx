import PropTypes from "prop-types";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DownloadIcon from "@mui/icons-material/Download";
import ReplyIcon from "@mui/icons-material/Reply";

import data from "../../components/Data";
import * as St from "./DetailLanding.styled";
import watchlist from "../../assets/icons/watchlist.png";
import play from "../../assets/icons/play.png";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import Video from "../Video";

const DetailLanding = ({ id }) => {
    const [open, setOpen] = useState(false);
    const handleModal = () => setOpen(!open);

    const item = data[id];

    return (
        <St.StyledDiv>
            <img className="background" src={item.background} alt="" />
            <Box className="content">
                <Box className="content__image-wrapper">
                    <img className="content__image" src={item.logo} alt="" />
                </Box>
                <Box className="content__title">
                    <Typography className="content__title-item">
                        CBFC:U/A
                    </Typography>
                    <Typography className="content__title-item">
                        Action
                    </Typography>
                    <Typography className="content__title-item">
                        Adventure
                    </Typography>
                    <Typography className="content__title-item">
                        2h 28m
                    </Typography>
                </Box>
                <Box className="content__button-wrapper">
                    <Box
                        className="content__button-first"
                        onClick={handleModal}
                    >
                        <img
                            className="content__button-image"
                            src={play}
                            alt=""
                        />
                        <p className="content__button-desc">Watch Now</p>
                    </Box>
                    <Box className="content__button">
                        <img
                            className="content__button-image"
                            src={watchlist}
                            alt=""
                        />
                        <Typography className="content__button-desc">
                            Add Watchlist
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box className="button">
                <Box className="icon__wrapper">
                    <FavoriteBorderIcon className="icon" />
                </Box>
                <Box className="icon__wrapper">
                    <DownloadIcon className="icon" />
                </Box>
                <Box className="icon__wrapper">
                    <ReplyIcon className="icon" />
                </Box>
            </Box>
            <Box className="fade"></Box>
            <Video setOpen={setOpen} open={open} src={item.video} />
        </St.StyledDiv>
    );
};

DetailLanding.propTypes = {
    id: PropTypes.string.isRequired,
};

export default DetailLanding;
