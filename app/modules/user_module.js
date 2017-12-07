var user = (function() {
  // Private method to check if user has valid session or not
  var _checkValidSession = function() {
    let validSession = true;
    if(!window.sessionStorage.email) {
      validSession = false;
    } else {
      let user = JSON.parse(window.localStorage.getItem(window.sessionStorage.email));
      validSession = (user.role == window.sessionStorage.getItem('role') &&
          window.location.href.match(/[\w]+.html/)[0].match(/[\w]+/)[0] == window.sessionStorage.getItem('role'));
    }
    if (!validSession) {
      document.getElementById('application').click();
    }
  };

  window.onload = _checkValidSession;

  var editProfile = function() {
    let currentEmail = window.sessionStorage.email;
    let currentUser = JSON.parse(window.localStorage.getItem(currentEmail));

    currentUser.firstName = document.getElementById('firstName').value;
    currentUser.lastName = document.getElementById('lastName').value;
    currentUser.phone = document.getElementById('phone').value;

    window.localStorage.setItem(currentEmail, JSON.stringify(currentUser));
  };

  return {
    editProfile: editProfile,
  }
})();
