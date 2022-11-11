export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
        // return { Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
        return {'x-access-token': user.accessToken};             // for Node.js Express back-end
    } else {
        return {};
    }
}

// The code above checks Local Storage for user item
// If there is a logged in user with accessToken (JWT),
// return HTTP Authorization header. Otherwise, return an empty object.