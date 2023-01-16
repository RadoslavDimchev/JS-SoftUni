import { Plant } from './Plant';


export const Plants = () => {
  return (
    <div id="plant" className="plants">
      <div className="container">
        <div className="row">
          <div className="col-md-12 ">
            <div className="titlepage">
              <h2>Our Wonderful plants</h2>
              <span>looking at its layout. The point of using Lorem Ipsumletters, as opposed to usingl</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <Plant src="images/plant1.jpg" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <Plant src="images/plant2.jpg" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <Plant src="images/plant3.jpg" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <Plant src="images/plant1.jpg" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <Plant src="images/plant2.jpg" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <Plant src="images/plant3.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};