var user = (function() {
  // Private method to check if user has valid session or not
  var _checkValidSession = function() {
    let validSession = true;
    if(!window.sessionStorage.email) {
      validSession = false;
    } else {
      let user = JSON.parse(window.localStorage.getItem(window.sessionStorage.email));
      validSession = (user.role == window.sessionStorage.getItem('role'));
    }
    if (!validSession) {
      document.getElementById('application').click();
    }
  };

  window.onload = _checkValidSession;

  var editProfile = function() {
    alert('Edit Profile called');
  };

  return {
    editProfile: editProfile,
  }
})();
