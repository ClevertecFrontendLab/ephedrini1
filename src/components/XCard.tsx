import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Flex,
    Heading,
    IconButton,
    Image,
    Stack,
    Text,
} from '@chakra-ui/react';

import { RecipeCard } from '~/types/cards';

import SaveIcon from './customIcons/saveIcon';

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

            <Stack p={2} maxW='50%'>
                <CardBody textAlign='left'>
                    <Heading size='md' isTruncated>
                        {card.title}
                    </Heading>

                    <Text hideBelow='md' py='2' noOfLines={3}>
                        {card.text}
                    </Text>
                </CardBody>

                <CardFooter>
                    <Flex alignItems='flex-end' justify='flex-end' gap={1}>
                        <Button
                            hideBelow='lg'
                            alignSelf='flex-end'
                            leftIcon={<SaveIcon />}
                            colorScheme='black'
                            variant='outline'
                        >
                            Сохранить
                        </Button>
                        <IconButton hideFrom='lg' aria-label=''>
                            <SaveIcon />
                        </IconButton>
                        <Button variant='darkCardButton' colorScheme='black'>
                            Готовить
                        </Button>
                    </Flex>
                </CardFooter>
            </Stack>
        </Card>
    );
}
