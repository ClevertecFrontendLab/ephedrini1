import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
} from '@chakra-ui/react';

import { RecipeCard } from '~/types/cards';

export function XCard(card: RecipeCard) {
    return (
        <Card
            h='244px'
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
        >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '50%' }}
                src={card.image}
                alt={card.title}
            />

            <Stack p={2}>
                <CardBody textAlign='left'>
                    <Heading size='md'>{card.title}</Heading>

                    <Text py='2'>{card.text}</Text>
                </CardBody>

                <CardFooter>
                    <Flex alignItems='flex-end'>
                        <Button variant='solid' colorScheme='blue'>
                            Buy Latte
                        </Button>
                        <Button variant='solid' colorScheme='blue'>
                            Buy Latte
                        </Button>
                    </Flex>
                </CardFooter>
            </Stack>
        </Card>
    );
}
