export const requestInterceptor = (config) => {
    console.log("Headers : ", config.headers);
    console.log("Method: ",config.method);
    console.log("URL: ",config.baseURL+config.url);

    return config;
};

export const responseInterceptor = (config) => {
    console.log("Request...");
    console.log("Headers: ",config.config.headers);
    console.log("Method: ",config.config.method);
    console.log("URL: ", config.config.baseURL + config.config.url);

    console.log("Response...");
    console.log("Status: ",config.status);
    console.log("Response ", config.data);

    return config;
}

export const responseErrorHandler = error => {
    const originalConfig = error.config;

    if (error?.response?.status === 400) {
        console.log("Request Failed");
    }

    alert(error);

    return Promise.reject(errorObj);
};

export const requestErrorHandler = error => {
    return Promise.reject(error);
}