import { SimpleGrid } from '@chakra-ui/react';

import { data } from '~/data/cards-data-popular';

import { XCard } from '../XCard';
export function MostPopularCardList() {
    return (
        <SimpleGrid columns={[1, 1, 1, 1, 1, 2]} spacing={[2, 4, 6, 8]}>
            {data.map((item) => (
                <XCard
                    image={item.image}
                    title={item.title}
                    text={item.text}
                    tag={item.tag}
                    icon=''
                />
            ))}
        </SimpleGrid>
    );
}
