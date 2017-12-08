var application = (function() {
  let phone_dir = JSON.parse(window.localStorage.phone_dir || '[]')
  let email_dir = JSON.parse(window.localStorage.email_dir || '[]')

  var _parseData = function (data) {
    return new Promise(function(resolve, reject) {
      try {
        Object.keys(data).map( (email) => {
          if (!window.localStorage.getItem(email)) {
            window.localStorage.setItem(email, JSON.stringify(data[email]));
          }
          if (data[email]['phone'] && !phone_dir.includes(data[email]['phone'])) {
            phone_dir.push(data[email]['phone']);
          }
          if (!email_dir.includes(email)) {
            email_dir.push(email);
          }
        });
        resolve(window.localStorage);
      } catch(err) {
        reject(err)
      }
    });
  };

  var _saveLocalStorage = function () {
    window.localStorage.setItem('phone_dir', JSON.stringify(phone_dir));
    window.localStorage.setItem('email_dir', JSON.stringify(email_dir));
  }

  var _initializeData = (function () {
    _parseData(students[0]).then(function(obj) {
      console.log('Student data has been parse and saved successfully', obj);
      _parseData(teachers[0]).then(function(obj) {
        console.log('Teachers data has been parse and saved successfully', obj);
        _saveLocalStorage();
      }, function(err) {
        console.log('Error occured while parsing data and further execution halted', err);
      });
    }, function(err) {
      console.log('Error occured while parsing data and further execution halted', err);
    });
  })();
})();
