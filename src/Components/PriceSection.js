/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect } from "react-redux";

//Component instance
import SectionHeader from './Common/SectionHeader';


import { planList } from "../services/actions/planListAction";

//Start pricing plan 
const PlanCard = (planInfo) => {
    const planFeatures = (planInfo && planInfo.features) || [];

    return !!planInfo? <div className="col-xs-12 col-sm-4 col-md-4 wow fadeInLeft animated" >
            <div className="price-wrapper ">
              <h3 className="price-title">{planInfo.title}</h3>
              <div className={`price ${planInfo.isStandard?'standard':''}`}>
                <div className="value-box">
                  <div className="value-box-content">
                    <span className="value">
                      <i></i><span className="number">{planInfo.price}</span>
                    </span>
                    { 
                      planInfo.period? <span className="month">{planInfo.period}</span>:<span className="month invisible"></span>
                    }
                  </div>
                </div>

                <div className="content-box">			
                  <ul>
                    {planFeatures.map((feature,index)=>{
                        return  <li key={index} style={{opacity: `${feature.isAvailable? 1:0.5}`}}>{feature.name}</li>
                    })}
                  </ul>
                </div>
                <div className="sign-box">
                  <a href="#"><span>Sign Up</span></a>			
                </div>
              </div>
            </div>
          </div>:null;
};

const PriceSection = ({loading, plans, error}) => {
    const sectionHeaderTitle = `Price <span>List</span>`,
          sectionDescription = "Display your mobile apps awesome features with icon lists and an image carousel of each page. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.";
  
    return (
      <section id="price" className="">
      {/* <!-- =============== container =============== --> */}
        <div className="container">
          <span className="angle2"></span>
          <span className="angle"></span>

          <div className="row">
            
            {/* Section header */}
            <SectionHeader title={sectionHeaderTitle} description={sectionDescription} />

            {/* Start Plan cards here */}
            {plans.map((plan,index)=>{
                return <PlanCard key={index} {...plan} />
            })}
            {/* End Plan cards here */}

          </div>
        </div>   
        {/* <!-- =============== container end =============== -->   */}
      </section>

    );
};

//Get data from state management using by redux
const mapStateToProps = (state) =>({
  loading: state.planListReducer.loading,
  plans: state.planListReducer.plans,
  error: state.planListReducer.error
});

//Binding/Connect the component with redux 
export default connect(mapStateToProps, planList())(PriceSection);