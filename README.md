[![npm](https://img.shields.io/npm/v/pugserver.svg?style=flat-square)](https://www.npmjs.com/package/pugserver)
[![licence](https://img.shields.io/npm/l/pugserver.svg?style=flat-square)](https://github.com/SaschaVoid/pug-server/blob/master/LICENCE.md)
[![GitHub tag](https://img.shields.io/github/tag/SaschaVoid/pug-server.svg?style=flat-square)](https://github.com/SaschaVoid/pug-server/tags)
[![GitHub release](https://img.shields.io/github/release/SaschaVoid/pug-server.svg?style=flat-square)](https://github.com/SaschaVoid/pug-server/releases)
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
cd myfolder
pugserver .
```

open your browser to [http://localhost:8080/index.pug](http://localhost:8080/index.pug)
