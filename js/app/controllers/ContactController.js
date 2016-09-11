function ContactController(){
  var vm = this;

  vm.name = "Jason";
  vm.email = "jason@kwong.com";
  vm.phone = "666-666-6666";

  this.changeName = function(){
    vm.name = "JASONKWONG!!!";
  }

}

angular
  .module('app')
  .controller('ContactController', ContactController);