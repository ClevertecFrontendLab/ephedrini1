import './App.css';

import { ChakraProvider } from '@chakra-ui/react';

import { GridLayout } from '~/components/grid';
import { useGetPostsQuery } from '~/query/services/posts.ts';
import theme from '~/UI-kit/theme';

function App() {
    const { data: _data, isLoading: _isLoading } = useGetPostsQuery();

    return (
        <>
            <ChakraProvider theme={theme}>
                <GridLayout />
            </ChakraProvider>
        </>
    );
}

export default App;
