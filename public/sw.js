if(!self.define){let e,a={};const i=(i,s)=>(i=new URL(i+".js",s).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let d={};const r=e=>i(e,c),o={module:{uri:c},exports:d,require:r};a[c]=Promise.all(s.map((e=>o[e]||r(e)))).then((e=>(n(...e),d)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/104.16947b19084c4833.js",revision:"16947b19084c4833"},{url:"/_next/static/chunks/140-e7cd182541db3082.js",revision:"e7cd182541db3082"},{url:"/_next/static/chunks/159-7c7bac86ed649b47.js",revision:"7c7bac86ed649b47"},{url:"/_next/static/chunks/212.42db0d9cc40914d2.js",revision:"42db0d9cc40914d2"},{url:"/_next/static/chunks/298-0480a200001718c3.js",revision:"0480a200001718c3"},{url:"/_next/static/chunks/314-4d5adfeec1adc193.js",revision:"4d5adfeec1adc193"},{url:"/_next/static/chunks/434-c4c9b6e539860604.js",revision:"c4c9b6e539860604"},{url:"/_next/static/chunks/453-08ec1c94f63cb4a5.js",revision:"08ec1c94f63cb4a5"},{url:"/_next/static/chunks/606.e9abc12260338c8e.js",revision:"e9abc12260338c8e"},{url:"/_next/static/chunks/641-1061448ce0aff4af.js",revision:"1061448ce0aff4af"},{url:"/_next/static/chunks/664-5aabd22f6a038f18.js",revision:"5aabd22f6a038f18"},{url:"/_next/static/chunks/675-e6c28df1c70d9119.js",revision:"e6c28df1c70d9119"},{url:"/_next/static/chunks/730.65ee1ab296c4d76c.js",revision:"65ee1ab296c4d76c"},{url:"/_next/static/chunks/821.22fde51dddf46d7b.js",revision:"22fde51dddf46d7b"},{url:"/_next/static/chunks/828-29cbbe37723514d8.js",revision:"29cbbe37723514d8"},{url:"/_next/static/chunks/879.a2c822aef15cb86c.js",revision:"a2c822aef15cb86c"},{url:"/_next/static/chunks/979-8c5f9be1936a3b4a.js",revision:"8c5f9be1936a3b4a"},{url:"/_next/static/chunks/982.a8cb8fc143ef2e64.js",revision:"a8cb8fc143ef2e64"},{url:"/_next/static/chunks/framework-5429a50ba5373c56.js",revision:"5429a50ba5373c56"},{url:"/_next/static/chunks/main-9292183351423b19.js",revision:"9292183351423b19"},{url:"/_next/static/chunks/pages/_app-6a1fb03342f18e0a.js",revision:"6a1fb03342f18e0a"},{url:"/_next/static/chunks/pages/_error-b6491f42fb2263bb.js",revision:"b6491f42fb2263bb"},{url:"/_next/static/chunks/pages/achievements-8c4af3655bf4b1dd.js",revision:"8c4af3655bf4b1dd"},{url:"/_next/static/chunks/pages/blog-7a2bd0214e657255.js",revision:"7a2bd0214e657255"},{url:"/_next/static/chunks/pages/contact-us-e783bfb79e6fdef0.js",revision:"e783bfb79e6fdef0"},{url:"/_next/static/chunks/pages/index-00dba32f8689a3e3.js",revision:"00dba32f8689a3e3"},{url:"/_next/static/chunks/pages/jobs-510079cabb8b4b1d.js",revision:"510079cabb8b4b1d"},{url:"/_next/static/chunks/pages/jobs/job-application-fd8c32ad489f8c8c.js",revision:"fd8c32ad489f8c8c"},{url:"/_next/static/chunks/pages/landing-e1bc52e0e43bd4dd.js",revision:"e1bc52e0e43bd4dd"},{url:"/_next/static/chunks/pages/our-way-4e2401ccb2551f34.js",revision:"4e2401ccb2551f34"},{url:"/_next/static/chunks/pages/rakaya-6d16ee1fe3aa153f.js",revision:"6d16ee1fe3aa153f"},{url:"/_next/static/chunks/pages/rakaya-studio-8806368f8ada8681.js",revision:"8806368f8ada8681"},{url:"/_next/static/chunks/pages/rakaya/applications-9500aaaa254d0437.js",revision:"9500aaaa254d0437"},{url:"/_next/static/chunks/pages/rakaya/feedbacks-940c1015fc3a0baf.js",revision:"940c1015fc3a0baf"},{url:"/_next/static/chunks/pages/rakaya/foundations-a8ed4ae4f58b0893.js",revision:"a8ed4ae4f58b0893"},{url:"/_next/static/chunks/pages/rakaya/our-pillars-d1623b6ce0cf7a73.js",revision:"d1623b6ce0cf7a73"},{url:"/_next/static/chunks/pages/rakaya/our-products-01117a1c7d79a1d1.js",revision:"01117a1c7d79a1d1"},{url:"/_next/static/chunks/pages/rakaya/our-services-9f06a7389b78dd80.js",revision:"9f06a7389b78dd80"},{url:"/_next/static/chunks/pages/rakaya/our-work-e497525696658b51.js",revision:"e497525696658b51"},{url:"/_next/static/chunks/pages/rakaya/sessions-013ec10daa1d0ff9.js",revision:"013ec10daa1d0ff9"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-af32fad759879caf.js",revision:"af32fad759879caf"},{url:"/_next/static/css/09d20b46633f9799.css",revision:"09d20b46633f9799"},{url:"/_next/static/css/1b9ee567397ffec8.css",revision:"1b9ee567397ffec8"},{url:"/_next/static/css/209a49e96e60db75.css",revision:"209a49e96e60db75"},{url:"/_next/static/css/649847e0b9154d32.css",revision:"649847e0b9154d32"},{url:"/_next/static/css/d933f6cd4992e66a.css",revision:"d933f6cd4992e66a"},{url:"/_next/static/css/e2dba960669a5131.css",revision:"e2dba960669a5131"},{url:"/_next/static/css/ea16fe23f9c9dd57.css",revision:"ea16fe23f9c9dd57"},{url:"/_next/static/media/Gold2.22225b5d.webp",revision:"086c0cddc387ab3ab5e1fb492427dba8"},{url:"/_next/static/media/figma.daff184d.png",revision:"bb8f9fd47e361f5649b79e4b2b931f16"},{url:"/_next/static/media/googel.4554318a.png",revision:"3e26049d9396f49912688a986b4027b8"},{url:"/_next/static/media/jisr.20d36522.png",revision:"d63fc86c470c23519bb71eae1d256614"},{url:"/_next/static/media/pattern1.d8489742.svg",revision:"01dc6980343d62ef7afd9957a91cd345"},{url:"/_next/static/media/trello.3431a465.png",revision:"ce2ba529e2dd968b77774da8eaa4a0c0"},{url:"/_next/static/nj87jmzlfShI4fRuxH50c/_buildManifest.js",revision:"3e5f5f5b63b38c3b9162a0efa46a7311"},{url:"/_next/static/nj87jmzlfShI4fRuxH50c/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/android/android-launchericon-144-144.png",revision:"7d5bb4b3daeaa76dd8ea8199daffd6fc"},{url:"/android/android-launchericon-192-192.png",revision:"56f91e566a7ebd05cd6ba86f5c7d5d8f"},{url:"/android/android-launchericon-48-48.png",revision:"3ca945b4f5e554bd3a2ff5ac385573bf"},{url:"/android/android-launchericon-512-512.png",revision:"ad6d879941791627314a23f761a6fbbe"},{url:"/android/android-launchericon-72-72.png",revision:"3a33a1cef9c9de3c7c1e68d386e2026d"},{url:"/android/android-launchericon-96-96.png",revision:"da86f61c6fbb83bd99a0a2c010d99734"},{url:"/favicon.ico",revision:"0782e6b7183affa5afacdc189b844017"},{url:"/icons.json",revision:"5dbbc3fe59816e65ba28e355a58ea45c"},{url:"/ios/100.png",revision:"4382093be9df66ec07360babffc6e72f"},{url:"/ios/1024.png",revision:"51f545e891b95f238245c962c581b091"},{url:"/ios/114.png",revision:"6236e811aa91814ed997b0e02ad5eabd"},{url:"/ios/120.png",revision:"11802982c8840e91b4fa8b55323c057e"},{url:"/ios/128.png",revision:"e63edbc46e91eaf0c3d53be86c7f56ca"},{url:"/ios/144.png",revision:"7d5bb4b3daeaa76dd8ea8199daffd6fc"},{url:"/ios/152.png",revision:"e4208738e32bb3ab750b469c1e6e552b"},{url:"/ios/16.png",revision:"beb3c135c07084402e6f8c3547fd8f1d"},{url:"/ios/167.png",revision:"1966b0b9bd6f558875aa04b11604872f"},{url:"/ios/180.png",revision:"91792b66d9a0686a2f1f0e288d7fe4fb"},{url:"/ios/192.png",revision:"56f91e566a7ebd05cd6ba86f5c7d5d8f"},{url:"/ios/20.png",revision:"3c2f4ffef8b1ad12fcc5c802793b4b1e"},{url:"/ios/256.png",revision:"16883ae254473360595c986ee863f6b7"},{url:"/ios/29.png",revision:"7859810929933f6be88153cba4a83330"},{url:"/ios/32.png",revision:"e34359f40cc6cfac7d12967088d96a80"},{url:"/ios/40.png",revision:"0e9199d7fcdeae1cc6e867a8c037b196"},{url:"/ios/50.png",revision:"a80cfeb0c51fdfe3c2e0709339ed3687"},{url:"/ios/512.png",revision:"ad6d879941791627314a23f761a6fbbe"},{url:"/ios/57.png",revision:"9bfd86f2774dcd659fe6d59514b122ca"},{url:"/ios/58.png",revision:"efb436c63c0a0ae2cda290ee7ea26c0c"},{url:"/ios/60.png",revision:"94217be546f9fa503b81303c4ad4f695"},{url:"/ios/64.png",revision:"aee7c3e101239507587d5ebc01dc7ea1"},{url:"/ios/72.png",revision:"3a33a1cef9c9de3c7c1e68d386e2026d"},{url:"/ios/76.png",revision:"baaea6fe278c5117e640c30844a79956"},{url:"/ios/80.png",revision:"b524196861d0bc71c1159d51756f2109"},{url:"/ios/87.png",revision:"86822f80cd7cb36f12e3884afa00e611"},{url:"/locales/ar/common.json",revision:"5fc887ac2818096a15580a9b95fb0e8d"},{url:"/locales/en/common.json",revision:"f01165694830d4bf158d4ae3ff54eae7"},{url:"/maka.jpg",revision:"03ea2ecbaf91aed85f5f594a7ac160b9"},{url:"/manifest.json",revision:"5890a48fac33ae1aa7153f00731d6ee9"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/rakaya.png",revision:"6a3ea5cbc10c33bf0655d0879336aa3b"},{url:"/rakaya/5chefs.png",revision:"3b1aea74fd3bd0851469958c67ddb69e"},{url:"/rakaya/5chefs.webp",revision:"303dc97fbcc59609c10c3e0ccf9fed26"},{url:"/rakaya/Etqan.png",revision:"e7f0349330c5b4c36d5a94a9f3b3bc3b"},{url:"/rakaya/Etqan.webp",revision:"02b79fb9f79063cc7b493140ffa08d49"},{url:"/rakaya/ektimal.png",revision:"8d2c65536063298d8d51bb83ad128230"},{url:"/rakaya/ektimal.webp",revision:"dd0f8ec1a1793aa73bb8e5f62b34767f"},{url:"/rakaya/qfsco.png",revision:"9509f279051be356aef04b78102bcc9c"},{url:"/rakaya/qfsco.webp",revision:"7eb937da4d1a01c9ee2aecb2dd1ed75c"},{url:"/rakaya/speed-rent.png",revision:"b4fe46121dfcde10aacf70f32d802740"},{url:"/rakaya/speed-rent.webp",revision:"8a23a80a74dd1d43a0131dcfdc31fff4"},{url:"/rakaya/taqniyah.png",revision:"856f30a24ec33974424f115f45ba7892"},{url:"/rakaya/taqniyah.webp",revision:"529741de4be1c5b878a40dad18d486f4"},{url:"/rakayaLogo.png",revision:"6a3ea5cbc10c33bf0655d0879336aa3b"},{url:"/ror.xml",revision:"392dd7ea5596af3430845f8343f9636c"},{url:"/sitemap-0.xml",revision:"2b3ca3769a06f687fcf57da4ab6dbd0e"},{url:"/sitemap.xml",revision:"2d9bff64ca0cfc92dc79cf773ffae234"},{url:"/studio/Etqan.png",revision:"e7f0349330c5b4c36d5a94a9f3b3bc3b"},{url:"/studio/companies/Etqan white.png",revision:"9ad2282acb3626498198392037b030c5"},{url:"/studio/companies/QFSCO white.png",revision:"996882fda7690063d829cb8d43830206"},{url:"/studio/companies/QFSCO.png",revision:"e039dfb575646d46c8dc582b9810be61"},{url:"/studio/companies/Rakaya White.png",revision:"47f03d13fa72c17b156db78743068df7"},{url:"/studio/companies/etqan.png",revision:"110989230f08d2dd3d9a77c77d3e88a9"},{url:"/studio/companies/rakaya.png",revision:"56d6257e46e1ba5076d59628e8fce6ee"},{url:"/studio/headers-bg/1.png",revision:"ff6fca2808790370c59aa687290867f3"},{url:"/studio/headers-bg/2.png",revision:"761c6161a1019fa1ea69d330b4835f97"},{url:"/studio/headers-bg/3.png",revision:"f85c8c7c37b38c445c720e6069c3be7d"},{url:"/studio/headers-bg/4.png",revision:"32125f6ee87a75c439a628b1e2e7e0d9"},{url:"/studio/headers-bg/5.jpg",revision:"744c577d02d18239fc07b9d0e5ee142e"},{url:"/studio/headers-bg/6.jpg",revision:"208f832e06479a241c574a864150b76f"},{url:"/studio/headers-bg/7.jpg",revision:"7d4f939f2ec263190b8ce7e0baa71e5e"},{url:"/studio/image1.avif",revision:"c57354beb102cea5336731f3ffeba7a4"},{url:"/studio/studio/2.jpeg",revision:"5189beb6ae3550f9728ad75a8071152b"},{url:"/studio/studio/3.jpeg",revision:"87eefe4511163b36899777c6a9cf8acb"},{url:"/studio/studio/5.mp4",revision:"72e4048e99bd9c0eee114f250a9cac99"},{url:"/studio/studio/etqan/1.png",revision:"29dfad87b3509ea9093e4b3228e7a0fd"},{url:"/studio/studio/etqan/1.webp",revision:"259689255fe36c49e0fa62584f38ffae"},{url:"/studio/studio/etqan/2.png",revision:"76f1ba9bd8c12180d01ba73dc80266c4"},{url:"/studio/studio/etqan/2.webp",revision:"021b5cfc0fa62986fb2575bf5c6bacb8"},{url:"/studio/studio/etqan/3.png",revision:"be4c86d69224d96f494bc3abc8161824"},{url:"/studio/studio/etqan/3.webp",revision:"a673b7db6e7bc7b3332144a4f26ae2e1"},{url:"/studio/studio/etqan/4.jpg",revision:"3398cbe02ed03feea2e66ba8c53928bb"},{url:"/studio/studio/etqan/4.webp",revision:"71edabab360b127c2b8d838e16662f79"},{url:"/studio/studio/foundation-day/1.jpeg",revision:"5032c5a89b2f80e80adaa679d314e1a1"},{url:"/studio/studio/foundation-day/1.webp",revision:"91003ad7c6552edd2af5ff478c5df4e7"},{url:"/studio/studio/foundation-day/2.png",revision:"02bd7f08a43a0ebde13ca83e4ede0ad1"},{url:"/studio/studio/foundation-day/2.webp",revision:"c69ee1415ad5aabee667d403fe5640dd"},{url:"/studio/studio/foundation-day/3.jpeg",revision:"dcce5734353a346dcdc42dc14e339f8d"},{url:"/studio/studio/foundation-day/3.webp",revision:"f9051f5c6a46c802811780cccf24b8fd"},{url:"/studio/studio/foundation-day/4.jpeg",revision:"42c59040d1bc192088503a941fa53726"},{url:"/studio/studio/foundation-day/4.webp",revision:"3996956b7b98bff25f2939ac2fc7b2c3"},{url:"/studio/studio/haj-expo/1.JPG",revision:"783b9c4d299c0754b869d49e0be724a4"},{url:"/studio/studio/haj-expo/1.webp",revision:"386c81f906cffc6592790b786a62f68e"},{url:"/studio/studio/haj-expo/2.JPG",revision:"af40bbb3e50ad7d256f2b95be903c05a"},{url:"/studio/studio/haj-expo/2.webp",revision:"6ca5b631518a1ddbff5ffc16f243ecbe"},{url:"/studio/studio/haj-expo/3.jpg",revision:"c92481c9f84b92e05b80b1a7c06fd54a"},{url:"/studio/studio/haj-expo/3.webp",revision:"6d974586bdd7d10c9b36dd58868c53c8"},{url:"/studio/studio/haj-expo/4.jpg",revision:"e2059d267baad20d5214f4ed6cceffa5"},{url:"/studio/studio/haj-expo/4.webp",revision:"69b17d685497eee1006a71e0cb3eba1a"},{url:"/studio/team/1.webp",revision:"fd35762cf6b54e36d33dd79a07f7817c"},{url:"/studio/team/11.webp",revision:"51d2e5b6687b66e6ff6cda0d33fdf4bd"},{url:"/studio/team/16.webp",revision:"cbf858593e834b402b7165c467225dfe"},{url:"/studio/team/17.webp",revision:"28282e8191ddb3fce03158d70f153fac"},{url:"/studio/team/18.webp",revision:"f2be87ee0d7ae00db51787e101b11371"},{url:"/studio/team/19.webp",revision:"fb44d8bb838c869423b8fe3ab9902bd4"},{url:"/studio/team/2.webp",revision:"0570da62f65bb6231aa9731da439007b"},{url:"/studio/team/25.webp",revision:"d35788977b766882167691e4c9c74665"},{url:"/studio/team/33.webp",revision:"a37c817c28e8f897d2a1631a10b469ee"},{url:"/studio/team/34.webp",revision:"cb0e0673e2679c086815b590a1f8fd24"},{url:"/studio/team/4.webp",revision:"c6c69aff89a243bce8ba8fb0bd731956"},{url:"/studio/team/5.webp",revision:"aa749d4b8d2bc67e2d716209891961b5"},{url:"/studio/team/9.webp",revision:"7b255bbfec0a416ddfd813b2ae801379"},{url:"/studio/team/lady.webp",revision:"f7e9788844cdddd19e78a9c36cefc376"},{url:"/studio/team/man.webp",revision:"98799bdace4e42954e98d907c22f7c77"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/windows11/LargeTile.scale-100.png",revision:"a55dfbeb3c402bcc97b1888bef08c6a4"},{url:"/windows11/LargeTile.scale-125.png",revision:"6724cda775490d257b6f2a146503d37e"},{url:"/windows11/LargeTile.scale-150.png",revision:"4d3a0c9894c74b81d1218759a782039c"},{url:"/windows11/LargeTile.scale-200.png",revision:"d2b774c54b514d34e96591182ed195ce"},{url:"/windows11/LargeTile.scale-400.png",revision:"217de8d9fa44f2302678b09d58fe68b0"},{url:"/windows11/SmallTile.scale-100.png",revision:"cec0e872670d602697f3740b7b6d7565"},{url:"/windows11/SmallTile.scale-125.png",revision:"6b31246510710f2c85bae3750862468a"},{url:"/windows11/SmallTile.scale-150.png",revision:"21df7705fb139f3b0c5519824d9b08cd"},{url:"/windows11/SmallTile.scale-200.png",revision:"47e5c64e6e24c74783bb4bf250b9f7be"},{url:"/windows11/SmallTile.scale-400.png",revision:"8f4260e1e3b57d7f794ace56228ee54c"},{url:"/windows11/SplashScreen.scale-100.png",revision:"74deb7475163b4dba404a10607a3c095"},{url:"/windows11/SplashScreen.scale-125.png",revision:"957bedd3a2c3b59e1f7571471a0e09eb"},{url:"/windows11/SplashScreen.scale-150.png",revision:"5f3950353c73b5c81dae435f72ed8ccf"},{url:"/windows11/SplashScreen.scale-200.png",revision:"433fde3e076f31acfa75619c81aea0fb"},{url:"/windows11/SplashScreen.scale-400.png",revision:"db1dbcf510f7e482a62fe65a00e93680"},{url:"/windows11/Square150x150Logo.scale-100.png",revision:"115a5f1023c9a02573a69a1a46c0866b"},{url:"/windows11/Square150x150Logo.scale-125.png",revision:"c287f73a09d9868d4ea8ed114fc73a8f"},{url:"/windows11/Square150x150Logo.scale-150.png",revision:"422c989342508f426c8c9dab92cd36d1"},{url:"/windows11/Square150x150Logo.scale-200.png",revision:"56cedc93d523384f72bfe3a31cc92a70"},{url:"/windows11/Square150x150Logo.scale-400.png",revision:"55bf1d466eca451c776e20190fdacad5"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"aeb09546fc002bcccfccd110bad24563"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"b4ff3539f216308b00bd33432d9b8565"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"e8a7ccb70b98f0f826f16e20accefa1a"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"0fe513f5ba91bf3e7918e500b426d8b1"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"4b614103b90ea3a6e24179bf0b882a7c"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"53c8829e47a5db531141ae5db93b51c0"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"a6150452529693159126cc53cde48fa3"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"59754109d84201ad5550cd9437cbeda7"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"cc6557d228ea184c2023c01a7b9779d5"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"6360f76f52bc8f3ded87958e3d429334"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"ecc1b6223ac70f4338b7c7938af704d1"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"44942f1c9a42990d3c4748465595301e"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"68d8cbb1b88218baf8525354a094bf9c"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"1ad09e663cb5ed88e911bd8021281d53"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"c78c823733b774570d8a652ff1cbb4e4"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"aeb09546fc002bcccfccd110bad24563"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"b4ff3539f216308b00bd33432d9b8565"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"e8a7ccb70b98f0f826f16e20accefa1a"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"0fe513f5ba91bf3e7918e500b426d8b1"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"4b614103b90ea3a6e24179bf0b882a7c"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"53c8829e47a5db531141ae5db93b51c0"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"a6150452529693159126cc53cde48fa3"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"59754109d84201ad5550cd9437cbeda7"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"cc6557d228ea184c2023c01a7b9779d5"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"6360f76f52bc8f3ded87958e3d429334"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"ecc1b6223ac70f4338b7c7938af704d1"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"44942f1c9a42990d3c4748465595301e"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"68d8cbb1b88218baf8525354a094bf9c"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"1ad09e663cb5ed88e911bd8021281d53"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"c78c823733b774570d8a652ff1cbb4e4"},{url:"/windows11/Square44x44Logo.scale-100.png",revision:"cc6557d228ea184c2023c01a7b9779d5"},{url:"/windows11/Square44x44Logo.scale-125.png",revision:"cfc830daea1599354a8fce963ade0d80"},{url:"/windows11/Square44x44Logo.scale-150.png",revision:"66087b1f111f08b7b33b31afc4de2aff"},{url:"/windows11/Square44x44Logo.scale-200.png",revision:"60f1553ce00eaaf0996b81e91b6c28dc"},{url:"/windows11/Square44x44Logo.scale-400.png",revision:"53bf77a376154e8780d470b8efacb860"},{url:"/windows11/Square44x44Logo.targetsize-16.png",revision:"aeb09546fc002bcccfccd110bad24563"},{url:"/windows11/Square44x44Logo.targetsize-20.png",revision:"b4ff3539f216308b00bd33432d9b8565"},{url:"/windows11/Square44x44Logo.targetsize-24.png",revision:"e8a7ccb70b98f0f826f16e20accefa1a"},{url:"/windows11/Square44x44Logo.targetsize-256.png",revision:"0fe513f5ba91bf3e7918e500b426d8b1"},{url:"/windows11/Square44x44Logo.targetsize-30.png",revision:"4b614103b90ea3a6e24179bf0b882a7c"},{url:"/windows11/Square44x44Logo.targetsize-32.png",revision:"53c8829e47a5db531141ae5db93b51c0"},{url:"/windows11/Square44x44Logo.targetsize-36.png",revision:"a6150452529693159126cc53cde48fa3"},{url:"/windows11/Square44x44Logo.targetsize-40.png",revision:"59754109d84201ad5550cd9437cbeda7"},{url:"/windows11/Square44x44Logo.targetsize-44.png",revision:"cc6557d228ea184c2023c01a7b9779d5"},{url:"/windows11/Square44x44Logo.targetsize-48.png",revision:"6360f76f52bc8f3ded87958e3d429334"},{url:"/windows11/Square44x44Logo.targetsize-60.png",revision:"ecc1b6223ac70f4338b7c7938af704d1"},{url:"/windows11/Square44x44Logo.targetsize-64.png",revision:"44942f1c9a42990d3c4748465595301e"},{url:"/windows11/Square44x44Logo.targetsize-72.png",revision:"68d8cbb1b88218baf8525354a094bf9c"},{url:"/windows11/Square44x44Logo.targetsize-80.png",revision:"1ad09e663cb5ed88e911bd8021281d53"},{url:"/windows11/Square44x44Logo.targetsize-96.png",revision:"c78c823733b774570d8a652ff1cbb4e4"},{url:"/windows11/StoreLogo.scale-100.png",revision:"a80cfeb0c51fdfe3c2e0709339ed3687"},{url:"/windows11/StoreLogo.scale-125.png",revision:"ae0359ab115e9255b743ec65e9caaf6b"},{url:"/windows11/StoreLogo.scale-150.png",revision:"7ea421736e9d1a5a508f4330403b6d64"},{url:"/windows11/StoreLogo.scale-200.png",revision:"4382093be9df66ec07360babffc6e72f"},{url:"/windows11/StoreLogo.scale-400.png",revision:"c930544471dfe3770de5698264dd6346"},{url:"/windows11/Wide310x150Logo.scale-100.png",revision:"47db563dd67347a8f942601297314b71"},{url:"/windows11/Wide310x150Logo.scale-125.png",revision:"7bb8977260fd4fdb6242867dbbf95873"},{url:"/windows11/Wide310x150Logo.scale-150.png",revision:"3a95ff479bb5b9e85d8406c6f7ef5d8b"},{url:"/windows11/Wide310x150Logo.scale-200.png",revision:"74deb7475163b4dba404a10607a3c095"},{url:"/windows11/Wide310x150Logo.scale-400.png",revision:"433fde3e076f31acfa75619c81aea0fb"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:s})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
