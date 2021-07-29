const constants =  {
    error: 'Error',
    success: 'Success',
    unableToReach: 'Unable to reach the server. Kindly check your internet connection',
    cancel: 'Cancel',
    errorMessages: {
        NO_NETWORK_CONNECTION: {
            TITLE: 'Network Error',
            MESSAGE: 'No Internet Connectivity',
        },
        GENERAL_ERROR: {
            TITLE: 'Error',
            MESSAGE: 'Sorry! There seems to be some problem at the moment. Please try later!',
        },
        UNAUTORIZED: {
            MESSAGE: 'You are not authorized',
        },
        FORBIDDEN: {
            MESSAGE: 'Request is forbidden',
        },
        REQUEST_NOT_FOUND: {
            MESSAGE: 'Request not found',
        },
        METHOD_NOT_ALLOWED: {
            MESSAGE: 'Method Not Allowed',
        },
        REQUEST_TIMEOUT: {
            MESSAGE: 'Request Timed Out',
        },
        INVALID_INPUTS: {
            MESSAGE: 'Inputs are not valid',
        }
    },
};

export default constants;