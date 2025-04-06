import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import { Route, Routes } from 'react-router';

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
                <Header />
                <Navigation />
                <Routes>
                    <Route path='/*' element={<MainPage />} />
                    <Route path='/vegan' element={<Vegan />} />
                    <Route path='/maostpopular' element={<MostPopular />} />
                </Routes>
            </ChakraProvider>
        </>
    );
}

export default App;
