///Start section header component 
const SectionHeader = ({title, description}) => {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 wow zoomIn animated headding" data-wow-delay=".1s">
        <h2 dangerouslySetInnerHTML={{__html:title}} ></h2>
        <p>{description}</p>
      </div>
    );
};

export default SectionHeader;