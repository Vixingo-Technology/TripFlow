import { Card, Typography } from "@mui/material";
import React from "react";

export default function ProductCard({ icon, title, description }) {
    return (
        <>
            <Card variant="outlined">
                {icon}
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </Card>
        </>
    );
}
