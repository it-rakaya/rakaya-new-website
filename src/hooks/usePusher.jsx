import { useEffect } from "react";
import Pusher from "pusher-js";

const usePusher = (event, onEvent) => {
  const APP_KEY = process.env.NEXT_PUBLIC_YOUR_APP_KEY;
  const APP_CLUSTER = process.env.NEXT_PUBLIC_YOUR_APP_CLUSTER;
  const APP_CHANEL = process.env.NEXT_PUBLIC_YOUR_APP_CHANEL;

  useEffect(() => {
    let pusher;
    let channel;

    try {
      pusher = new Pusher(APP_KEY, {
        cluster: APP_CLUSTER,
        encrypted: true,
      });

      channel = pusher.subscribe(APP_CHANEL);
      channel.bind(event, onEvent);

      // Handle connection errors
      pusher.connection.bind('error', (err) => {
        console.error('Pusher connection error:', err);
      });

      return () => {
        if (channel) {
          channel.unbind_all();
          channel.unsubscribe();
        }
        if (pusher) {
          pusher.disconnect();
        }
      };
    } catch (error) {
      console.error('Pusher initialization error:', error);
    }
  }, [event, onEvent]);
};

export default usePusher;
