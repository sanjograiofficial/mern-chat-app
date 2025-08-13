import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import { Tabs } from "@chakra-ui/react";
import Login from "@/components/authentication/Login";
import SignUp from "@/components/authentication/SignUp";

function Homepage() {
    return (
        <Container maxW="xl" centerContent>
            <Box
                display={"flex"}
                justifyContent={"center"}
                p={3}
                bg={"white"}
                w={"100%"}
                m={"40px 0 15px 0"}
                borderRadius={"lg"}
                borderWidth={"1px"}
            >
                <Text fontSize={"4xl"} fontFamily={"Work Sans"} color={"black"}>
                    Talk-A-Tive
                </Text>
            </Box>
            <Box
                bg={"white"}
                w={"100%"}
                p={4}
                borderRadius={"lg"}
                borderWidth={"1px"}
            >
                <Tabs.Root
                    variant="enclosed"
                    maxW="md"
                    minWidth={"100%"}
                    fitted
                    defaultValue={"login"}
                >
                    <Tabs.List marginBottom={"1em"} bg={"#ab2a82"}>
                        <Tabs.Trigger value="login" width={"50%"}>
                            Login
                        </Tabs.Trigger>
                        <Tabs.Trigger value="signup" width={"50%"}>
                            Sign Up
                        </Tabs.Trigger>
                    </Tabs.List>

                    <Tabs.Content color={"black"} value="login">
                        <Login />
                    </Tabs.Content>
                    <Tabs.Content color={"black"} value="signup">
                        <SignUp />
                    </Tabs.Content>
                </Tabs.Root>
            </Box>
        </Container>
    );
}

export default Homepage;
