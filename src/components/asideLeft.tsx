import { Box, Flex } from '@chakra-ui/react';

import { AccordionMenu } from './accordionMenu';
import { LeftFooter } from './leftFooter';

export const AsideLeft: React.FC = () => (
    <Box as='div' pt='115px'>
        <Flex flexDir='column' justify='space-between'>
            <AccordionMenu />
            <LeftFooter />
        </Flex>
    </Box>
);
