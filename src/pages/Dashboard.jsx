import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Premium from "../components/charts/Premium";
// import Dataset from "../components/charts/Dataset";
// import TaskChart from "../components/charts/TaskChart";
// import TrendChart from "../components/charts/TrendChart";
// import FilterData from "../components/Data/FilterData";

export default function Dashboard() {
    return (
        <Box>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ m: 1 }}
            >
                <Typography variant="h5" sx={{ my: 1 }}>
                    Overview
                    <Typography variant="body1">
                        Welcome back, Daniel
                    </Typography>
                </Typography>
                <Box>
                    {" "}
                    <Button variant="outlined">Take Tour</Button>
                </Box>
            </Stack>
            <br />
            <Grid
                container
                columns={{ xs: 1, md: 12 }}
                sx={{ textAlign: "center" }}
            >
                <Grid item size={{ xs: 1, md: 4 }}>
                    <Typography variant="h6">Dataset Process</Typography>
                    <Premium />
                </Grid>
                <Grid item size={{ xs: 1, md: 4 }}>
                    {" "}
                    <Typography variant="h6">Task Completed</Typography>
                    {/* <TaskChart /> */}
                </Grid>
                <Grid item size={{ xs: 1, md: 4 }}>
                    <Typography variant="h6">Performance Trend</Typography>
                    {/* <TrendChart /> */}
                </Grid>
                <Grid item size={{ xs: 1, md: 12 }}>
                    {/* <FilterData /> */}
                </Grid>
            </Grid>
        </Box>
    );
}
