import "./App.css";
import Home from "./pages/Home";
import Quote from "./pages/Quote";
import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import Error from "./pages/Error";
import QuoteLayout from "./layouts/QuoteLayout";
import LandingLayout from "./layouts/LandingLayout";
import Fire from "./pages/Fire";
import Insurance from "./pages/Insurance";
import Summary from "./pages/Summary";
import ThankYou from "./pages/ThankYou";

import CustomerDetailsForm from "./pages/CustomerDetailsForm";

import DashLayout from "./layouts/DashLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { Paper } from "@mui/material";
import Accident from "./pages/Accident";
import ProductLayout from "./layouts/ProductLayout";
import PaOnline from "./pages/PaOnline";
import ScrollToTop from "./components/dynamic/ScrollToTop";

function App() {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<LandingLayout />}>
                        <Route path="/" element={<Home />} />
                    </Route>

                    <Route path="/" element={<QuoteLayout />}>
                        <Route path="/quote" element={<Insurance />} />
                        <Route path="/summary" element={<Summary />} />
                        <Route path="/Insurance" element={<Quote />} />
                        <Route path="/fire" element={<Fire />} />

                        <Route
                            path="/customerDetailsForm"
                            element={<CustomerDetailsForm />}
                        />
                        <Route path="/thankyou" element={<ThankYou />} />
                    </Route>
                    <Route path="/" element={<ProductLayout />}>
                        <Route path="accident" element={<Accident />} />
                        <Route path="accident/online" element={<PaOnline />} />
                    </Route>
                    <Route path="/login" element={<Login />} />

                    <Route path="dashboard" element={<DashLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route
                            path="analytics"
                            element={<Paper>Analytics</Paper>}
                        />
                        <Route path="models" element={<Paper>Models</Paper>} />
                        <Route
                            path="documents"
                            element={<Paper>Documents</Paper>}
                        />
                        <Route
                            path="terminal"
                            element={<Paper>Terminal</Paper>}
                        />
                        <Route path="chat" element={<Paper>Chat</Paper>} />
                        <Route path="plans" element={<Paper>Plans</Paper>} />
                    </Route>
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
