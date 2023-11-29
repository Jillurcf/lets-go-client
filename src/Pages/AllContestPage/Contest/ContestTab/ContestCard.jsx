import { useState } from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";


const ContestCard = ({contest}) => {
    const {_id, image, contestName, tags, description, participants} = contest;
    const axiosPublic = useAxiosPublic
    const [presentCount, setPresentCount] = useState(0)
      
  
        const handleCount = (id)=>{      
            const updateCount = participants + 1;
        setPresentCount(updateCount)
       axiosPublic.put(`/Contests/update/${id}`, {participants: updateCount}
        )
        .then(res=> {
          console.log(res.data);
        })

       axiosPublic.get(`/Contests/${id}`)
        .then(res=> {
          console.log(res.data);
        })
    }
    return (
        <div>
             <div className="card card-side bg-purple-200 shadow-xl">
        <figure className="md:h-[300px] md:w-[300px] overflow-hidden object-cover">
          <img className="h-[300px]"
            src={image}
            alt="Movie"
          />
        </figure>
        <div className="hero h-[300px]" style={{backgroundImage: 'url(https://i.ibb.co/x5mFR8b/dollers.jpg)'}}>
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="card-body">
            <h1 className=" mb-4 lg:text-2xl lg:font-bold text-purple-200 font-bold">{tags}</h1>
        <div className="flex justify-between">
        <h2 className=" text-white text-xl "> {contestName} Contest</h2>
       <div className="flex justify-between">
       <FaPeopleGroup className="text-pink-600 mt-2"></FaPeopleGroup>
       <p className="text-white">{participants}</p>
       </div>
        </div>
    
       
          <p className="lg:block hidden text-purple-300">{description}</p>
         
       
          <div className="">
            <button onClick={()=>handleCount(_id)} className="btn btn-outline text-purple-200"><Link to={`/seeDetail/${_id}`}>See Details</Link></button>
            
          </div>
          </div>
        </div>
      </div> 
        </div>
    );
};

export default ContestCard;