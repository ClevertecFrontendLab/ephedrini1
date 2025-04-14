import { Box, Flex, Tab, TabList, Tabs } from '@chakra-ui/react';

import { VeganPageCardList } from '~/components/CardList/VeganCardList';
import { HeaderConatainer } from '~/components/headerContainer';

export function Vegan() {
    return (
        <Box className='vegan' m='0 auto' pt='100px'>
            <Flex justify='center' flexDirection='column' align='center' gap='20px'>
                <HeaderConatainer />
            </Flex>
            <Tabs variant='customTabs'>
                <TabList fontSize='sm'>
                    <Tab>Закуски</Tab>
                    <Tab>Первые блюда</Tab>
                    <Tab>Вторые блюда</Tab>
                    <Tab>Гарниры</Tab>
                    <Tab>Десерты</Tab>
                    <Tab>Выпечка</Tab>
                    <Tab>Сыроедческие блюда</Tab>
                    <Tab>Напитки</Tab>
                </TabList>
            </Tabs>
            <VeganPageCardList />
        </Box>
    );
}
