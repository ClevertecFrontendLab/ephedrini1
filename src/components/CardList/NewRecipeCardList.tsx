import { SimpleGrid } from '@chakra-ui/react';

import { YCard } from '../YCard';

export function NewCardList() {
    return (
        <SimpleGrid columns={[2, null, 2, 3, 4]} spacing={[4, null, 6, 8]}>
            <YCard />
        </SimpleGrid>
    );
}
