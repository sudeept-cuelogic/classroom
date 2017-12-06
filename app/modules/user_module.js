var user = (function() {
  var editProfile = function(options) {
    alert(options.message + ' ' + 'profile edited');
  };

  return {
    editProfile: editProfile
  }
})();
