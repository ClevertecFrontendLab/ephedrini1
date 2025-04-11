import { Search2Icon } from '@chakra-ui/icons';
import {
    Box,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Select,
    Switch,
} from '@chakra-ui/react';

import { NewCardList } from '~/components/CardList/NewRecipeCardList';

export function MainPage() {
    return (
        <Box w={1360} m='0 auto' py={5}>
            <Flex justify='center' flexDirection='column' w={520} margin='0 auto'>
                <Flex flexDirection='column' justifyContent='space-around' gap='25px'>
                    <Heading as='h1' fontSize='50px'>
                        Приятного аппетита!
                    </Heading>
                    <Flex gap={3}>
                        <IconButton size='lg' aria-label='' />
                        <InputGroup>
                            <Input size='lg' type='search' placeholder='Название или ингридиент' />
                            <InputRightElement>
                                <Search2Icon color='gray.300' />
                            </InputRightElement>
                        </InputGroup>
                    </Flex>
                    <Flex>
                        <FormControl display='flex' alignItems='center'>
                            <FormLabel htmlFor='alerts' mb='0'>
                                Исключить мои аллергены
                            </FormLabel>
                            <Switch id='alerts' />
                        </FormControl>
                        <Select placeholder='Select option'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </Flex>
                </Flex>
            </Flex>
            <Box mt='45px'>
                <Heading as='h2' textAlign='left' fontSize='5xl' fontWeight='medium' mb='20px'>
                    Новые рецепты
                </Heading>
                <NewCardList />
            </Box>
        </Box>
    );
}
