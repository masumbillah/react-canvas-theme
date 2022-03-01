import React from 'react';

///Start header component 
const GoogleMap = ({customClass}) => {

    return (
      <div className={customClass}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6508922.473104964!2d-123.76275651635396!3d37.19583981824279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCalifornia%2C+United+States!5e0!3m2!1sen!2sin!4v1450994260631" width="100%" height="250" allowFullScreen frameBorder="0" style={{border:0}}></iframe>
      </div>
    );
};

export default GoogleMap;