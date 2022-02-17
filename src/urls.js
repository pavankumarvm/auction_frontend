const localUrl = "http://localhost:8000/api";

// const liveUrl = "https://virtualauction-api.herokuapp.com/";

const apiUrl = localUrl;

// These are all dependent Urls

export const productsUrl = apiUrl + "/products/all";

export const getProductUrl = apiUrl + "/products/get_product/";

export const categoryUrl = apiUrl + "/products/category";

export const loginUrl = apiUrl + "/accounts/login";

export const logoutUrl = apiUrl + "/accounts/logout";

export const registerUrl = apiUrl + "/accounts/register";
