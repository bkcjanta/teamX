import React from 'react'
import bg from "../assets/bg.jpg"
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    Image,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  const Login=()=> {
    return (
      <Box  backgroundImage="url('https://img.freepik.com/free-photo/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product_1258-54087.jpg?w=1060&t=st=1674852903~exp=1674853503~hmac=282f2cfdf4d14d1bb2754a33d5b51d9129bbda48360b125544867604ed3813db')">
        <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
       >
            
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} >
          <Stack align={'center'}>
            <Heading fontSize={'3xl'}  color={"white"}>Sign in </Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
                
              </Stack>
              <Text textAlign={"center"}>Don't have account? <span style={{color:"blue"}}>Signup</span></Text>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Image src={bg}/>
      </Box>
    );
  }

export default Login
