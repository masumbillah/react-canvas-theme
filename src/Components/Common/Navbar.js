/* eslint-disable jsx-a11y/anchor-is-valid */
//Load Resource data from json file. It will be api or somethings else.
import navData from '../../resources/navbar.json';

///Start Navbar component 
const Navbar = () => {
    //Set variable value from resource data.
    const {logo, menus} = navData; 

    return (
        <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="container-fluid">
                    {/* <!-- Brand and toggle get grouped htmlFor better mobile display --> */}
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">{ logo && logo.title }</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">
                          <img src={logo && logo.url} alt={logo && logo.title} />
                        </a>
                    </div>

                    {/* <!-- Collect the nav links, forms, and other content htmlFor toggling --> */}
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            {menus.map((menu,index)=>{
                                return <li key={index}> <a className="page-scroll" href={menu.url}>{menu.name}</a> </li>
                            })}
                        </ul>
                    </div>
                    {/* <!-- =============== navbar-collapse =============== --> */}

                </div>
            </div>
            {/* <!-- =============== container-fluid =============== --> */}
        </nav>
    );
};

export default Navbar;