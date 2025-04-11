import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import React from "react";
import ProductCard from "../cards/ProductCard";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router";
import PersonalInjuryOutlinedIcon from "@mui/icons-material/PersonalInjuryOutlined";
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
                <Grid size={{ xs: 12, lg: 3 }}>
                    <Link to="/fire" style={{ textDecoration: "none" }}>
                        <ProductCard
                            icon={
                                <LocalFireDepartmentOutlinedIcon
                                    sx={{ width: "100px", height: "100px" }}
                                />
                            }
                            title={"Fire Hazard Insurance"}
                            description={"By TripFlow Insurance"}
                        />
                    </Link>
                </Grid>
                <Grid size={{ xs: 12, lg: 3 }}>
                    <Link to="/accident" style={{ textDecoration: "none" }}>
                        <ProductCard
                            icon={
                                <PersonalInjuryOutlinedIcon
                                    sx={{ width: "100px", height: "100px" }}
                                />
                            }
                            title={"Personal Accident "}
                            description={"By TripFlow Insurance"}
                        />
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
}
