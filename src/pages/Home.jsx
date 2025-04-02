import React from "react";
import Hero from "../components/sections/Hero";
import Explore from "../components/sections/Explore";
import Benefits from "../components/sections/Benefits";
import Term from "../components/sections/Term";
import BenefitsTable from "../components/sections/BenefitsTable";
import Help from "../components/sections/Help";
import RelatedProducts from "../components/sections/RelatedProducts";
import GetQuote from "../components/sections/GetQuote";

export default function Home() {
    return (
        <>
            <Hero />
            <Explore />
            <Benefits />
            <Term />
            <GetQuote />
            <BenefitsTable />
            <Help />
            <RelatedProducts />
        </>
    );
}
