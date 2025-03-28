import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
export default function IconCard({ icon, title, des }) {
    const card = (
        <React.Fragment>
            <CardContent sx={{ height: { lg: "475px", xs: "550px" } }}>
                {icon}
                <Typography variant="h4" color="primary" fontWeight={500}>
                    {title}
                </Typography>
                <Typography
                    sx={{ color: "text.secondary", mb: 1 }}
                ></Typography>
                <Typography variant="h5">{des}</Typography>
            </CardContent>
        </React.Fragment>
    );
    return (
        <Box sx={{ minWidth: 275, width: "100%", mx: "auto", height: "100%" }}>
            <Card
                variant="outlined"
                sx={{
                    padding: 1,
                    borderRadius: "0px",
                    height: "100%",

                    backgroundColor: "transparent",
                }}
            >
                {card}
            </Card>
        </Box>
    );
}
