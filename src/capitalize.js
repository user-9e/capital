const capitalize = (txt) => {
    if (txt === '') {
        return ''
    };
    const [firstChar, ...restChars] = txt;
    return `${firstChar.toUpperCase()}${restChars.join('')}`;
};

export { capitalize };