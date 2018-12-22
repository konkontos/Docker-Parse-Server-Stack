# Overview

Docker Application for running a [Parseplatform.org](http://parseplatform.org) Server.

Comes with MongoDB, Parse Dashboard, and SSL httpd proxy.

Based on [Bitnami](https://bitnami.com/stack/parse/containers) images.

# Quick Test

## Direct to server:

```
curl -X GET \
-H "X-Parse-Application-Id: parseapp" \
-H "Content-Type: application/json" \
-d '{}' \
http://[hostname]:1337/parse/classes/WallPost
```

## Via SSL Proxy:

```
curl -X GET \
-H "X-Parse-Application-Id: parseapp" \
-H "Content-Type: application/json" \
-d '{}' \
-k \
https://[hostname]/parse/classes/WallPost
```


### More documentation to be added…
