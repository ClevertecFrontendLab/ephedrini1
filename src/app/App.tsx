import './App.css';

import { Box, ChakraProvider } from '@chakra-ui/react';

import { GridLayout } from '~/components/gridLayout';
import { useGetPostsQuery } from '~/query/services/posts.ts';
import theme from '~/UI-kit/theme';

function App() {
    const { data: _data, isLoading: _isLoading } = useGetPostsQuery();

    return (
        <>
            <ChakraProvider theme={theme}>
                <Box>
                    <GridLayout />
                </Box>
            </ChakraProvider>
        </>
    );
}

export default App;
