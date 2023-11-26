import Sectiontitle from '../../../Component/SectionTitle/Sectiontitle';
import img1 from '../../../assets/Images/winner1.jpg';
const Winner = () => {
  return (
   <div>
    <Sectiontitle heading="The Winners" subHeading="Our heartiest love to the winners"></Sectiontitle>
   <div className='grid grid-cols-1 md:grid-cols-3'>
   <div className="card w-96 glass">
  <figure><img src={img1} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Life hack</h2>
    <p>How to park your car at your garage?</p>
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Learn now!</button>
    </div> */}
  </div>
</div>
    <div className="card w-96 glass">
  <figure><img src={img1} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Life hack</h2>
    <p>How to park your car at your garage?</p>
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Learn now!</button>
    </div> */}
  </div>
</div>
    <div className="card w-96 glass">
  <figure><img src={img1} alt="car!"/></figure>
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
  );
};

export default Winner;
