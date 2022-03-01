const AppHelpers = {};

AppHelpers.openModal = (modalId)=> {
   window.$(`#${modalId}`).modal('show');
};

AppHelpers.closeModal = (modalId, cb)=> {
   window.$(`#${modalId}`).modal('hide');
};

AppHelpers.closeModalTrigger = (modalId, cb)=> {
    window.$(`#${modalId}`).on('hidden.bs.modal', function (e) {
      if(cb) cb(true);
   })
};

AppHelpers.randomId = ()=> {
   return  Math.random().toString(36).substring(5);
};

AppHelpers.isEmptyObj = (obj)=> {
   if(obj) return !!(Object.keys(obj).length === 0);
   else return false;
};

export default AppHelpers;