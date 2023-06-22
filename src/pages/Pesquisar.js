import * as React from "react";
import { ScrollView } from "react-native";
import { Searchbar } from "react-native-paper";
import Cabecalho from "../components/Cabecalho";

import { useNavigation } from "@react-navigation/native";

const Pesquisar = () => {
  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <Cabecalho title={"Pesquisar"} goBack={() => navigation.goBack()} />
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </>
  );
};

export default Pesquisar;
