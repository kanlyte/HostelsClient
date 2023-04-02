//Validate email
export const validateEmail = (email) => {
    const validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email?.match(validRegex)) {
        return true;
    } else {
        return false;
    }
};

//phone number validation
export const validatePhone = (number) => {
    const validRegx =
        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
    if (number ?.match(validRegx)) {
        return true;
    } else {
        return false;
    }
};


// full phone number validation javascript
export const validateNumberTwo = (number) => {
    const validRegx =
        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
    if (number ?.slice(0, 1) !== "+") {
        return false;
    } else {
        if (number ?.match(validRegx)) {
            return true;
        } else {
            return false;
        }
    }
};