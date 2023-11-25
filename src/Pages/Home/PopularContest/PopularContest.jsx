import useContests from "../../../Hooks/UseContests";
import Sectiontitle from "../../../Component/SectionTitle/Sectiontitle";
import PopularContestCard from "./popularContestCard";

const PopularContest = () => {
    const allContests = useContests();
    console.log(allContests);
    return (
        <div>
              <Sectiontitle heading="Popular Contest" subHeading="This is time to explore yourself"></Sectiontitle>
         
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            {
                allContests[0].map(contest=> <PopularContestCard key={contest._id} contest={contest}></PopularContestCard>)
            }
            </div>
        </div>
    );
};

export default PopularContest;