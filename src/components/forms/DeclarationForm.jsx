import { Card, Checkbox, FormControlLabel, Typography } from "@mui/material";
import React from "react";
import { isAccepted } from "../../utils/slice/Quote";
import { useDispatch, useSelector } from "react-redux";

export default function DeclarationForm() {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.quote);

    return (
        <Card variant="outlined" sx={{ p: 2 }}>
            <Typography variant="body1">
                The Applicant/Policyholder understands and accepts that:
            </Typography>

            <ol
                style={{
                    fontFamily: "Bai Jamjuree",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                }}
            >
                <li>
                    <Typography variant="body1">
                        {" "}
                        The Insured Member is a resident of the Kingdom of
                        Cambodia.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1">
                        The Insured Member does not purchase after your travel.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1">
                        This purchase is non-refundable.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1">
                        Only applicable for kid under 18 years old travelling
                        alone, the parent or guardian is the Policyholder and
                        the kid is the Insured Member.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1">
                        The information provided is true and complete.
                        Otherwise, Forte Insurance has the right to either
                        decline your claims or cancel the policy. s{" "}
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1">
                        If I am not the Insured Member, I, as Applicant, have
                        explained all the insurance benefits, terms, conditions
                        and exclusions to Insured Member clearly with consent. I
                        also declare that the information provided is true and
                        complete with Insured Member’s consent and
                        authorization. Otherwise, Forte Insurance has the right
                        to either decline Insured Member’s claims or cancel the
                        policy.
                    </Typography>
                </li>
            </ol>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={userData.acceptTerms}
                        onChange={(event) =>
                            dispatch(isAccepted(event.target.checked))
                        }
                        inputProps={{ "aria-label": "controlled" }}
                    />
                }
                label="Yes, I understand and accept the above terms"
            />
        </Card>
    );
}
