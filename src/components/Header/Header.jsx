import React from "react";
import { NavLink } from "react-router";

import Logo from "../dynamic/Logo";
import logo from "../../assets/logo.png";
import {
    AppBar,
    Box,
    Button,
    CssBaseline,
    Divider,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemButton,
    IconButton,
    Drawer,
    Toolbar,
} from "@mui/material";

import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import MenuIcon from "@mui/icons-material/Menu";
import {
    ArrowBack,
    Call,
    LocalHospital,
    Login,
    PhoneCallback,
    Search,
} from "@mui/icons-material";

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return children
        ? React.cloneElement(children, {
              elevation: trigger ? 4 : 0,
          })
        : null;
}

ElevationScroll.propTypes = {
    children: PropTypes.element,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

const drawerWidth = 240;
const navItems = [
    "Individuals & Families",
    "Business",
    "Buy Online",
    "Claims",
    "News & Promotions",
    "About Us",
];

function Header(props) {
    // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    // const logo = prefersDarkMode ? "/img/logo.png" : "/img/lightlogo.png";

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ py: 1, bgcolor: "primary.main" }}>
                <img src={logo} alt="logo" width={120} />
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <NavLink
                        key={item}
                        to={"/" + item.toLowerCase()}
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <ListItem disablePadding>
                            <ListItemButton sx={{ textAlign: "center" }}>
                                <ListItemText primary={item} />
                            </ListItemButton>
                        </ListItem>
                    </NavLink>
                ))}
                <NavLink to={"/login"}>
                    <Button variant="contained" sx={{ my: 1 }} fullWidth>
                        Login
                    </Button>
                </NavLink>
                {/* <GetStarted /> */}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar
                    component="nav"
                    position="fixed"
                    sx={{
                        backdropFilter: "blur(24px)",
                        backgroundColor: "transparent",
                        backgroundImage: "none",
                        py: 0,
                        width: "100%",

                        // zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: "secondary.main",
                            display: { xs: "none", md: "flex" },
                            alignItems: "center",
                            justifyContent: " space-between",
                            px: 2,
                            gap: 2,
                            pr: 4,
                            // fontSize: "0.9rem",/
                        }}
                    >
                        <Button
                            startIcon={<ArrowBack />}
                            sx={{
                                color: "white",
                                textTransform: "none",
                                flex: 1,
                                justifyContent: "flex-start",
                            }}
                        >
                            Back to Trip Flow Site{" "}
                        </Button>
                        <Button color="text" startIcon={<Call />}>
                            999-999-9999
                        </Button>
                        <Button color="text" startIcon={<PhoneCallback />}>
                            Request Call Back
                        </Button>
                        <Button color="text" startIcon={<Search />}>
                            Search
                        </Button>

                        <Button color="text" startIcon={<LocalHospital />}>
                            Hospital Portal
                        </Button>
                        <Button color="text" startIcon={<Login />}>
                            Login
                        </Button>
                    </Box>
                    <Toolbar
                        sx={{
                            backgroundImage: "none",
                            // maxWidth: "1140px",
                            width: "100%",
                            margin: "0 auto",
                            px: 2,
                            backgroundColor: "primary.main",
                        }}
                    >
                        <Logo />
                        <Box
                            sx={{
                                display: { xs: "none", lg: "block" },
                            }}
                        >
                            {navItems.map((item) => (
                                <NavLink
                                    to={"/" + item.toLowerCase()}
                                    key={item}
                                >
                                    <Button
                                        key={item}
                                        sx={{
                                            textTransform: "Capitalize",
                                            ml: 4,
                                            color: (theme) =>
                                                theme.palette.text.secondary,
                                            fontSize: "1.2rem",
                                            fontWeight: "700",
                                        }}
                                    >
                                        {item}
                                    </Button>
                                </NavLink>
                            ))}
                            {/* <NavLink to={"/login"}>
                                <Button variant="contained" sx={{ ml: 2 }}>
                                    Login
                                </Button>
                            </NavLink> */}
                        </Box>{" "}
                        <IconButton
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{
                                position: "absolute",
                                mr: 1,
                                right: 0,
                                display: { lg: "none" },
                                color: (theme) => theme.palette.text.secondary,
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    anchor="right"
                    sx={{
                        display: { xs: "block", lg: "none" },
                        "& .MuiDrawer-paper": {
                            backdropFilter: "blur(24px)",
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

Header.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

// const Header = () => {
//   return (
//     <header className="header">
//       <Logo />
//       <nav>
//         <ul>
//           <li><Link to="/">b</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/pricing">Pricing</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//           <li><Link to="/login" className="login-btn">Login</Link></li>
//           <Link to="/download">Download</Link> {/* Download Link Visible Always */}
//         </ul>
//       </nav>
//     </header>
//   );
// };

export default Header;
