import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { SelectOrganizationFormData } from "~/types/login.types";

const SelectOrganization = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SelectOrganizationFormData>();

  const onSubmit = (data: SelectOrganizationFormData) => {
    console.log(data);
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
        <Heading size="md" fontWeight="semibold" mb="8">
          Select Organization
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={6}>
            <FormControl isInvalid={!!errors?.organization}>
              <Select
                placeholder="Select option"
                id="organization"
                {...register("organization", {
                  required: "This is required",
                })}
              >
                <option value="abc">ABC</option>
              </Select>
              {errors?.organization && (
                <FormErrorMessage>
                  {errors?.organization?.message}
                </FormErrorMessage>
              )}
            </FormControl>
          </Stack>
        </form>
      </Flex>
    </Flex>
  );
};

export default SelectOrganization;
