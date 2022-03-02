/* eslint-disable jsx-a11y/img-redundant-alt */
import {useEffect, useState} from 'react';

//Componant instance
import SectionHeader from './Common/SectionHeader';
import AppHelpers from '../tools/App-helpers';

//Data resouces 
import screenshotsData from '../resources/screenshots.json';

const ScreenshotSection = () => {

  const [screenshots, setScreenshots] = useState([]);
  const sectionHeaderTitle = `Screen <span>Shots</span>`;
  const sectionDescription = "Display your mobile apps awesome features with icon lists and an image carousel of each page. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.";
        
    useEffect(()=>{
      
      //If we getting data from api or somethings else then define init slider after data load 
      setScreenshots(screenshotsData);
      AppHelpers.initSlider('js-screenshot-slider');

    },[screenshots])


    return (
      <section id="screenshots" className="">
    	{/* <!-- =============== container =============== --> */}
        <div className="container">
            <span className="angle2"></span>
            <span className="angle"></span>
         <div className="row">

           <div className="col-xs-12 col-sm-12 col-md-12 wow bounceIn animated headding" data-wow-delay=".1s">
              {/* Section header */}
              <SectionHeader title={sectionHeaderTitle} description={sectionDescription} />
           </div>

          <div className="col-xs-12 col-sm-12 col-md-12">
             <div className="row">     
              <div className="col-xs-12 col-sm-12 col-md-12 wow zoomIn animated textright" data-wow-delay=".1s">           
                   <div className="span12">

                          <div id="js-screenshot-slider" className="owl-carousel">
                            {
                              screenshots.length? screenshots.map((screenshot, index)=>{
                               return <div key={`screen_${index}`} className="item">
                                        <div className="imghover" data-toggle="modal" data-target={`#exampleModal${screenshot.id}`} data-whatever="@mdo">
                                          <img src={screenshot.image} alt={screenshot.name} />         
                                        <div className="hover-bg"><i className="fa fa-camera camera"></i></div>                 
                                        </div> 
                                      </div>
                              }):''
                            }
                          </div>              
                        </div>     
                          
              </div>     
              {/* <!-- =============== popup large image =============== --> */}
                {
                  screenshots.length? screenshots.map((screenshot, index)=>{
                    return <div key={`screen_popup_${index}`} className="modal fade" id={`exampleModal${screenshot.id}`} tabIndex="-1" role="dialog" aria-labelledby={`#exampleModalLabel${screenshot.id}`}>
                            <div className="modal-dialog" role="document">
                              <img src={screenshot.image} alt={screenshot.name} />         
                            </div>
                          </div>
                  }):''
                }
    		 {/* <!-- =============== popup large image end =============== --> */}
          </div>
        </div>
        </div>      
    	</div>
        {/* <!-- =============== container end =============== --> */}
    </section>

    );
};

export default ScreenshotSection;