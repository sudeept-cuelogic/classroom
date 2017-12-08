const session = (function () {

    const phoneDir = JSON.parse(window.localStorage.getItem('phoneDir') || '[]');
    const emailDir = JSON.parse(window.localStorage.getItem('emailDir') || '[]');

    const _isPhonePresent = function ({phone}) {

        return phoneDir.includes(phone);

    };

    const _isEmailPresent = function ({email}) {

        return emailDir.includes(email);

    };

    const _saveLocalStorage = function (options) {

        window.localStorage.setItem('phoneDir', JSON.stringify(phoneDir));
        window.localStorage.setItem('emailDir', JSON.stringify(emailDir));
        window.localStorage.setItem(options['email'], JSON.stringify(options));

    };

    const _updatePhoneDir = function ({phone}) {

        if (phone && !phoneDir.includes(phone)) {

            phoneDir.push(phone);

        }

    };

    const _updateEmailDir = function ({email}) {

        if (email && !emailDir.includes(email)) {

            emailDir.push(email);

        }

    };

    const _getFormData = function (keys) {

        const formData = {};

        keys.map((id) => {

            formData[id] = document.getElementById(id).value;

        });

        return formData;

    };

    const _isValidSession = function (data, role) {

        const user = JSON.parse(window.localStorage.getItem(data['login_email']));

        return user.password === data['login_password'] && user.role === role;

    };

    const _setSession = function (data, role) {

        window.sessionStorage.setItem('email', data['login_email']);
        window.sessionStorage.setItem('role', role);

    };

    const login = function () {

        const optionKeys = ['login_email', 'login_password'];
        const formData = _getFormData(optionKeys);
        const role = document.querySelector('input[name="role"]:checked');

        if (!role) {

            alert('Please select role!!');

        } else if (_isValidSession(formData, role.value)) {

            _setSession(formData, role.value);
            window.location.href = `${role.value}.html`;

        } else {

            alert('Email and password does not match for selected role, Please check!!');

        }

    };

    const register = function () {

        const optionKeys = ['firstName', 'lastName', 'email', 'phone', 'password'];
        const formData = _getFormData(optionKeys);

        formData['role'] = 'student';

        if (_isEmailPresent(formData)) {

            alert('Email ID already present!!');

        } else if (_isPhonePresent(formData)) {

            alert('Phone number entered is already present!!');

        } else {

            _updatePhoneDir(formData);
            _updateEmailDir(formData);
            _saveLocalStorage(formData);
            students[0][formData[email]] = formData;

        }

    };

    return {

        login,
        register

    };

})();
