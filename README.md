# FayFetch

A simple wrapper for Fetch ( https://www.npmjs.com/package/node-fetch )

## How to use

Take a look at this example

```
const { FayFetch } = require('./FayFetchES5.js')
// or 
import {FayFetch} from "../Others/FayFetch";

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
FayFetch.post(url, params, headers, body, callback);

//
FayFetch.put(url, params, headers, body, callback);

//
FayFetch.deletee(url, params, headers, callback);

//
FayFetch.upload(url, params, fileKeyString, fileObj, callback);

//
FayFetch.uploadUsingFormData(url, params, formData, callback);

```

## LICENSE

```
MIT License

Copyright (c) 2020 Fayaz Bin Salam

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

```
