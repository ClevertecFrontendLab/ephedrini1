import { Box, Text } from '@chakra-ui/react';

export const LeftFooter: React.FC = () => (
    <Box w='280px'>
        <Box textAlign='left' w='200px' pl='25px'>
            <Text fontSize='12px' opacity='0.24'>
                Версия программы 03.25
            </Text>
            <Text fontSize='12px'>
                Все права защищены, ученический файл, ©Клевер Технолоджи, 2025
            </Text>
        </Box>
    </Box>
);
