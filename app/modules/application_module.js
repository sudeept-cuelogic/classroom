const application = (function () {

    const phoneDir = JSON.parse(window.localStorage.phoneDir || '[]');
    const emailDir = JSON.parse(window.localStorage.emailDir || '[]');

    const _parseData = function (data) {

        return new Promise((resolve, reject) => {

            try {

                Object.keys(data).map((email) => {

                    if (!window.localStorage.getItem(email)) {

                        window.localStorage.setItem(email, JSON.stringify(data[email]));

                    }
                    if (data[email]['phone'] && !phoneDir.includes(data[email]['phone'])) {

                        phoneDir.push(data[email]['phone']);

                    }
                    if (!emailDir.includes(email)) {

                        emailDir.push(email);

                    }

                });
                resolve(window.localStorage);

            } catch (err) {

                reject(err);

            }

        });

    };

    const _saveLocalStorage = function () {

        window.localStorage.setItem('phoneDir', JSON.stringify(phoneDir));
        window.localStorage.setItem('emailDir', JSON.stringify(emailDir));

    };

    const _initializeData = (function () {

        _parseData(students[0]).then((studentData) => {

            console.log('Student data has been parse and saved successfully', studentData);
            _parseData(teachers[0]).then((teacherData) => {

                console.log('Teachers data has been parse and saved successfully', teacherData);
                _saveLocalStorage();

            }, (err) => {

                console.log('Error occured while parsing data and further execution halted', err);

            });

        }, (err) => {

            console.log('Error occured while parsing data and further execution halted', err);

        });

    })();

})();
