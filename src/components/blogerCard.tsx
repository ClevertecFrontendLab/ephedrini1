import { Avatar, Box, Card, CardBody, CardHeader, Flex, Heading, Text } from '@chakra-ui/react';

import { Bloger } from '~/types/bloger';

export function BlogerCard(bloger: Bloger) {
    return (
        <Card maxW='md' textAlign='left'>
            <CardHeader>
                <Flex>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='nowrap'>
                        <Avatar name={bloger.title} src={bloger.image} />

                        <Box>
                            <Heading size='sm'>{bloger.title}</Heading>
                            <Text>{bloger.subtitle}</Text>
                        </Box>
                    </Flex>
                </Flex>
            </CardHeader>
            <CardBody>
                <Text>{bloger.text}</Text>
            </CardBody>
        </Card>
    );
}
