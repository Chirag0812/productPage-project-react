import { Link } from 'react-router-dom';

function Empty() {
    return (
        <div className="h-screen bg-firstColor pt-20 font-nunito flex flex-col items-center">
            <p className="text-2xl md:text-4xl mt-5">You don&acute;t have any items in the cart.</p>
            <Link to="/home" className="text-xl md:text-3xl text-thirdColor hover:text-fourthColor mt-5">Explore products</Link>
        </div>
    )
}

export default Empty;