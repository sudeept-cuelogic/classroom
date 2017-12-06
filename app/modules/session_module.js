var session = (function () {
  let phones = JSON.stringify(localStorage.getItem('phones'));
  let email = J
  var checkValidSession = function () {

  };

  var login = function () {
    alert('login clicked');
  };

  var register = function () {
    let options = {};
    let optionKeys = ['firstName', 'lastName', 'email', 'phone', 'password'];
    optionKeys.map((id) => {
      options[id] = document.getElementById(id).value
    });
    if (_isRegistrationPresent(options.email)) {
      alert('Email ID already present!!');
    } else if(_isPhonePresent(options.phone)) {
      alert('Phone number entered is already present!!');
    } else {
      // add data to students and write json to persist data
      // add new students data to localStorage
    }
  };

  var _isPhonePresent = function(phone) {
    alert(phone);
  };

  var _isRegistrationPresent = function (email) {
    alert(email);
  };

  return {
    login: login,
    register: register,
    checkSession: checkValidSession
  };
})();
