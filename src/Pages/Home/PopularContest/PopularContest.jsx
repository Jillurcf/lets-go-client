import useContests from "../../../Hooks/UseContests";
import Sectiontitle from "../../../Component/SectionTitle/Sectiontitle";
import PopularContestCard from "./popularContestCard";
import { useState } from "react";
import { Link } from "react-router-dom";

const PopularContest = () => {
    const allContests = useContests();
    const [isShow, setIsShow] = useState(false)
    console.log(allContests);
    return (
        <div>
              <Sectiontitle heading="Popular Contest" subHeading="This is time to explore yourself"></Sectiontitle>
         
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            {
                isShow ?
                allContests[0].map(contest=> <PopularContestCard key={contest._id} contest={contest}></PopularContestCard>)
                :  allContests[0].slice(0,6).map(contest=> <PopularContestCard key={contest._id} contest={contest}></PopularContestCard>)
            }
            </div>
            <button className="mt-8 mb-12 btn btn-secondary flex mx-auto"><Link to='/allContest'>See Morre</Link></button>
        </div>
    );
};

export default PopularContest;