import { Grid, GridItem } from '@chakra-ui/react';

import { AppRoutes } from './appRoutes';
import { Aside } from './aside';
import { AsideLeft } from './asideLeft';
import { Header } from './Header';

export function GridLayout() {
    return (
        <Grid
            w='100%'
            maxW={['480px', '768px', '1024px', '1440px', '1920px']}
            m='0 auto'
            templateAreas={`"header header header"
                  "nav main aside"
                  "nav footer aside"`}
            gridTemplateRows='80px 1fr 30px'
            gridTemplateColumns={['0px 1fr 0px', null, null, null, '256px 1fr 256px']}
            gap='2'
        >
            <GridItem
                pos='fixed'
                top='0'
                left='0'
                pl='2'
                zIndex={4}
                w='100%'
                backgroundColor='#ffffd3'
                p='25px 20px'
            >
                <Header />
            </GridItem>
            <GridItem pl='2' area='nav' pos='fixed' maxH='100vh' hideBelow='xl'>
                <AsideLeft />
            </GridItem>
            <GridItem pl='2' area='main' h='100vh' px='24px'>
                <AppRoutes />
            </GridItem>
            <GridItem
                pl='2'
                area='aside'
                pos='fixed'
                top='80'
                right='0'
                maxH='100vh'
                hideBelow='xl'
            >
                <Aside />
            </GridItem>
            <GridItem pl='2' area='footer' hideFrom='xl'>
                Footer
            </GridItem>
        </Grid>
    );
}
