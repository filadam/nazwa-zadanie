export const postalCodeAutoFormat = (postalCode) => {
    const number = postalCode.trim().replace(/[^0-9]/g, "");

    if (number.length < 3) return number;
    if (number.length < 6) return number.replace(/(\d{2})(\d{1})/, "$1-$2");
};
