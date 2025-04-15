import { switchAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
    switchAnatomy.keys,
);

const baseStyle = definePartsStyle({
    container: {},
    thumb: {
        bg: 'white',
    },
    track: {
        bg: 'gray.100',
        _checked: {
            bg: 'lime.150',
        },
    },
});

export const switchTheme = defineMultiStyleConfig({ baseStyle });
