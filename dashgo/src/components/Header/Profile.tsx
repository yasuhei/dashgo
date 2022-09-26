import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps{
    showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align='center'>

            {showProfileData && (
                <Box mr={'4'} textAlign='right'>
                    <Text>Yasuhei Nakamura</Text>
                    <Text color='gray.500' fontSize={'small'} >yasuhei_nakamura@hotmail.com</Text>

                </Box>
            )}

            <Avatar size={'md'} name='Yasuhei Nakamura' src='https://github.com/yasuhei.png' />

        </Flex>
    )
}