import { extendTheme } from '@chakra-ui/react';

import { accordionTheme } from './accordionTheme';
import { buttonTheme } from './button';
import { inputTheme } from './input';
import { switchTheme } from './switch';
import { tabsTheme } from './tabs';

const theme = extendTheme({
    colors: {
        lime: {
            50: '#D7FF94',
            150: '#D7FF94',
            500: '#C4FF61',
            800: '#134B00',
            900: '#134B00',
        },
    },

    components: {
        Accordion: accordionTheme,
        Button: buttonTheme,
        Switch: switchTheme,
        Input: inputTheme,
        Tabs: tabsTheme,
    },
});

export default theme;
