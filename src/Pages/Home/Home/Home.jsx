
import Banner from "../Banner/Banner";
import CreatorSlider from "../CreatorSection/CreatorSlider";
import PopularContest from "../PopularContest/PopularContest";
import Winner from "../Winner/Winner";


const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
          <PopularContest></PopularContest>
          <Winner></Winner>
          <CreatorSlider></CreatorSlider>
          {/* <Order></Order> */}
        </div>
    );
};

export default Home;