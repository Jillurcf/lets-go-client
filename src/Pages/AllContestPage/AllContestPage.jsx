import Sectiontitle from "../../Component/SectionTitle/Sectiontitle";
import useContests from "../../Hooks/UseContests";
import AllContestCard from "./AllContestCard";


const AllContestPage = () => {
    const allContest = useContests()
    console.log(allContest);
    return (
        <div className="mt-36">
             <Sectiontitle heading="All Contest" subHeading="This is time to explore yourself"></Sectiontitle>
           <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
           {
                allContest[0].map(contest=> <AllContestCard key={contest._id} contest={contest}></AllContestCard>)
             }
           </div>
        </div>
    );
};

export default AllContestPage;