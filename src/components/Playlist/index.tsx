import { Avatar, Group, ScrollArea, Text, Title } from '@mantine/core'
import classes from './style.module.css'

const playlistData = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    name: `Perfect`,
    artist: 'Ed Sheeran',
    avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
}))

export function Playlist() {
    return (
        <ScrollArea h={500} p={16} bg="#F1F1F1" bdrs={16}>
            <Title mb={16} order={3}>
                Your Playlist
            </Title>
            {playlistData.map((item) => (
                <Group wrap="nowrap" key={item.id} mb="md">
                    <Avatar src={item.avatar} size={52} radius="md" />
                    <div>
                        <Text fz="lg" fw={500} className={classes.name}>
                            {item.name}
                        </Text>

                        <Group wrap="nowrap" gap={10} mt={3}>
                            <Text fz="xs" c="dimmed">
                                {item.artist}
                            </Text>
                        </Group>
                    </div>
                </Group>
            ))}
        </ScrollArea>
    )
}
