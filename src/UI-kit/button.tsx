import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const outline = defineStyle({
    border: '2px solid', // change the appearance of the border
    borderRadius: 'md', // remove the border radius
    fontWeight: 'semibold', // change the font weight
    _hover: {
        border: '2px solid #000000',
    },
});

const brandPrimary = defineStyle({
    background: 'lime.500',
    color: 'black',
    fontFamily: 'serif',
    fontWeight: 'normal',
    border: 'none',
    _hover: {
        border: 'none',
    },
    _active: {},
});

const darkCardButton = defineStyle({
    color: '#ffffff',
    background: 'gray.800',
});

export const buttonTheme = defineStyleConfig({
    variants: { outline, brandPrimary, darkCardButton },
});
