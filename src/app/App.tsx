import './App.css';

import { Box, ChakraProvider, Flex } from '@chakra-ui/react';
import { Route, Routes } from 'react-router';

import { Aside } from '~/components/aside';
import { Header } from '~/components/Header';
import { Navigation } from '~/components/Navigation';
import { MainPage } from '~/pages/MainPage';
import { MostPopular } from '~/pages/MostPopular';
import { Vegan } from '~/pages/Vegan';
import { useGetPostsQuery } from '~/query/services/posts.ts';

function App() {
    const { data: _data, isLoading: _isLoading } = useGetPostsQuery();

    return (
        <>
            <ChakraProvider>
                <Box>
                    <Header />
                    <Flex>
                        <Navigation />
                        <Routes>
                            <Route path='/*' element={<MainPage />} />
                            <Route path='/vegan' element={<Vegan />} />
                            <Route path='/mostpopular' element={<MostPopular />} />
                        </Routes>
                        <Aside />
                    </Flex>
                </Box>
            </ChakraProvider>
        </>
    );
}

export default App;
