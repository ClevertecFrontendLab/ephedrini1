import { Box, Flex } from '@chakra-ui/react';

import { AccordionMenu } from './AccordionMenu';
import { LeftFooter } from './leftFooter';

export const AsideLeft: React.FC = () => (
    <Box as='div' maxW='280px' pt='35px'>
        <Flex height='960px' flexDir='column' justify='space-between'>
            <AccordionMenu
                onClick={function (): void {
                    throw new Error('Function not implemented.');
                }}
            />
            <LeftFooter />
        </Flex>
    </Box>
);
