import {
  Box,
  Heading,
  Input,
  HStack,
  VStack,
  Icon,
  IconButton,
  Image,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  Text,
  useColorModeValue,
  useDisclosure,
  ModalBody,
  ModalFocusScope,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";

import { useProductStore } from "../store/product";

const ProductCard = ({ product }) => {
  const toast = useToast(); // Initialize toast
  const textColor = useColorModeValue("gray.600", "grap.200");
  const bg = useColorModeValue("white", "gray.800");
  const { deleteProduct, updateProduct } = useProductStore();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [updatedProduct, setUpdatedProduct] = useState(product);


  const handleUpdateProduct = async (pid, updatedProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct);    
    if (success) {
      toast({        
        title: "Product updated successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });   
      }
    onClose(); // Close the modal after updating
    };

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (success) {
      toast({
        title: "Product deleted successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow={"hidden"}
      transition={"all 0.3s"}
      _hover={{
        transform: "scale(1.05)",
        shadow: "xl",
      }}
      bg={bg}
    >
      <Image
        src={product.imagelink}
        alt={product.name}
        h={48}
        w="full"
        objectFit="fill"
      />
      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {product.name}
        </Heading>
        <Text fontWeight={"bold"} fontSize="xl" color={textColor} mb={4}>
          ${product.price}
        </Text>

        <HStack spacing={2}>
          <IconButton icon={<EditIcon />} onClick={onOpen} colorScheme="blue" />
          <IconButton
            icon={<DeleteIcon />}
            onClick={() => handleDeleteProduct(product._id)}
            colorScheme="red"
          />
        </HStack>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Input placeholder="Product Name" name="name"  value={
                updatedProduct.name} onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })} />
              
              <Input placeholder="Product Price" name="price" type="number"  value={updatedProduct.price } onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}/>
              <Input placeholder="Product Image Link" name="imagelink" value={updatedProduct.imagelink} onChange={(e) => setUpdatedProduct({ ...updatedProduct, imagelink: e.target.value })}/>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() =>handleUpdateProduct(product._id, updatedProduct)}>
              Update
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProductCard;