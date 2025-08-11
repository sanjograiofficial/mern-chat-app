import { Field, Input, Stack, Switch, VStack } from "@chakra-ui/react";
import React from "react";

function SignUp() {
    return (
        <Stack gap="8" maxW="sm" css={{ "--field-label-width": "96px" }}>
            <Field.Root orientation="horizontal">
                <Field.Label>Name</Field.Label>
                <Input placeholder="Enter your name" flex="1" />
            </Field.Root>

            <Field.Root orientation="horizontal">
                <Field.Label>Email</Field.Label>
                <Input placeholder="me@example.com" flex="1" />
            </Field.Root>
        </Stack>
    );
}

export default SignUp;
