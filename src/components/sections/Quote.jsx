import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import TavelForm from "../forms/TavelForm";
import { Box } from "@mui/material";
import TripDetails from "../forms/TripDetails";
import OptionalForm from "../forms/OptionalForm";
import ApplicantForm from "../forms/ApplicantForm";
import BeneficiaryForm from "../forms/BeneficiaryForm";
import DeclarationForm from "../forms/DeclarationForm";
import PlanForm from "../forms/PlanForm";

export default function Quote() {
    return (
        <Box sx={{ mt: 2 }}>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography
                        component="span"
                        variant="h4"
                        color="primary.main"
                        textTransform={"uppercase"}
                    >
                        Trip Details
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TripDetails />
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography
                        component="span"
                        variant="h4"
                        color="primary.main"
                        textTransform={"uppercase"}
                    >
                        Optional Benifits
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <OptionalForm />
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <Typography
                        component="span"
                        variant="h4"
                        color="primary.main"
                        textTransform={"uppercase"}
                    >
                        Cover plan and Premium
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <PlanForm />
                </AccordionDetails>
                {/* <AccordionActions>
                    <Button>Cancel</Button>
                    <Button>Agree</Button>
                </AccordionActions> */}
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <Typography
                        component="span"
                        variant="h4"
                        color="primary.main"
                        textTransform={"uppercase"}
                    >
                        Aplicant Details
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ApplicantForm />
                </AccordionDetails>
                {/* <AccordionActions>
                 
                </AccordionActions> */}
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <Typography
                        component="span"
                        variant="h4"
                        color="primary.main"
                        textTransform={"uppercase"}
                    >
                        Beneficiary
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <BeneficiaryForm />
                </AccordionDetails>
                {/* <AccordionActions>
                    <Button>Cancel</Button>
                    <Button>Agree</Button>
                </AccordionActions> */}
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <Typography
                        component="span"
                        variant="h4"
                        color="primary.main"
                        textTransform={"uppercase"}
                    >
                        Declaration
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <DeclarationForm />
                </AccordionDetails>
            </Accordion>
            <Box
                sx={{
                    pb: 4,
                    display: "flex",
                    gap: 2,
                }}
            >
                <Button variant="outlined" size="large">
                    Back
                </Button>
                <Button variant="contained" size="large">
                    Generate Quote
                </Button>
            </Box>
        </Box>
    );
}
