if(!self.define){let e,a={};const i=(i,s)=>(i=new URL(i+".js",s).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let r={};const d=e=>i(e,n),o={module:{uri:n},exports:r,require:d};a[n]=Promise.all(s.map((e=>o[e]||d(e)))).then((e=>(c(...e),r)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Login-amico.png",revision:"36a28f6270d3f397f69243822f8fb170"},{url:"/Login.png",revision:"a155d344865ea6ebbea5bdc02a44347a"},{url:"/My password-bro (1).png",revision:"77805d3c0a589d92da5ad2d902b629ea"},{url:"/My password-bro (2).png",revision:"5189f07e78c61f9be4491779e3e5c808"},{url:"/My password-bro.png",revision:"915d1a69975ee0d968f631f36faf51e3"},{url:"/Two factor authentication-rafiki (1).png",revision:"c271e2dfa42e957f20dc22c79d29bd58"},{url:"/Verified-pana.png",revision:"ca71116044b0a944783d6365bdf7bad7"},{url:"/_next/static/Uyx5WR6-pCU4J8sG4TXoF/_buildManifest.js",revision:"43c1046617b43dd64f6bcb6ebde1cbf6"},{url:"/_next/static/Uyx5WR6-pCU4J8sG4TXoF/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/019d026b-49617627bbaee493.js",revision:"49617627bbaee493"},{url:"/_next/static/chunks/0b7b90cd.d1ad9acb57a0aef8.js",revision:"d1ad9acb57a0aef8"},{url:"/_next/static/chunks/1298-7bfa6a776b64464d.js",revision:"7bfa6a776b64464d"},{url:"/_next/static/chunks/1982.df2bfcec18cfd58d.js",revision:"df2bfcec18cfd58d"},{url:"/_next/static/chunks/2090-dd32b04ffd10bbf2.js",revision:"dd32b04ffd10bbf2"},{url:"/_next/static/chunks/2212.dd6808e05af7a495.js",revision:"dd6808e05af7a495"},{url:"/_next/static/chunks/2580-b4d45a9ae6044e9f.js",revision:"b4d45a9ae6044e9f"},{url:"/_next/static/chunks/3142-b4ac07ae07fcc913.js",revision:"b4ac07ae07fcc913"},{url:"/_next/static/chunks/3518-03bb003a38a40d12.js",revision:"03bb003a38a40d12"},{url:"/_next/static/chunks/3a17f596-8f9e69515f169681.js",revision:"8f9e69515f169681"},{url:"/_next/static/chunks/41155975-9caf66cd9a7b6e63.js",revision:"9caf66cd9a7b6e63"},{url:"/_next/static/chunks/4512-a983b2987d18454a.js",revision:"a983b2987d18454a"},{url:"/_next/static/chunks/453-c67d0cc7825dfe4c.js",revision:"c67d0cc7825dfe4c"},{url:"/_next/static/chunks/4544-8bf7adfb5fc84022.js",revision:"8bf7adfb5fc84022"},{url:"/_next/static/chunks/4577d2ec-caa9e909d3e666cf.js",revision:"caa9e909d3e666cf"},{url:"/_next/static/chunks/4879.0f73ecd6084843a3.js",revision:"0f73ecd6084843a3"},{url:"/_next/static/chunks/4986.b713a766383543dd.js",revision:"b713a766383543dd"},{url:"/_next/static/chunks/5118-fa35a854e270eb25.js",revision:"fa35a854e270eb25"},{url:"/_next/static/chunks/5121-5d8bc76ef7e05aa0.js",revision:"5d8bc76ef7e05aa0"},{url:"/_next/static/chunks/5254-c9a577413904e89c.js",revision:"c9a577413904e89c"},{url:"/_next/static/chunks/5458-58de557b01c8f746.js",revision:"58de557b01c8f746"},{url:"/_next/static/chunks/5466-ac9389c7f8784f17.js",revision:"ac9389c7f8784f17"},{url:"/_next/static/chunks/5632-129df1f9dd52af81.js",revision:"129df1f9dd52af81"},{url:"/_next/static/chunks/5704-4d6857f5044a9eb1.js",revision:"4d6857f5044a9eb1"},{url:"/_next/static/chunks/5727625e-30b0c420b96dd925.js",revision:"30b0c420b96dd925"},{url:"/_next/static/chunks/5821.855417a8d4ef1a34.js",revision:"855417a8d4ef1a34"},{url:"/_next/static/chunks/6310-76f6a327b023976e.js",revision:"76f6a327b023976e"},{url:"/_next/static/chunks/6314-264acd85a2d889fd.js",revision:"264acd85a2d889fd"},{url:"/_next/static/chunks/6344-165ffd50c6a69058.js",revision:"165ffd50c6a69058"},{url:"/_next/static/chunks/6612-023573429696e1ab.js",revision:"023573429696e1ab"},{url:"/_next/static/chunks/69d2ed9c-f05c807bfadaa330.js",revision:"f05c807bfadaa330"},{url:"/_next/static/chunks/6b2193de-7163805f83c879c7.js",revision:"7163805f83c879c7"},{url:"/_next/static/chunks/737a5600-1e12db3a029b0905.js",revision:"1e12db3a029b0905"},{url:"/_next/static/chunks/777-db5addcf87b9df44.js",revision:"db5addcf87b9df44"},{url:"/_next/static/chunks/8047-73736c7078974db8.js",revision:"73736c7078974db8"},{url:"/_next/static/chunks/8140-99e4642f3d5f780c.js",revision:"99e4642f3d5f780c"},{url:"/_next/static/chunks/8942.d1efce876bd69622.js",revision:"d1efce876bd69622"},{url:"/_next/static/chunks/9297-f472b4e1ba6f6543.js",revision:"f472b4e1ba6f6543"},{url:"/_next/static/chunks/92977076-995ff28d130a6794.js",revision:"995ff28d130a6794"},{url:"/_next/static/chunks/9397-9524ed66009cc4fc.js",revision:"9524ed66009cc4fc"},{url:"/_next/static/chunks/d9067523-43c0126838d2d9e2.js",revision:"43c0126838d2d9e2"},{url:"/_next/static/chunks/e21e5bbe-476e17e9585546e6.js",revision:"476e17e9585546e6"},{url:"/_next/static/chunks/ee8b1517-b7c1c85e2d141635.js",revision:"b7c1c85e2d141635"},{url:"/_next/static/chunks/fea29d9f-68d0506c3b06066e.js",revision:"68d0506c3b06066e"},{url:"/_next/static/chunks/framework-6c8598519c693321.js",revision:"6c8598519c693321"},{url:"/_next/static/chunks/main-fe8fbfd40c7b7166.js",revision:"fe8fbfd40c7b7166"},{url:"/_next/static/chunks/pages/401-e106319b7f8b4de9.js",revision:"e106319b7f8b4de9"},{url:"/_next/static/chunks/pages/404-1f20af04616e7ca7.js",revision:"1f20af04616e7ca7"},{url:"/_next/static/chunks/pages/500-9f1777c533d6915b.js",revision:"9f1777c533d6915b"},{url:"/_next/static/chunks/pages/_app-370db55b4e4dcce8.js",revision:"370db55b4e4dcce8"},{url:"/_next/static/chunks/pages/_error-83f70c7be3775587.js",revision:"83f70c7be3775587"},{url:"/_next/static/chunks/pages/achievements-d35f039884ba02b2.js",revision:"d35f039884ba02b2"},{url:"/_next/static/chunks/pages/blog-1e004dd627a4a859.js",revision:"1e004dd627a4a859"},{url:"/_next/static/chunks/pages/blog/%5Bslug%5D-d36feda38064ccae.js",revision:"d36feda38064ccae"},{url:"/_next/static/chunks/pages/contact-us-e66e0e3381121cc4.js",revision:"e66e0e3381121cc4"},{url:"/_next/static/chunks/pages/index-3eac3e22e35a8d53.js",revision:"3eac3e22e35a8d53"},{url:"/_next/static/chunks/pages/jobs-f5d4c4146188ace4.js",revision:"f5d4c4146188ace4"},{url:"/_next/static/chunks/pages/jobs/%5Bid%5D-6e965d1c59463894.js",revision:"6e965d1c59463894"},{url:"/_next/static/chunks/pages/jobs/available_job-ddf9435685271425.js",revision:"ddf9435685271425"},{url:"/_next/static/chunks/pages/jobs/complete-application-a7956de6c95f04ae.js",revision:"a7956de6c95f04ae"},{url:"/_next/static/chunks/pages/jobs/job-application-5920f894e0800d5b.js",revision:"5920f894e0800d5b"},{url:"/_next/static/chunks/pages/jobs/job-application/%5Bid%5D-99f3664272352970.js",revision:"99f3664272352970"},{url:"/_next/static/chunks/pages/jobs/private-application-d3103a6f09989cb9.js",revision:"d3103a6f09989cb9"},{url:"/_next/static/chunks/pages/landing-dcc7caf7732deb1d.js",revision:"dcc7caf7732deb1d"},{url:"/_next/static/chunks/pages/login-8d738ad2b90e5cb9.js",revision:"8d738ad2b90e5cb9"},{url:"/_next/static/chunks/pages/our-way-363c435393b3f28e.js",revision:"363c435393b3f28e"},{url:"/_next/static/chunks/pages/profile-8d464b10bfa2a736.js",revision:"8d464b10bfa2a736"},{url:"/_next/static/chunks/pages/profile/bank-information-08209c997ce6ba74.js",revision:"08209c997ce6ba74"},{url:"/_next/static/chunks/pages/profile/change-password-68cdf9b5c5ca597f.js",revision:"68cdf9b5c5ca597f"},{url:"/_next/static/chunks/pages/profile/complete-c83fb99f257bc5da.js",revision:"c83fb99f257bc5da"},{url:"/_next/static/chunks/pages/profile/cv-0fe2b557ea8045c7.js",revision:"0fe2b557ea8045c7"},{url:"/_next/static/chunks/pages/profile/info-66f038b0e5b3811c.js",revision:"66f038b0e5b3811c"},{url:"/_next/static/chunks/pages/rakaya-b89127c4dc2e4f49.js",revision:"b89127c4dc2e4f49"},{url:"/_next/static/chunks/pages/rakaya-studio-175ec176792da499.js",revision:"175ec176792da499"},{url:"/_next/static/chunks/pages/rakaya/applications-2f1124ce86ea22fc.js",revision:"2f1124ce86ea22fc"},{url:"/_next/static/chunks/pages/rakaya/feedbacks-b2123f47d940daf5.js",revision:"b2123f47d940daf5"},{url:"/_next/static/chunks/pages/rakaya/foundations-0382cbc96c5b4896.js",revision:"0382cbc96c5b4896"},{url:"/_next/static/chunks/pages/rakaya/our-pillars-953bf606071f2a61.js",revision:"953bf606071f2a61"},{url:"/_next/static/chunks/pages/rakaya/our-products-50a4908bd591b4e9.js",revision:"50a4908bd591b4e9"},{url:"/_next/static/chunks/pages/rakaya/our-services-36b0d31b1cf42964.js",revision:"36b0d31b1cf42964"},{url:"/_next/static/chunks/pages/rakaya/our-work-92d071cc13d315ee.js",revision:"92d071cc13d315ee"},{url:"/_next/static/chunks/pages/rakaya/sessions-4e4f3952a0c5baad.js",revision:"4e4f3952a0c5baad"},{url:"/_next/static/chunks/pages/register-6430e01fcd1dd1f8.js",revision:"6430e01fcd1dd1f8"},{url:"/_next/static/chunks/pages/reset-password-395cf92fe89eed27.js",revision:"395cf92fe89eed27"},{url:"/_next/static/chunks/pages/track-locations-bf57d1e406b18f31.js",revision:"bf57d1e406b18f31"},{url:"/_next/static/chunks/pages/visitor-728a27f1edbf4be1.js",revision:"728a27f1edbf4be1"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-d0c931a1db2a29ff.js",revision:"d0c931a1db2a29ff"},{url:"/_next/static/css/09d20b46633f9799.css",revision:"09d20b46633f9799"},{url:"/_next/static/css/1d035e6c9b294427.css",revision:"1d035e6c9b294427"},{url:"/_next/static/css/209a49e96e60db75.css",revision:"209a49e96e60db75"},{url:"/_next/static/css/698889fc4fd504e9.css",revision:"698889fc4fd504e9"},{url:"/_next/static/css/6f94473fa8d892ce.css",revision:"6f94473fa8d892ce"},{url:"/_next/static/css/92f3fe69619cd98b.css",revision:"92f3fe69619cd98b"},{url:"/_next/static/css/d3e383b9ef67ddcb.css",revision:"d3e383b9ef67ddcb"},{url:"/_next/static/css/e4387972560a4a75.css",revision:"e4387972560a4a75"},{url:"/_next/static/css/e7952e0534e19ff9.css",revision:"e7952e0534e19ff9"},{url:"/_next/static/css/ea16fe23f9c9dd57.css",revision:"ea16fe23f9c9dd57"},{url:"/_next/static/css/efc709358d576c69.css",revision:"efc709358d576c69"},{url:"/_next/static/css/f74e085586055889.css",revision:"f74e085586055889"},{url:"/_next/static/media/Gold2.22225b5d.webp",revision:"086c0cddc387ab3ab5e1fb492427dba8"},{url:"/_next/static/media/figma.daff184d.png",revision:"bb8f9fd47e361f5649b79e4b2b931f16"},{url:"/_next/static/media/googel.4554318a.png",revision:"3e26049d9396f49912688a986b4027b8"},{url:"/_next/static/media/jisr.20d36522.png",revision:"d63fc86c470c23519bb71eae1d256614"},{url:"/_next/static/media/layers-2x.9859cd12.png",revision:"9859cd12"},{url:"/_next/static/media/layers.ef6db872.png",revision:"ef6db872"},{url:"/_next/static/media/marker-icon.d577052a.png",revision:"d577052a"},{url:"/_next/static/media/pattern1.d8489742.svg",revision:"01dc6980343d62ef7afd9957a91cd345"},{url:"/_next/static/media/trello.3431a465.png",revision:"ce2ba529e2dd968b77774da8eaa4a0c0"},{url:"/android/android-launchericon-144-144.png",revision:"7d5bb4b3daeaa76dd8ea8199daffd6fc"},{url:"/android/android-launchericon-192-192.png",revision:"56f91e566a7ebd05cd6ba86f5c7d5d8f"},{url:"/android/android-launchericon-48-48.png",revision:"3ca945b4f5e554bd3a2ff5ac385573bf"},{url:"/android/android-launchericon-512-512.png",revision:"ad6d879941791627314a23f761a6fbbe"},{url:"/android/android-launchericon-72-72.png",revision:"3a33a1cef9c9de3c7c1e68d386e2026d"},{url:"/android/android-launchericon-96-96.png",revision:"da86f61c6fbb83bd99a0a2c010d99734"},{url:"/countryCode.js",revision:"b79a7800ff60823a894b618c2eaff349"},{url:"/favicon.ico",revision:"0782e6b7183affa5afacdc189b844017"},{url:"/icons.json",revision:"5dbbc3fe59816e65ba28e355a58ea45c"},{url:"/ios/100.png",revision:"4382093be9df66ec07360babffc6e72f"},{url:"/ios/1024.png",revision:"51f545e891b95f238245c962c581b091"},{url:"/ios/114.png",revision:"6236e811aa91814ed997b0e02ad5eabd"},{url:"/ios/120.png",revision:"11802982c8840e91b4fa8b55323c057e"},{url:"/ios/128.png",revision:"e63edbc46e91eaf0c3d53be86c7f56ca"},{url:"/ios/144.png",revision:"7d5bb4b3daeaa76dd8ea8199daffd6fc"},{url:"/ios/152.png",revision:"e4208738e32bb3ab750b469c1e6e552b"},{url:"/ios/16.png",revision:"beb3c135c07084402e6f8c3547fd8f1d"},{url:"/ios/167.png",revision:"1966b0b9bd6f558875aa04b11604872f"},{url:"/ios/180.png",revision:"91792b66d9a0686a2f1f0e288d7fe4fb"},{url:"/ios/192.png",revision:"56f91e566a7ebd05cd6ba86f5c7d5d8f"},{url:"/ios/20.png",revision:"3c2f4ffef8b1ad12fcc5c802793b4b1e"},{url:"/ios/256.png",revision:"16883ae254473360595c986ee863f6b7"},{url:"/ios/29.png",revision:"7859810929933f6be88153cba4a83330"},{url:"/ios/32.png",revision:"e34359f40cc6cfac7d12967088d96a80"},{url:"/ios/40.png",revision:"0e9199d7fcdeae1cc6e867a8c037b196"},{url:"/ios/50.png",revision:"a80cfeb0c51fdfe3c2e0709339ed3687"},{url:"/ios/512.png",revision:"ad6d879941791627314a23f761a6fbbe"},{url:"/ios/57.png",revision:"9bfd86f2774dcd659fe6d59514b122ca"},{url:"/ios/58.png",revision:"efb436c63c0a0ae2cda290ee7ea26c0c"},{url:"/ios/60.png",revision:"94217be546f9fa503b81303c4ad4f695"},{url:"/ios/64.png",revision:"aee7c3e101239507587d5ebc01dc7ea1"},{url:"/ios/72.png",revision:"3a33a1cef9c9de3c7c1e68d386e2026d"},{url:"/ios/76.png",revision:"baaea6fe278c5117e640c30844a79956"},{url:"/ios/80.png",revision:"b524196861d0bc71c1159d51756f2109"},{url:"/ios/87.png",revision:"86822f80cd7cb36f12e3884afa00e611"},{url:"/locales/ar/common.json",revision:"d8249350cd2bce4dc1ebc414e95ff77c"},{url:"/locales/en/common.json",revision:"dd0e82842528035f2ea2c2dc7d5ea0e3"},{url:"/maka.jpg",revision:"03ea2ecbaf91aed85f5f594a7ac160b9"},{url:"/manifest.json",revision:"5890a48fac33ae1aa7153f00731d6ee9"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/pins/pins/albiteGust.png",revision:"f83b3e923e497151bcc16c2e11f7715b"},{url:"/pins/pins/default.png",revision:"410c7005b0cfeb58deb40e4d71433137"},{url:"/pins/pins/default.svg",revision:"257cef5b18b0ed8430a1bfa4666ed68b"},{url:"/pins/pins/fine.png",revision:"c4e3ba1c0fabc70e501d07881a47645f"},{url:"/pins/pins/fine.svg",revision:"bb5e2500150e4a5478df43ca80c64037"},{url:"/pins/pins/forms.png",revision:"ea868a73b0fd0750ea74645ef068216e"},{url:"/pins/pins/forms.svg",revision:"26f8f1708d180fdfa08b6331f46d99ef"},{url:"/pins/pins/ithraa.png",revision:"95eefd023af1da57c567884cc379c0a8"},{url:"/pins/pins/meals.png",revision:"da7313a9ebaf93ac4a9113fd0b8c6fa9"},{url:"/pins/pins/support-white.svg",revision:"23e628cf403af5733a2fef531b2f2c83"},{url:"/pins/pins/support.png",revision:"507f05d034204fd2f2d3611af67b48a5"},{url:"/pins/pins/support.svg",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/pins/pins/ticket.png",revision:"13a006752be5563a29b810265490a7b3"},{url:"/pins/pins/ticket.svg",revision:"ad82d1b55120c8e81e86edfbd04a34bf"},{url:"/rakaya.png",revision:"6a3ea5cbc10c33bf0655d0879336aa3b"},{url:"/rakaya/5chefs.webp",revision:"303dc97fbcc59609c10c3e0ccf9fed26"},{url:"/rakaya/Etqan.webp",revision:"2bc37eb22a438a4f19234b7a0bd41faf"},{url:"/rakaya/ektimal.webp",revision:"dd0f8ec1a1793aa73bb8e5f62b34767f"},{url:"/rakaya/qfsco.webp",revision:"c0e094708c95d823d70dd67f35bebf1f"},{url:"/rakaya/speed-rent.webp",revision:"8a23a80a74dd1d43a0131dcfdc31fff4"},{url:"/rakaya/taqniyah.webp",revision:"529741de4be1c5b878a40dad18d486f4"},{url:"/rakayaLogo.png",revision:"6a3ea5cbc10c33bf0655d0879336aa3b"},{url:"/ror.xml",revision:"392dd7ea5596af3430845f8343f9636c"},{url:"/sitemap-0.xml",revision:"f319ab73df8dcf8106934c192db3646c"},{url:"/sitemap.xml",revision:"2d9bff64ca0cfc92dc79cf773ffae234"},{url:"/studio/Etqan.png",revision:"e7f0349330c5b4c36d5a94a9f3b3bc3b"},{url:"/studio/companies/Etqan.webp",revision:"8e74fb53c094f612f0ea4028e5064331"},{url:"/studio/companies/QFSCO.webp",revision:"868cf4bc13ab08b237461adf2f0441ec"},{url:"/studio/companies/Rakaya-white.webp",revision:"b2042094170e9ffa91a3b457b4a0c879"},{url:"/studio/complete_application_bg.jpg",revision:"cae0db84f5164a19fee90cd8cd6fb157"},{url:"/studio/headers-bg/1.webp",revision:"a90e23e01d73f6571b19271740e474ea"},{url:"/studio/headers-bg/10.webp",revision:"ad9cbe4d1c8feec29b6d88f9c0ed3d78"},{url:"/studio/headers-bg/11.webp",revision:"a50be5c056642f7446b439f20b9c8cd0"},{url:"/studio/headers-bg/2.webp",revision:"742efa53d189dd6c632440319a961f08"},{url:"/studio/headers-bg/3.webp",revision:"45690c0affb9ff0c489cf7150cf12881"},{url:"/studio/headers-bg/4.webp",revision:"25013f0ebdd2c55de5ce29f3279535c6"},{url:"/studio/headers-bg/5.webp",revision:"10e083a9d76d43dd4e43b3b8ce9cee54"},{url:"/studio/headers-bg/6.webp",revision:"c6a8c3ffc2dc956d8e7984d1e555693b"},{url:"/studio/headers-bg/7.webp",revision:"14d5b86eea278d7321b6757019328230"},{url:"/studio/headers-bg/8.webp",revision:"acf2e94bd01f145a5f8b2758e234ee3e"},{url:"/studio/headers-bg/9.webp",revision:"7bfab30551bdd0deb9c3009cea2a11d0"},{url:"/studio/image1.avif",revision:"c57354beb102cea5336731f3ffeba7a4"},{url:"/studio/studio/abamco/1.webp",revision:"237d800ec1280683cbc33cc56d3f17c9"},{url:"/studio/studio/abamco/2.webp",revision:"cd284ce9110b664e689c8f19a7617fb8"},{url:"/studio/studio/abamco/3.webp",revision:"6359b72ddeaaeb675ba43455e6dc352f"},{url:"/studio/studio/abamco/4.webp",revision:"9fb964440b2ef0d2343620cb25ac71ba"},{url:"/studio/studio/etqan/1.webp",revision:"259689255fe36c49e0fa62584f38ffae"},{url:"/studio/studio/etqan/2.webp",revision:"021b5cfc0fa62986fb2575bf5c6bacb8"},{url:"/studio/studio/etqan/3.webp",revision:"a673b7db6e7bc7b3332144a4f26ae2e1"},{url:"/studio/studio/etqan/4.webp",revision:"71edabab360b127c2b8d838e16662f79"},{url:"/studio/studio/foundation-day/1.png",revision:"b735e992795002a642afbf8f227b272a"},{url:"/studio/studio/foundation-day/1.webp",revision:"91003ad7c6552edd2af5ff478c5df4e7"},{url:"/studio/studio/foundation-day/2.webp",revision:"24b592d5f91a928023a044b66c7391bf"},{url:"/studio/studio/foundation-day/22.webp",revision:"c69ee1415ad5aabee667d403fe5640dd"},{url:"/studio/studio/foundation-day/3.webp",revision:"f9051f5c6a46c802811780cccf24b8fd"},{url:"/studio/studio/foundation-day/4.webp",revision:"3996956b7b98bff25f2939ac2fc7b2c3"},{url:"/studio/studio/haj-expo/1.webp",revision:"386c81f906cffc6592790b786a62f68e"},{url:"/studio/studio/haj-expo/2.webp",revision:"6ca5b631518a1ddbff5ffc16f243ecbe"},{url:"/studio/studio/haj-expo/3.webp",revision:"6d974586bdd7d10c9b36dd58868c53c8"},{url:"/studio/studio/haj-expo/4.webp",revision:"69b17d685497eee1006a71e0cb3eba1a"},{url:"/studio/studio/haj/1.jpg",revision:"d153917847ba42bf907b562ff1606ee3"},{url:"/studio/studio/haj/2.jpg",revision:"e3c8496d53834a78288056451c19f138"},{url:"/studio/studio/haj/3.jpg",revision:"3b5b416fae4571990a4d072963fd2a43"},{url:"/studio/studio/haj/4.jpg",revision:"09ee3b41df36d6466357ccae0bab578f"},{url:"/studio/studio/ramadan-1445/1.webp",revision:"a7c105f83f9527be270f9201bb28b3cf"},{url:"/studio/studio/ramadan-1445/2.webp",revision:"1648b39fe51c5847bf52e6f725e40c66"},{url:"/studio/studio/ramadan-1445/3.webp",revision:"571f845004bdd1ab98b7d6b375da2c04"},{url:"/studio/team/1.webp",revision:"fd35762cf6b54e36d33dd79a07f7817c"},{url:"/studio/team/11.webp",revision:"51d2e5b6687b66e6ff6cda0d33fdf4bd"},{url:"/studio/team/16.webp",revision:"cbf858593e834b402b7165c467225dfe"},{url:"/studio/team/17.webp",revision:"28282e8191ddb3fce03158d70f153fac"},{url:"/studio/team/18.webp",revision:"f2be87ee0d7ae00db51787e101b11371"},{url:"/studio/team/19.webp",revision:"fb44d8bb838c869423b8fe3ab9902bd4"},{url:"/studio/team/2.webp",revision:"0570da62f65bb6231aa9731da439007b"},{url:"/studio/team/25.webp",revision:"d35788977b766882167691e4c9c74665"},{url:"/studio/team/33.webp",revision:"a37c817c28e8f897d2a1631a10b469ee"},{url:"/studio/team/34.webp",revision:"cb0e0673e2679c086815b590a1f8fd24"},{url:"/studio/team/4.webp",revision:"c6c69aff89a243bce8ba8fb0bd731956"},{url:"/studio/team/5.webp",revision:"aa749d4b8d2bc67e2d716209891961b5"},{url:"/studio/team/9.webp",revision:"7b255bbfec0a416ddfd813b2ae801379"},{url:"/studio/team/lady.png",revision:"f98f8d0ac011bc01a3fd97b3442d20fe"},{url:"/studio/team/lady.webp",revision:"abe6423ba618ba4e9ace1ccf6461e8fb"},{url:"/studio/team/man.webp",revision:"090630c5eea41e99db525424a16b171d"},{url:"/track/HajjLogo.png",revision:"e7fbb5dccbce5771799424d72ecf5433"},{url:"/track/HajjLogo2.png",revision:"12323d3383b4931f058cd95e2332d46f"},{url:"/track/Logo.png",revision:"c9f248b83c3ddb193ec1bb0e590e646a"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/windows11/LargeTile.scale-100.png",revision:"a55dfbeb3c402bcc97b1888bef08c6a4"},{url:"/windows11/LargeTile.scale-125.png",revision:"6724cda775490d257b6f2a146503d37e"},{url:"/windows11/LargeTile.scale-150.png",revision:"4d3a0c9894c74b81d1218759a782039c"},{url:"/windows11/LargeTile.scale-200.png",revision:"d2b774c54b514d34e96591182ed195ce"},{url:"/windows11/LargeTile.scale-400.png",revision:"217de8d9fa44f2302678b09d58fe68b0"},{url:"/windows11/SmallTile.scale-100.png",revision:"cec0e872670d602697f3740b7b6d7565"},{url:"/windows11/SmallTile.scale-125.png",revision:"6b31246510710f2c85bae3750862468a"},{url:"/windows11/SmallTile.scale-150.png",revision:"21df7705fb139f3b0c5519824d9b08cd"},{url:"/windows11/SmallTile.scale-200.png",revision:"47e5c64e6e24c74783bb4bf250b9f7be"},{url:"/windows11/SmallTile.scale-400.png",revision:"8f4260e1e3b57d7f794ace56228ee54c"},{url:"/windows11/SplashScreen.scale-100.png",revision:"74deb7475163b4dba404a10607a3c095"},{url:"/windows11/SplashScreen.scale-125.png",revision:"957bedd3a2c3b59e1f7571471a0e09eb"},{url:"/windows11/SplashScreen.scale-150.png",revision:"5f3950353c73b5c81dae435f72ed8ccf"},{url:"/windows11/SplashScreen.scale-200.png",revision:"433fde3e076f31acfa75619c81aea0fb"},{url:"/windows11/SplashScreen.scale-400.png",revision:"db1dbcf510f7e482a62fe65a00e93680"},{url:"/windows11/Square150x150Logo.scale-100.png",revision:"115a5f1023c9a02573a69a1a46c0866b"},{url:"/windows11/Square150x150Logo.scale-125.png",revision:"c287f73a09d9868d4ea8ed114fc73a8f"},{url:"/windows11/Square150x150Logo.scale-150.png",revision:"422c989342508f426c8c9dab92cd36d1"},{url:"/windows11/Square150x150Logo.scale-200.png",revision:"56cedc93d523384f72bfe3a31cc92a70"},{url:"/windows11/Square150x150Logo.scale-400.png",revision:"55bf1d466eca451c776e20190fdacad5"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"aeb09546fc002bcccfccd110bad24563"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"b4ff3539f216308b00bd33432d9b8565"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"e8a7ccb70b98f0f826f16e20accefa1a"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"0fe513f5ba91bf3e7918e500b426d8b1"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"4b614103b90ea3a6e24179bf0b882a7c"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"53c8829e47a5db531141ae5db93b51c0"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"a6150452529693159126cc53cde48fa3"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"59754109d84201ad5550cd9437cbeda7"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"cc6557d228ea184c2023c01a7b9779d5"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"6360f76f52bc8f3ded87958e3d429334"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"ecc1b6223ac70f4338b7c7938af704d1"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"44942f1c9a42990d3c4748465595301e"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"68d8cbb1b88218baf8525354a094bf9c"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"1ad09e663cb5ed88e911bd8021281d53"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"c78c823733b774570d8a652ff1cbb4e4"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"aeb09546fc002bcccfccd110bad24563"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"b4ff3539f216308b00bd33432d9b8565"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"e8a7ccb70b98f0f826f16e20accefa1a"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"0fe513f5ba91bf3e7918e500b426d8b1"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"4b614103b90ea3a6e24179bf0b882a7c"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"53c8829e47a5db531141ae5db93b51c0"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"a6150452529693159126cc53cde48fa3"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"59754109d84201ad5550cd9437cbeda7"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"cc6557d228ea184c2023c01a7b9779d5"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"6360f76f52bc8f3ded87958e3d429334"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"ecc1b6223ac70f4338b7c7938af704d1"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"44942f1c9a42990d3c4748465595301e"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"68d8cbb1b88218baf8525354a094bf9c"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"1ad09e663cb5ed88e911bd8021281d53"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"c78c823733b774570d8a652ff1cbb4e4"},{url:"/windows11/Square44x44Logo.scale-100.png",revision:"cc6557d228ea184c2023c01a7b9779d5"},{url:"/windows11/Square44x44Logo.scale-125.png",revision:"cfc830daea1599354a8fce963ade0d80"},{url:"/windows11/Square44x44Logo.scale-150.png",revision:"66087b1f111f08b7b33b31afc4de2aff"},{url:"/windows11/Square44x44Logo.scale-200.png",revision:"60f1553ce00eaaf0996b81e91b6c28dc"},{url:"/windows11/Square44x44Logo.scale-400.png",revision:"53bf77a376154e8780d470b8efacb860"},{url:"/windows11/Square44x44Logo.targetsize-16.png",revision:"aeb09546fc002bcccfccd110bad24563"},{url:"/windows11/Square44x44Logo.targetsize-20.png",revision:"b4ff3539f216308b00bd33432d9b8565"},{url:"/windows11/Square44x44Logo.targetsize-24.png",revision:"e8a7ccb70b98f0f826f16e20accefa1a"},{url:"/windows11/Square44x44Logo.targetsize-256.png",revision:"0fe513f5ba91bf3e7918e500b426d8b1"},{url:"/windows11/Square44x44Logo.targetsize-30.png",revision:"4b614103b90ea3a6e24179bf0b882a7c"},{url:"/windows11/Square44x44Logo.targetsize-32.png",revision:"53c8829e47a5db531141ae5db93b51c0"},{url:"/windows11/Square44x44Logo.targetsize-36.png",revision:"a6150452529693159126cc53cde48fa3"},{url:"/windows11/Square44x44Logo.targetsize-40.png",revision:"59754109d84201ad5550cd9437cbeda7"},{url:"/windows11/Square44x44Logo.targetsize-44.png",revision:"cc6557d228ea184c2023c01a7b9779d5"},{url:"/windows11/Square44x44Logo.targetsize-48.png",revision:"6360f76f52bc8f3ded87958e3d429334"},{url:"/windows11/Square44x44Logo.targetsize-60.png",revision:"ecc1b6223ac70f4338b7c7938af704d1"},{url:"/windows11/Square44x44Logo.targetsize-64.png",revision:"44942f1c9a42990d3c4748465595301e"},{url:"/windows11/Square44x44Logo.targetsize-72.png",revision:"68d8cbb1b88218baf8525354a094bf9c"},{url:"/windows11/Square44x44Logo.targetsize-80.png",revision:"1ad09e663cb5ed88e911bd8021281d53"},{url:"/windows11/Square44x44Logo.targetsize-96.png",revision:"c78c823733b774570d8a652ff1cbb4e4"},{url:"/windows11/StoreLogo.scale-100.png",revision:"a80cfeb0c51fdfe3c2e0709339ed3687"},{url:"/windows11/StoreLogo.scale-125.png",revision:"ae0359ab115e9255b743ec65e9caaf6b"},{url:"/windows11/StoreLogo.scale-150.png",revision:"7ea421736e9d1a5a508f4330403b6d64"},{url:"/windows11/StoreLogo.scale-200.png",revision:"4382093be9df66ec07360babffc6e72f"},{url:"/windows11/StoreLogo.scale-400.png",revision:"c930544471dfe3770de5698264dd6346"},{url:"/windows11/Wide310x150Logo.scale-100.png",revision:"47db563dd67347a8f942601297314b71"},{url:"/windows11/Wide310x150Logo.scale-125.png",revision:"7bb8977260fd4fdb6242867dbbf95873"},{url:"/windows11/Wide310x150Logo.scale-150.png",revision:"3a95ff479bb5b9e85d8406c6f7ef5d8b"},{url:"/windows11/Wide310x150Logo.scale-200.png",revision:"74deb7475163b4dba404a10607a3c095"},{url:"/windows11/Wide310x150Logo.scale-400.png",revision:"433fde3e076f31acfa75619c81aea0fb"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:s})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
