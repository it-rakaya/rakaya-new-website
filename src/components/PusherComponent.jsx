import React, { useEffect } from "react";
import Pusher from "pusher-js";

const PusherComponent = ({ onData }) => {
  useEffect(() => {
    const APP_KEY = process.env.NEXT_PUBLIC_YOUR_APP_KEY;
    const APP_CLUSTER = process.env.NEXT_PUBLIC_YOUR_APP_CLUSTER;

    const pusher = new Pusher(APP_KEY, {
      cluster: APP_CLUSTER,
    });
    console.log("pusher",pusher)

    const channel = pusher.subscribe("your-channel");
    console.log("🚀 ~ useEffect ~ channel:", channel)
    channel.bind("your-event", (data) => {
      onData(data?.segments);
    });

    return () => {
      pusher.unsubscribe("your-channel");
    };
  }, [onData]);

  return null;
};

export default PusherComponent;
