import { Flex, Image } from '@chakra-ui/react';
import React from 'react';

export function Logo() {
    return (
        <Flex gap='5px'>
            <Image src='assets/logo/logo.svg' />
            <Image src='assets/logo/yee-daa.svg' />
        </Flex>
    );
}
