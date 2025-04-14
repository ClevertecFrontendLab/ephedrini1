import { Box, Flex, Heading } from '@chakra-ui/react';

import { HeaderConatainer } from '~/components/headerContainer';

export function MostPopularPage() {
    return (
        <Box pt='115px'>
            <Flex justify='center' align='center' flexDir='column'>
                <Heading data-test-id='header' as='header'>
                    Самое сочное
                </Heading>
                <HeaderConatainer />
            </Flex>
        </Box>
    );
}
