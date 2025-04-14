import { AddIcon } from '@chakra-ui/icons';
import {
    Card,
    CardBody,
    CardFooter,
    Divider,
    Heading,
    Image,
    Stack,
    Tag,
    TagLabel,
    TagLeftIcon,
    Text,
} from '@chakra-ui/react';

import { RecipeCard } from '~/types/cards';

export function YCard(card: RecipeCard) {
    return (
        <Card h='414px'>
            <CardBody p={0} maxW='322px'>
                <Image src={card.image} alt={card.title} w='100%' borderRadius='lg' />
                <Stack px='25px' pt='15px'>
                    <Heading as='h3' size='md' textAlign='left' isTruncated>
                        {card.title}
                    </Heading>
                    <Text textAlign='left' lineHeight={1.3} noOfLines={3}>
                        {card.text}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <Tag colorScheme='lime'>
                    <TagLeftIcon boxSize='12px' as={AddIcon} />
                    <TagLabel>{card.tag}</TagLabel>
                </Tag>
            </CardFooter>
        </Card>
    );
}
