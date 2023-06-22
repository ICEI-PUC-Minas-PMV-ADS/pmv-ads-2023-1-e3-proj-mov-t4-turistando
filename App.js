import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import Main from  './src/navigation/main'
import Route from './src/navigation/route'
import UserProvider from "./src/context/UserContext";


export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        
        
        <Route/>
      </NavigationContainer>
    </UserProvider>
  );
}


