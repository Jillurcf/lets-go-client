import Sectiontitle from "../../Component/SectionTitle/Sectiontitle";
import useContests from "../../Hooks/UseContests";

const Gallery = () => {
  const contest = useContests();
  console.log(contest[0][0].image);
  return (
    <div className="mt-36">
        <Sectiontitle heading="Gallery"></Sectiontitle>
        <div className="grid lg:grid-cols-3">
    {
        contest[0].map(con=> 
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
