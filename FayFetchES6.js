/*
MIT License
Copyright (c) 2020 Fayaz Bin Salam ( https://github.com/p32929 )
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

//
const GET = "GET";
const POST = "POST";
const PUT = "PUT";
const DELETE = "DELETE";

//
const afterFetchDone = (fetchObj, callback) => {
    // Callback(status, jsonData, okay)

    fetchObj
        .then(res => Promise.all([res.status, res.json()]))
        .then(([status, jsonData]) => {
            const ok = status < 400;
            console.log(jsonData);
            console.log(status);
            if (callback) {
                callback(status, jsonData, ok)
            }
        })
        .catch((e) => {
            console.log(e.toString());
            if (callback) {
                callback(520, {
                    error: e,
                }, false)
            }
        })
}

//
export class NodeFetchHelper {
    static get = (url, params, headers, callback) => {
        if (params) {
            params = new URLSearchParams(params);
            url = url + "?" + params
        }

        const fetchObj = fetch(url, {
            method: GET,
            headers: new Headers({
                ...headers,
                "Content-Type": "application/json",
            })
        })
        afterFetchDone(fetchObj, callback)
    }

    static post = (url, params, headers, body, callback) => {
        if (params) {
            params = new URLSearchParams(params);
            url = url + "?" + params
        }

        const fetchObj = fetch(url, {
            method: POST,
            headers: new Headers({
                ...headers,
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({
                ...body
            })
        })
        afterFetchDone(fetchObj, callback)
    }

    static put = (url, params, headers, body, callback) => {
        if (params) {
            params = new URLSearchParams(params);
            url = url + "?" + params
        }

        const fetchObj = fetch(url, {
            method: PUT,
            headers: new Headers({
                ...headers,
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({
                ...body
            })
        })
        afterFetchDone(fetchObj, callback)
    }

    static deletee = (url, params, headers, callback) => {
        if (params) {
            params = new URLSearchParams(params);
            url = url + "?" + params
        }

        const fetchObj = fetch(url, {
            method: DELETE,
            headers: new Headers({
                ...headers,
                "Content-Type": "application/json",
            })
        })
        afterFetchDone(fetchObj, callback)
    }

    static upload = (url, params, fileKeyString, fileObj, callback) => {
        if (params) {
            params = new URLSearchParams(params);
            url = url + "?" + params
        }

        var formData = new FormData()
        formData.append('type', 'file')
        formData.append(fileKeyString, fileObj)

        const fetchObj = fetch(url, {
            method: POST,
            headers: {
                "Content-Type": "application/json",
            },
            body: formData
        })
        afterFetchDone(fetchObj, callback)
    }

    static uploadUsingFormData(url, params, formData, callback) {
        if (params) {
            params = new URLSearchParams(params);
            url = url + "?" + params
        }

        const fetchObj = fetch(url, {
            method: POST,
            headers: {
                "Content-Type": "application/json",
            },
            body: formData
        })
        afterFetchDone(fetchObj, callback)
    }
}

console.log("FayFetch -- OKAY")