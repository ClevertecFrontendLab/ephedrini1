import { Box, Link, Text } from '@chakra-ui/react';

import { ExitIcon } from './customIcons/exitIcon';

export const LeftFooter: React.FC = () => (
    <Box as='footer' w='280px' data-test-id='footer'>
        <Box textAlign='left' w='200px' pl='25px'>
            <Text fontSize='12px' opacity='0.24'>
                Версия программы 03.25
            </Text>
            <Text fontSize='12px'>
                Все права защищены, ученический файл, ©Клевер Технолоджи, 2025
            </Text>
            <Link href='https://chakra-ui.com' isExternal>
                <ExitIcon /> выйти
            </Link>
        </Box>
    </Box>
);
