import { SimpleGrid } from '@chakra-ui/react';

import { XCard } from '~/components/XCard';
import { data } from '~/data/cards-data-vegan-page';
export function VeganPageCardList() {
    return (
        <SimpleGrid columns={[1, 1, 2, 2, 1, 2]} spacing={[2, 4, 6, 8]}>
            {data.map((item) => (
                <XCard
                    key={item.title}
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
