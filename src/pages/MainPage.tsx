import { Box, Flex } from '@chakra-ui/react';

import { MostPopularSection } from '~/components/mostPopularSection';
import { RelevantSectionLarge } from '~/components/relevantSectionLarge';
import { BlogsSection } from '~/components/sections/blogs-section';
import { SliderSection } from '~/components/sliderSection';

export function MainPage() {
    return (
        <Box className='mainpage' m='0 auto' pt='100px' px={4}>
            <Flex flexDirection='column' gap={10}>
                <SliderSection />
                <MostPopularSection />
                <BlogsSection />
                <RelevantSectionLarge />
            </Flex>
        </Box>
    );
}
