const endpoints = {
    base: 'http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api',
    getAll: '/cakes',
    getOne: id => `/cakes/${id}`,
    postOne: '/cakes',
    putOne: id => `/cakes/${id}`,
    deleteOne: id => `/cakes/${id}`,
}

const fetchWrapper = (url, method) => {
    return fetch(url, {
        method: method,
    }).then(response => {
        if(response.ok){
            return response.json();
        }
    });
}

const fetchWithNoResponseWrapper = (url, method) => {
    return fetch(url, {
        method: method,
    }).then(response => {
        if(response.ok){
            return 'Successfully deleted';
        }
    });
}

const fetchWithBodyWrapper = (url, method, body) => {
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: {
            'content-type': 'application/json'
        },
    }).then(response => {
        if(response.ok){
            return response.json();
        }
    });
}

export const getCakes = () => {
    const url = `${endpoints.base}${endpoints.getAll}`;
    const method = 'GET';
    return fetchWrapper(url, method);
}

export const getCake = (id) => {
    const url = `${endpoints.base}${endpoints.getOne(id)}`;
    const method = 'GET';
    return fetchWrapper(url, method);
}

export const createCake = (body) => {
    const url = `${endpoints.base}${endpoints.postOne}`;
    const method = 'POST';
    return fetchWithBodyWrapper(url, method, body);
}

export const updateCake = (id, body) => {
    const url = `${endpoints.base}${endpoints.putOne(id)}`;
    const method = 'PUT';
    return fetchWithBodyWrapper(url, method, body);
}

export const deleteCake = (id) => {
    const url = `${endpoints.base}${endpoints.deleteOne(id)}`;
    const method = 'DELETE';
    return fetchWithNoResponseWrapper(url, method);
}
