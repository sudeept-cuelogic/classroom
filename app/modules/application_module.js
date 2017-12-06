var application = (function() {
  let phones = JSON.parse(localStorage.phones || '[]')
  let emails = JSON.parse(localStorage.emails || '[]')

  var _initializeData = (function () {
    _parseData(students);
    _parseData(teachers);
    _saveLocalStorage();
  })();

  function _parseData (data) {
    Object.keys(data).map( (email) => {
      localStorage.setItem(email, JSON.stringify(data[email]));
      if (!phones.includes(data[email]['phone'])) {
        phones.push(data[email]['phone']);
      }
      if (!emails.includes(email)) {
        emails.push(email);
      }
    });
  };

  function _saveLocalStorage() {
    localStorage.setItem('phones', JSON.stringify(phones));
    localStorage.setItem('emails', JSON.stringify(emails));
  }
})();
