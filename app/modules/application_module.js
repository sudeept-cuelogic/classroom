var application = (function() {
  let phone_dir = JSON.parse(localStorage.phone_dir || '[]')
  let email_dir = JSON.parse(localStorage.email_dir || '[]')

  var _parseData = function (data) {
    Object.keys(data).map( (email) => {
      localStorage.setItem(email, JSON.stringify(data[email]));
      if (data[email]['phone'] && !phone_dir.includes(data[email]['phone'])) {
        phone_dir.push(data[email]['phone']);
      }
      if (!email_dir.includes(email)) {
        email_dir.push(email);
      }
    });
  };

  var _saveLocalStorage = function () {
    localStorage.setItem('phone_dir', JSON.stringify(phone_dir));
    localStorage.setItem('email_dir', JSON.stringify(email_dir));
  }

  var _initializeData = (function () {
    _parseData(students[0]);
    _parseData(teachers[0]);
    _saveLocalStorage();
  })();
})();
