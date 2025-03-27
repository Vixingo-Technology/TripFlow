import React from "react";
import logo from "../../assets/logo.png";
import { Typography } from "@mui/material";
import { Link } from "react-router";

export default function Logo() {
    return (
        <>
            {" "}
            <Link
                to="/"
                style={{
                    textDecoration: "none",
                    margin: "2px auto",
                    flex: 1,
                }}
            >
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        flex: 1,
                        display: { xs: "flex", md: "flex" },
                        alignItems: "center",
                        justifyContent: {
                            // xs: "center",
                            // md: "flex-start",
                        },

                        textTransform: "uppercase",
                        color: (theme) => theme.palette.text.primary,
                    }}
                >
                    <img
                        src={logo}
                        alt="logo"
                        width={100}
                        height={60}
                        style={{ marginRight: "10px" }}
                    />
                    {/* <b>Su</b>Lynn */}
                </Typography>
            </Link>{" "}
        </>
    );
}
