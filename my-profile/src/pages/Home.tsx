import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Button,
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
        window.open(`mailto:dhendup1996@gmail.com?subject=${encodeURIComponent('subject') || ''}&body=
        ${encodeURIComponent('') || ''}`)
    };

    return (
        <Box bg={useColorModeValue("gray.100", "gray.800")}>
            <Container maxW={"5xl"} py={30}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <Stack spacing={4} className={props?.isVisible? "slide-in-left": 'fade-out'} align={{ base: 'center', md: 'center', lg: 'center' }} justify="center">
                        {/* <Text
						textTransform={"uppercase"}
						color={"blue.400"}
						fontWeight={600}
						fontSize={"sm"}
						bg={useColorModeValue("blue.50", "blue.900")}
						p={2}
						alignSelf={"flex-start"}
						rounded={"md"}
					>
						My Story
					</Text> */}
                        <Heading color={"cyan.500"} pt={50} className={props.isVisible? 'text-focus-in': 'fade-out'}>
                            Hi all, I'm Tashi Dhendup</Heading>
                        <Text color={"gray.500"} fontSize={"lg"} pt={50} py={50}
                              className={props.isVisible ? 'text-focus-in': 'fade-out'}>
                           <p> As a frontend developer with 3 years of experience, I have gained proficiency in HTML, CSS,
                            JavaScript, and various frontend frameworks, such as React and Angular. I have
                            experience in creating responsive and user-friendly interfaces, collaborating with designers
                            and back-end developers, and implementing various web technologies to improve website performance.
                           </p>

                            <p>
                            During my career, I have demonstrated expertise in developing and maintaining complex frontend
                            applications, optimizing website speed and accessibility, and testing and debugging code to
                            ensure high-quality output. I am also knowledgeable in version control systems, such as Git.
                            </p>

                            <p>
                            Overall, my experience and skills make me a valuable asset as a frontend developer, and
                            I am eager to continue contributing my expertise to exciting new projects.
                            </p>
                        </Text>
                        <Stack spacing={4}
                            divider={
                                <StackDivider borderColor={useColorModeValue("gray.100", "gray.800")}/> }>
                            {/* 26C6DA */}
                            <Button
                                className={props.isVisible? 'text-focus-in': 'fade-out'}
                                variant="solid" bg={"cyan.500"} w={150} onClick={openMail} color="white"
                                _hover={{
                                    bg: "cyan.100",
                                    color: useColorModeValue("cyan.600", "black"),
                                }}>
                                Hire Me
                            </Button>
                        </Stack>
                    </Stack>
                    <Flex className={props?.isVisible? "slide-in-right": 'fade-out'}>
                        <Image rounded={"md"} alt={"feature image"} src="../../../assets/computer300.svg"
                               objectFit={"cover"}/>
                    </Flex>
                </SimpleGrid>
            </Container>
        </Box>
    );
}
