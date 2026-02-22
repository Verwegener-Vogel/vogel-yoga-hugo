FROM docker.io/alpine:latest
RUN apk add --no-cache hugo

COPY . /src
WORKDIR /src

CMD ["hugo", "server", "--bind", "0.0.0.0"]