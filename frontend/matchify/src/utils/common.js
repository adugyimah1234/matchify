export const isProduction = process.env.REACT_APP_ENV === 'production';
export const getBaseURL = () => {
    return isProduction ? 'http://localhost:5000/' : 'http://localhost:5000/';
}

export const getAPIURL = (apiURL) => {
    return getBaseURL() + apiURL;
}