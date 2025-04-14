import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Link, SimpleGrid } from '@chakra-ui/react';

import { data } from '~/data/bloger-data';

import { BlogerCard } from '../CardList/blogerCard';

export function BlogsSection() {
    return (
        <Box w='100%' bg='lime.500' borderRadius='2xl' p={4}>
            <Flex flexDirection='column' gap={4}>
                <Flex justify='space-between' align='center'>
                    <Heading as='h3'>Кулинарные блоги</Heading>
                    <Link href='https://chakra-ui.com' isExternal>
                        Все авторы <ArrowForwardIcon mx='2px' />
                    </Link>
                </Flex>
                <SimpleGrid spacing={4} columns={[1, 3, 1, 3]}>
                    {data.map((item) => (
                        <BlogerCard
                            title={item.title}
                            subtitle={item.subtitle}
                            text={item.text}
                            image={item.image}
                        />
                    ))}
                </SimpleGrid>
            </Flex>
        </Box>
    );
}
