// File Path: C:\SuLynn\dashboard\public_site\src\components\Footer.js
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import Logo from "../dynamic/Logo";
import { NavLink } from "react-router";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SubForm from "../forms/SubForm";

const socials = [
    {
        name: "Facebook",
        icon: <FacebookIcon style={{ width: "50px", height: "50px" }} />,
        link: "https://facebook.com",
    },
    {
        name: "Instagram",
        icon: <InstagramIcon style={{ width: "50px", height: "50px" }} />,
        link: "https://instagram.com",
    },
    {
        name: "LinkedIn",
        icon: <LinkedInIcon style={{ width: "50px", height: "50px" }} />,
        link: "https://linkedin.com",
    },
];
const individualsAndFamilies = [
    { name: "Auto", link: "/individuals-and-families/auto-insurance" },
    { name: "Travel", link: "/individuals-and-families/travel-insurance" },
    {
        name: "Health and Medical",
        link: "/individuals-and-families/health-and-medical",
    },
    {
        name: "Personal Accident",
        link: "/individuals-and-families/personal-accident",
    },
    {
        name: "Home Protection",
        link: "/individuals-and-families/home-protection",
    },
    {
        name: "Savings and Protection",
        link: "/individuals-and-families/savings-and-protection",
    },
];

const business = [
    { name: "Employee Benefits", link: "/business/employee-benefits" },
    { name: "Financial Protection", link: "/business/financial-protection" },
    { name: "Property", link: "/business/property" },
    { name: "Micro-Insurance", link: "/business/micro-insurance" },
    { name: "Construction", link: "/business/construction" },
    { name: "Energy", link: "/business/energy" },
    {
        name: "Logistics and Transport",
        link: "/business/logistics-and-transport",
    },
    { name: "Travel", link: "/business/travel" },
    { name: "Agriculture", link: "/business/agriculture" },
];

const tripFlowLifeAssurance = [
    {
        name: "TripFlow Life Protect",
        link: "/tripflow-life-assurance/tripflow-life-protect",
    },
    {
        name: "TripFlow Life Education",
        link: "/tripflow-life-assurance/tripflow-life-education",
    },
    {
        name: "Group Term Life",
        link: "/tripflow-life-assurance/group-term-life",
    },
    {
        name: "TripFlow Comprehensive Group",
        link: "/tripflow-life-assurance/tripflow-comprehensive-group",
    },
    { name: "Care", link: "/tripflow-life-assurance/care" },
    {
        name: "Group MedPro Rider",
        link: "/tripflow-life-assurance/group-medpro-rider",
    },
];

const newsAndPromotions = [
    {
        name: "Tips and Promotions",
        link: "/news-and-promotions/tips-and-promotions",
    },
    { name: "Latest News", link: "/news-and-promotions/latest-news" },
];

const claims = [
    { name: "Claim Forms", link: "/claims/claim-forms" },
    { name: "Panel Hospital Locator", link: "/claims/panel-hospital-locator" },
    { name: "Frequently Asked Questions", link: "/claims/faq" },
];

const aboutUs = [
    { name: "Our Team", link: "/about-us/our-team" },
    { name: "Annual Reports", link: "/about-us/annual-reports" },
    { name: "Contact Us", link: "/about-us/contact-us" },
    { name: "Careers at TripFlow", link: "/about-us/careers" },
    { name: "Sustainability", link: "/about-us/sustainability" },
];

