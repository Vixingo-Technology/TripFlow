import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import React from "react";
import ProductCard from "../cards/ProductCard";
import { Grid, Typography } from "@mui/material";

export default function RelatedProducts() {
    return (
        <div style={{ maxWidth: "1820px", margin: "20px auto" }}>
            <Typography variant="h3" color="primary" my={5} mx={2}>
                Related Products
            </Typography>
            <Grid container columns={12}>
                <Grid size={{ xs: 12, lg: 3 }}>
                    <ProductCard
                        icon={
                            <DirectionsCarIcon
                                sx={{ width: "100px", height: "100px" }}
                            />
                        }
                        title={"AutoMobile Insurance"}
                        description={"By TripFlow Insurance"}
                    />
                </Grid>
            </Grid>
        </div>
    );
}
