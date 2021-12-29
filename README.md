# Nest MicroService example

This projects contains a Nest MicroService example as well as a client to publish a message to the service.

## Prerequisites

### Install dependencies
Install the dependencies via

```bash
$ npm ci
```

### Redis server
The sample uses the Redis transport layer and expects a server running on the default local url: `redis://localhost:6379`.



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