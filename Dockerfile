FROM parseplatform/parse-server

LABEL maintainer="kkon@handmadeapps.tech"

COPY parseconfig.json /parse-server/config

# Install SMTP and Filesystem adapters
RUN npm install --save simple-parse-smtp-adapter
RUN npm install --save @parse/fs-files-adapter
RUN npm install --save parse-server-mailgun
RUN npm install --save parse-server-sendgrid-adapter
