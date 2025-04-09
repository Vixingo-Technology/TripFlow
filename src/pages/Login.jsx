import {
    Box,
    Button,
    Paper,
    Stack,
    TextField,
    Typography,
    IconButton,
} from "@mui/material";
import React from "react";

import { NavLink } from "react-router";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import MicrosoftIcon from "@mui/icons-material/Microsoft";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Logo from "../components/dynamic/Logo";
export default function Login() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <Box
                sx={{
                    // background: (theme) =>
                    //     `linear-gradient(90deg,${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
                    height: { xs: "100%", sm: "100vh" },
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                    bgcolor: "secondary.main",
                }}
            >
                <Box
                    sx={{
                        maxWidth: "440px",
                        textAlign: "center",
                        p: "1rem",
                        position: "relative",
                        flex: 2,
                        pb: "4rem",
                        my: "auto",
                    }}
                >
                    <Paper
                        elevation={3}
                        sx={{ p: { sm: 6, xs: 3 }, borderRadius: 2 }}
                    >
                        <Box sx={{ margin: "0 auto", width: "fit-content" }}>
                            <Logo />
                        </Box>
                        <Typography variant="h4" sx={{ my: 2 }}>
                            Welcome
                        </Typography>
                        <Typography variant="body1" sx={{ my: 2 }}>
                            Log in to continue to the Dashboard.
                        </Typography>
                        <Stack sx={{ gap: 2, my: 2 }}>
                            {" "}
                            <TextField
                                variant="outlined"
                                fullWidth
                                label="Email Address"
                            />
                            <FormControl
                                sx={{ width: "100%" }}
                                variant="outlined"
                            >
                                <InputLabel htmlFor="outlined-adornment-password">
                                    Password
                                </InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? "text" : "password"}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label={
                                                    showPassword
                                                        ? "hide the password"
                                                        : "display the password"
                                                }
                                                onClick={
                                                    handleClickShowPassword
                                                }
                                                onMouseDown={
                                                    handleMouseDownPassword
                                                }
                                                onMouseUp={
                                                    handleMouseUpPassword
                                                }
                                                edge="end"
                                            >
                                                {showPassword ? (
                                                    <VisibilityOff />
                                                ) : (
                                                    <Visibility />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                        </Stack>
                        <NavLink to={"/dashboard"}>
                            <Button variant="contained" fullWidth size="large">
                                Continue{" "}
                            </Button>
                        </NavLink>
                        <Typography variant="body2" sx={{ my: 2 }}>
                            Don't have an account? &nbsp;
                            <NavLink to={"/auth/signup/password"}>
                                Sign up
                            </NavLink>
                        </Typography>
                        <Stack spacing={2}>
                            <Typography
                                gutterBottom
                                sx={{
                                    color: "text.secondary",
                                    fontSize: 14,
                                    display: "flex",

                                    alignItems: "center",
                                    mt: "1rem",
                                    "&::before": {
                                        content: '""',
                                        display: "inline-block",
                                        width: "100%",
                                        borderBottom: (theme) =>
                                            `1px solid ${theme.palette.text.secondary}`,
                                        opacity: "30%",
                                        margin: "0 10px",
                                    },
                                    "&::after": {
                                        content: '""',
                                        display: "inline-block",
                                        width: "100%",
                                        borderBottom: (theme) =>
                                            `1px solid ${theme.palette.text.secondary}`,
                                        opacity: "30%",
                                        margin: "0 10px",
                                    },
                                }}
                            >
                                OR
                            </Typography>

                            <Button
                                variant="outlined"
                                fullWidth
                                startIcon={<GoogleIcon />}
                            >
                                Continue with Google
                            </Button>
                            <Button
                                variant="outlined"
                                fullWidth
                                startIcon={<GitHubIcon />}
                            >
                                Continue with GitHub
                            </Button>
                            <Button
                                variant="outlined"
                                fullWidth
                                startIcon={<MicrosoftIcon />}
                            >
                                Continue with Microsoft
                            </Button>
                        </Stack>
                    </Paper>
                </Box>
            </Box>
        </>
    );
}
