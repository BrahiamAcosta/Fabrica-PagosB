"use client";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import PayGwButton from "../components/PayGwButton";
import { payGateways } from "../Enums/Enums";

export default function PaymentGateway() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
    };

    return (
        <div className="text-[black] h-screen flex justify-center items-center bg-[url(https://i.ibb.co/NCzv6vC/image-2.png)] bg-no-repeat bg-cover bg-center">
            <div className="h-[75vh] w-[55vw] bg-[#208EE6] flex justify-center items-center rounded-[2.5%]">
                <Container
                    component="main"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "white",
                        width: "100%",
                        height: "95%",
                    }}
                >
                    <CssBaseline />
                    <PayGwButton gateWay={payGateways.WOMPI} />
                </Container>
            </div>
        </div>
    );
}
