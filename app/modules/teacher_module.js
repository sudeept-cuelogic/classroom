const teacher = (function () {

    const _studentList = function () {

        const myTeachers = [];
        const students = user.currentUser.studentsData;

        if (!students) {

            return [];

        }
        students.map((studentEmail) => {

            myTeachers.push(
                JSON.parse(window.localStorage.getItem(studentEmail))
            );

        });

        return myTeachers;

    };

    const addStudent = function () {

        const student = JSON.parse(window.localStorage.getItem(document.getElementById('email').value));

        if (!student) {

            alert('Student with given email not found!!');

            return;

        }
        if (!user.currentUser.studentsData.includes(student.email)) {

            user.currentUser.studentsData.push(student.email);
            window.localStorage.setItem(user.currentEmail, JSON.stringify(user.currentUser));

        }

    };

    const showStudents = function () {

        const studentsList = _studentList();
        let inputHtml = '<table><tr><th>First Name</th><th>Last Name</th><th>Email</th></tr>';

        studentsList.map((student) => {

            inputHtml += `<tr><td>${student.firstName}</td><td>${student.lastName}</td><td>${student.email}</td></tr>`;

        });
        inputHtml += '</table>';
        document.getElementById('studentsList').insertAdjacentHTML('afterbegin', inputHtml);

    };

    return {

        addStudent,
        editProfile: user.editProfile,
        showStudents

    };

})();
