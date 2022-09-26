import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function Search() {
    return (
        <Flex
            as='label'
            flex='1'
            py='4'
            px='8'
            ml='6'
            maxWidth={400}
            alignSelf='center'
            color='gray.200'
            position='relative'
            bg='gray.800'
            borderRadius='full'
        >

            <Input
                color='gray.500'
                variant='unstyled'
                px='4'
                mr='4'
                placeholder='Buscar na plataforma'
                _placeholder={{ color: 'gr' }}
            />

            <Icon as={RiSearchLine} fontSize='24' />

        </Flex>
    )
}