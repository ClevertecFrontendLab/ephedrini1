import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    ListItem,
    UnorderedList,
} from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router';

import { data } from '~/data/navigation-data';

export function AccordionMenu() {
    return (
        <Accordion allowToggle overflowY='scroll'>
            {data.map((item) => (
                <AccordionItem>
                    <h2>
                        <ChakraLink as={ReactRouterLink} to='/vegan'>
                            <AccordionButton as='a' data-test-id={item.id}>
                                <Box as='span' flex='1' textAlign='left' py='3px'>
                                    <Flex gap={3}>
                                        <img src={item.image} />
                                        {item.name}
                                    </Flex>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </ChakraLink>
                    </h2>
                    <AccordionPanel pb={4}>
                        <UnorderedList
                            textAlign='left'
                            styleType="''"
                            spacing={2}
                            fontSize='18px'
                            pl='25px'
                        >
                            {item.value.map((el) => (
                                <ListItem>{el}</ListItem>
                            ))}
                        </UnorderedList>
                    </AccordionPanel>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
