var session = (function () {
  let phone_dir = JSON.parse(window.localStorage.getItem('phone_dir') || '[]');
  let email_dir = JSON.parse(window.localStorage.getItem('email_dir') || '[]');

  var _isPhonePresent = function(phone) {
    return phone_dir.includes(phone);
  };

  var _isEmailPresent = function (email) {
    return email_dir.includes(email);
  };

  var _saveLocalStorage = function(options) {
    window.localStorage.setItem('phone_dir', JSON.stringify(phone_dir));
    window.localStorage.setItem('email_dir', JSON.stringify(email_dir));
    window.localStorage.setItem(options['email'], JSON.stringify(options));
  };

  var _writeToJsonFile = function(students) {
    debugger
  };

  var _updatePhoneDir = function(phone) {
    if (phone && !phone_dir.includes(phone)) {
      phone_dir.push(phone);
    }
  };

  var _updateEmailDir = function(email) {
    if (email && !email_dir.includes(email)) {
      email_dir.push(email);
    }
  };

  var _getFormData = function(keys) {
    let formData = {};
    keys.map((id) => {
      formData[id] = document.getElementById(id).value;
    });
    return formData;
  };

  var _isValidSession = function (data, role) {
    let user = JSON.parse(window.localStorage.getItem(data['login_email']));
    return user.password == data['login_password'] && user.role == role
  };

  var _setSession = function(data, role) {
    window.sessionStorage.setItem('email', data['login_email']);
    window.sessionStorage.setItem('role', role);
  };

  var login = function () {
    let optionKeys = ['login_email', 'login_password'];
    let formData = _getFormData(optionKeys);
    let role = document.querySelector('input[name="role"]:checked');
    if (!role) {
      alert('Please select role!!');
    } else if (_isValidSession(formData, role.value)) {
      _setSession(formData, role.value);
      document.getElementById(role.value).click();
    } else {
      alert('Email and password does not match for selected role, Please check!!');
    }
  };

  var register = function () {
    let optionKeys = ['firstName', 'lastName', 'email', 'phone', 'password'];
    let formData = _getFormData(optionKeys);
    formData['role'] = 'student';

    if (_isEmailPresent(formData.email)) {
      alert('Email ID already present!!');
    } else if(_isPhonePresent(formData.phone)) {
      alert('Phone number entered is already present!!');
    } else {
      _updatePhoneDir(formData['phone']);
      _updateEmailDir(formData['email']);
      _saveLocalStorage(formData);
      students[0][formData[email]] = formData;
      _writeToJsonFile(students);
    }
  };

  return {
    login: login,
    register: register
  };
})();
