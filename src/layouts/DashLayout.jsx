import * as React from "react";
import { Outlet } from "react-router";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import { AppProvider } from "@toolpad/core/AppProvider";
import DashHeader from "../components/header/DashHeader";
import { Box } from "@mui/material";

export default function DashLayout() {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <DashHeader open={open} setOpen={setOpen} />
            <Box
                sx={{
                    pt: "64px",
                    maxWidth: open ? 1140 : 1440,
                    margin: "0 20px auto auto",
                    pl: { xs: "70px", xl: 0 },
                    transition: "max-width 0.2s",
                }}
            >
                <Outlet />
            </Box>
        </>
    );
}
