[![npm](https://img.shields.io/npm/v/pugserver.svg?style=flat-square)](https://www.npmjs.com/package/pugserver)
[![licence](https://img.shields.io/npm/l/pugserver.svg?style=flat-square)](https://github.com/ctrlaltdev/pug-server/blob/master/LICENCE.md)
[![GitHub tag](https://img.shields.io/github/tag/ctrlaltdev/pug-server.svg?style=flat-square)](https://github.com/ctrlaltdev/pug-server/tags)
[![GitHub release](https://img.shields.io/github/release/ctrlaltdev/pug-server.svg?style=flat-square)](https://github.com/ctrlaltdev/pug-server/releases)
[![I love badges](https://img.shields.io/badge/I%20love-badges-FF00FF.svg?style=flat-square)](https://shields.io)

### Pug Server
Basic [`pug`](https://pugjs.org) file server. Ideal for building local prototypes apart from any application. All other files are served statically as they usually would.

installation
``` sh
npm install -g pugserver
```

create a folder

    + myfolder/
      - index.pug
      - example.css
      - example.js

usage
``` sh
pugserver path/to/myfolder
```

open your browser to [http://localhost:8080/index.pug](http://localhost:8080/index.pug)

The path argument is optional. If not present it will default to current directory.
You can choose to run your server on another port than 8080, to do so, use the -p flag followed by the port number: `pugserver -p 1337`
