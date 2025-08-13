import { Button, Field, Input, Stack, Group } from "@chakra-ui/react";
import React, { useState } from "react";

function SignUp() {
    const [show, setShow] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [pic, setpPic] = useState();

    const handleClick = () => setShow(!show);
    const postDetails = (pics) => {};
    const submitHandler = () => {};
    return (
        <Stack
            gap="8"
            minW={"100%"}
            maxW="sm"
            css={{ "--field-label-width": "96px" }}
        >
            <Field.Root orientation={"horizontal"}>
                <Field.Label>Name</Field.Label>
                <Input
                    padding={2}
                    placeholder="Enter your name"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    flex="1"
                />
            </Field.Root>

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
            <Field.Root orientation={"horizontal"}>
                <Field.Label>Confirm Password</Field.Label>
                <Group attached w="full" maxW="sm">
                    <Input
                        flex="1"
                        type={show ? "text" : "password"}
                        onChange={(e) => setConfirmPassword(e.target.value)}
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
            <Field.Root orientation={"horizontal"}>
                <Field.Label>Upload your picture</Field.Label>
                <Input
                    type="file"
                    p={1.5}
                    accept="image/*"
                    onChange={postDetails((e) => e.target.files[0])}
                />
            </Field.Root>
            <Button
                bgColor={"blue"}
                width={"100%"}
                style={{ marginTop: 15 }}
                onClick={submitHandler}
            >
                Sign Up
            </Button>
            <Button
                variant={"solid"}
                colorScheme={"red"}
                bgColor={"red"}
                width={"100%"}
                style={{ marginTop: 15 }}
                onClick={() => {
                    setEmail("guest@example.com");
                    setPassword("123456");
                }}
            >
                Guest
            </Button>
        </Stack>
    );
}

export default SignUp;
