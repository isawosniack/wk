export const ENV = {
    apiUrl: 'http://localhost:3000/api' // URL backend
}

export const environment = {
    production: false,
    ENDPOINT_ARTWORK: `${ENV.apiUrl}/artworks`,
    ENDPOINT_TYPE: `${ENV.apiUrl}/artworks/type`,
    ENDPOINT_CATEGORY: `${ENV.apiUrl}/artworks/category`
};
