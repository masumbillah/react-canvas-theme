///Start header component 
const Footer = () => {

    return (
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
    );
};

export default Footer;