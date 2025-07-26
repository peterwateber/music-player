import { Avatar, Group, Text } from '@mantine/core'
import classes from './styles.module.css'

export function UserInfo() {
    return (
        <div>
            <Group wrap="nowrap">
                <Avatar
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
                    size={48}
                    radius="md"
                />
                <div>
                    <Text fz="xs" fw={500} className={classes.name}>
                        Robert Glassbreaker
                    </Text>

                    <Group wrap="wrap" mt={3}>
                        <Text fz="xs" c="dimmed" w="100%">
                            robert@glassbreaker.io
                        </Text>
                    </Group>
                </div>
            </Group>
        </div>
    )
}
