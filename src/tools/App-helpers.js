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

AppHelpers.initSlider = (id)=> {
   setTimeout(()=>{
      window.$(`#${id}`).owlCarousel({
            autoPlay: 3000,
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3]
      });
   }, 500);
};

AppHelpers.isValidateEmail = (email) => {
   // eslint-disable-next-line no-useless-escape
   const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
   return re.test(email);
 };

AppHelpers.isValidatePhone = (phone) => {
   const re =  /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/; /// ^[0-9]*.{11,11}$/;
   return re.test(phone);
 };

AppHelpers.randomId = ()=> {
   return  Math.random().toString(36).substring(5);
};

AppHelpers.isEmptyObj = (obj)=> {
   if(obj) return !!(Object.keys(obj).length === 0);
   else return false;
};

export default AppHelpers;