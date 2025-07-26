import { Box, Container, Grid } from '@mantine/core'
import { UserInfo } from './components'
import { Featured } from './components/Featured'
import Header from './components/Header'
import { MusicLibrary } from './components/MusicLibrary'
import { Playlist } from './components/Playlist'
import { PopularReleases } from './components/PopularReleases'

export function Page() {
    return (
        <Container size="xl" px={0} py={20} h="100vh">
            <Grid
                h="100vh"
                styles={{
                    inner: {
                        background: '#FFF',
                        borderRadius: 16,
                    },
                }}
            >
                <Grid.Col p={0} span={{ base: 12, xs: 2 }}>
                    <Box
                        h="100%"
                        bg="#F1F1F1"
                        p="md"
                        style={{
                            borderTopLeftRadius: 16,
                            borderBottomLeftRadius: 16,
                        }}
                    >
                        <UserInfo />
                    </Box>
                </Grid.Col>
                <Grid.Col span={{ base: 12, xs: 10 }}>
                    <Grid h="100%">
                        <Grid.Col span={{ base: 12, sm: 12 }}>
                            <Header />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, sm: 12 }}>
                            <Grid h="100%" gutter="md">
                                <Grid.Col span={{ base: 12, sm: 6 }}>
                                    <Featured />
                                    <PopularReleases />
                                </Grid.Col>
                                <Grid.Col span={{ base: 12, sm: 6 }}>
                                    <Playlist />
                                </Grid.Col>
                            </Grid>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, sm: 12 }}>
                            <MusicLibrary />
                        </Grid.Col>
                    </Grid>
                </Grid.Col>
            </Grid>
        </Container>
    )
}
