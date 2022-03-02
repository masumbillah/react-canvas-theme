/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from 'react';
import { connect, useDispatch } from "react-redux";

//Component instance
import SectionHeader from './Common/SectionHeader';

import { planList, selectPlan } from "../services/actions/planListAction";
import Modal from './Common/Modal';
import Signup from './Registration/Signup';
import AppHelpers from '../tools/App-helpers';
import useSelectedPlan from '../hooks/useSelectedPlan';

//Start pricing plan 
const PlanCard = (planInfo) => {
    const planFeatures = (planInfo && planInfo.features) || [];
    const {showModal} = planInfo;

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
                   {/* eslint-disable-next-line no-script-url */}
                  <a onClick={(e)=>showModal(e, planInfo.id)} href="#" ><span>Sign Up</span></a>			
                </div>
              </div>
            </div>
          </div>:null;
};

const PriceSection = ({loading, plans, error}) => {
    const modalId = 'selectedPlanModal',
          sectionHeaderTitle = `Price <span>List</span>`,
          sectionDescription = "Display your mobile apps awesome features with icon lists and an image carousel of each page. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.";
    
    const planList = plans;
    const dispatch = useDispatch();

    //
    const [selectedPlanId, setSelectedPlanId] = useState(null);
    dispatch(selectPlan(useSelectedPlan(selectedPlanId, planList)));
    
    //Selected plan handlder for buy/signup
    const modalHandler = (e, planId) => {
      e.preventDefault();
      AppHelpers.openModal(modalId);
      setSelectedPlanId(planId);
    };

    //Modal properties options
    const modalOptions = {
      title: 'Sign Up',
      maxWidth: 350,
      component: <Signup modalId={modalId} />,
    };

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
                return <PlanCard key={index} {...plan} showModal={modalHandler} />
            })}
            {/* End Plan cards here */}

          </div>
        </div>   
        
        {/* <!-- =============== container end =============== -->   */}
        <Modal modalId={modalId} options={modalOptions} />
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