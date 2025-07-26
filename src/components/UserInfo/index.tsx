import { Avatar, Group, Text } from '@mantine/core'
import classes from './styles.module.css'

export function UserInfo() {
    return (
        <div>
            <Group wrap="nowrap">
                <Avatar
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
                    size={64}
                    radius="md"
                />
                <div>
                    <Text fz="sm" fw={500} className={classes.name}>
                        Robert Glassbreaker
                    </Text>

                    <Group wrap="nowrap" gap={10} mt={3}>
                        <Text fz="xs" c="dimmed">
                            robert@glassbreaker.io
                        </Text>
                    </Group>
                </div>
            </Group>
        </div>
    )
}
