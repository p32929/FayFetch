"use strict";

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
};

const FayFetch = {
  get: function (url, params, headers, callback) {
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
  },
  post: function (url, params, headers, body, callback) {
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
  },
  put: function (url, params, headers, body, callback) {
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
  },
  deletee: function (url, params, headers, callback) {
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
  },
  upload: function (url, params, fileKeyString, fileObj, callback) {
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
  },
  uploadUsingFormData: function (url, params, formData, callback) {
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
};

console.debug("OKay FayFetch");

exports.FayFetch = FayFetch;
