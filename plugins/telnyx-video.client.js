import { initialize } from "@telnyx/video";

export default async () => {
  const telnyxClient = await initialize({
    roomId: "<ROOM_ID>",
    clientToken: "<CLIENT_TOKEN>",
    context: "context",
  });

  console.log("telnyxClient", telnyxClient);
};
