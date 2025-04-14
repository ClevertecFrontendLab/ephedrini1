import { extendTheme } from '@chakra-ui/react';

import { accordionTheme } from './accordionTheme';
import { buttonTheme } from './button';
import { switchTheme } from './switch';

const theme = extendTheme({
    colors: {
        lime: {
            50: '#D7FF94',
            150: '#D7FF94',
            500: 'C4FF61',
            900: 'C4FF61',
        },
    },

    components: {
        Accordion: accordionTheme,
        Button: buttonTheme,
        Switch: switchTheme,
    },
});

export default theme;
