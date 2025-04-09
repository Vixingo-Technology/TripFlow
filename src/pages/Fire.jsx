import {
    Grid,
    Typography,
    Box,
    Card,
    CardContent,
    TextField,
    Button,
    ToggleButton,
    ToggleButtonGroup,
    Divider,
    MenuItem,
    IconButton,
} from "@mui/material";
import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import fire from "../assets/fire.png";
import f1 from "../assets/f1.jpg";
import f2 from "../assets/f2.jpg";
import f3 from "../assets/f3.png";
const Fire = () => {
    const [construction, setConstruction] = useState("");
    const [protection, setProtection] = useState("");
    const [buildingWorth, setBuildingWorth] = useState(12);
    const [discount, setDiscount] = useState("");

    const handleConstructionChange = (_, value) => {
        if (value !== null) setConstruction(value);
    };

    const handleProtectionChange = (_, value) => {
        if (value !== null) setProtection(value);
    };

    return (
        <Box sx={{ p: 2 }}>
            <Grid container spacing={4}>
                {/* Left Side */}
                <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography variant="h4">Fire Insurance</Typography>
                    <Typography variant="body1" gutterBottom>
                        protect your house with TripFlow
                    </Typography>

                    <Box sx={{ maxWidth: "600px" }}>
                        <img src={fire} alt="" width={"100%"} />
                    </Box>

                    <Box sx={{ mt: 3 }}>
                        <Box display="flex" alignItems="center" mb={2}>
                            <CheckCircleIcon color="warning" sx={{ mr: 1 }} />
                            <Typography>
                                Fire, Lightning, and explosion caused by gas
                                used for domestic purposes
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <CheckCircleIcon color="warning" sx={{ mr: 1 }} />
                            <Typography>
                                Bursting or overflowing of domestic water tanks
                                apparatus or pipes
                            </Typography>
                        </Box>
                    </Box>

                    <Typography variant="body2" sx={{ mt: 3 }}>
                        You can learn more about this product by reading{" "}
                        <a href="#policy" style={{ color: "#0077cc" }}>
                            Policy Wording and Clauses
                        </a>
                    </Typography>
                </Grid>

                {/* Right Side */}
                <Grid size={{ xs: 12, sm: 6 }}>
                    <Box>
                        <CardContent>
                            <Typography variant="h4" gutterBottom>
                                Quick Quotation
                            </Typography>

                            {/* Construction Class */}
                            <Typography variant="body1" mb={2}>
                                Construction Class
                            </Typography>
                            <ToggleButtonGroup
                                value={construction}
                                exclusive
                                onChange={handleConstructionChange}
                                fullWidth
                                sx={{ mb: 2, border: "none" }}
                            >
                                <ToggleButton
                                    value="full"
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        position: "relative",
                                        backgroundImage: f2,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <Typography
                                            variant="body1"
                                            sx={{ mb: 1 }}
                                        >
                                            Full Brick
                                        </Typography>

                                        <CheckCircleIcon
                                            sx={{
                                                position: "absolute",
                                                right: 10,
                                                top: 10,
                                                display:
                                                    construction === "full"
                                                        ? "block"
                                                        : "none",
                                            }}
                                        />
                                    </Box>
                                    <img
                                        src={f1}
                                        alt=""
                                        width={"100%"}
                                        height={"150px"}
                                    />
                                </ToggleButton>
                                <ToggleButton
                                    value="partial"
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        position: "relative",
                                    }}
                                >
                                    <img
                                        src={f2}
                                        alt=""
                                        width={"100%"}
                                        height={"150px"}
                                    />
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <Typography
                                            variant="body1"
                                            sx={{ mb: 1 }}
                                        >
                                            Partial Brick
                                        </Typography>

                                        <CheckCircleIcon
                                            sx={{
                                                position: "absolute",
                                                right: 10,
                                                top: 10,
                                                display:
                                                    construction === "partial"
                                                        ? "block"
                                                        : "none",
                                            }}
                                        />
                                    </Box>
                                </ToggleButton>
                                <ToggleButton
                                    value="half"
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        position: "relative",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <Typography
                                            variant="body1"
                                            sx={{ mb: 1 }}
                                        >
                                            Half Brick
                                        </Typography>

                                        <CheckCircleIcon
                                            sx={{
                                                position: "absolute",
                                                right: 10,
                                                top: 10,
                                                display:
                                                    construction === "half"
                                                        ? "block"
                                                        : "none",
                                            }}
                                        />
                                    </Box>
                                    <img
                                        src={f3}
                                        alt=""
                                        width={"100%"}
                                        height={"150px"}
                                    />
                                </ToggleButton>
                            </ToggleButtonGroup>

                            {/* Protection */}
                            <Typography variant="subtitle1" gutterBottom>
                                I would like to protect my
                            </Typography>
                            <ToggleButtonGroup
                                value={protection}
                                exclusive
                                onChange={handleProtectionChange}
                                fullWidth
                                sx={{ mb: 2 }}
                            >
                                <ToggleButton value="building">
                                    Building
                                </ToggleButton>
                                <ToggleButton value="contents">
                                    Contents
                                </ToggleButton>
                                <ToggleButton value="both">
                                    Building and Contents
                                </ToggleButton>
                            </ToggleButtonGroup>

                            {/* Coverage */}
                            <Typography variant="subtitle2" gutterBottom>
                                Coverage Amount
                            </Typography>
                            <Typography
                                variant="caption"
                                gutterBottom
                                display="block"
                            >
                                Note: Figure will be rounded based on the last 3
                                digits
                            </Typography>

                            <TextField
                                fullWidth
                                type="number"
                                label="How much is your Building worth?"
                                value={buildingWorth}
                                onChange={(e) =>
                                    setBuildingWorth(e.target.value)
                                }
                                sx={{ mt: 1, mb: 2 }}
                            />

                            <Box
                                sx={{
                                    backgroundColor: "#e0f7fa",
                                    p: 2,
                                    borderRadius: 1,
                                }}
                            >
                                <Typography>
                                    Total sum covered amount
                                </Typography>
                                <Typography variant="h6">
                                    ${parseFloat(buildingWorth).toFixed(2)}
                                </Typography>
                            </Box>

                            {/* Extras */}
                            <Divider sx={{ my: 2 }} />
                            <Typography variant="subtitle2">
                                Extras (%)
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Supercharge your purchase with additional
                                discount and coverages
                            </Typography>

                            <TextField
                                fullWidth
                                select
                                label="Firefighting Discount"
                                value={discount}
                                onChange={(e) => setDiscount(e.target.value)}
                                sx={{ mt: 1 }}
                            >
                                <MenuItem value="">None</MenuItem>
                                <MenuItem value="5">5%</MenuItem>
                                <MenuItem value="10">10%</MenuItem>
                            </TextField>

                            {/* Get Quote Button */}
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                    mt: 3,
                                    backgroundColor: "#ffc107",
                                    color: "black",
                                }}
                            >
                                GET QUOTE
                            </Button>
                        </CardContent>
                    </Box>

                    <Typography
                        variant="caption"
                        display="block"
                        textAlign="center"
                        mt={2}
                    >
                        Underwritten by Etiqa General Insurance (Cambodia) Plc.
                        v2.1.2
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Fire;
