import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { Text } from "../../components/atom";
import { Container } from "../../components/molecules";
import { HeaderLogin } from "../../components/organism";

// import styles from "./styles";

const Login = () => {
  const nav: any = useNavigation();
  return (
    <Container translucent barStyle="light-content">
      <HeaderLogin />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 30,
          flex: 1,
        }}
      >
        <Text onPress={() => nav.navigate("HomeNavigation")}>To Home</Text>
      </View>
    </Container>
  );
};

export default Login;
