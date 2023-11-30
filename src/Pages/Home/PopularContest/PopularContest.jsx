import useContests from "../../../Hooks/UseContests";
import Sectiontitle from "../../../Component/SectionTitle/Sectiontitle";
import PopularContestCard from "./popularContestCard";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const PopularContest = () => {
  const axiosPublic = useAxiosPublic();
  const Contests = useContests();
  console.log(Contests);
  const [allContests, setAllContests] = useState(Contests[0]);
  console.log(allContests);
  const [isShow, setIsShow] = useState(false);
  console.log(allContests);

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const search = form.search.value;
    console.log(search);
    const searchByTags = {
      search,
    };
    axiosPublic.get(`/contests?tags=${search}`).then((res) => {
      setAllContests(res.data);
      console.log(res.data);
    });
  };
  return (
    <div>
      <div className="-mt-14 flex justify-center">
        <form onSubmit={handleSearch} className="join mb-80">
          <input
            type="text"
            name="search"
            className="input input-bordered join-item"
            placeholder="Search by contest TAGS"
          />
          <button className="btn bg-purple-950 text-purple-50 join-item rounded-r-full">
            Search
          </button>
        </form>
      </div>

  <div className="-mt-48">
  <Sectiontitle 
        heading="Popular Contest"
        subHeading="This is time to explore yourself"
      ></Sectiontitle>

      <div className=" grid md:grid-cols-2 grid-cols-1 gap-8">
        {isShow
          ? allContests.map((contest) => (
              <PopularContestCard
                key={contest._id}
                contest={contest}
              ></PopularContestCard>
            ))
          : allContests
              .slice(0, 6)
              .map((contest) => (
                <PopularContestCard
                  key={contest._id}
                  contest={contest}
                ></PopularContestCard>
              ))}
      </div>
      <button className="mt-8 mb-12 btn btn-secondary flex mx-auto">
        <Link to="/allContest">See Morre</Link>
      </button>
  </div>
    </div>
  );
};

export default PopularContest;
