import { Box, Flex } from '@chakra-ui/react';

import { AccordionMenu } from '~/components/accordionMenu';
import { LeftFooter } from '~/components/leftFooter';

export const AsideLeft: React.FC = () => (
    <Box as='div' pt='115px'>
        <Flex flexDir='column' justify='space-between'>
            <AccordionMenu />
            <LeftFooter />
        </Flex>
    </Box>
);
