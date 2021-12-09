import React, { useState } from "react";
import {
  Avatar,
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
import styles from "./LoginForm.styles";
import { colors } from "../../styles/colors.styles";

const LoginForm = ({ navigation }: NavigationProps) => {
  const { loginUser } = useUser();

  const displayAvatar = "https://i.ibb.co/WtFPTtD/xef-template.jpg";
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isTextOk, setIsTextOk] = useState(false);

  const changeUserData = (property: string, value: string) => {
    setUserData({
      ...userData,
      [property]: value,
    });
    if (userData.email.length > 1 && userData.password.length) {
      setIsTextOk(true);
    } else {
      setIsTextOk(false);
    }
  };

  const passwordDisplay = () => setShowPassword(!showPassword);

  const loginUserAction = () => {
    loginUser(userData);
    navigation.navigate("Home");
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
      <Avatar
        style={styles.avatar}
        alignSelf="center"
        size="2xl"
        source={{
          uri: displayAvatar,
        }}
      />
      <FormControl mb="5" style={styles.formControl}>
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
              <Text style={styles.titleField}>Tu contraseña?</Text>
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
                  size="xs"
                  rounded="none"
                  w="1/6"
                  h="full"
                  onPress={passwordDisplay}
                  style={styles.button}
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
            <HStack
              space={3}
              justifyContent="center"
              w={{
                base: "100%",
              }}
            >
              <Button
                colorScheme="primary"
                w={{
                  base: "40%",
                }}
                size="sm"
                onPress={loginUserAction}
                isDisabled={!isTextOk}
                style={styles.buttonConfirm}
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

export default LoginForm;
