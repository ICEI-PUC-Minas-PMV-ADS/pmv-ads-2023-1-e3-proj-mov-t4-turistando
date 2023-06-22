import React, { useRef, useState } from "react";
import { DrawerLayoutAndroid, StyleSheet, View } from "react-native";
import { Appbar, Drawer, Divider, Avatar, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Logo from "../components/logo";


import { SafeAreaProvider } from "react-native-safe-area-context";

const Header = ({ children }) => {
  const drawer = useRef(null);
  const [drawerPosition] = useState("left");

  const navigation = useNavigation();

  const navigationView = () => (
    <View>
      <Drawer.Section style={styles.menu}>
        <View style={styles.espacamento} />

        <Drawer.Item
          icon="home"
          label="Home"
          onPress={() => navigation.navigate("Home")}
        />
        <Drawer.Item
          icon="airballoon-outline"
          label="Pontos Turisticos"
          onPress={() => navigation.navigate("PontosTuristicos")}
        />
        <Drawer.Item
          icon="bed-outline"
          label="Onde Dormir"
          onPress={() => navigation.navigate("OndeDormir")}
        />
        <Drawer.Item
          icon="silverware-fork-knife"
          label="Onde Comer"
          onPress={() => navigation.navigate("OndeComer")}
        />
        <Drawer.Item
          icon="shopping-outline"
          label="Lojas"
          onPress={() => navigation.navigate("Lojas")}
        />
          <Drawer.Item
            icon="calendar-blank-multiple"
            label="Eventos"
            onPress={() => navigation.navigate("Eventos")}
          />
        <Drawer.Item
          icon="account-search-outline"
          label="Serviços Publicos"
          onPress={() => navigation.navigate("Servicos")}
        />
        <Drawer.Item
          icon="account-lock"
          label="Login"
          onPress={() => navigation.navigate("Login")}
        />
        <Drawer.Item
          icon="archive-plus-outline"
          label="Cadastrar"
          onPress={() => navigation.navigate("Cadastro")}
        />
        <Divider />
        <Drawer.Item
          icon="archive-plus-outline"
          label="Termos de Uso"
          onPress={() => navigation.navigate("TermosUso")}
        />
        <Drawer.Item
          icon="archive-plus-outline"
          label="Politica de Privacidade"
          onPress={() => navigation.navigate("Politica")}
        />

      </Drawer.Section>
    </View>
  );

  return (
    <SafeAreaProvider>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={250}
        drawerPosition={drawerPosition}
        renderNavigationView={navigationView}
      >
        <View style={styles.container}>
          <Appbar.Header style={styles.header}>
            <Appbar.Action
              icon="menu"
              color="white"
              onPress={() => drawer.current.openDrawer()}
            />
            <Logo onPress={() => navigation.navigate("Home")} />
            <Button
              icon="magnify"
              textColor="white"
              onPress={() => navigation.navigate("Pesquisar")}
            />
          </Appbar.Header>
        </View>
        {children}
      </DrawerLayoutAndroid>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: "space-between",
    backgroundColor: "#9CF591",
  },
  espacamento: {
    paddingTop: 40,
  },
});
export default Header;
