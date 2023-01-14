import axios from "axios"

const api = axios.create({
    baseURL: "https://49.247.42.165/api/"
})



// async function getProduct() {
//     let res = await api.get("https://49.247.42.165/api/products")
//     return res.json()
// }



// const fetchProduct = async () => {
//     const res = await fetch('https://49.247.42.165/api/products/')
//     const data = await res.json()
//     return data
// }