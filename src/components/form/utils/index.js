export const postalCodeAutoFormat = (postalCode) => {
    const number = postalCode.trim().replace(/[^0-9]/g, "");

    if (number.length < 3) return number;
    if (number.length < 6) return number.replace(/(\d{2})(\d{1})/, "$1-$2");
};

export const phoneNumberAutoFormat = (phoneNumber) => {
    const number = phoneNumber.trim().replace(/[^0-9]/g, "");

    if (number.length < 4) return number;
    if (number.length < 7) return number.replace(/(\d{3})(\d{1})/, "$1-$2");
    if (number.length < 11) return number.replace(/(\d{3})(\d{3})(\d{1})/, "$1-$2-$3");
    return number.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
};

export const validateEmail = (email) => {
    const testRegex =  /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    return testRegex.test(email)
}