import { extendTheme } from '@chakra-ui/react';

import { accordionTheme } from './accordionTheme';

const theme = extendTheme({
    colors: {
        lime: {
            150: '#D7FF94',
            // ...
            900: '#1a202c',
        },
    },

    components: { Accordion: accordionTheme },
});

export default theme;
