import { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import ListaProdutos from "./Componentes/Adaptadores/ListaProdutos";
const produtos = [  
  {id: 1, nome: "Coca-Cola", preco: 5.5},
  {id: 2, nome: "Pepsi", preco: 5.5},
  {id: 3, nome: "Fanta", preco: 5.5},
  {id: 4, nome: "Guaraná", preco: 5.5}
]

export default function Index() {  
  const [contador, setContador] = useState(0);
  return (
    <View style={estilo.container}
    >
    <ListaProdutos produtos={produtos}></ListaProdutos>
      <Button title={contador.toString()} onPress={() => clicarBotao()}></Button>
    </View>
  );

  function clicarBotao() {
    setContador(contador+1)  
  }

}

const estilo = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "flex-start",
      backgroundColor: "#bababa",
      paddingStart: 20
    },
    titulo:{
      color: "#FFFFFF",
      fontWeight: "bold",
      fontSize: 60
    },
    texto:{
      color: "#FFFFFF",
    },
  }
)