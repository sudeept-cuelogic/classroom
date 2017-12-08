const user = (() => {

    const currentEmail = window.sessionStorage.getItem('email');
    const currentUser = JSON.parse(window.localStorage.getItem(currentEmail) || '{}');

    // Private method to check if user has valid session or not
    const _checkValidSession = function () {

        let validSession = true;

        if (!window.sessionStorage.email) {

            validSession = false;

        } else {

            const sessionUser = JSON.parse(window.localStorage.getItem(window.sessionStorage.email));

            validSession = (sessionUser.role === window.sessionStorage.getItem('role') &&
                window.location.href.match(/[\w]+.html/)[0].match(/[\w]+/)[0] === window.sessionStorage.getItem('role'));

        }
        if (!validSession) {

            window.location.href = 'application.html';

        }

    };

    window.onload = _checkValidSession;

    const editProfile = function () {

        currentUser.firstName = document.getElementById('firstName').value;
        currentUser.lastName = document.getElementById('lastName').value;
        currentUser.phone = document.getElementById('phone').value;

        window.localStorage.setItem(currentEmail, JSON.stringify(currentUser));

    };

    return {

        currentEmail,
        currentUser,
        editProfile

    };

})();
