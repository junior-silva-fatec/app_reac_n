import { View } from "react-native";
import ItemProduto from "../ItemProduto";

function ListaProdutos({produtos}: 
    {produtos: {id:number, nome:string, preco: number}[]}){
    return (
    <View>
        {produtos.map((p)=> 
            <ItemProduto produto={p} key={p.id}>

            </ItemProduto>)}
    </View>
)
    }

export default ListaProdutos