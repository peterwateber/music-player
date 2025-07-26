import { Group, TextInput, Title } from '@mantine/core'

export default function Header() {
    return (
        <Group justify="space-between" style={{ width: '100%' }} mb={16}>
            <Title order={2}>Welcome</Title>
            <TextInput placeholder="Search..." radius="md" size="md" w={250} />
        </Group>
    )
}
