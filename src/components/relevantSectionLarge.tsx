import { Grid, GridItem } from '@chakra-ui/react';

export function RelevantSectionLarge() {
    return (
        <Grid h='200px' templateRows='repeat(3, 1fr)' templateColumns='repeat(4, 1fr)' gap={4}>
            <GridItem rowSpan={3} colSpan={1} bg='tomato' />
            <GridItem rowSpan={3} colSpan={1} bg='tomato' />

            <GridItem colSpan={2} rowSpan={1} bg='papayawhip' />
            <GridItem colSpan={2} rowSpan={1} bg='papayawhip' />
            <GridItem colSpan={2} rowSpan={1} bg='papayawhip' />
        </Grid>
    );
}
