import forest from "../assets/forest-honey.svg" ;
import creamed from '../assets/creamed-honey.svg' ;
import meadow from '../assets/meadow-honey.svg' ;
import liquid from '../assets/liquid-honey.svg' ;

const TypesOfHoney = () => {
    const cards = [
        {img: forest , header: 'forest'},
        {img: creamed , header: 'creamed' },
        {img: meadow , header: 'meadow'},
        {img: liquid , header: 'liquid'},
    ]
  return (
    <div className="space-up flex flex-col items-center ">
        <div className="flex flex-col items-center  gap-5">
            <h1 className="secTitle text-center">Types of honey</h1>
            <p className="mb-5 text-center">Learn more about some of the products we take special pride in.</p>
            {/* Types */}
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-5">
                {
                    cards.map((card) => (
                        <div className="flex flex-col lg:flex-row items-center justify-center trans hover:shadow-md cursor-default  p-5 gap-8 bg-white ">
                            {/* w-32 */}
                            <img src={card.img} className="w-20 lg:w-28" alt="" />
                            <div className="flex flex-col lg:justify-start lg:items-start items-center justify-center gap-2">
                                <h3 className="text-xl uppercase font-bold text-main-black">{card.header} <span className="block">honey</span></h3>
                                <p className=" text-gray text-center lg:text-left">Id fierent ullamcorper concludaturque mei. Sed summo admodum honestatis ad Id fierent.</p>
                                <span className="cursor-pointer uppercase font-bold text-main-brown trans hover:text-sec-brown tracking-widest w-fit">learn more</span>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default TypesOfHoney;