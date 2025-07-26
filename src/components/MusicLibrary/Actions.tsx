import { ActionIcon, Group, Menu } from '@mantine/core'
import {
    IconDots,
    IconMessages,
    IconNote,
    IconReportAnalytics,
    IconTrash,
} from '@tabler/icons-react'

export function MusicLibraryActions() {
    return (
        <Group gap={0} justify="flex-end">
            <Menu
                transitionProps={{ transition: 'pop' }}
                withArrow
                position="bottom-end"
                withinPortal
            >
                <Menu.Target>
                    <ActionIcon variant="subtle" color="gray">
                        <IconDots size={16} stroke={1.5} />
                    </ActionIcon>
                </Menu.Target>
                <Menu.Dropdown>
                    <Menu.Item
                        leftSection={<IconMessages size={16} stroke={1.5} />}
                    >
                        Send message
                    </Menu.Item>
                    <Menu.Item
                        leftSection={<IconNote size={16} stroke={1.5} />}
                    >
                        Add note
                    </Menu.Item>
                    <Menu.Item
                        leftSection={
                            <IconReportAnalytics size={16} stroke={1.5} />
                        }
                    >
                        Analytics
                    </Menu.Item>
                    <Menu.Item
                        leftSection={<IconTrash size={16} stroke={1.5} />}
                        color="red"
                    >
                        Terminate contract
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </Group>
    )
}
