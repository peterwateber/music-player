import { BackgroundImage, Box, Flex, Text } from '@mantine/core'

export function Featured() {
    return (
        <Box mt="0" mx="auto">
            <BackgroundImage
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png"
                radius="lg"
                h={350}
            >
                <Flex
                    align="center"
                    maw={200}
                    ml={50}
                    style={{ height: '100%' }}
                >
                    <Text c="white">
                        86,000,000 listenings in the last 30 days
                    </Text>
                </Flex>
            </BackgroundImage>
        </Box>
    )
}
