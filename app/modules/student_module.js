var student = (function () {

  var _teacherList = function() {
    let teachers = user.currentUser.teachersData;
    if (!teachers) {
      return []
    }
    let myTeachers = []
    teachers.map((teacherEmail) => {
      myTeachers.push(
        JSON.parse(window.localStorage.getItem(teacherEmail))
      )
    })
    return myTeachers;
  };

  var showTeachers = function() {
    let teachersList = _teacherList();
    let inputHtml = '<table><tr><th>First Name</th><th>Last Name</th><th>Email</th></tr>';
    teachersList.map((teacher) => {
      inputHtml += '<tr><td>' + teacher.firstName + '</td><td>' + teacher.lastName +'</td><td>' + teacher.email + '</td></tr>';
    });
    inputHtml += '</table>';
    document.getElementById('teachersList').insertAdjacentHTML('afterbegin', inputHtml)
  };

  return {
    showTeachers: showTeachers,
    editProfile: user.editProfile
  }
})();
