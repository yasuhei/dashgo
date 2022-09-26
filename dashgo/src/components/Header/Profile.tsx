import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return(
        <Flex align='center'>
        <Box mr={'4'} textAlign='right'>
           <Text>Yasuhei Nakamura</Text>
           <Text color='gray.500' fontSize={'small'} >yasuhei_nakamura@hotmail.com</Text>
           <Text></Text>

       </Box>
       <Avatar size={'md'}  name='Yasuhei Nakamura' src='https://github.com/yasuhei.png'/>
       
       </Flex>
    )
}