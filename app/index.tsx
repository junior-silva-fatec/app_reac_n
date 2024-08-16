import { Text, View, StyleSheet } from "react-native";
const produtos = [  
  {id: 1, nome: "Coca-Cola", preco: 5.5},
  {id: 2, nome: "Pepsi", preco: 5.5},
  {id: 3, nome: "Fanta", preco: 5.5},
  {id: 4, nome: "Guaraná", preco: 5.5}
]

export default function Index() {
  return (
    <View style={estilo.container}
    >
     {produtos.map((produto) => (
      <View key={produto.id} style={estilo.lista}>
        <Text>{produto.nome}</Text>
        <Text>{produto.preco}</Text>
      </View>
      ))}
    </View>
  );
}

const estilo = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#bababa",
    },
    text:{
      color: "#FFFFFF"
    },
    lista:{
      display: "flex",
      flexDirection: "row",      
    }
  }
)