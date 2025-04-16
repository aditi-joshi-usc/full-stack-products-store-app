import { Box, Heading, HStack, Icon, IconButton, Image, Text, useColorModeValue } from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import React from 'react'

const ProductCard = ({product}) => {
    const textColor = useColorModeValue("gray.600", "grap.200")
    const bg = useColorModeValue("white", "gray.800")
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
        <Image src={product.imagelink} alt={product.name}  h={48} w='full' objectFit='fill' />
        <Box p={4}>

            <Heading as='h3' size='md' mb={2}>
                {product.name}
            </Heading>
            <Text fontWeight={"bold"} fontSize='xl' color={textColor} mb={4}>${product.price}</Text>
        

        <HStack spacing={2}>

            <IconButton icon={<EditIcon />}  colorScheme='blue' />
            <IconButton icon={<DeleteIcon />}  colorScheme='red' />
        </HStack>

        </Box>

    </Box>
  )
}

export default ProductCard