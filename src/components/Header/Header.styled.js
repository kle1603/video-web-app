import { AppBar, Toolbar } from "@mui/material";
import styled from "styled-components";

export const StyledAppBar = styled(AppBar)``;

export const StyledToolbar = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header__left {
        margin-left: 68px;
        display: flex;
        justify-content: center;
        align-items: center;

        .header__logo {
            margin-right: 15px;
            width: 120px;
            height: 27px;
            cursor: pointer;
            overflow: hidden;

            .header__image {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .header__navbar {
            display: flex;

            .active {
                position: relative;

                &::after {
                    position: absolute;
                    bottom: 26px;
                    right: 12px;
                    left: 12px;
                    content: "";
                    /* width: 100px; */
                    height: 2px;
                    background-color: #ff4949;
                }
            }

            .header__navbar-item {
                padding: 30px 15px;
                color: #fff;
                font-size: 2rem;
                cursor: pointer;
                transition: all 0.3s ease-in-out;

                &:hover {
                    color: #ff4949;
                }
            }
        }
    }

    .header__right {
        margin-right: 65px;
        display: flex;
        justify-content: center;
        align-items: center;

        .header__search {
            margin-right: 9px;
            position: relative;
            font-size: 1.6rem;

            .header__search-input {
                padding: 10px 44px 10px 14px;
                width: 295px;
                height: 39px;
                border-radius: 40px;
                border: 1px solid rgba(255, 255, 255, 0.2);
                background: rgba(0, 0, 0, 0.1);
                color: rgba(255, 255, 255, 0.6);

                &::placeholder {
                    color: rgba(255, 255, 255, 0.6);
                }
            }

            .header__search-icon {
                position: absolute;
                right: 10px;
                top: 7px;

                background-color: transparent;
                font-size: 2.6rem;
                color: rgba(255, 255, 255, 0.6);
                cursor: pointer;
            }
        }

        .header__avatar {
            width: 39px;
            height: 39px;
            cursor: pointer;

            .header__avatar-image {
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
    }
`;
