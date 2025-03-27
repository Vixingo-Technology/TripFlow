import React from "react";
import logo from "../../assets/logo.png";
import { Box, Typography } from "@mui/material";
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
                <Box
                    // variant="h6"
                    component="div"
                    sx={{
                        flex: 1,
                        display: { xs: "flex", md: "flex" },
                        alignItems: "flex-start",
                        flexDirection: "column",
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
                        width={170}
                        // height={40}
                        style={{ marginRight: "10px" }}
                    />
                    {/* <Typography color="secondary" fontSize={"1.2rem"}>
                        <b>General </b> Insurance
                    </Typography> */}
                </Box>
            </Link>{" "}
        </>
    );
}
