import React from "react";
import { HStack, IconButton, Icon } from "native-base";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHome,
  faSearch,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark, faUserCircle } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  return (
    <>
      <HStack
        bg="#AB9B7A"
        px="1"
        py="3"
        justifyContent="center"
        justifyItems="center"
        alignItems="center"
      >
        <HStack space="8" alignItems="center" paddingBottom="2">
          <IconButton
            icon={
              <Icon
                size="lg"
                as={<FontAwesomeIcon icon={faHome} />}
                color="white"
              />
            }
          />
          <IconButton
            icon={
              <Icon
                as={<FontAwesomeIcon icon={faSearch} />}
                size="xl"
                color="white"
              />
            }
          />
          <IconButton
            icon={
              <Icon
                as={<FontAwesomeIcon icon={faPlusCircle} />}
                color="white"
                size="sm"
              />
            }
          />
          <IconButton
            icon={
              <Icon
                as={<FontAwesomeIcon icon={faBookmark} />}
                size="sm"
                color="green"
              />
            }
          />
          <IconButton
            icon={
              <Icon
                as={<FontAwesomeIcon icon={faUserCircle} />}
                size="sm"
                color="white"
              />
            }
          />
        </HStack>
      </HStack>
    </>
  );
};

export default Navbar;
