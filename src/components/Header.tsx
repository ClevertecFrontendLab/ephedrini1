import { Box, Breadcrumb, Flex } from '@chakra-ui/react';
import React from 'react';

import { Logo } from './logo';
export function Header() {
    return (
        <Box as='header' backgroundColor='#ffffd3' w='1920px' h='80px' p='25px 20px'>
            <Flex alignItems='center' justify='flex-start'>
                <Logo />
                <Breadcrumb />
            </Flex>
        </Box>
    );
}
