import React from "react";
import "./admin-layout.scss";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    IconButton,
    useDisclosure,
    Input,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FiUsers, FiSettings } from "react-icons/fi";
import { BsNewspaper } from "react-icons/bs";

const AdminLayout = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
        <div className='admin-layout'>
            <div className='admin-layout__header'>
                <IconButton
                    ref={btnRef}
                    colorScheme='teal'
                    onClick={onOpen}
                    icon={<HamburgerIcon />}
                />
                <Drawer
                    isOpen={isOpen}
                    placement='left'
                    onClose={onClose}
                    finalFocusRef={btnRef}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Create your account</DrawerHeader>

                        <DrawerBody>
                            <Input placeholder='Type here...' />

                            <ul className='admin-layout__menu--list'>
                                <li className='admin-layout__menu--item'>
                                    <NavLink
                                        className='admin-layout__menu--link'
                                        to='/admin/dashboard'>
                                        <RxDashboard className='admin-layout__menu--icon' />
                                        Dashboard
                                    </NavLink>
                                </li>
                                <li className='admin-layout__menu--item'>
                                    <NavLink
                                        className='admin-layout__menu--link'
                                        to='/admin/users'>
                                        <FiUsers className='admin-layout__menu--icon' />
                                        Users
                                    </NavLink>
                                </li>
                                <li className='admin-layout__menu--item'>
                                    <NavLink
                                        className='admin-layout__menu--link'
                                        to='/admin/settings'>
                                        <FiSettings className='admin-layout__menu--icon' />
                                        Settings
                                    </NavLink>
                                </li>
                                <li className='admin-layout__menu--item'>
                                    <NavLink
                                        className='admin-layout__menu--link'
                                        to='/admin/news/uz'>
                                        <BsNewspaper className='admin-layout__menu--icon' />
                                        News UZ
                                    </NavLink>
                                </li>
                                <li className='admin-layout__menu--item'>
                                    <NavLink
                                        className='admin-layout__menu--link'
                                        to='/admin/news/en'>
                                        <BsNewspaper className='admin-layout__menu--icon' />
                                        News EN
                                    </NavLink>
                                </li>
                                <li className='admin-layout__menu--item'>
                                    <NavLink
                                        className='admin-layout__menu--link'
                                        to='/admin/news/ru'>
                                        <BsNewspaper className='admin-layout__menu--icon' />
                                        News RU
                                    </NavLink>
                                </li>
                            </ul>
                        </DrawerBody>

                        <DrawerFooter>
                            <span>News &copy; All right reserved.</span>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </div>
            <div className='admin-layout__wrapper'>{children}</div>
        </div>
    );
};

export default AdminLayout;
