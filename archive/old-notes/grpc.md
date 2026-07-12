REST APIs
- Rest is an architectural pattern which follows the concept of state transfer
- It means that the client maintains all the information about the current session while the server is stateless
- When the client has to change the current state of the session, the client sends set of changes to server which incorporates these changes
- The server does not remember any information from previous requests, thus does not maintain a state, thus stateless
- Client communicates with server through HTTP requests(GET, PUT, DELETE, etc), data is exchanged from client to server(say PUT request) and from server to client(response to request) mostly through JSON/XML
-
- Look at example from 10:20 to 12:30 on https://www.youtube.com/watch?v=ZDUA5pD50Ok (gRPC vs Rest from google)
- In the example client maintains the next id that has to be fetched
- Client sends a get request using URL and id in the URL. 
- The server is stateless. It's job is to see the id passed fetch the required resources using services and return the information and the next id using JSON. Once this information is communicated, the server does not remember anything about this request. It is now the client's reponsibility to parse the next_id from the response and use it for making the next request.
- 
- REST api's do not take advantage of the bidirectional, streaming communication of HTTP2
-
- If API at the server changes, changes have to be made everywhere teh API is used. This is not scalable as the number of APIs rises.
-
- Since the clients for a given server handle the states similarly, client libraries have to be written in multiple languages to avoid same problem for all clients.
- See client sdie integration among other parts: https://www.freecodecamp.org/news/rest-is-the-new-soap-97ff6c09896d/

gRPC:
- API defned first. Defined using protobuf as IDL(interface Design Language)
-
- Advantages over Rest(multiplxing, no resource waiting, client library standardization), advantage over RCP(client codde standardization):
-
-
