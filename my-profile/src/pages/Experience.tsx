import {
    Container,
    SimpleGrid,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    useColorModeValue,
    Box,
} from "@chakra-ui/react";
import React from "react";
import { ReactElement } from "react";
interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
        <Stack direction={"row"} align={"center"}>
            <Flex w={8} h={8} align={"center"} justify={"center"} rounded={"full"} bg={iconBg}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{text}</Text>
        </Stack>
    );
};

export default function Home(props: {isVisible: boolean}) {

    const openMail = (): void => {
        window.open(`mailto:dhendup1996@gmail.com?subject=${encodeURIComponent('subject') || ''}&body=${encodeURIComponent('') || ''}`)
    };

    return (
        <Box bg={useColorModeValue("gray.100", "gray.800")} >
            <Container maxW={"5xl"} py={10}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <Stack spacing={4} className={props?.isVisible? "slide-in-left": 'fade-out'} align={{ base: 'center', md: 'center', lg: 'center' }} justify="center">
                        <Heading color={"cyan.500"} pt={50} className={props.isVisible? 'text-focus-in': 'fade-out'}
                                 fontSize={{ base: "3xl", md: "4xl" }}>
                            Experience
                        </Heading>
                        <Text color={"gray.500"} fontSize={"lg"} pt={50} py={50} className={props.isVisible ? 'text-focus-in': 'fade-out'}>

                        </Text>
                        <Stack spacing={4}
                            divider= {
                                <StackDivider borderColor={useColorModeValue("gray.100", "gray.800")}/>
                            }>
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    );
}
