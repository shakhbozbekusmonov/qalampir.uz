import React from "react";
import { Container, Row, PrimaryButton, Input } from "./style";
// import { Button } from "@mui/material";
// import { LoadingButton } from "@mui/lab";

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
} from "@chakra-ui/react";


const Home = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();


    const [number, setNumber] = React.useState(0);
    const [loading, setLoading] = React.useState(false);
    const fetchData = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };
    return (
        <>
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                Open
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>
                        <Input placeholder='Type here...' />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
            <Container>
                <Row>
                    <Accordion>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as='span' flex='1' textAlign='left'>
                                        Section 1 title
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as='span' flex='1' textAlign='left'>
                                        Section 2 title
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>

                    {/* <Button onClick={() => setNumber(number + 1)} sz='20px'>
                    {number}
                </Button>
                {/* <Button primary>Button</Button> */}
                    {/* <PrimaryButton draggable={true}>Button</PrimaryButton> */}

                    {/* <Button as='span'>Link</Button> */}

                    {/* <Input type='text' placeholder='Type here' /> */}

                    {/* <Button variant='contained' color='secondary'>
                    Button
                </Button>
                <Button variant='text' color='success'>
                    Button
                </Button>
                <Button variant='contained' color='success'>
                    Button
                </Button>
                <Button variant='outlined' color='error'>
                    Button
                </Button>
                <Button variant='contained' size='small' color='error'>
                    Button
                </Button>
                <Button variant='contained' size='medium' color='error'>
                    Button
                </Button>
                <Button variant='contained' size='large' color='error'>
                    Button
                </Button>

                <LoadingButton
                    loading={loading}
                    loadingIndicator={loading ? "Loading..." : "Loaded"}
                    variant='outlined'
                    onClick={() => fetchData()}>
                    Fetch data
                </LoadingButton> */}
                </Row>
            </Container>
        </>
    );
};

export default Home;
