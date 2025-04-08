import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link } from 'react-router';

export function BreadCrumb() {
    return (
        <Breadcrumb spacing='1px' separator={<ChevronRightIcon color='gray.500' />}>
            {/* <BreadcrumbItem>
                <BreadcrumbLink as={Link} to='/*'>
                    Home
                </BreadcrumbLink>
            </BreadcrumbItem> */}
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to='/*'>
                    Link1
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink>Главная</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    );
}
