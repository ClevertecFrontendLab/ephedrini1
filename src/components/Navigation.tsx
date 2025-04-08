import { Link as ChakraLink } from '@chakra-ui/react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router';

export function Navigation() {
    return (
        <Box as='nav' py='45px' px={5} overscrollBehavior='scroll'>
            <Flex as='ul' flexDir='column' alignItems='flex-start' gap={6}>
                <ChakraLink as={ReactRouterLink} to='/vegan'>
                    <Flex gap={3}>
                        <img src='assets/icons/nav-icons/salad-icon.svg' alt='salad' />
                        <Text>Салаты</Text>
                    </Flex>
                </ChakraLink>

                <ChakraLink as={ReactRouterLink} to='/vegan'>
                    <Flex gap={3}>
                        <img src='assets/icons/nav-icons/healthy-eating.svg' alt='healthy-eating' />
                        <Text>Закуски</Text>
                    </Flex>
                </ChakraLink>

                <ChakraLink as={ReactRouterLink} to='/vegan'>
                    <Flex gap={3}>
                        <img src='assets/icons/nav-icons/soup.svg' alt='soup' />
                        <Text>Первые блюда</Text>
                    </Flex>
                </ChakraLink>

                <ChakraLink as={ReactRouterLink} to='/vegan'>
                    <Flex gap={3}>
                        <img src='assets/icons/nav-icons/frying-pan.png' alt='frying-pan' />
                        <Text>Вторые блюда</Text>
                    </Flex>
                </ChakraLink>

                <ChakraLink as={ReactRouterLink} to='/vegan'>
                    <Flex gap={3}>
                        <img src='assets/icons/nav-icons/bread.svg' alt='bread' />
                        <Text>Десерты, выпечка</Text>
                    </Flex>
                </ChakraLink>

                <ChakraLink as={ReactRouterLink} to='/vegan'>
                    <Flex gap={3}>
                        <img src='assets/icons/nav-icons/machine.svg' alt='grill' />
                        <Text>Блюда на гриле</Text>
                    </Flex>
                </ChakraLink>

                <ChakraLink as={ReactRouterLink} to='/vegan'>
                    <Flex gap={3}>
                        <img src='assets/icons/nav-icons/vegan.svg' alt='vegan' />
                        <Text>Веганская кухня</Text>
                    </Flex>
                </ChakraLink>

                <ChakraLink as={ReactRouterLink} to='/vegan'>
                    <Flex gap={3}>
                        <img src='assets/icons/nav-icons/child-tasty.svg' alt='child-tasty' />
                        <Text>Детские блюда</Text>
                    </Flex>
                </ChakraLink>

                <ChakraLink as={ReactRouterLink} to='/vegan'>
                    <Flex gap={3}>
                        <img src='assets/icons/nav-icons/medicine.svg' alt='medicine' />
                        <Text>Лечебное питание</Text>
                    </Flex>
                </ChakraLink>

                <ChakraLink as={ReactRouterLink} to='/vegan'>
                    <Flex gap={3}>
                        <img
                            src='assets/icons/nav-icons/international-food.svg'
                            alt='international'
                        />
                        <Text>Национальные</Text>
                    </Flex>
                </ChakraLink>

                <ChakraLink as={ReactRouterLink} to='/vegan'>
                    <Flex gap={3}>
                        <img src='assets/icons/nav-icons/souce.svg' alt='souce' />
                        <Text>Соусы</Text>
                    </Flex>
                </ChakraLink>

                <ChakraLink as={ReactRouterLink} to='/vegan'>
                    <Flex gap={3}>
                        <img src='assets/icons/nav-icons/tea.svg' alt='tea' />
                        <Text>Напитки</Text>
                    </Flex>
                </ChakraLink>
            </Flex>
        </Box>
    );
}
