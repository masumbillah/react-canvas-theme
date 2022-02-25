//Components

import { Fragment } from "react";

//App container
const App = ()=> {
  return ( 
    <Fragment>
      {/* <!-- =============== Preloader =============== --> */}
      <div id="preloader">
          <div id="loading">
          </div>
      </div>
      {/* <!-- =============== nav =============== --> */}
      <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="container-fluid">
                    {/* <!-- Brand and toggle get grouped htmlFor better mobile display --> */}
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">
                          <img src="theme-assets/img/logo.png" alt="Logo" />
                        </a>
                    </div>

                    {/* <!-- Collect the nav links, forms, and other content htmlFor toggling --> */}

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a className="page-scroll" href="#about">About</a>
                            </li>
                            <li>
                                <a className="page-scroll" href="#how-it-works">How it works</a>
                            </li>
                            <li>
                                <a className="page-scroll" href="#Screenshots">Screenshots</a>
                            </li>
                            <li>
                                <a className="page-scroll" href="#Price">Price</a>
                            </li>
                            <li>
                                <a className="page-scroll" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- =============== navbar-collapse =============== --> */}

                </div>
            </div>
            {/* <!-- =============== container-fluid =============== --> */}
        </nav>

      {/* <!-- =============== header =============== --> */}
      <header>
      {/* <!-- =============== container =============== --> */}
          <div className="container">
              <div className="header-content row">
                <div className="col-xs-12 col-sm-5 col-md-5">
                    <h2 className="wow bounceIn animated" data-wow-delay=".40s">FRIENDLY TEMPLATE FOR YOUR APP</h2>
                    <h3 className="wow bounceIn animated" data-wow-delay=".50s">FOR YOUR SMARTPHONE</h3>
                    <p className="wow bounceIn animated" data-wow-delay=".60s">Lorem ipsum dolor sit amet, consectetur adipiscing elit.We ensure sit amet, consectetur adipiscing elit</p>
                    <div>
                      <div className="btn btn-primary btn-lg btn-ornge wow bounceIn animated" data-wow-delay="1s">
                        <i className="hbtn"></i> 
                        <span>Free Download</span>
                        <i className="fa fa-cloud-download"></i>
                      </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-7 col-md-7 wow slideInLeft animated">
                    <img src="theme-assets/img/phones.png" alt="phones" />
                </div>
              </div>
          </div>
      {/* <!-- =============== container end =============== --> */}
      </header>

      {/* <!-- =============== About =============== --> */}
      <section id="about" className="">
      {/* <!-- =============== container =============== --> */}
          <div className="container">
              <span className="angle2"></span>
              <span className="angle"></span>
              <div className="row">
                  <div className="col-xs-12 col-sm-5 col-md-3 wow fadeInLeft animated" data-wow-delay=".5s">
                      <h1><span>HEY THERE!</span> WELCOME TO OUR SITE </h1>      
                    </div>
                    <div className="col-xs-12 col-sm-7 col-md-9 wow fadeInRight animated" data-wow-delay=".5s">
                    <h2>Start Bootstrap has everything you need to get your</h2>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. </p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit</p>     
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                    </div>     
              </div>
          </div>   
      {/* <!-- =============== container end =============== -->		 */}
      </section>

      {/* <!-- =============== how it works =============== --> */}
      <section id="how-it-works" className="parallax">
        {/* <!-- =============== container =============== --> */}
        <div className="container">
        <span className="angle2"></span>
        <span className="angle"></span>
        <div className="row">

          <div className="col-xs-12 col-sm-12 col-md-12 wow bounceIn animated headding" data-wow-delay=".5s">
              <h2>How it <span>works</span></h2>
              <p>Display your mobile apps awesome features with icon lists and an image carousel of each page. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.</p>
          </div>

          <div className="col-xs-12 col-sm-4 col-md-4">
            <div className="row">     
              <div className="col-xs-10 col-sm-10 col-md-10 wow fadeInLeft animated textright" data-wow-delay=".5s">
                <h3>Lorem ipsum</h3>
                  <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum.</p>     
              </div>
                <div className="col-xs-2 col-sm-2 col-md-2 wow fadeInRight animated" data-wow-delay=".5s">
                    <i className="fa fa-apple iconfont"></i>
              </div>    
            </div>
            <div className="row"> 
            <div className="col-xs-10 col-sm-10 col-md-10 wow fadeInLeft animated textright" data-wow-delay=".6s">
                <h3>Lorem ipsum</h3>
                  <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum.</p>     
              </div>
                <div className="col-xs-2 col-sm-2 col-md-2 wow fadeInRight animated" data-wow-delay=".6s">
                    <i className="fa fa-rocket iconfont"></i>
              </div>     
            </div>
            <div className="row">            
            <div className="col-xs-10 col-sm-10 col-md-10 wow fadeInLeft animated textright" data-wow-delay=".7s">
                <h3>Lorem ipsum</h3>
                  <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum.</p>     
              </div>
              <div className="col-xs-2 col-sm-2 col-md-2 wow fadeInRight animated" data-wow-delay=".7s">
                    <i className="fa fa-film iconfont"></i>
              </div>         
              
            </div>        
          </div>

          <div className="col-xs-12 col-sm-4 col-md-4 wow bounceIn animated textcenter" data-wow-delay=".4s">
          <img src="theme-assets/img/slide-bg.png" alt="slide-bg" />
          </div>  
            
          <div className="col-xs-12 col-sm-4 col-md-4">
            <div className="row">         
              <div className="col-xs-2 col-sm-2 col-md-2 wow fadeInLeft animated" data-wow-delay=".5s">
                    <i className="fa fa-android iconfont2"></i>
              </div>    
              <div className="col-xs-10 col-sm-10 col-md-10 wow fadeInRight animated textleft" data-wow-delay=".5s">
                <h3>Lorem ipsum</h3>
                  <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum.</p>     
              </div>
              
            </div>
            <div className="row">    
            <div className="col-xs-2 col-sm-2 col-md-2 wow fadeInLeft animated" data-wow-delay=".6s">
                    <i className="fa fa-css3 iconfont2"></i>
              </div>          
              <div className="col-xs-10 col-sm-10 col-md-10 wow fadeInRight animated textleft" data-wow-delay=".6s">
                <h3>Lorem ipsum</h3>
                  <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum.</p>     
              </div>
              
            </div>
            <div className="row">    
            <div className="col-xs-2 col-sm-2 col-md-2 wow fadeInLeft animated" data-wow-delay=".7s">
                    <i className="fa fa-users iconfont2"></i>
              </div>          
              <div className="col-xs-10 col-sm-10 col-md-10 wow fadeInRight animated textleft" data-wow-delay=".7s">
                <h3>Lorem ipsum</h3>
                  <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum.</p>     
              </div>
              
            </div>        
          </div>
        </div>
        </div>   
        {/* <!-- =============== container end =============== -->	 */}
      </section>


      {/* <!-- =============== Screenshots =============== --> */}
    <section id="Screenshots" className="">
    	{/* <!-- =============== container =============== --> */}
        <div className="container">
            <span className="angle2"></span>
            <span className="angle"></span>
         <div className="row">

           <div className="col-xs-12 col-sm-12 col-md-12 wow bounceIn animated headding" data-wow-delay=".1s">
               <h2>Screen <span>Shots</span></h2>
               <p>Display your mobile apps awesome features with icon lists and an image carousel of each page. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.</p>
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


      {/* <!-- =============== Price =============== --> */}
      <section id="Price" className="">
        {/* <!-- =============== container =============== --> */}
          <div className="container">
            <span className="angle2"></span>
            <span className="angle"></span>

            <div className="row">

              <div className="col-xs-12 col-sm-12 col-md-12 wow zoomIn animated headding" data-wow-delay=".1s">
                <h2>Price <span>List</span></h2>
                <p>Display your mobile apps awesome features with icon lists and an image carousel of each page. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.</p>
            </div>

            <div className="col-xs-12 col-sm-4 col-md-4 wow fadeInLeft animated" >
              <div className="price-wrapper ">
                <h3 className="price-title">Students</h3>
                <div className="price">
                  <div className="value-box">
                    <div className="value-box-content">
                      <span className="value">
                        <i></i><span className="number">FREE</span>
                      </span>
                      <span className="month invisible"></span>
                    </div>
                  </div>

                  <div className="content-box">			
                    <ul>
                      <li>list item</li>
                      <li>list item</li>
                      <li>list item</li>
                      <li>list item</li>
                      <li>list item</li>
                      <li>list item</li>
                    </ul>
                  </div>
                  <div className="sign-box">
                        <a href="#"><span>Sign Up</span></a>			
                        </div>
                </div>
              </div>
              </div>
            <div className="col-xs-12 col-sm-4 col-md-4 wow zoomIn animated">
              <div className="price-wrapper ">
                <h3 className="price-title">Small</h3>
                <div className="price">
                  <div className="value-box">
                    <div className="value-box-content">
                      <span className="value">
                        <i></i><span className="number"> $10 </span>
                      </span>
                      <span className="month">per month</span>
                    </div>
                  </div>

                  <div className="content-box">			
                    <ul>
                      <li>list item</li>
                      <li>list item</li>
                      <li>list item</li>
                      <li>list item</li>
                      <li>list item</li>
                      <li>list item</li>
                    </ul>
                  </div>
                  <div className="sign-box">
                    <a href="#"><span>Sign Up</span></a>			
                  </div>
                </div>
              </div> 
              </div>
            <div className="col-xs-12 col-sm-4 col-md-4 wow zoomIn animated">
              <div className="price-wrapper ">
                <h3 className="price-title">Standard</h3>
                <div className="price standard">
                  <div className="value-box">
                    <div className="value-box-content">
                      <span className="value">
                      <span className="number">$50</span>
                      </span>
                      <span className="month">per month</span>
                    </div>
                  </div>
                  <div className="content-box">			
                    <ul>
                      <li>list item</li>
                      <li>list item</li>
                      <li>list item</li>
                      <li>list item</li>
                      <li>list item</li>
                      <li>list item</li>
                    </ul>
                  </div>
                  <div className="sign-box">
                    <a href="#"><span>Sign Up</span></a>			
                  </div>
                </div>
              </div>
              </div>     
            </div>
          </div>   
          {/* <!-- =============== container end =============== -->   */}
        </section>


      {/* <!-- =============== Contact =============== --> */}
      <section id="contact">
	      {/* <!-- =============== container =============== --> */}
		    <div className="container">
			    <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 wow bounceIn animated headding" data-wow-delay=".1s">
              <h2>Contact <span>Us</span></h2>
              <p>Display your mobile apps awesome features with icon lists and an image carousel of each page. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.</p>
            </div>
			    </div>

			    <div className="row">
				    <div className="col-xs-12 col-sm-4 col-md-4 wow bounceIn animated" data-wow-delay=".1s">
					    <form>
						    <div className="ajax-hidden">
                  <div className="form-group wow fadeInUp animated">
                    <label htmlFor="c_name" className="sr-only">Name</label>
                    <input type="text" placeholder="Name" name="c_name" className="form-control" id="c_name" />
                  </div>

                  <div data-wow-delay=".1s" className="form-group wow fadeInUp animated">
                    <label htmlFor="c_email" className="sr-only">Email</label>
                    <input type="email" placeholder="E-mail" name="c_email" className="form-control" id="c_email" />
                  </div>

                  <div data-wow-delay=".2s" className="form-group wow fadeInUp animated">
                    <textarea placeholder="Message" rows="7" name="c_message" id="c_message" className="form-control"></textarea>
                  </div>
							    <button data-wow-delay=".3s" className="btn btn-sm btn-block wow fadeInUp animated" type="submit">Send Message</button>
						    </div>
                <div className="ajax-response"></div>
              </form>
				    </div>
            <div className="col-xs-12 col-sm-4 col-md-4 wow bounceIn animated map" data-wow-delay=".5s">
					  <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6508922.473104964!2d-123.76275651635396!3d37.19583981824279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCalifornia%2C+United+States!5e0!3m2!1sen!2sin!4v1450994260631" width="100%" height="250" allowFullScreen frameBorder="0" style={{border:0}}></iframe>
				  </div>
          <div className="col-xs-12 col-sm-4 col-md-4 wow bounceIn animated" data-wow-delay=".6s">
					  <section id="text-15" className="widget widget_text">
              <h3 className="widget-title">California, United States</h3>
               <div className="textwidget">785, Firs Avenue, place Mall,<br/>
                  <p>Tel: 01 234-56786<br/>
                  Mobile: 01 234-56786<br/>
                  E-mail: <a href="#">info@templatestock.com</a></p>
                  <a href="#">Get directions on the map</a> →
                </div>
            </section>

				</div>                
			</div>
		</div>
    {/* <!-- =============== container end =============== --> */}
	</section>


      {/* <!-- Footer --> */}
      <footer id="footer">
        {/* <!-- =============== container =============== --> */}
        <div className="container">
          <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12">
              <ul className="social-links">
                <li><a className="wow fadeInUp animated" href="index.html#" style={{visibility: 'visible', animationName: 'fadeInUp'}}><i className="fa fa-facebook"></i></a></li>
                <li><a data-wow-delay=".1s" className="wow fadeInUp animated" href="index.html#" style={{visibility: 'visible', animationDelay: 0.1, animationName: 'fadeInUp'}}><i className="fa fa-twitter"></i></a></li>
                <li><a data-wow-delay=".2s" className="wow fadeInUp animated" href="index.html#" style={{visibility: 'visible', animationDelay: 0.2, animationName: 'fadeInUp'}}><i className="fa fa-google-plus"></i></a></li>
                <li><a data-wow-delay=".4s" className="wow fadeInUp animated" href="index.html#" style={{visibility: 'visible', animationDelay: 0.4, animationName: 'fadeInUp'}}><i className="fa fa-pinterest"></i></a></li>
                <li><a data-wow-delay=".5s" className="wow fadeInUp animated" href="index.html#" style={{visibility: 'visible', animationDelay: 0.6, animationName: 'fadeInUp'}}><i className="fa fa-envelope"></i></a></li>
              </ul>
              <p className="copyright"> &copy; 2016 Canvas</p>
            </div>
          </div>
        </div>
        {/* <!-- =============== container end =============== --> */}
    </footer>
    </Fragment>
  );
}

export default App;
