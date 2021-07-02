const { FayFetch } = require('./index.js')

var body = {
    "username": "p32929",
    "password": "password"
}
var params = {
    "param1": "param1",
    "param2": "param2",
}

var headers = {
    "header1": "header1"
}

//
const url = "https://api.npoint.io/4d142c7ac93099c77456"
const callback = (status, jsonData, ok) => {
    console.log(`STATUS: ${status}`);
    console.log(`jsonData: ${jsonData}`);
    console.log(`ok: ${ok}`);
    if (ok) {
        // Success
    }
    else {
        // error
    }
}

//
FayFetch.get(url, params, headers, callback);

//
// FayFetch.post(url, params, headers, body, callback);
//
// //
// FayFetch.put(url, params, headers, body, callback);
//
// //
// FayFetch.deletee(url, params, headers, callback);
//
// //
// FayFetch.upload(url, params, fileKeyString, fileObj, callback);
//
// //
// FayFetch.uploadUsingFormData(url, params, formData, callback);
//
