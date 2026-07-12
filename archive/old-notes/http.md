HTTP: Application layer protocol for communication between nodes
        Note: Sequence of protocol layers: Application > Transport > Network > Data Link Layer

HTTP1.1 vs HTTP2
The application layer is slightly different between HTTP1.1 and HTTP 2. In HTTP2, there is an additional lower layer in the application layer which converts the request and response payload to specialized binary frames - these binary framses help in radically changing the delivery mechanism of the frames. 
Since, the application level API still creates messages in coventional HTTP format, backward compatibility is maintained.

How binarized Framing helps in speeding HTTP? (Why HTTP2 is beter than HTTP1.1)
    In HTTP(both 1 and 2), the response to the first GET statement for a URL often returns a list of resources required to render the page. The client has to make additional calls to fetch these resources for rendering. 
    In HTTP1 Suppose the client receives a request for a resource and it takes a lot of time to process by server, in the meantime the server can not return a different resource requested later as the client will have no idea if it got resource1 or resource2. This causes Head of line blocking i.e. resource requestd first has to be returned first. Hence time to process request increases.
    HTTP1.1 tries to circumvent this problem by establishing multiple TCP connections (like one for each resource fetch) between client and server but this requires additional resources and the TCP connections are thus limited.
    HTTP2 solves this problem by binary framing the data. Frames belonging to the same resource are tagged/categorized into a stream. So for single TCP connection, the client can send requests and even if one of the resource is blocking the server can serve the other resources. The client disambiguates between resources by checking the frames to be belong to a resource stream. Thus within a single TCP connection, communication is possible on multiple "channels" at once. This is called
multiplexing and it is the major advantage of HTTP2 over HTTP1.1.

Buffer Overflow due to multiple streams:
    Since HTTP2 has multiple streams communicating at the same time over the TCP layer, the TCP buffer maintained at the TCP layer will get overwhelmed and limit the rate of communication. This is tackled by HTTP2 by introducing buffers at the lower application layer. These additional buffers receive data stream-wise and relieve the buffers at the TCP layer to continue smooth communication

Since Streams are marked, one stream may be prioritized for communication over the other.

REF: https://www.digitalocean.com/community/tutorials/http-1-1-vs-http-2-what-s-the-difference

