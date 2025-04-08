import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
} from '@chakra-ui/react';

export function AccordionMenu() {
    return (
        <Accordion allowToggle>
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' w={220}>
                            <Flex gap={3}>
                                <img src='assets/icons/nav-icons/salad-icon.svg' />
                                салаты
                            </Flex>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}></AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
}
