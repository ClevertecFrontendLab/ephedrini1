import { Box, Flex, Heading } from '@chakra-ui/react';

import { data } from '~/data/cards-data-new';

import { YCard } from './YCard';
export function SliderSection() {
    return (
        <Box as='section' mt='45px' overflowX='hidden'>
            <Heading as='h2' textAlign='left' fontSize='5xl' fontWeight='medium' mb='20px'>
                Новые рецепты
            </Heading>
            <Flex wrap='nowrap' gap={['5px', '10px', '10px', 4, 6]}>
                {data.map((item) => (
                    <YCard
                        key={item.title}
                        image={item.image}
                        title={item.title}
                        text={item.text}
                        tag={item.tag}
                        icon=''
                    />
                ))}
            </Flex>
        </Box>
    );
}
