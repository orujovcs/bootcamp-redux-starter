export default function deleteGoodFromCart(id){
    return{
        type: "DELETE_GOOD_FROM_CART",
        payload:{
            id: id
        }
    }
}