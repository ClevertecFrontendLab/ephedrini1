import { Box, Flex } from '@chakra-ui/react';

import { MostPopularCardList } from '~/components/CardList/MostPopularCardsList';

export function MostPopularPage() {
    return (
        <Box pt='115px'>
            <Flex justify='center' align='center' flexDir='column' gap={2}>
                <MostPopularCardList />
            </Flex>
        </Box>
    );
}
