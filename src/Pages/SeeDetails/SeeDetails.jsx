import { FaPeopleGroup } from "react-icons/fa6";
import Sectiontitle from "../../Component/SectionTitle/Sectiontitle";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Counter from "./Counter";
import useAuth from "../../Hooks/useAuth";
import BookingModal from "./BookingModal";
// import './Counter.css'

const SeeDetails = () => {
  const seeDetail = useLoaderData();
  let [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const closeModal = () => {
    setIsOpen(false);
  };
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;
  const startTimer = () => {
    const countDownDate = new Date("november 27, 2023").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seonds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seonds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  }, []);
  console.log(seeDetail);
  return (
    <div>
      <div className="mt-36">
        <Sectiontitle
          heading={seeDetail.contestName}
          subHeading="You See All Contest information here"
        ></Sectiontitle>
      </div>
      <div className="card card-side bg-purple-200 shadow-xl">
        <figure className="">
          <img className="w-[500px]" src={seeDetail.image} alt="Movie" />
        </figure>
        <div
          className="hero"
          style={{
            backgroundImage: "url(https://i.ibb.co/x5mFR8b/dollers.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="card-body">
            <div className="flex justify-between">
              <FaPeopleGroup className="text-pink-600 mt-2"></FaPeopleGroup>
              <p className="text-white">{seeDetail.participants}</p>
            </div>
            <h1 className=" mb-4 lg:text-xl lg:font-bold text-purple-200 font-bold">
              <span className="text-purple-500 text-2xl">Required Task:</span>{" "}
              <br />
              {seeDetail.description}
            </h1>
            <div className="app">
              <Counter
                timerDays={timerDays}
                timerHours={timerHours}
                timerMinutes={timerMinutes}
                timerSeconds={timerSeconds}
              ></Counter>
            </div>

            <div>
              <button
                onClick={() => setIsOpen(true)}
                className=" mt-24 btn max-w-xs btn-outline btn-warning"
              >
                Registration
              </button>
            </div>
            <BookingModal
        closeModal={closeModal}
        isOpen={isOpen}
        // bookingInfo={bookingInfo}
      ></BookingModal>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeDetails;
