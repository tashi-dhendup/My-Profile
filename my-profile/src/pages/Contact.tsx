import {
    Box,
    Button,
    Container,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    Stack,
    Textarea,
    Tooltip,
    useClipboard,
    useColorModeValue,
    VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";

export default function ContactFormWithSocialButtons(props: {isVisible: boolean}) {
    const { hasCopied, onCopy } = useClipboard("dhendup1996@gmail.com");

    return (
        <Box bg={useColorModeValue("cyan.100", "gray.700")}>
            <Container maxW={"5xl"}>
                <Flex align="center" justify="center" id="contact">
                    <Box borderRadius="lg" m={{ base: 5, md: 16, lg: 10 }} p={{ base: 5, lg: 16 }}>
                        <Box>
                            <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
                                <Heading className={props.isVisible? 'text-focus-in': 'fade-out'}
                                         fontSize={{ base: "3xl", md: "4xl" }}>
                                    Contact Me
                                </Heading>

                                <Stack spacing={{ base: 4, md: 8, lg: 20 }} direction={{ base: "column", md: "row" }}>
                                    <Stack
                                        className={props?.isVisible? 'fade-in-fwd ': 'fade-out'}
                                        align="center" justify="space-around" direction={{ base: "row", md: "column" }}>
                                        <Tooltip label={hasCopied ? "Email Copied!" : "Copy Email"}
                                                 closeOnClick={false} hasArrow>
                                            <IconButton aria-label="email" variant="ghost" size="lg" fontSize="3xl"
                                                icon={<MdEmail />} onClick={onCopy} isRound
                                                _hover={{
                                                    bg: useColorModeValue("cyan.500", "cyan.300"),
                                                    color: useColorModeValue("white", "black"),
                                                }} />
                                        </Tooltip>

                                        <Link href="https://github.com/tashi-dhendup" target="_blank">
                                            <IconButton aria-label="github" variant="ghost" size="lg" fontSize="3xl"
                                                icon={<BsGithub />} isRound
                                                _hover={{
                                                    bg: useColorModeValue("cyan.500", "cyan.300"),
                                                    color: useColorModeValue("white", "gray.700"),
                                                }}
                                            />
                                        </Link>
                                        <Link >
                                            <IconButton aria-label="twitter" variant="ghost" size="lg" isRound
                                                icon={<BsTwitter size="28px" />}
                                                _hover={{
                                                    bg: useColorModeValue("cyan.500", "cyan.300"),
                                                    color: useColorModeValue("white", "gray.700"),
                                                }}
                                            />
                                        </Link>

                                        <Link href="https://www.linkedin.com/in/tashi-dhendup-b24209165/" target="_blank">
                                            <IconButton aria-label="linkedin" variant="ghost" size="lg"
                                                icon={<BsLinkedin size="28px" />} isRound
                                                        _hover={{
                                                    bg:  useColorModeValue("cyan.500", "cyan.300"),
                                                    color: useColorModeValue("white", "gray.700"),
                                                }} />
                                        </Link>
                                    </Stack>

                                    <Box
                                        className={props?.isVisible? "slide-in-left": 'fade-out'}
                                        bg={useColorModeValue("white", "gray.800")}
                                        borderRadius="lg" p={8} w={500} shadow="base"
                                        color={useColorModeValue("gray.700", "whiteAlpha.900")}>
                                        <VStack spacing={5}>
                                            <FormControl isRequired>
                                                <FormLabel>Name</FormLabel>
                                                <InputGroup>
                                                    <InputLeftElement children={<BsPerson />} />
                                                    <Input type="text" name="name" placeholder="Your Name"/>
                                                </InputGroup>
                                            </FormControl>

                                            <FormControl isRequired>
                                                <FormLabel>Email</FormLabel>
                                                <InputGroup>
                                                    <InputLeftElement children={<MdOutlineEmail />} />
                                                    <Input type="email" name="email" placeholder="Your Email"/>
                                                </InputGroup>
                                            </FormControl>

                                            <FormControl isRequired>
                                                <FormLabel>Message</FormLabel>
                                                <Textarea name="message" placeholder="Your Message" rows={6} resize="none"/>
                                            </FormControl>

                                            <Button colorScheme="blue" bg="cyan.500" color="white"
                                                _hover={{
                                                    bg: "cyan.100",
                                                    color: useColorModeValue("cyan.600", "black")
                                                }}>
                                                Send Message
                                            </Button>
                                        </VStack>
                                    </Box>
                                </Stack>
                            </VStack>
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
}
