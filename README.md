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
