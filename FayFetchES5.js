"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FayFetch = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
const fetch = require('node-fetch'); //


const GET = "GET";
const POST = "POST";
const PUT = "PUT";
const DELETE = "DELETE"; //

const afterFetchDone = (fetchObj, callback) => {
  // Callback(status, jsonData, okay)
  fetchObj.then(res => Promise.all([res.status, res.json()])).then(([status, jsonData]) => {
    const ok = status < 400;
    console.log(jsonData);
    console.log(status);

    if (callback) {
      callback(status, jsonData, ok);
    }
  }).catch(e => {
    console.log(e.toString());

    if (callback) {
      callback(520, {
        error: e
      }, false);
    }
  });
}; //


class FayFetch {
  static uploadUsingFormData(url, params, formData, callback) {
    if (params) {
      params = new URLSearchParams(params);
      url = url + "?" + params;
    }

    const fetchObj = fetch(url, {
      method: POST,
      headers: {
        "Content-Type": "application/json"
      },
      body: formData
    });
    afterFetchDone(fetchObj, callback);
  }

}

exports.FayFetch = FayFetch;

_defineProperty(FayFetch, "get", (url, params, headers, callback) => {
  if (params) {
    params = new URLSearchParams(params);
    url = url + "?" + params;
  }

  const fetchObj = fetch(url, {
    method: GET,
    headers: new fetch.Headers({ ...headers,
      "Content-Type": "application/json"
    })
  });
  afterFetchDone(fetchObj, callback);
});

_defineProperty(FayFetch, "post", (url, params, headers, body, callback) => {
  if (params) {
    params = new URLSearchParams(params);
    url = url + "?" + params;
  }

  const fetchObj = fetch(url, {
    method: POST,
    headers: new fetch.Headers({ ...headers,
      "Content-Type": "application/json"
    }),
    body: JSON.stringify({ ...body
    })
  });
  afterFetchDone(fetchObj, callback);
});

_defineProperty(FayFetch, "put", (url, params, headers, body, callback) => {
  if (params) {
    params = new URLSearchParams(params);
    url = url + "?" + params;
  }

  const fetchObj = fetch(url, {
    method: PUT,
    headers: new fetch.Headers({ ...headers,
      "Content-Type": "application/json"
    }),
    body: JSON.stringify({ ...body
    })
  });
  afterFetchDone(fetchObj, callback);
});

_defineProperty(FayFetch, "deletee", (url, params, headers, callback) => {
  if (params) {
    params = new URLSearchParams(params);
    url = url + "?" + params;
  }

  const fetchObj = fetch(url, {
    method: DELETE,
    headers: new fetch.Headers({ ...headers,
      "Content-Type": "application/json"
    })
  });
  afterFetchDone(fetchObj, callback);
});

_defineProperty(FayFetch, "upload", (url, params, fileKeyString, fileObj, callback) => {
  if (params) {
    params = new URLSearchParams(params);
    url = url + "?" + params;
  }

  var formData = new FormData();
  formData.append('type', 'file');
  formData.append(fileKeyString, fileObj);
  const fetchObj = fetch(url, {
    method: POST,
    headers: {
      "Content-Type": "application/json"
    },
    body: formData
  });
  afterFetchDone(fetchObj, callback);
});

console.log("FayFetch -- Success!!!");