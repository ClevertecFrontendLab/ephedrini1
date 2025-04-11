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

export function AccordionMenu(_props: { onClick: () => void }) {
    return (
        <Accordion allowToggle overflowY='scroll'>
            {data.map((item) => (
                <AccordionItem>
                    <h2>
                        <AccordionButton as='a'>
                            <Box as='span' flex='1' textAlign='left' py='3px'>
                                <Flex gap={3}>
                                    <img src={item.image} />
                                    {item.name}
                                </Flex>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
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
