function StaffController(){
  var staffvm = this;

  staffvm.name = "STAFFNAME";
  staffvm.email = "STAFFEMAIL";
  staffvm.phone = "STAFFPHONE";
}

angular
  .module('app')
  .controller("StaffController", StaffController)