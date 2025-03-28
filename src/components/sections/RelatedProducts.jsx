import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import React from "react";
import ProductCard from "../cards/ProductCard";

export default function RelatedProducts() {
    return (
        <div>
            Related Products
            <ProductCard icon={<DirectionsCarIcon />} />
        </div>
    );
}
