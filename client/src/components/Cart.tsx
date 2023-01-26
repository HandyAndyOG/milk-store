import { useContext } from "react";
import { useParams } from "react-router-dom"
import { MilkContext } from '../context/MilkContext';
import Nav from './Nav'

const Cart = () => {
    const { cartid } = useParams()
    const { cart, setCart } = useContext(MilkContext)
    console.log(cart)

    const deleteCart = () => [

    ]

  return (
    <>
        <Nav />
        <section className="bg-red-100 flex flex-col justify-center h-screen items-center">
            {cart ?  cart.map((milk) => {return (
                <article className='flex flex-row justify-between w-72 border-solid border bg-slate-50 rounded-md overflow-hidden'>
                    <div>
                        {/* <h2>{milk.cart.milk_name}</h2>
                        <p>Type: {milk.cart.milk_type}</p>
                        <p>Quantity: {milk.cart.quantity}</p> */}
                    </div>
                    <div className="flex">
                        <button onClick={deleteCart} className="p-3 bg-red-500 text-slate-100">X</button>
                    </div>
                </article>
            )}) : <h2>Cart is Empty</h2>}
        </section>
    </>
  )
}

export default Cart