import React, { useState } from "react";
import {
    ThemeProvider as MuiThemeProvider,
    createTheme,
} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const ThemeProvider = ({ children }) => {
    const getTheme = (mode) =>
        createTheme({
            palette: {
                mode: mode, // 'light' or 'dark'
                ...(mode === "dark"
                    ? {
                          primary: {
                              main: "#ff000090",
                          },
                          secondary: { main: "#000000" },
                          background: {
                              default: "#000000",
                              paper: "#3d000070",
                          },
                          text: { primary: "#ffffff", secondary: "#ededed" },
                      }
                    : {
                          primary: {
                              main: "#EB0045",
                          },
                          secondary: { main: "#00263A" },
                          background: { default: "#ffffff", paper: "#ededed" },
                          text: { primary: "#00263A" },
                      }),
            },
            typography: {
                fontFamily: "Bai Jamjuree, Roboto, Arial, sans-serif",
                h1: {
                    // fontSize: "3.5rem",
                    // lineHeight: "120%",
                    fontWeight: "600",
                    "@media (max-width:1440px)": {
                        fontSize: "2.5rem",
                    },
                },
                h2: {
                    // fontSize: "59px",
                    // lineHeight: "120%",
                    // fontWeight: "700",
                    "@media (max-width:600px)": {
                        fontSize: "2rem",
                    },
                },
                h3: {
                    textShadow: " 0 0 0px #ffffff",
                    fontWeight: 500,
                    "@media (max-width:600px)": {
                        fontSize: "2.2rem",
                    },
                },
                h4: {
                    textShadow: " 0 0 0px #ffffff",

                    fontWeight: 500,
                    "@media (max-width:600px)": {
                        fontSize: "1.8rem",
                    },
                },
                h5: {
                    // fontSize: "59px",
                    // lineHeight: "120%",
                    // fontWeight: "700",

                    "@media (max-width:600px)": {
                        fontSize: "1.2rem",
                    },
                },
                h6: {
                    textShadow: " 0 0 0px #ffffff",
                },
            },
            components: {
                MuiButton: {
                    styleOverrides: {
                        root: {
                            transition: "all 0.3s",
                            borderRadius: "0px",
                            textTransform: "none",
                            "&:hover": {
                                // backgroundColor: "#1976D2",
                            },
                        },
                        contained: {
                            // boxShadow: "none",
                            transition: "all 0.5s",
                            "&:hover": {
                                color: "#EB0045",
                                backgroundColor: "#fff",

                                // boxShadow: "none",
                            },
                        },
                        outlined: {
                            // color: "#F5F5F5",
                            // border: "0.5px solid #F5F5F5",

                            "&:hover": {
                                // border: "2px solid #115293",
                            },
                        },
                        text: {
                            "&:hover": {
                                // textDecoration: "underline",
                                // backgroundColor: "transparent",
                            },
                        },
                    },
                },
            },
        });
    // Detect system preference
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    // Create theme based on system preference
    const theme = React.useMemo(
        () => getTheme(prefersDarkMode ? "dark" : "light"),
        [prefersDarkMode]
    );

    const ThemeContext = React.createContext();
    const [themeMode, setThemeMode] = useState("light");

    const toggleTheme = () => {
        const newThemeMode = themeMode === "light" ? "dark" : "light";
        setThemeMode(newThemeMode);
    };

    // const theme = createTheme({
    //     components: {
    //         MuiButton: {
    //             styleOverrides: {
    //                 outlined: {
    //                     border: "3px solid transparent", // Transparent border to allow gradient
    //                     borderRadius: "23px", // Rounded corners
    //                     backgroundImage:
    //                         "linear-gradient( #fff, #fff), linear-gradient(270deg, #2E27FE 0%, #9A12FF 73.96%, #CD05FF 100%)",
    //                     backgroundSize: "10px 100%",
    //                     backgroundPosition: "0 0, 100% 0",
    //                     backgroundRepeat: "no-repeat",
    //                     // backgroundOrigin: "border-box",
    //                     // backgroundClip: "content-box,border-box",

    //                     color: "#9A12FF", // Text color to match gradient
    //                     padding: "10px 20px",
    //                     // backgroundSize: "3px 100%",

    //                     // borderImage:
    //                     //     " -webkit-gradient(linear, 11 10, 100 90%, from(#fff), to(#2E27FE))",
    //                     // borderImageSlice: 1, // Safari fix
    //                     // borderImageWidth: 1,
    //                     // borderImageOutset: 0,

    //                     // Optional rounded corners
    //                     textTransform: "none", // Disable uppercase text
    //                     "&:hover": {
    //                         backgroundColor: "#f9f9f9", // Optional subtle hover effect
    //                         boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Optional hover shadow
    //                     },
    //                 },
    //             },
    //             variants: [
    //                 {
    //                     props: { variant: "gradient" }, // Custom variant name
    //                     style: {
    //                         background:
    //                             "linear-gradient(270deg, #2E27FE 0%, #9A12FF 73.96%, #CD05FF 100%)", // Gradient background
    //                         color: "#fff",
    //                         borderRadius: "12px", // Rounded corners
    //                         padding: "10px 20px",
    //                         textTransform: "none", // Disable uppercase
    //                         boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Optional: Shadow
    //                         transition: "background 1s ease !important", // Optional: Smooth transition
    //                         "&:hover": {
    //                             transition: "background 1s ease !important", // Optional: Smooth transition
    //                             background:
    //                                 "linear-gradient(90deg, #2575fc 0%, #6a11cb 100%)", // Hover effect
    //                         },
    //                     },
    //                 },
    //             ],
    //         },
    //     },
    //     breakpoints: {
    //         values: {
    //             xs: 0,
    //             sm: 600,
    //             md: 1024,
    //             lg: 1440,
    //             xl: 1660,
    //         },
    //     },
    //     palette: {
    //         mode: themeMode,
    //         primary: { main: "##9A12FF" },
    //         secondary: { main: "#373737" },
    //     },

    //     typography: {
    //         fontFamily: "",
    //         h1: {
    //             fontSize: "59px",
    //             lineHeight: "120%",
    //             fontWeight: "700",
    //             "@media (max-width:1440px)": {
    //                 fontSize: "42px",
    //             },
    //         },
    //         h2: {
    //             fontSize: "32px",
    //             fontWeight: "700",
    //             "@media (max-width:600px)": {
    //                 fontSize: "28px",
    //             },
    //         },
    //         h3: {
    //             fontSize: "24px",
    //             fontWeight: "700",
    //             "@media (max-width:1440px)": {
    //                 fontSize: "18px",
    //             },
    //             "@media (max-width:600px)": {
    //                 fontSize: "14px",
    //             },
    //         },
    //         h4: {
    //             fontSize: "25px",
    //             fontWeight: "400",
    //             "@media (max-width:1440px)": {
    //                 fontSize: "20px",
    //             },
    //         },
    //         h5: {
    //             fontSize: "20px",
    //             fontWeight: "600",
    //         },
    //         h6: {
    //             fontSize: "18px",
    //             fontWeight: "400",
    //             "@media (max-width:1440px)": {
    //                 fontSize: "15px",
    //             },
    //         },
    //         subtitle1: {
    //             fontSize: "14px",
    //             color: "rgba(255,255,255,0.6)",
    //         },
    //         subtitle2: {
    //             fontSize: "12px",
    //         },
    //     },
    // });

    return (
        <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
            <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
        </ThemeContext.Provider>
    );
};
