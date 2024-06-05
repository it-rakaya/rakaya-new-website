import { useEffect } from "react";
import Pusher from "pusher-js";

const usePusher = ( onEvent) => {
  const APP_KEY = process.env.NEXT_PUBLIC_YOUR_APP_KEY;
  const APP_CLUSTER = process.env.NEXT_PUBLIC_YOUR_APP_CLUSTER;

  // useEffect(() => {
  //   const pusher = new Pusher('dd4472371972ca1c31dd', {
  //     cluster: 'mt1',
  //     // authEndpoint:"https://admin-dev.rmcc.sa",
  //     // auth: {
  //     //   headers: {
  //     //     "Access-Control-Allow-Origin":"*",
  //     //     "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  //     //     "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Authorization"
  //     //   }
  //     // },
  //     encrypted: true,
  //     forceTLS:true,
  //   });

  //   const channel = pusher.subscribe("ModelCRUD-changes");
  //   console.log("🚀 ~ useEffect ~ channel:", channel)
  //   channel.bind('Order-changes', onEvent);

  //   return () => {
  //     channel.unbind('Order-changes', onEvent);
  //     pusher.unsubscribe("ModelCRUD-changes");
  //   };
  // }, []);
  useEffect(() => {
    const pusher = new Pusher('dd4472371972ca1c31dd', {
        cluster: 'mt1',
        encrypted: true
    });

    const channel = pusher.subscribe('ModelCRUD-changes');
    console.log("🚀 ~ useEffect ~ channel:", channel)
    channel.bind('Order-changes', (data) => {
        // Handle the received message
        console.log("pusher==>",data.message);
    });

    return () => {
        channel.unbind_all();
        channel.unsubscribe();
    };
}, []);
};

export default usePusher;
