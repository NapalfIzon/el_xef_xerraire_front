import React from "react";
import { Box, Heading, Text, Avatar, Icon, Button } from "native-base";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./ShowUserInfo.styles";
import Header from "../Header/Header";
import useUser from "../../hooks/useUser";

const ShowUserInfo = ({ userData, navigation }) => {
  const { logoutUser } = useUser();
  const date = new Date(userData.registrationDate);
  const registrationDate = date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const logout = () => {
    navigation.navigate("Home");
    logoutUser();
  };

  return (
    <Box style={styles.datacontainer}>
      <Box style={styles.header}>
        <Header />
      </Box>
      <Box style={styles.info}>
        <Box>
          <Heading>
            <Text style={styles.title}>{userData.username}</Text>
          </Heading>
          <Text>Registrado el:</Text>
          <Text>{registrationDate}</Text>
          <Text>Recetas: {userData.myRecipes.length}</Text>
          <Text>Favoritos: {userData.myFavorites.length}</Text>
        </Box>
        <Box style={styles.avatar}>
          <Avatar
            alignSelf="center"
            size="2xl"
            source={{
              uri: userData.avatar,
            }}
          />
          <Button size="2xs" rounded="full" w="1/6" h="1/6" onPress={logout}>
            <Icon
              as={
                <FontAwesomeIcon color={"red"} size={20} icon={faMinusCircle} />
              }
            />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ShowUserInfo;
