import { useQuery } from "@tanstack/react-query";
import Sectiontitle from "../../../Component/SectionTitle/Sectiontitle";
// import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import img1 from "../../../assets/Images/winner1.jpg";
import winnerImg from '../../../assets/Images/winnersimg.jpg'
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
// import useCratorContests from "../../../Hooks/useCreatrorContest";



const Winner = () => {
  // const creator = useCratorContests()
  // console.log("line 13", creator);
  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure();
  const { data: user = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

console.log(user[0]?.role);
  axiosPublic.get(`/users/${user[0]?.role}`)
  .then(res=> {
    console.log(res.data);
  })
  return (
    <div>
      <Sectiontitle
        heading="The Winners"
        subHeading="Our heartiest love to the winners"
      ></Sectiontitle>
      <div className="my-12 max-w-screen-lg mx-auto">
        <h1 className="text-center text-3xl text-purple-600 font-bold">Unleash Your Creativity! <br /> Enter our Exclusive Contest Today!</h1>
        <p className="text-center text-purple-400">Are you ready for a thrilling challenge? We are thrilled to announce our latest competition that is designed to bring out the best in you. Whether you are a seasoned pro or just starting on your journey, this contest is for YOU!</p>
      </div>
      <div className="lg:flex justify-between gap-8 mx-auto text-center items-center">
        <div className="col-span-4 lg:w-2/3">
          
          <img className="" src={winnerImg} alt="" />
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 col-span-8">
        <div className="card lg:w-48 h-[400px] glass ">
          <figure className="">
            <img className="" src={img1} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Learn now!</button>
    </div> */}
          </div>
        </div>
        <div className="card lg:w-48 h-[400px] glass">
          <figure>
            <img src={img1} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Learn now!</button>
    </div> */}
          </div>
        </div>
        <div className="card lg:w-48 h-[400px] glass">
          <figure>
            <img src={img1} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Learn now!</button>
    </div> */}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Winner;
