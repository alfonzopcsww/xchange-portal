import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "@tanstack/react-location";
import { LoginFormData } from "~/types/login.types";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormData>();

  /**
   * Handle login form submission here
   * 
   * @param data login form data
   */
  const onSubmit = (data: LoginFormData) => {
    console.log(data)
  };

  return (
    <Flex justifyContent="center" alignItems="center" h="100%">
      <Flex
        h="100%"
        color="xchange_gray.100"
        w="400px"
        flexDir="column"
        justifyContent="center"
      >
        <Heading fontWeight="semibold" mb="8">
          Login
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={6}>
            <FormControl isInvalid={!!errors?.username}>
              <FormLabel>Username</FormLabel>
              <Input
                id="username"
                {...register("username", {
                  required: "This is required",
                })}
              />
              {errors?.username && (
                <FormErrorMessage>{errors?.username?.message}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={!!errors?.password}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                id="password"
                {...register("password", {
                  required: "This is required",
                })}
              />
              {errors?.password && (
                <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
              )}
              <FormHelperText color="GrayText" textAlign="right">
                <Link>Forgot Password?</Link>
              </FormHelperText>
            </FormControl>
            <Button type="submit" colorScheme="brand">
              Login
            </Button>
            <Text textAlign="center">
              Dont have an account?
              <Text color="GrayText" as="span" ml="1">
                <Link>Sign Up</Link>
              </Text>
            </Text>
          </Stack>
        </form>
      </Flex>
    </Flex>
  );
};

export default Login;
