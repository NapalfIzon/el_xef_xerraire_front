import React, { useState } from "react";
import {
  FormControl,
  Input,
  Icon,
  Stack,
  Text,
  Box,
  HStack,
  Button,
} from "native-base";
import { NavigationProps } from "../../types/propTypes";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import useUser from "../../hooks/useUser";

const RegisterForm = ({ navigation }: NavigationProps) => {
  const { addUser } = useUser();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    avatar: "https://i.ibb.co/WtFPTtD/xef-template.jpg",
  });
  const [showPassword, setShowPassword] = useState(false);

  const changeUserData = (property: string, value: string) => {
    setUserData({
      ...userData,
      [property]: value,
    });
  };

  const passwordDisplay = () => setShowPassword(!showPassword);

  const createUser = () => {
    addUser(userData);
  };

  return (
    <Stack
      space={2.5}
      alignSelf="center"
      px="4"
      safeArea
      mt="4"
      w={{
        base: "100%",
        md: "25%",
      }}
    >
      <FormControl mb="5">
        <Box>
          <FormControl mb="5">
            <FormControl.Label>
              <Text>Como te llamas?</Text>
            </FormControl.Label>
            <Input
              w={{
                base: "90%",
                md: "25%",
              }}
              isRequired={true}
              placeholder="Nombre y apellido..."
              onChangeText={(value) => changeUserData("username", value)}
            />
          </FormControl>
        </Box>

        <Box>
          <FormControl mb="5">
            <FormControl.Label>
              <Text>Tu correo electrónico?</Text>
            </FormControl.Label>
            <Input
              w={{
                base: "90%",
                md: "25%",
              }}
              isRequired={true}
              placeholder="Correo electrónico aquí..."
              onChangeText={(value) => changeUserData("email", value)}
            />
          </FormControl>
        </Box>

        <Box>
          <FormControl mb="5">
            <FormControl.Label>
              <Text>Qué contraseña quieres usar?</Text>
            </FormControl.Label>
            <Input
              type={showPassword ? "text" : "password"}
              w={{
                base: "90%",
                md: "25%",
              }}
              onChangeText={(value) => changeUserData("password", value)}
              InputRightElement={
                <Button
                  size="xs"
                  rounded="none"
                  w="1/6"
                  h="full"
                  onPress={passwordDisplay}
                >
                  {showPassword ? (
                    <Icon
                      as={<FontAwesomeIcon icon={faEyeSlash} />}
                      color="white"
                      size="sm"
                    />
                  ) : (
                    <Icon
                      as={<FontAwesomeIcon icon={faEye} />}
                      color="white"
                      size="sm"
                    />
                  )}
                </Button>
              }
              placeholder="Tu contraseña aquí..."
            />
          </FormControl>
        </Box>

        <Box>
          <FormControl mb="5">
            <FormControl.Label>
              <Text>Foto de perfil?</Text>
            </FormControl.Label>
            <Input
              w={{
                base: "90%",
                md: "25%",
              }}
              isDisabled
              placeholder="Selecciona la imagen..."
            />
          </FormControl>
        </Box>

        <Box>
          <FormControl mb="5">
            <HStack
              space={3}
              justifyContent="center"
              w={{
                base: "100%",
                md: "25%",
              }}
            >
              <Button
                colorScheme="primary"
                w={{
                  base: "40%",
                  md: "25%",
                }}
                size="sm"
                onPress={() => {
                  createUser();
                }}
              >
                <Text>Enciendan los fogones!</Text>
              </Button>
            </HStack>
          </FormControl>
        </Box>
      </FormControl>
    </Stack>
  );
};

export default RegisterForm;