export default function Footer() {
    return (
        <>
            <Box
                // sx={{
                //     bgcolor: "background.paper",
                //     backgroundImage: "url(/img/footer.png)",
                //     backgroundPosition: "top center",
                //     backgroundRepeat: "no-repeat",
                //     backgroundSize: "cover",
                //     backdropFilter: "grayscale(100%)",
                //     p: 6,
                // }}
                sx={{ bgcolor: "background.paper", p: 2 }}
            >
                <footer
                    style={{
                        marginTop: "20px",
                        maxWidth: "1820px",
                        margin: "0 auto",
                    }}
                >
                    <Grid
                        container
                        spacing={2}
                        direction={{ xs: "row-reverse", md: "row" }}
                        sx={
                            {
                                // textAlign: { xs: "center", md: "left" },
                            }
                        }
                        columns={{ xs: 2, md: 12 }}
                    >
                        <Grid item size={{ xs: 2, md: 3 }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: {
                                        xs: "column",
                                        md: "column",
                                    },
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{ mt: 2, ml: 2, color: "primary.main" }}
                                >
                                    Connect with us{" "}
                                </Typography>{" "}
                                <SubForm />
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: 2,
                                        m: 1,
                                    }}
                                >
                                    {socials.map((social, index) => (
                                        <NavLink
                                            key={index}
                                            to={social.link}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {social.icon}
                                        </NavLink>
                                    ))}
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item size={{ xs: 2, md: 9 }}>
                            <Grid
                                container
                                spacing={2}
                                columns={{ xs: 2, md: 12 }}
                            >
                                {/* Developers */}
                                <Grid
                                    item
                                    size={{ xs: 1, md: 4 }}
                                    sx={{ mt: 1 }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{ color: "primary.main", mb: 1 }}
                                    >
                                        Individuals And Families
                                    </Typography>
                                    <Stack spacing={1}>
                                        {individualsAndFamilies.map(
                                            (individual, index) => (
                                                <NavLink
                                                    key={index}
                                                    to={individual.link}
                                                    style={{
                                                        textDecoration: "none",
                                                    }}
                                                >
                                                    {individual.name}
                                                </NavLink>
                                            )
                                        )}
                                    </Stack>
                                </Grid>
                                <Grid
                                    item
                                    size={{ xs: 1, md: 4 }}
                                    sx={{ mt: 1 }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{ color: "primary.main", mb: 1 }}
                                    >
                                        Business
                                    </Typography>
                                    <Stack spacing={1}>
                                        {business.map((bus, index) => (
                                            <NavLink
                                                key={index}
                                                to={bus.link}
                                                style={{
                                                    textDecoration: "none",
                                                }}
                                            >
                                                {bus.name}
                                            </NavLink>
                                        ))}
                                    </Stack>
                                </Grid>
                                <Grid
                                    item
                                    size={{ xs: 1, md: 4 }}
                                    sx={{ mt: 1 }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{ color: "primary.main", mb: 1 }}
                                    >
                                        TripFlow Life Assurance
                                    </Typography>
                                    <Stack spacing={1}>
                                        {tripFlowLifeAssurance.map(
                                            (life, index) => (
                                                <NavLink
                                                    key={index}
                                                    to={life.link}
                                                    style={{
                                                        textDecoration: "none",
                                                    }}
                                                >
                                                    {life.name}
                                                </NavLink>
                                            )
                                        )}
                                    </Stack>
                                </Grid>

                                {/* company */}
                                <Grid
                                    item
                                    size={{ xs: 1, md: 4 }}
                                    sx={{ mt: 1 }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{ color: "primary.main", mb: 1 }}
                                    >
                                        News And Promotions
                                    </Typography>
                                    <Stack spacing={1}>
                                        {" "}
                                        {newsAndPromotions.map(
                                            (news, index) => (
                                                <NavLink
                                                    key={index}
                                                    to={news.link}
                                                    style={{
                                                        textDecoration: "none",
                                                    }}
                                                >
                                                    {news.name}
                                                </NavLink>
                                            )
                                        )}
                                    </Stack>
                                </Grid>
                                <Grid
                                    item
                                    size={{ xs: 1, md: 4 }}
                                    sx={{ mt: 1 }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{ color: "primary.main", mb: 1 }}
                                    >
                                        Claims
                                    </Typography>
                                    <Stack spacing={1}>
                                        {claims.map((claim, index) => (
                                            <NavLink
                                                key={index}
                                                to={claim.link}
                                                style={{
                                                    textDecoration: "none",
                                                }}
                                            >
                                                {claim.name}
                                            </NavLink>
                                        ))}
                                    </Stack>
                                </Grid>
                                <Grid
                                    item
                                    size={{ xs: 1, md: 4 }}
                                    sx={{ mt: 1 }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{ color: "primary.main", mb: 1 }}
                                    >
                                        About Us
                                    </Typography>
                                    <Stack spacing={1}>
                                        {aboutUs.map((about, index) => (
                                            <NavLink
                                                key={index}
                                                to={about.link}
                                                style={{
                                                    textDecoration: "none",
                                                }}
                                            >
                                                {about.name}
                                            </NavLink>
                                        ))}
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            justifyContent="space-between"
                            alignItems="center"
                            flexDirection={{ sm: "row" }}
                            sx={{ fontSize: "12px" }}
                            size={12}
                        >
                            <Grid sx={{ order: { xs: 2, sm: 1 } }}>
                                <Typography
                                    variant="body2"
                                    sx={
                                        {
                                            // mt: 1,
                                            // color: "primary.main",
                                        }
                                    }
                                >
                                    Copyright &copy; {new Date().getFullYear()}{" "}
                                    TripFlow Insurance
                                </Typography>{" "}
                            </Grid>
                            <Grid
                                container
                                columnSpacing={1}
                                sx={{ order: { xs: 1, sm: 2 }, mt: 2 }}
                            >
                                <Grid>
                                    <NavLink to={"/"}>
                                        {" "}
                                        Terms of Service
                                    </NavLink>
                                </Grid>
                                <Grid>
                                    <NavLink to={"/"}>Privacy Policy</NavLink>{" "}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </footer>
            </Box>
        </>
    );
}
