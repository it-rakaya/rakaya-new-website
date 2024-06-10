import { useEffect } from "react";
import Pusher from "pusher-js";

const usePusher = (event, onEvent) => {
  const APP_KEY = process.env.NEXT_PUBLIC_YOUR_APP_KEY;
  const APP_CLUSTER = process.env.NEXT_PUBLIC_YOUR_APP_CLUSTER;
  const APP_CHANEL = process.env.NEXT_PUBLIC_YOUR_APP_CHANEL;

  useEffect(() => {
    const pusher = new Pusher(APP_KEY, {
      cluster: APP_CLUSTER,
      encrypted: true,
    });

    const channel = pusher.subscribe(APP_CHANEL);
    channel.bind(event, onEvent);

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [event, onEvent]);
};

export default usePusher;
