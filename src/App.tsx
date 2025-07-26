// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/carousel/styles.css'
import '@mantine/core/styles.css'

import './index.css'

import { MantineProvider } from '@mantine/core'
import { Page } from './Page'

export default function App() {
    return (
        <MantineProvider>
            <Page />
        </MantineProvider>
    )
}
