import { useEffect } from "react";
import Sectiontitle from "../../Component/SectionTitle/Sectiontitle";
// import useContests from "../../Hooks/UseContests";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useState } from "react";

const Gallery = () => {
  const axiosPublic = useAxiosPublic()
  const [contest, setContest] = useState([])
  useEffect(()=>{
    axiosPublic.get('./Contests')
    .then(res=>{
      console.log(res.data);
      setContest(res.data);
    })
  },[])
  // const contest = useContests();
  
  return (
    <div className="mt-36">
        <Sectiontitle heading="Gallery"></Sectiontitle>
        <div className="grid lg:grid-cols-3">
    {
        contest.map(con=> 
            <div key={con} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={con.image}
                alt="Shoes"
              />
            </figure>
            
          </div>
            )
    }
    </div>
    </div>
  );
};

export default Gallery;
