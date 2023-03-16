import { useState } from "react";
import {
    Box,
    Flex,
    HStack,
    IconButton,
    Button,
    useDisclosure,
    useColorModeValue,
    useColorMode,
    Icon,
    Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";
import React from "react";
import { HashLink } from "react-router-hash-link";
const menus = [
    { name: "Home", path: "/#home" },
    { name: "Blog", path: "/#blog" },
    { name: "Skills", path: "/#skills" },
    { name: "Contact me", path: "/#contact" },
    { name: "Experience", path: "/#experience" }
];

export default function Main() {
    const [color, setColor] = useState("gray.50");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const activeTextColor = useColorModeValue("white", "black");
    const activeBackGroundColor = useColorModeValue("cyan.500", "cyan.300");

    const NavLint = (props: any) => {
        return (
            <Box p={4} fontSize={20} key={props.link.name}
                 bg={(props.link.path === '/'+ window.location.hash) ? activeBackGroundColor : ''}
                 color={(props.link.path === '/'+ window.location.hash) ? activeTextColor : '' }
                 _hover={{
                     bg: useColorModeValue("cyan.500", "cyan.500"),
                     color: useColorModeValue("white", "black")
                 }} >
                <HashLink className="hello" smooth to={ props.link.path }
                          onClick={ () => setColor(props.index % 2 === 0 ? "gray.50" : "cyan.50") }>
                    { props.link.name }
                </HashLink>
            </Box>
        );
    };

    return (
        <>
            <Box bg={ useColorModeValue(color, "gray.900") } position="sticky" top={ 0 } zIndex="2" px={ 4 } >
                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                    <IconButton size={"md"} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label={"Open Menu"}
                                display={{ md: "none" }} onClick={isOpen ? onClose : onOpen}/>
                    <Icon display={{ base: "none", md: "flex" }} as={BiCodeAlt} w={30} h={30} />
                    <HStack spacing={8} alignItems={"center"}>
                        <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }} >
                            { menus.map((menu, index) => (
                                <NavLint link={menu} key={menu.name} index={index}/> )) }
                        </HStack>
                    </HStack>
                    <Flex alignItems={"center"}>
                        <Button aria-label="Toggle Color Mode" onClick={toggleColorMode} _focus={{ boxShadow: "none" }}
                                w="fit-content">
                            { colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
                        </Button>
                    </Flex>
                </Flex>
                { isOpen ? (
                    <Box pb={4} display={{ md: "none" }}>
                        <Stack as={"nav"} spacing={4}>
                            { menus.map((menu, index) => (
                                <HashLink smooth key={menu.name} onClick={
                                    () => setColor(index % 2 === 0 ? "gray.50" : "cyan.50") } to={ menu.path } >
                                    { menu.name }
                                </HashLink>
                            )) }
                        </Stack>
                    </Box>
                ) : null }
            </Box>
        </>
    );
}
