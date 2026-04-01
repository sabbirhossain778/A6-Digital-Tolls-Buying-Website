import React, { use } from 'react';
import SingleCard from './SingleCard/SingleCard';



// const getBadgeClass = (type) => {
//     switch (type) {
//         case "best seller": return "bg-warning/20 text-warning-content border-none";
//         case "popular": return "bg-secondary/20 text-secondary-content border-none";
//         case "new": return "bg-success/20 text-success-content border-none";
//         default: return "badge-ghost";
//     }
// };

// const AvailableCard = ({ fetchPromise }) => {
//     const data = use(fetchPromise);
//     const [isBuy, setIsBuy] = useState(false);
      

//     return (
//         <>
//             <div className='grid grid-cols-3 gap-7'>
//         {
//             data.map(tool => { 
//             // console.log(tool); 
//             return (
//             <div className="card bg-base-100 shadow-sm">
//                 <div className="card-body space-y-2">
//                     <span className={`badge ${tool.tagType} custom-badge`} >{tool.tag}</span>

//                     <img src={tool.icon} alt={tool.name} width={38} className='m-3 p-1'/>

//                     <h4 className="text-3xl font-bold">{tool.name}</h4>

//                     <p className='text-[#627382]'>{tool.description}</p>

//                     <h3 className="text-2xl font-bold text-[#101727]">${tool.price}/<span id='text'>{tool.period}</span></h3>

//                     <ul className="flex flex-col gap-2 text-xs">
                                
//                                     {
//                                     tool.features.map((feature,index) =>{
//                                         return(
//                                         <li className='flex gap-1' key={index}>
//                                         <IoMdCheckmark className='text-green-600 text-xl'/>
//                                         <span>{feature}</span>
//                                         {/* <span>Unlimited AI generations</span> */}
//                                         </li>
//                                             )
//                                         })
//                                     }
//                     </ul>

//                     <div>
//                         <button onClick={() => setIsBuy(true)} className={`btn btn-block rounded-3xl text-white ${isBuy? 'bg-green-500' : 'bg-linear-to-r from-[#4F39F6] to-[#9514FA]'}`}> 
//                             {isBuy === true?                                   
//                             (<span className="flex items-center justify-center gap-2"><IoMdCheckmark className='text-white text-xl'/>Added to Cart!</span>) :
//                             ('Buy Now') }</button>
//                     </div>
//                 </div>
//             </div>
//             )
//             })
//         }
//             </div>
//         </>
//     );
// };



const AvailableCard = ({ fetchPromise, cart, setCart }) => {
    const data = use(fetchPromise);
    // console.log(cart,'Available Card');
    
    return (
        <div className='grid grid-cols-3 gap-7'>
            {data.map((tool, index) => {
               const isAdded = cart.some(item => item.name === tool.name);
               return(
                    <SingleCard key={index} tool={tool} cart={cart} setCart={setCart} isAdded={isAdded}/>
               ) 
            }
            )}
        </div>
    );
};

export default AvailableCard;
