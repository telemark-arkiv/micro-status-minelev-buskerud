[![Build Status](https://travis-ci.org/telemark/micro-status-minelev-buskerud.svg?branch=master)](https://travis-ci.org/telemark/micro-status-minelev-buskerud)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# micro-status-minelev-buskerud

[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/micro-status-minelev-buskerud.svg)](https://greenkeeper.io/)
Status for MinElev Buskerud

## API

### **/raw**

Returns json from firebase

#### GET

```bash
$ curl https://bfk.minelev.status.t-fk.win/raw
```

### **/json**

Returns json of formatted data.

#### GET

```bash
$ curl https://bfk.minelev.status.t-fk.win/json
```

### **/html**

Renders formatted data to html. 

#### GET

```bash
$ curl https://bfk.minelev.status.t-fk.win/html
```

## License
[MIT](LICENSE)

![alt text](https://robots.kebabstudios.party/micro-status-minelev-buskerud.png "Robohash image of micro-status-minelev-buskerud")