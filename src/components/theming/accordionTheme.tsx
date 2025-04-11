import { accordionAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
    accordionAnatomy.keys,
);

const baseStyle = definePartsStyle({
    container: {
        border: 'none',
        color: 'black',
    },

    button: {
        h: '48px',
        _hover: {
            border: 'none',
            cursor: 'pointer',
            color: 'black',
        },
        _expanded: {
            bg: 'lime.150',
        },
    },
});

export const accordionTheme = defineMultiStyleConfig({ baseStyle });
