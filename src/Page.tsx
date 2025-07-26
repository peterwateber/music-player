import { Container, Grid } from '@mantine/core'
import { UserInfo } from './components'
import { Featured } from './components/Featured'
import Header from './components/Header'
import { MusicLibrary } from './components/MusicLibrary'
import { Playlist } from './components/Playlist'
import { PopularReleases } from './components/PopularReleases'

export function Page() {
    return (
        <Container size="xl" px={0} py={20}>
            <Grid mt={50}>
                <Grid.Col
                    style={{
                        borderTopLeftRadius: 16,
                        borderBottomLeftRadius: 16,
                    }}
                    bg="#F1F1F1"
                    span={{ base: 12, xs: 2 }}
                >
                    <UserInfo />
                </Grid.Col>
                <Grid.Col
                    style={{
                        borderTopRightRadius: 16,
                        borderBottomRightRadius: 16,
                    }}
                    bg="white"
                    span={{ base: 12, xs: 10 }}
                    p={20}
                >
                    <Header />
                    <Grid>
                        <Grid.Col span={{ xs: 8 }}>
                            <Featured />
                            <PopularReleases />
                            <MusicLibrary />
                        </Grid.Col>
                        <Grid.Col span={{ xs: 4 }}>
                            <Playlist />
                        </Grid.Col>
                    </Grid>
                </Grid.Col>
            </Grid>
        </Container>
    )
}
