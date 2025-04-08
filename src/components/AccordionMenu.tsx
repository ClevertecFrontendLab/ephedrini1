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

import { data } from '~/navigation-data';

export function AccordionMenu() {
    return (
        <Accordion allowToggle>
            {data.map((item, index) => (
                <AccordionItem key={index} id={item.name}>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' w={200} py='3px'>
                                <Flex gap={3}>
                                    <img src={item.image} />
                                    {item.name}
                                </Flex>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <UnorderedList textAlign='left' styleType="''">
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
