import { Button, Field, Input, Stack, Group } from "@chakra-ui/react";
import React, { useState } from "react";

function Login() {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleClick = () => setShow(!show);
    const submitHandler = () => {};
    return (
        <Stack
            gap="8"
            minW={"100%"}
            maxW="sm"
            css={{ "--field-label-width": "96px" }}
        >
            <Field.Root orientation={"horizontal"}>
                <Field.Label>Email</Field.Label>
                <Input
                    padding={2}
                    type="email"
                    placeholder="me@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                    flex="1"
                />
            </Field.Root>
            <Field.Root orientation={"horizontal"}>
                <Field.Label>Password</Field.Label>
                <Group attached w="full" maxW="sm">
                    <Input
                        flex="1"
                        type={show ? "text" : "password"}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        bg="bg.subtle"
                        variant="outline"
                        onClick={handleClick}
                    >
                        {show ? "Hide" : "Show"}
                    </Button>
                </Group>
            </Field.Root>

            <Button
                variant={"solid"}
                bgColor={"blue"}
                width={"100%"}
                style={{ marginTop: 15 }}
                onClick={submitHandler}
            >
                Login
            </Button>
        </Stack>
    );
}

export default Login;
