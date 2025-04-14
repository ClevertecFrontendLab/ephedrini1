import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const outline = defineStyle({
    border: '2px dashed', // change the appearance of the border
    borderRadius: 0, // remove the border radius
    fontWeight: 'semibold', // change the font weight
});

const brandPrimary = defineStyle({
    background: 'lime',
    color: 'black',
    fontFamily: 'serif',
    fontWeight: 'normal',
    border: 'none',
    _hover: {
        border: 'none',
    },
    _active: {},
});

export const buttonTheme = defineStyleConfig({
    variants: { outline, brandPrimary },
});
