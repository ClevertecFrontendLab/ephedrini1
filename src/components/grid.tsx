import { Grid, GridItem } from '@chakra-ui/react';

import { Aside } from './aside';
import { AsideLeft } from './asideLeft';
import { Header } from './Header';
import { AppRoutes } from './route';

export function GridLayout() {
    return (
        <Grid
            w='100%'
            maxW='1920px'
            m='0 auto'
            templateAreas={`"header header header"
                  "nav main aside"
                  "nav footer aside"`}
            gridTemplateRows='80px 1fr 30px'
            gridTemplateColumns={['0px 1fr 0px', null, null, '256px 1fr 256px']}
            gap='1'
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
            <GridItem pl='2' area='nav' pos='fixed' maxH='100vh' hideBelow='lg'>
                <AsideLeft />
            </GridItem>
            <GridItem pl='2' area='main' maxW='1360px' h='100vh'>
                <AppRoutes />
            </GridItem>
            <GridItem
                pl='2'
                area='aside'
                pos='fixed'
                top='80'
                right='0'
                maxH='100vh'
                hideBelow='lg'
            >
                <Aside />
            </GridItem>
            <GridItem pl='2' area='footer' hideFrom='lg'>
                Footer
            </GridItem>
        </Grid>
    );
}
