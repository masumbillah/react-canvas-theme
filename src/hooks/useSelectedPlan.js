import { useEffect, useState } from 'react';

const useSelectedPlan = (planId, plans) => {
    const [selectPlan, setSelectPlan] = useState({});

    useEffect(() => {
        
        const findPlan = () => {
            if(plans && planId) {
                setSelectPlan(plans.find(plan=>plan?.id === planId));                
            }
         };
        findPlan();

    }, [planId, plans]);

    return selectPlan;
};

export default useSelectedPlan;