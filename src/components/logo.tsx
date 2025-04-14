import { Flex, Image } from '@chakra-ui/react';

export function Logo() {
    return (
        <Flex gap='5px' width='280px'>
            <Image w='32px' h='32px' src='assets/logo/logo.svg' />
            <Image src='assets/logo/yee-daa.svg' />
        </Flex>
    );
}
