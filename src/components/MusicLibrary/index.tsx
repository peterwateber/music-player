import { Avatar, Box, Group, Table, Text, Title } from '@mantine/core'
import { IconHeadphones } from '@tabler/icons-react'
import { uid } from 'uid'
import { MusicLibraryActions } from './Actions'

const data = Array.from({ length: 20 }, (_, i) => ({
    id: uid(),
    song: `Perfect`,
    rating: Math.floor(Math.random() * 5) + 1,
    artist: 'Ed Sheeran',
    avatar: `https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-${i + 1}.png`,
}))

export function MusicLibrary() {
    const rows = data.map((item) => (
        <Table.Tr key={item.id}>
            <Table.Td>
                <Group gap="sm">
                    <Avatar size={40} src={item.avatar} radius={40} />
                    <div>
                        <Text fz="sm" fw={500}>
                            {item.song}
                        </Text>
                        <Text c="dimmed" fz="xs">
                            {item.artist}
                        </Text>
                    </div>
                </Group>
            </Table.Td>
            <Table.Td>
                <Group gap={4}>
                    <IconHeadphones stroke={2} />
                    <Text fz="sm">{item.rating}</Text>
                </Group>
            </Table.Td>
            <Table.Td>
                <MusicLibraryActions />
            </Table.Td>
        </Table.Tr>
    ))

    return (
        <Box bg="#F1F1F1" bdrs={16} mt={16} p={16}>
            <Title order={3} mb={6}>
                Music Library
            </Title>
            <Table.ScrollContainer minWidth="100%" maxHeight={300}>
                <Table>
                    <Table.Tbody>{rows}</Table.Tbody>
                </Table>
            </Table.ScrollContainer>
        </Box>
    )
}
