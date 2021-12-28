# Nest MicroService example

This projects contains a Nest MicroService example as well as a TCP client to publish a message to the service.

## Installation

Install the dependencies via

```bash
$ npm ci
```

## Running the example

Start the server by executing 

```bash
$ npm run server
```

Similarly, start the client via

```bash
$ npm run client
```

The client will automatically publish an event to the server. Upon successful reception of the message, the server logs

> Test event successfully received