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
import { colors } from "../../styles/colors.styles";
import useUser from "../../hooks/useUser";
import styles from "./RegisterForm.styles";

const RegisterForm = ({ navigation }: NavigationProps) => {
  const { addUser } = useUser();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    avatar: "https://i.ibb.co/WtFPTtD/xef-template.jpg",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isTextOk, setIsTextOk] = useState(false);

  const changeUserData = (property: string, value: string) => {
    setUserData({
      ...userData,
      [property]: value,
    });
    if (
      userData.username.length > 1 &&
      userData.email.length > 1 &&
      userData.password.length
    ) {
      setIsTextOk(true);
    } else {
      setIsTextOk(false);
    }
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
              <Text style={styles.titleField}>Como te llamas?</Text>
            </FormControl.Label>
            <Input
              style={styles.textInputField}
              w={{
                base: "90%",
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
              <Text style={styles.titleField}>Tu correo electrónico?</Text>
            </FormControl.Label>
            <Input
              style={styles.textInputField}
              w={{
                base: "90%",
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
              <Text style={styles.titleField}>
                Qué contraseña quieres usar?
              </Text>
            </FormControl.Label>
            <Input
              style={styles.textInputField}
              type={showPassword ? "text" : "password"}
              w={{
                base: "90%",
              }}
              onChangeText={(value) => changeUserData("password", value)}
              InputRightElement={
                <Button
                  style={styles.buttonEye}
                  size="xs"
                  rounded="none"
                  w="1/6"
                  h="full"
                  onPress={passwordDisplay}
                >
                  {showPassword ? (
                    <Icon
                      as={
                        <FontAwesomeIcon
                          size={30}
                          color={colors.white}
                          icon={faEyeSlash}
                        />
                      }
                      color="white"
                      size="sm"
                    />
                  ) : (
                    <Icon
                      as={
                        <FontAwesomeIcon
                          size={30}
                          color={colors.white}
                          icon={faEye}
                        />
                      }
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
              <Text style={styles.titleField}>Foto de perfil?</Text>
            </FormControl.Label>
            <Input
              style={styles.textInputField}
              w={{
                base: "90%",
              }}
              isDisabled
              placeholder="Desactivado temporalmente"
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
              }}
            >
              <Button
                style={styles.buttonEye}
                colorScheme="primary"
                w={{
                  base: "40%",
                }}
                size="sm"
                onPress={createUser}
                isDisabled={!isTextOk}
              >
                <Text style={styles.textButton}>Enciendan los fogones!</Text>
              </Button>
            </HStack>
          </FormControl>
        </Box>
      </FormControl>
    </Stack>
  );
};

export default RegisterForm;
