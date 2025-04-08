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

export function MainPage() {
    return (
        <Box w={1360} m='0 auto'>
            <Flex justify='center'>
                <Box w={520} py={6}>
                    <Flex flexDirection='column' justifyContent='space-around' gap={5}>
                        <Heading as='h1' fontSize='50px'>
                            Приятного аппетита!
                        </Heading>
                        <Flex gap={3}>
                            <IconButton size='lg' aria-label='' />
                            <InputGroup>
                                <Input
                                    size='lg'
                                    type='search'
                                    placeholder='Название или ингридиент'
                                />
                                <InputRightElement>
                                    <Search2Icon color='gray.300' />
                                </InputRightElement>
                            </InputGroup>
                        </Flex>
                        <Flex>
                            <FormControl display='flex' alignItems='center'>
                                <FormLabel htmlFor='email-alerts' mb='0'>
                                    Исключить мои аллергены
                                </FormLabel>
                                <Switch id='email-alerts' />
                            </FormControl>
                            <Select placeholder='Select option'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}
