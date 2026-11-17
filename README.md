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

<p><a href="https://p32929.github.io/share/?repo=FayFetch"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/footer-share-dark.svg"><img src="https://p32929.github.io/readme/footer-share-light.svg" width="50%" align="top" alt="Share this project with your friends in one click"></picture></a><a href="https://p32929.github.io/support/"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/footer-support-dark.svg"><img src="https://p32929.github.io/readme/footer-support-light.svg" width="50%" align="top" alt="If you like my work and want to support me, feel free to support"></picture></a><br><a href="https://openstore.pfay.workers.dev/add"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/footer-join-dark.svg"><img src="https://p32929.github.io/readme/footer-join-light.svg" width="100%" align="top" alt="Put your own apps on OpenStore: free, your listing lives in your own repo"></picture></a></p>
