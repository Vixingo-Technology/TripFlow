import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import { ThemeProvider } from "../themes/Themes";
import Logo from "../assets/dash.png";
import { Outlet } from "react-router";
import { Settings } from "@mui/icons-material";

const NAVIGATION = [
    {
        segment: "dashboard",
        title: "Dashboard",
        icon: <DashboardIcon />,
    },

    {
        segment: "setting",
        title: "Setting",
        icon: <Settings />,
    },
];

// const demoTheme = createTheme({
//     palette: {
//         primary: {
//             main: "#EF443B",
//         },
//         secondary: { main: "#00263A" },
//     },
//     cssVariables: {
//         colorSchemeSelector: "data-toolpad-color-scheme",
//     },

//     colorSchemes: { light: true, dark: true },
//     breakpoints: {
//         values: {
//             xs: 0,
//             sm: 600,
//             md: 600,
//             lg: 1200,
//             xl: 1536,
//         },
//     },
// });

function DemoPageContent({ pathname }) {
    return (
        <Box
            sx={{
                py: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
            }}
        >
            <Typography>Dashboard content for {pathname}</Typography>
        </Box>
    );
}

DemoPageContent.propTypes = {
    pathname: PropTypes.string.isRequired,
};

function DashboardLayoutBranding(props) {
    const { window } = props;

    const router = useDemoRouter("/dashboard");

    // Remove this const when copying and pasting into your project.
    const demoWindow = window !== undefined ? window() : undefined;

    return (
        // preview-start
        <AppProvider
            navigation={NAVIGATION}
            branding={{
                logo: <img src={Logo} alt=" logo" />,
                title: "TripFlow",
                homeUrl: "/dashboard",
            }}
            router={router}
            // theme={demoTheme}
            // window={demoWindow}
        >
            <ThemeProvider>
                <DashboardLayout>
                    <Outlet />
                </DashboardLayout>
            </ThemeProvider>
        </AppProvider>
        // preview-end
    );
}

DashboardLayoutBranding.propTypes = {
    window: PropTypes.func,
};

export default DashboardLayoutBranding;
