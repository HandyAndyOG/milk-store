import { useContext } from "react";
import { useParams } from "react-router-dom"
import { MilkContext } from '../context/MilkContext';
import Nav from './Nav'
import { v4 as uuidv4 } from 'uuid';


const Cart = () => {
    const { cartid } = useParams()
    const { cart, deletedMilk, setDeletedMilk } = useContext(MilkContext)
    const sameUser = cart.find((user) => user.userId === cartid)
    const deleteCart = (milkId: string) => {
        const index = cart[0].cart.findIndex((milk) => milk.milk_id === milkId)
        cart[0].cart.splice(index, 1)
        setDeletedMilk(!deletedMilk)
    }
  return (
    <>
        <Nav />
        <section className="bg-red-100 flex flex-col justify-center h-screen items-center">
            {sameUser ?  sameUser.cart.map((milk) => {return (
                <article key={uuidv4()} className='flex flex-row justify-between w-72 border-solid border bg-slate-50 rounded-md overflow-hidden'>
                    <div>
                        <h2>{milk.milk_name}</h2>
                        <p>Type: {milk.milk_type}</p>
                        <p>Quantity: {milk.quantity}</p>
                    </div>
                    <div className="flex">
                        <button onClick={() => deleteCart(milk.milk_id)} className="p-3 bg-red-500 text-slate-100">X</button>
                    </div>
                </article>
            )}) : <h2>Cart is Empty</h2>}
        </section>
    </>
  )
}

export default Cart