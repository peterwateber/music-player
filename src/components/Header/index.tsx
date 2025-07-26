import { Flex, TextInput, Title } from '@mantine/core'

export default function Header() {
    return (
        <Flex align="center" justify="space-between">
            <Title order={2}>Welcome</Title>
            <TextInput placeholder="Search..." radius="md" size="md" w={450} />
        </Flex>
    )
}
