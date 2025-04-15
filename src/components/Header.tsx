import { HamburgerIcon } from '@chakra-ui/icons';
import { Avatar, Flex, Text, WrapItem } from '@chakra-ui/react';

import { BreadCrumb } from './breadcrumbs';
import { Logo } from './logo';

export function Header() {
    return (
        <Flex alignItems='center' w='100%' maxW='1920px' as='header' data-test-id='header'>
            <Logo />
            <Flex justify='space-between' w='100%'>
                <BreadCrumb />
                <Flex gap={1} hideBelow='md'>
                    <WrapItem>
                        <Avatar
                            name='Екатерина Константинопольская'
                            src='assets/image/avatar1.jpg'
                        />
                    </WrapItem>
                    <Flex flexDirection='column' textAlign='left'>
                        <Text>Екатерина Константинопольская</Text>
                        <Text>@bake_and_pie</Text>
                    </Flex>
                </Flex>
                <HamburgerIcon hideFrom='md' />
            </Flex>
        </Flex>
    );
}
