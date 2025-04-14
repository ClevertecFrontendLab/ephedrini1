import { Box, Flex } from '@chakra-ui/react';

import { HeaderConatainer } from '~/components/headerContainer';
import { MostPopularSection } from '~/components/mostPopularSection';
import { RelevantSectionLarge } from '~/components/relevantSectionLarge';
import { BlogsSection } from '~/components/Sections/blogsSection';
import { SliderSection } from '~/components/sliderSection';

export function MainPage() {
    return (
        <Box className='mainpage' m='0 auto' pt='100px' px={4}>
            <Flex flexDirection='column' gap={10}>
                <Flex justify='center' align='center' flexDirection='column'>
                    <HeaderConatainer />
                </Flex>
                <SliderSection />
                <MostPopularSection />
                <BlogsSection />
                <RelevantSectionLarge />
            </Flex>
        </Box>
    );
}
