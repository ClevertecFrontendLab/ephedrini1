import { Box, Flex } from '@chakra-ui/react';

import { MostPopularCardList } from '~/components/CardList/MostPopularCardsList';
import { HeaderConatainer } from '~/components/headerContainer';

export function MostPopularPage() {
    return (
        <Box pt='100px'>
            <Flex justify='center' align='center' flexDir='column'>
                <HeaderConatainer />
            </Flex>
            <MostPopularCardList />
        </Box>
    );
}
