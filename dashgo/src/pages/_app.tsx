import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import {  SidebarContext } from '../context/SidebarContext'


function MyApp({ Component, pageProps }: AppProps) {
  return (

    <ChakraProvider theme={theme}>
      <SidebarContext>

      <Component {...pageProps} />
    </SidebarContext>
    </ChakraProvider>

  )



}

export default MyApp
