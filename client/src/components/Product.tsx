import { useContext } from "react";
import { useParams } from "react-router-dom"
import { MilkContext } from '../context/MilkContext';
import { useNavigate } from 'react-router-dom';
import Milk from '../assets/media/milk.png'
import { IoIosArrowBack } from 'react-icons/io';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Nav from './Nav'


const Product = () => {
    const { allMilk, volume, setVolume, clientId ,setClientId, cart, setCart  } = useContext(MilkContext)
    const { id } = useParams()
    const navigate = useNavigate()
    const milk = id ? allMilk.find((milk) => milk.id === id) : null;
    const handleBack = () => {
        setVolume(0)
        navigate('/')
    }

    const addCart = (milkName: string, milkType: string, milkId: string) => {
        if(cart.find((data) => data.userId === clientId)) {
            cart.map((data) => data.cart.push({milk_name: milkName,
                milk_type: milkType,
                quantity: volume,
                milk_id: milkId}))

        } else {
            setCart([{
                userId: clientId,
                cart : [{
                    milk_name: milkName,
                    milk_type: milkType,
                    quantity: volume,
                    milk_id: milkId
                }]
            }])
        }
    }

    const handleVolume = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setVolume(Number(e.target.value))
        if(!clientId) {
            const data = await fetch(`http://localhost:8080/api/cart`);
            const response = await data.json();
            setClientId(response.clientId)
        }
    }
    const handleCart = () => {
        setVolume(0)
        navigate(`/Cart/${clientId}`)
    }

  return (
    <>
        <Nav />
        <section className="bg-red-100 flex flex-col justify-center h-screen items-center">
            <div>
                <button onClick={handleBack} className="flex flex-row items-center self-start">
                    <IoIosArrowBack/>
                    <span>Back</span>
                </button>
                <article className="flex flex-row justify-center">
                    <div className='bg-slate-100 flex justify-center p-12'>
                        <img className="w-24 h-24" src={Milk}/>
                    </div>
                    {milk ? <div className="bg-red-100 p-2 flex flex-col items-start">
                        <h2 className='font-medium text-left'>{milk.name}</h2>
                        <p className="text-gray-500">{milk.type}</p>
                        <p className="text-gray-500">{milk.storage} liter</p>
                        <input type='range' min='0' max={milk.storage} value={volume} step='1'  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleVolume(e)}/>
                        <output htmlFor="volume" id="volumeValue">
                            {volume}
                        </output>
                        {volume > 0 ? <div><button onClick={() => addCart(milk.name, milk.type, milk.id)}>Add to Cart</button><AiOutlineShoppingCart onClick={handleCart}/></div> : ''}
                    </div> : 'Cannot find the Milk'}
                </article>
            </div>
        </section>
    </>
  )
}

export default Product