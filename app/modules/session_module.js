var session = (function () {
  var login = function () {
    alert('login clicked');
  };

  var register = function () {
    alert('registration clicked');
  };

  var checkValidSession = function () {

  };

  return {
    login: login,
    register: register,
    checkSession: checkValidSession
  };
})();
