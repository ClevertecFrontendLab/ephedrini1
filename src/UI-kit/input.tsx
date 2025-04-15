import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
    inputAnatomy.keys,
);

const baseStyle = definePartsStyle({
    field: {
        fontFamily: 'mono',
        color: 'lime.900',
        border: '1px solid',
        borderColor: 'gray.200',
    },
});

export const inputTheme = defineMultiStyleConfig({ baseStyle });
