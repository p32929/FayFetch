# fayfetch

A tiny wrapper around [node-fetch](https://www.npmjs.com/package/node-fetch) for Node.js and React that makes API calls one line each. Plain `fetch` makes you build the query string, set headers, stringify the body and parse the JSON every time. With fayfetch you pass params, headers and body as plain objects and get the parsed JSON back in a callback. File upload helpers are included.

On npm: **[fayfetch](https://www.npmjs.com/package/fayfetch)**

## What you can call

| Call | Purpose |
|---|---|
| `FayFetch.get(url, params, headers, callback)` | GET |
| `FayFetch.post(url, params, headers, body, callback)` | POST |
| `FayFetch.put(url, params, headers, body, callback)` | PUT |
| `FayFetch.deletee(url, params, headers, callback)` | DELETE (yes, three e's — `delete` is a reserved word) |
| `FayFetch.upload(url, params, fileKeyString, fileObj, callback)` | Single file upload |
| `FayFetch.uploadUsingFormData(url, params, formData, callback)` | Upload an existing `FormData` |

Every callback gets `(status, jsonData, ok)`.

## Install

```bash
npm install fayfetch
```

## How to use

Here is an example with every call:

```js
const { FayFetch } = require('fayfetch')
// or
import {FayFetch} from 'fayfetch'

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

## License

MIT License — Copyright (c) 2020 Fayaz Bin Salam. See [LICENSE](LICENSE) for the full text.

## Contributing

Contributions are very welcome, thank you! Before you start on a pull request, please open an issue and tell me what you would like to add or change. That way we can agree on it first, and your time is not wasted on something that might not fit.

## Share

<a href="https://p32929.github.io/share/?repo=FayFetch"><img src="https://p32929.github.io/readme/share.svg" alt="Share this with your friends in just a click" width="420"></a>

## Support

<a href="https://p32929.github.io/support/"><img src="https://p32929.github.io/readme/support.svg" alt="If you like my works and want to support me, feel free to support" width="420"></a>
