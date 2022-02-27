/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

//Componant instance
import SectionHeader from './Common/SectionHeader';

const ScreenshotSection = () => {

  const sectionHeaderTitle = `Screen <span>Shots</span>`,
        sectionDescription = "Display your mobile apps awesome features with icon lists and an image carousel of each page. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.";

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

                          <div id="owl-demo" className="owl-carousel">
                            <div className="item">
                                <div className="imghover" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
                                  <img src="theme-assets/img/owl1.jpg" alt="Owl Image" />         
                                <div className="hover-bg"><i className="fa fa-camera camera"></i></div>                 
                                </div> 
                            </div>
                            <div className="item">
                                <div className="imghover" data-toggle="modal" data-target="#exampleModa2" data-whatever="@mdo">
                                <img src="theme-assets/img/owl2.jpg" alt="Owl Image" />
                                 <div className="hover-bg"><i className="fa fa-camera camera"></i></div>                 
                                </div>
                            </div>
                           <div className="item">
                                <div className="imghover" data-toggle="modal" data-target="#exampleModa3" data-whatever="@mdo">
                                <img src="theme-assets/img/owl3.jpg" alt="Owl Image" />
                                 <div className="hover-bg"><i className="fa fa-camera camera"></i></div>                 
                                </div>
                            </div> 
                            <div className="item">
                                <div className="imghover" data-toggle="modal" data-target="#exampleModa4" data-whatever="@mdo">
                                <img src="theme-assets/img/owl4.jpg" alt="Owl Image" />
                                 <div className="hover-bg"><i className="fa fa-camera camera"></i></div>                 
                                </div>
                            </div>
                          </div>              
                        </div>     
                          
            </div>     
              {/* <!-- =============== popup large image =============== --> */}
              <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel">
              <div className="modal-dialog" role="document">
                <img src="theme-assets/img/owl1.jpg" alt="Owl Image" />
              </div>
             </div>

             <div className="modal fade" id="exampleModa2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabe2">
              <div className="modal-dialog" role="document">
                <img src="theme-assets/img/owl2.jpg" alt="Owl Image" />
              </div>
             </div>
             
             <div className="modal fade" id="exampleModa3" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabe3">
              <div className="modal-dialog" role="document">
                <img src="theme-assets/img/owl3.jpg" alt="Owl Image" />
              </div>
             </div>
             
             <div className="modal fade" id="exampleModa4" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabe4">
              <div className="modal-dialog" role="document">
                <img src="theme-assets/img/owl4.jpg" alt="Owl Image" />
              </div>
             </div>
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