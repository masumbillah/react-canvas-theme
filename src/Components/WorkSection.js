//Componant instance
import SectionHeader from './Common/SectionHeader';

//Data resouces 
import workData from '../resources/work.json';

///Start header component 
const WorkSection = () => {
  const { leftWorks, image, rightWorks } = workData || {};
  const sectionHeaderTitle = `How it <span>works</span>`,
        sectionDescription = "Display your mobile apps awesome features with icon lists and an image carousel of each page. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.";

    return (
      <section id="how-it-works" className="parallax">
        {/* <!-- =============== container =============== --> */}
        <div className="container">
        <span className="angle2"></span>
        <span className="angle"></span>
        <div className="row">
          
          {/* Section header */}
          <div className="col-xs-12 col-sm-12 col-md-12 wow bounceIn animated headding" data-wow-delay=".5s"> 
              <SectionHeader title={sectionHeaderTitle} description={sectionDescription} />
          </div>

          {/* Start left working features */}
          <div className="col-xs-12 col-sm-4 col-md-4">
            {
              leftWorks.length? leftWorks.map((work, index) => {
                 return <div key={`leftwork${index}`} className="row">     
                      <div className="col-xs-10 col-sm-10 col-md-10 wow fadeInLeft animated textright" data-wow-delay=".5s">
                      <h3>{work.title}</h3>
                        <p>{work.description}</p>     
                      </div>
                      <div className="col-xs-2 col-sm-2 col-md-2 wow fadeInRight animated" data-wow-delay=".5s">
                        <i className={`fa iconfont ${work.icon}`}></i>
                    </div>    
                  </div>
                }):''
            }
          </div>
          {/* End left working features */}

          {/* Start working feature image */}
          <div className="col-xs-12 col-sm-4 col-md-4 wow bounceIn animated textcenter" data-wow-delay=".4s">
            <img src={image} alt="slide-bg" />
          </div>  
          {/* End working feature image */}

          {/* Start right working features */}
          <div className="col-xs-12 col-sm-4 col-md-4">
            {
              rightWorks.length? rightWorks.map((work, index) => {
                 return <div key={`rightwork${index}`} className="row">         
                          <div className="col-xs-2 col-sm-2 col-md-2 wow fadeInLeft animated" data-wow-delay=".5s">
                             <i className={`fa iconfont2 ${work.icon}`}></i>
                          </div>    
                          <div className="col-xs-10 col-sm-10 col-md-10 wow fadeInRight animated textleft" data-wow-delay=".5s">
                            <h3>{work.title}</h3>
                            <p>{work.description}</p>  
                          </div>
                      </div>
                }):''
            }
          </div>
          </div>
          {/* End right working features */}

        </div>   
        {/* <!-- =============== container end =============== -->	 */}
      </section>
    );
};

export default WorkSection;