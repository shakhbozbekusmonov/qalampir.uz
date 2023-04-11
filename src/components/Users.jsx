import { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
} from "@chakra-ui/react";
import { api } from "../api/api";
import { Formik } from "formik";
import { toast } from "react-toastify";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [selectedItem, setSelectedItem] = useState({});
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        getUsers();
    }, []);

    const addUser = async (values) => {
        if (selectedItem.id) {
            try {
                const res = await api.put(`update/${selectedItem.id}`, values);
                getUsers();
                setSelectedItem({});
            } catch (error) {
                toast.error(error.message);
            }
        } else {
            try {
                const res = await api.post("user", values);
                getUsers();
            } catch (error) {
                toast.error(error.message);
            }
        }
    };

    const deleteUser = async (id) => {
        try {
            const res = await api.delete(`delete/${id}`);
            getUsers();
        } catch (error) {
            toast.error(error.message);
        }
    };

    const editUser = (item) => {
        setSelectedItem(item);
        onOpen();
    };

    const getUsers = async () => {
        try {
            const response = await api("user/all");
            setUsers(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <AdminLayout>
            <div className='row'>
                <div className='col-12'>
                    <Button
                        className='ms-auto d-block'
                        colorScheme='teal'
                        onClick={onOpen}>
                        Open Modal
                    </Button>
                </div>
            </div>

            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>ID:</Th>
                            <Th>Username</Th>
                            <Th>Email</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {users.length > 0 &&
                            users.map((user) => (
                                <Tr key={user.id}>
                                    <Td>{user.id}</Td>
                                    <Td className='text-capitalize'>
                                        {user?.username}
                                    </Td>
                                    <Td>{user.email}</Td>
                                    <Td>
                                        <Button
                                            colorScheme='teal'
                                            size='sm'
                                            onClick={() => editUser(user)}>
                                            Edit
                                        </Button>
                                        <Button
                                            colorScheme='red'
                                            size='sm'
                                            className='ms-2'
                                            onClick={() => deleteUser(user.id)}>
                                            Delete
                                        </Button>
                                    </Td>
                                </Tr>
                            ))}
                    </Tbody>
                </Table>
            </TableContainer>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>User add</ModalHeader>
                    <ModalCloseButton />
                    <Formik
                        initialValues={{
                            username: "",
                            email: "",
                            password: "",
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            addUser(values);
                            setSubmitting(false);
                            onClose();
                        }}>
                        {({
                            values,
                            handleChange,
                            handleSubmit,
                            isSubmitting,
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <ModalBody>
                                    <input
                                        className='form-control mb-3'
                                        type='text'
                                        name='username'
                                        onChange={handleChange}
                                        value={values.username}
                                        placeholder='Username'
                                        required
                                    />
                                    <input
                                        className='form-control mb-3'
                                        type='email'
                                        name='email'
                                        onChange={handleChange}
                                        value={values.email}
                                        placeholder='Email'
                                        required
                                    />
                                    <input
                                        className='form-control mb-3'
                                        type='password'
                                        name='password'
                                        onChange={handleChange}
                                        value={values.password}
                                        placeholder='Password'
                                        required
                                    />
                                </ModalBody>
                                <ModalFooter>
                                    <Button
                                        colorScheme='blue'
                                        mr={3}
                                        onClick={onClose}>
                                        Close
                                    </Button>
                                    <Button
                                        type='submit'
                                        colorScheme='teal'
                                        disabled={isSubmitting}>
                                        Save
                                    </Button>
                                </ModalFooter>
                            </form>
                        )}
                    </Formik>
                </ModalContent>
            </Modal>
        </AdminLayout>
    );
};

export default Users;
