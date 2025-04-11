import './App.css';

import { Box, ChakraProvider, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import { Aside } from '~/components/aside';
import { AsideLeft } from '~/components/asideLeft';
import { Header } from '~/components/Header';
import { AppRoutes } from '~/components/route';
import theme from '~/components/theming/theme';
import { useGetPostsQuery } from '~/query/services/posts.ts';

function App() {
    const { data: _data, isLoading: _isLoading } = useGetPostsQuery();
    const navigate = useNavigate();
    return (
        <>
            <ChakraProvider theme={theme}>
                <Box>
                    <Header onClick={() => navigate('/')} />
                    <Flex>
                        <AsideLeft />

                        <AppRoutes />
                        <Aside />
                    </Flex>
                </Box>
            </ChakraProvider>
        </>
    );
}

export default App;
