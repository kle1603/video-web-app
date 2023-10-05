// import PropTypes from 'prop-types'

import * as St from "./Header.styled";
import logo from "../../assets/images/logo.png";
import avatar from "../../assets/images/avatar.jpg";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import configs from "../../configs";
import useScroll from "../../hooks/useScroll";
import { Box, Typography } from "@mui/material";

const Header = () => {
    const [scrollY] = useScroll();

    return (
        <St.StyledAppBar
            style={
                scrollY < 300
                    ? { backgroundColor: "transparent", boxShadow: "none" }
                    : { backgroundColor: "black", boxShadow: "none" }
            }
        >
            <St.StyledToolbar>
                <Box className="header__left">
                    <NavLink to={configs.routes.home} className="header__logo">
                        <img className="header__image" src={logo} alt="" />
                    </NavLink>
                    <Box className="header__navbar">
                        <NavLink
                            to={configs.routes.home}
                            className="header__navbar-item"
                        >
                            Home
                        </NavLink>
                        <Typography className="header__navbar-item">
                            Movies
                        </Typography>
                        <Typography className="header__navbar-item">
                            Series
                        </Typography>
                        <Typography className="header__navbar-item">
                            Trending
                        </Typography>
                        <NavLink
                            to={configs.routes.contact}
                            className="header__navbar-item"
                        >
                            Contact
                        </NavLink>
                    </Box>
                </Box>
                <Box className="header__right">
                    <Box className="header__search">
                        <input
                            className="header__search-input"
                            placeholder="Search Movies, Series..."
                        />
                        <SearchIcon className="header__search-icon" />
                    </Box>
                    <Box className="header__avatar">
                        <img
                            className="header__avatar-image"
                            src={avatar}
                            alt=""
                        />
                    </Box>
                </Box>
            </St.StyledToolbar>
        </St.StyledAppBar>
    );
};

Header.propTypes = {};

export default Header;
