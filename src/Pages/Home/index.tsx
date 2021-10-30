import Card from "../../Components/Card/index"
import Navbar from "../../Components/Navbar/index"
import Cart from "../../Components/Cart"
import { useState } from "react"


const Home = (string: string, cartOpen: boolean) => {
   
    return (
        <>
        <Navbar />
        {cartOpen && <Cart />}
        <Card  />
        </>
    )
}
export default Home