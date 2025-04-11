import {
    Card,
    CardBody,
    CardFooter,
    Divider,
    Heading,
    Image,
    Stack,
    Tag,
    Text,
} from '@chakra-ui/react';

import { data } from '~/cards-data-new';

export function YCard() {
    return (
        <>
            {data.map((item) => (
                <Card w='322px' h='414px'>
                    <>
                        <CardBody p={0}>
                            <Image src={item.image} alt={item.title} borderRadius='lg' />
                            <Stack px='25px' pt='15px'>
                                <Heading as='h3' size='md' textAlign='left' isTruncated>
                                    {item.title}
                                </Heading>
                                <Text textAlign='left' lineHeight={1.3} noOfLines={3}>
                                    {item.text}
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <Tag>{item.tag}</Tag>
                        </CardFooter>
                    </>
                </Card>
            ))}
        </>
    );
}
