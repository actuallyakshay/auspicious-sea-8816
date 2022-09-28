import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Image,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Tabs, TabList, TabPanels, Tab, TabPanel, Text, Heading, Divider
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { RiNotification4Fill, RiMessage2Fill } from "react-icons/ri";
import MenuFunc from './Menu';

const Links = ['Find jobs', 'Company reviews', 'Salary Guide'];


const NavLink = ({ children }) => (
    <Link
        px={2}
        py={5}
        fontSize='16px'
        _hover={{
            textDecoration: 'none',
            borderBottom: '2px solid navy',
        }}
        href={'#'}>
        {children}
    </Link>
);

export const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();


    return (
        <>
            <Box px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <HStack spacing={8} alignItems={'center'}>
                        <Image display={{ base: 'none', md: 'flex', lg: 'flex' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Indeed_logo.svg/768px-Indeed_logo.svg.png?20210916154409" w='100px' />
                        <Image  src='https://d3fw5vlhllyvee.cloudfront.net/dist/header/ukraine_support.7ad2b5d444bc427dbc5d.png' w='40px' />
                        <HStack
                            as={'nav'}
                            spacing={.5}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link} > {link} </NavLink>
                            ))}
                        </HStack>

                    </HStack>
                    <Flex alignItems={'center'} gap={2} >
                        <Flex py={5}
                            w='40px'
                            justify='center'
                            _hover={{
                                textDecoration: 'none',
                                borderBottom: '2px solid navy',
                                backgroundColor: 'rgb(230, 238, 255)'
                            }}>
                            < RiMessage2Fill />
                        </Flex>
                        <Flex py={5}

                            w='40px'
                            justify='center'
                            _hover={{
                                textDecoration: 'none',
                                borderBottom: '2px solid navy',
                                backgroundColor: 'rgb(230, 238, 255)'
                            }}>
                            <RiNotification4Fill />
                        </Flex>
                        <MenuFunc />
                        <Stack direction='row' h='60px' py={4} >
                            <Divider orientation='vertical' />
                            <Text display={{base:"none" , md:'flex'}}>Employers/Post Job</Text>
                        </Stack>
                    </Flex>
                    <IconButton
                        size={'sm'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                        bg='none'
                    />
                </Flex>

                {isOpen ? (
                    <Flex pl={{ md: '17rem', sm: '14rem' }} pb={4} display={{ md: 'none' }} >
                        <Stack as={'nav'} spacing={-5}>
                            {Links.map((link) => (
                                <Tabs   >
                                    <TabList >
                                        <NavLink key={link} borderBottom='none' color='black' >
                                            <Tab borderBottom='none' color='black'>
                                                {link} { }
                                            </Tab>
                                        </NavLink>
                                    </TabList>
                                </Tabs>
                            ))}
                        </Stack>
                    </Flex>
                ) : null}

            </Box>
            <hr />


        </>
    )

}
