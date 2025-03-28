import { Card, Typography } from "@mui/material";
import React from "react";
import Slide from "@mui/material/Slide";
export default function ProductCard({ icon, title, description }) {
    const [checked, setChecked] = React.useState(false);
    const containerRef = React.useRef(null);
    const handleMouseEnter = () => {
        setChecked(true); // Trigger animation on hover
    };

    const handleMouseLeave = () => {
        setChecked(false); // Reverse animation when hover ends
    };
    return (
        <>
            <Card
                variant="outlined"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "320px",
                    p: 2,
                    mx: 2,
                    transition: "all 0.3s",
                    "&:hover": {
                        backgroundColor: "primary.main",
                        color: "#fff",
                    },
                }}
                onMouseEnter={handleMouseEnter} // Trigger on hover
                onMouseLeave={handleMouseLeave} // Revert on hover leave
            >
                {icon}
                <Typography
                    variant="h5"
                    gutterBottom
                    fontWeight={500}
                    sx={{ height: "100%", mt: "auto" }}
                >
                    {title}
                </Typography>

                <Slide
                    direction="up"
                    in={checked}
                    container={containerRef.current}
                >
                    <Typography variant="h6" color="text.secondary">
                        {description}
                    </Typography>
                </Slide>
            </Card>
        </>
    );
}
