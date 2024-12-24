'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d6cd5df1de49a58fec70e6e2f3f0f18a",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "c1c5f29031926111ab3ccb7c551c88f9",
"/": "c1c5f29031926111ab3ccb7c551c88f9",
"main.dart.js": "d81f036627233ee3308b477f44f26a36",
"web.config": "2a416e10c74cc9ac336f4c721be9fef8",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "f9982e69d094742db62fc5eaaee8ab07",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"assets/AssetManifest.json": "6fc2d9c7d7a46c0c3cfa3e5630aa6b32",
"assets/NOTICES": "25928f1335cd144d65163dc757e18770",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "a619a53edbe265f95c4a8ec2e556cb0c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "137b421f5043fd9d3a39b18286370e61",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b7e505493657d2bf67cbbdd877161a38",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/dart_and_oop.jpg": "bccee6f8f461723bcac8e97ed0fd7d18",
"assets/assets/images/pioneers_academy_certificate_2.jpg": "1dd601a7648147e7c77f56d8ae63484b",
"assets/assets/images/game_guru.png": "5aae933dd8ba259516d6f5889d26d96a",
"assets/assets/images/game_guru_admin.png": "64f9d8975a3fc67bf3d7dc2499b522bc",
"assets/assets/images/pioneers_academy_certificate_3.jpg": "3ecfb3132900784e74e260109032ee0c",
"assets/assets/images/pioneers_academy_certificate_1.jpg": "86a56daaeee851d8eca8e120c68b1534",
"assets/assets/images/naser_sami_1.jpeg": "9fbe01be055a0b7b8826f82e29373e1b",
"assets/assets/images/project3.png": "0d992a33aac769917460aa71618c766a",
"assets/assets/images/pioneers_academy_certificate_4.jpg": "518ee998bfa7dd049d67334b784749ac",
"assets/assets/images/pioneers_academy_certificate_5.jpg": "2887aa097a0eabd7cd4bc291c7d045a3",
"assets/assets/images/project2.png": "ad51f7f12118daca167cdc97379ec400",
"assets/assets/images/pioneers_academy_certificate_7.jpg": "c3d75e27129f5f79c5028c9fdde2ff01",
"assets/assets/images/game_guru_coach.png": "f2b69fa9b2944ab3acb7b570ce65293c",
"assets/assets/images/pioneers_academy_certificate_6.jpg": "f949fae3195707c91b84e3f993dc4fa7",
"assets/assets/images/project1.png": "846c753e0f9d3baf8d753ce3a85bcc41",
"assets/assets/images/brain.png": "c04f49f28f8c5221e3f83699b417b1ed",
"assets/assets/images/GameGuru2.png": "70cc6404f402b44e83fcf40f49701d38",
"assets/assets/images/mockup_1.png": "faa330f3a1a0f470ddf0461cab7aea02",
"assets/assets/images/GameGuru0.png": "f3af724ce335562ed0248da3becaff4c",
"assets/assets/images/flutter_development.jpg": "782131379c7d5ddfd8ddae5a39e282e8",
"assets/assets/images/GameGuru1.png": "a31bce8de1a03782e4045b14aeecd0a3",
"assets/assets/images/Rectangle1.png": "68507300a39dbf1658ecae111324a35f",
"assets/assets/images/BEYE_Dashboard1.png": "015155b68438c1ce003d9f2018d74f46",
"assets/assets/images/animations.jpg": "6f552e16a35f93f6898839fd9d2f869a",
"assets/assets/images/Rectangle2.png": "a32c73147f57628d248942027ccb5e80",
"assets/assets/images/beye_website.png": "a0979c0ef391c70a4f613517555cbdee",
"assets/assets/images/Rectangle3.png": "1e8b210f3daa4302b39a9d7d0ff405c3",
"assets/assets/images/aeye.png": "0f93256e9cf4f7a48a2f89ae38e914ed",
"assets/assets/images/Naser2.jpeg": "9e395ea93fbd8e8c4932d8a00b549105",
"assets/assets/images/image-removebg-preview2.png": "04efc6b90cb0c9e752de34bbf91f2484",
"assets/assets/images/image-removebg-preview.png": "9426a17341955999ea97aa476bb3f5fc",
"assets/assets/images/game_guru_logo.png": "84473a709dbc4a9fbc9763346d31a08b",
"assets/assets/images/beye_card_summary.png": "ca0f334fb2516fd79d9457065ec23895",
"assets/assets/images/Frame.png": "9e9ff851c43bdf6155b60e1093c4e30c",
"assets/assets/images/Flutter_Clean_Architecture_Certificate.jpg": "2ef1da9d9587c290d3b65504784dcdaa",
"assets/assets/images/game_guru_club.png": "b2be811ad1ceb5421f21d0784788db23",
"assets/assets/images/git_hub.png": "80134ab671952399b23a507ee5c77e32",
"assets/assets/images/Naser1.jpg": "9175ec2117c45d659753f05c9307b144",
"assets/assets/images/Flutter-Advanced-Course-Bloc-MVVM.jpg": "989799cb7638bca3388cef72535bb1b4",
"assets/assets/images/Naser0.png": "89095c6a9daef39dfcb73aae03cbdc07",
"assets/assets/images/game_guru_club1.png": "ff125d851edbed9df88272927f1bc784",
"assets/assets/images/Naser3.jpg": "1589f9066c5f4824dae3aac3e1d9e83b",
"assets/assets/icons/brain.svg": "186fd48b17fae38e1989a97867e7294e",
"assets/assets/icons/project1.svg": "ee059b937804dc531ab5edc718131b65",
"assets/assets/icons/project2.svg": "34ec3c75654e277971802c9e6a6abab0",
"assets/assets/icons/project3.svg": "253b6dea1805168cab6e5cefb995f7b1",
"assets/assets/icons/stack_overflow.svg": "f313f5ad68e0ed34a2004386b941ced9",
"assets/assets/icons/dark_theme.svg": "4b6f4b3ab129f78f363d3c8a6806a808",
"assets/assets/icons/copy.svg": "21a3d4cf34b5604f8d7cfc5a3b649e1b",
"assets/assets/icons/light_theme.svg": "54acbc3f14cdbafcd1697634ba97090b",
"assets/assets/icons/git_hub.svg": "35c9f5774422f9df41af56a950f8a200",
"assets/assets/icons/system_theme.svg": "26343ff1dbe4ddb4eba254103c1d24e4",
"assets/assets/icons/linkedin.svg": "c20e472dbbe47e5809cf79a0b4e283e4",
"assets/assets/icons/image-removebg-preview.svg": "420a509cc7892bde20be36f632abef69",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
