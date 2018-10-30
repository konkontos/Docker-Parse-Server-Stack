FROM parseplatform/parse-server

LABEL maintainer="kkon@handmadeapps.tech"

# Install SMTP and Filesystem adapters
RUN npm install --save simple-parse-smtp-adapter
RUN npm install --save @parse/fs-files-adapter

