(() => {

    let promises = {
        submitForm: (postRequest, getRequest) => {
            postRequest()
                .then(response => {
                    console.log('postResponse promises: ', response);

                    getRequest()
                        .then(response => {
                            console.log('getResponse promises: ', response);
                        })
                        .catch(error => {
                            console.error('getError promises: ', error);
                        });
                })
                .catch(error => {
                    console.error('postError promises: ', error);
                });
        }
    };


    module.exports = promises;

})();