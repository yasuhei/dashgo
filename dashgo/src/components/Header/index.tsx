import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { Logo } from '../Header/Logo'
import { NotificationNav } from '../Header/NotificationNav'
import { Profile } from '../Header/Profile'
import { Search } from '../Header/Search'

export function Header() {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return(
        <Flex 
        as='header'
        w='100%'
        maxWidth={1480}
        h='20'
        mx='auto'
        mt='4'
        px='6'
        align='center'
        
        >
            <Logo />

            {isWideVersion && <Search /> }

            <Flex align='center' ml='auto'>
                   <NotificationNav /> 
                <Profile showProfileData={isWideVersion}/>
            </Flex>
        </Flex>
    )
}