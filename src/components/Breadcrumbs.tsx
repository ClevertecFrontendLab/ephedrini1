import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router';

export function BreadCrumb() {
    const location = useLocation();

    return (
        <Breadcrumb spacing='1px' separator={<ChevronRightIcon color='gray.500' />}>
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to='/'>
                    Главная
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to={location}>
                    {location.pathname === '/vegan' ? 'Веганская кухня' : null}
                    {location.pathname === '/most-popular' ? 'Самое сочное' : null}
                </BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    );
}
