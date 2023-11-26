import { FaPeopleGroup } from "react-icons/fa6";
import Sectiontitle from "../../Component/SectionTitle/Sectiontitle";


const SeeDetails = () => {
    return (
        <div>
              <div className="mt-36">
              <Sectiontitle heading="See Details" subHeading="You See All Contest information here"></Sectiontitle>
              </div>
              <div className="card card-side bg-purple-200 shadow-xl">
        <figure className="md:h-[300px] md:w-[300px] overflow-hidden object-cover">
          <img className="h-[300px]"
            src=""
            alt="Movie"
          />
        </figure>
        <div className="hero h-[300px]" style={{backgroundImage: 'url(https://i.ibb.co/x5mFR8b/dollers.jpg)'}}>
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="card-body">
            <h1 className=" mb-4 lg:text-2xl lg:font-bold text-purple-200 font-bold"></h1>
        <div className="flex justify-between">
        <h2 className=" text-white text-xl "> Contest</h2>
       <div className="flex justify-between">
       <FaPeopleGroup className="text-pink-600 mt-2"></FaPeopleGroup>
       <p className="text-white"></p>
       </div>
        </div>
        {/* <p> */}
        {/* {
            description.length > 100 ? <p className="lg:block hidden text-purple-300">{description.slice(0,100)}<Link className="text-yellow-400 underline">  Read more..</Link></p> : <p className="lg:block hidden text-purple-300">{description}</p>
          } */}
        {/* </p> */}
          {/* <div className="">
            <button onClick={()=>handleCount(_id)} className="btn btn-outline text-purple-200"><Link to={`/seeDetail/${_id}`}>See Details</Link></button>
            
          </div> */}
          </div>
        </div>
      </div>
        </div>
    );
};

export default SeeDetails;