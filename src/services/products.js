import { collection , getDocs} from 'firebase/firestore'
import database from '../config/firebase'

export const getProducts = async () =>{
    try{
        const products_collection_reference = collection (database , 'products')

        const result = await getDocs (products_collection_reference)

        const product_list_formated = result.docs.map(
            (document)=>{
                return{
                    id: document.id,
                    ...document.data()
                }
            }
        )
        return product_list_formated
    }
    catch ( error){
        console.error('error al obtener productos :',error)
        return null
    }
}

export const getProductById = async ({product_id}) => {
    const products = await getProducts()
    return products.find(product=>product.id === product_id)

}