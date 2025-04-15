import { Box, Grid, GridItem } from '@chakra-ui/react';

import { AppRoutes } from '~/components/appRoutes';
import { Aside } from '~/components/aside';
import { AsideLeft } from '~/components/asideLeft';
import { Header } from '~/components/Header';
import { HeaderConatainer } from '~/components/headerContainer';

export function GridLayout() {
    return (
        <Grid
            overflowY='hidden'
            w='100%'
            maxW={['480px', '768px', '1024px', '1440px', '1920px']}
            m='0 auto'
            templateAreas={`"header header header"
                  "nav main aside"
                  "nav main aside"
                  "nav footer aside"`}
            gridTemplateRows='80px 300px 1fr 30px'
            gridTemplateColumns={['0px 1fr 0px', null, null, null, '256px 1fr 256px']}
            gap='2'
        >
            <GridItem
                pos='fixed'
                zIndex={2}
                top='0'
                left='0'
                pl='2'
                w='100%'
                backgroundColor='#ffffd3'
                p='25px 20px'
                h='80px'
            >
                <Header />
            </GridItem>
            <GridItem pl='2' area='nav' pos='fixed' zIndex={2} hideBelow='xl'>
                <AsideLeft />
            </GridItem>
            <GridItem
                pl='2'
                h='300px'
                area='main'
                px='24px'
                pos='fixed'
                zIndex={1}
                bg='white'
                w='100%'
            >
                <Box w='540px' pos='fixed' top='80px' left='calc(50% - 270px)' zIndex={2}>
                    <HeaderConatainer />
                </Box>
            </GridItem>
            <GridItem pl='2' area='aside' pos='fixed' zIndex={2} top='80' right='0' hideBelow='xl'>
                <Aside />
            </GridItem>
            <GridItem pl='2' area='main' px='24px' overflowY='auto' pt='140px'>
                <AppRoutes />
            </GridItem>
            <GridItem pl='2' h='0' area='footer' hideFrom='xl'>
                Footer
            </GridItem>
        </Grid>
    );
}
