/* eslint-disable jsx-a11y/anchor-is-valid, jsx-a11y/iframe-has-title */
import GoogleMap from './Common/GoogleMap';

//Componant instance
import SectionHeader from './Common/SectionHeader';

//Start Contact us form
const ContactForm = () => {
  return <form>
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
  };

//Start contact address
const Address = () => {
    return <section id="text-15" className="widget widget_text">
        <h3 className="widget-title">California, United States</h3>
        <div className="textwidget">785, Firs Avenue, place Mall,<br/>
            <p>Tel: 01 234-56786<br/>
            Mobile: 01 234-56786<br/>
            E-mail: <a href="#">info@templatestock.com</a></p>
            <a href="#">Get directions on the map</a> →
          </div>
      </section>;
  };

const ContactSection = () => {
  const sectionHeaderTitle = `Contact <span>Us</span>`,
        sectionDescription = "Display your mobile apps awesome features with icon lists and an image carousel of each page. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.";

    return (
      <section id="contact">
          {/* <!-- =============== container =============== --> */}
          <div className="container">
            <div className="row">
              {/* Section header */}
              <SectionHeader title={sectionHeaderTitle} description={sectionDescription} />
            </div>

          <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-4 wow bounceIn animated" data-wow-delay=".1s">
              {/* Load contact from */}
              <ContactForm />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 wow bounceIn animated map" data-wow-delay=".5s">
              {/* Load google map on contact section */}
              <GoogleMap customClass="contact-map"  />
            </div>
          <div className="col-xs-12 col-sm-4 col-md-4 wow bounceIn animated" data-wow-delay=".6s">
              {/* Load contact address */}
              <Address />
          </div>                
        </div>
      </div>
      {/* <!-- =============== container end =============== --> */}
</section>

    );
};

export default ContactSection;