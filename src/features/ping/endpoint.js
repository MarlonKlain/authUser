export function endpoint(_, reply) {
    return reply.code(200).send({
        //the send property sends a payload as response for the request.
        //payload can be the in the both sides: request and response.
        //a payload refers to the actual data being sent or received in a transmission — the useful information — excluding metadata like headers, routing info, or protocol overhead.
        ping: "pong!"
    })
}