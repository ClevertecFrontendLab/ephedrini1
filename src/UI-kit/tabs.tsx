import { tabsAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
    tabsAnatomy.keys,
);

const baseStyle = definePartsStyle({
    tab: {
        fontWeight: 'semibold',
        color: 'lime.900',
        border: 'none',
        _selected: {
            border: 'none',
        },
    },
    tabpanel: {
        fontFamily: 'mono',
    },
});

export const tabsTheme = defineMultiStyleConfig({ baseStyle });
