import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router';

import { MostPopularCardList } from './CardList/MostPopularCardsList';

export function MostPopularSection() {
    return (
        <Box as='section' pt='40px'>
            <Flex justify='space-between' mb='25px'>
                <Heading as='h2' size='2xl'>
                    Самое сочное
                </Heading>
                <ChakraLink as={ReactRouterLink} to='/most-popular'>
                    <Button variant='brandPrimary' data-test-id='juiciest-link' hideBelow='md'>
                        Вся подборка
                    </Button>
                </ChakraLink>
            </Flex>
            <MostPopularCardList />
            <ChakraLink as={ReactRouterLink} to='/most-popular'>
                <Button variant='brandPrimary' hideFrom='md' data-test-id='juiciest-link-mobile'>
                    Вся подборка
                </Button>
            </ChakraLink>
        </Box>
    );
}
