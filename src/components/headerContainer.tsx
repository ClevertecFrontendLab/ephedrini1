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
import { useLocation } from 'react-router';

import { LeftIcon } from './customIcons/leftIcon';

export function HeaderConatainer() {
    const location = useLocation();
    return (
        <Box className='header-container' as='header' data-test-id='header'>
            <Flex flexDirection='column' justifyContent='space-around' gap='25px'>
                <Heading as='h1' fontSize='50px'>
                    {location.pathname === '/' ? 'Приятного аппетита!' : null}
                    {location.pathname === '/vegan' ? 'Веганская кухня' : null}
                    {location.pathname === '/most-popular' ? 'Сaмое сочное' : null}
                </Heading>
                <Flex gap={3}>
                    <IconButton
                        variant='outline'
                        size='lg'
                        colorScheme='gray'
                        aria-label=''
                        icon={<LeftIcon />}
                    />
                    <InputGroup>
                        <Input
                            size='lg'
                            colorScheme='lime'
                            type='search'
                            placeholder='Название или ингридиент'
                        />
                        <InputRightElement>
                            <Search2Icon color='gray.300' />
                        </InputRightElement>
                    </InputGroup>
                </Flex>
                <Flex hideBelow='md'>
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
        </Box>
    );
}
