import { Box, Button, Container, Heading, Input, useColorModeValue, VStack } from '@chakra-ui/react';
import React from 'react'
import { useProductStore } from '../store/product.js';
import { useToast } from '@chakra-ui/react';
const CreatePage = () => {
    const [newProduct, setNewProduct] = React.useState({
        name: '',
        price: '',
        imagelink: '',
    });

    const toast = useToast()
    const {createProduct} = useProductStore()

    const handleAddProduct = async() => {
        const {success, message} = await createProduct(newProduct)
        if(!success) {
            toast({
                title: 'Error',
                description: message,
                status: 'error',
                duration: 5000,
                isClosable: true,
            })}
            else {
                toast({
                    title: 'Success',
                    description: message,    
                    status: 'success',                    
                    duration: 5000,                    
                    isClosable: true,
                })
            }
        
        console.log("Success: ",success);
        console.log("Message: ",message);
        
    };
  return (
    <Container maxW={'container.md'}>
        <VStack spacing={8}>
        <Heading as={'h1'} size={'2xl'} textAlign={'center'} mb={8}> Create a new product</Heading>


        <Box w={'full'} bg={useColorModeValue('white', 'gray.800')} p={4} rounded={'lg'} boxShadow={'md'}>
            <VStack spacing={4}>
            <Input placeholder='Product Name' value={newProduct.name}  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
            <Input placeholder='Product Price' value={newProduct.price} type='number' onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
            <Input placeholder='Product Image Link' value={newProduct.imagelink} onChange={(e) => setNewProduct({ ...newProduct, imagelink: e.target.value })} />


            <Button colorScheme={'blue'} size={'lg'} width={'full'} onClick={handleAddProduct} w='full'>
                Create Product
            </Button>
            </VStack>


        </Box>
        </VStack>


    </Container>
  )
}

export default CreatePage