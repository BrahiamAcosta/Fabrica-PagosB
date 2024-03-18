"use client";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
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
            <Container
                component="main"
                maxWidth="xs"
                sx={{
                    backgroundColor: "white",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minWidth: "50vw",
                }}
            >
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <PayGwButton gateWay={payGateways.WOMPI} />
                </Box>
            </Container>
        </div>
    );
}
