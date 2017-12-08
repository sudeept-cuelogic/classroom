const student = (function () {

    const _teacherList = function () {

        const teachers = user.currentUser.teachersData;
        const myTeachers = [];

        if (!teachers) {

            return [];

        }

        teachers.map((teacherEmail) => {

            myTeachers.push(
                JSON.parse(window.localStorage.getItem(teacherEmail))
            );

        });

        return myTeachers;

    };

    const showTeachers = function () {

        const teachersList = _teacherList();
        let inputHtml = '<table><tr><th>First Name</th><th>Last Name</th><th>Email</th></tr>';

        teachersList.map((teacher) => {

            inputHtml += `<tr><td>${teacher.firstName}</td><td>${teacher.lastName}</td><td>${teacher.email}</td></tr>`;

        });
        inputHtml += '</table>';
        document.getElementById('teachersList').insertAdjacentHTML('afterbegin', inputHtml);

    };

    return {

        editProfile: user.editProfile,
        showTeachers

    };

})();
