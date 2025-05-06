"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Frobertzhang%2FDocuments%2FGitHub%2Fsocialmesh%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Frobertzhang%2FDocuments%2FGitHub%2Fsocialmesh&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Frobertzhang%2FDocuments%2FGitHub%2Fsocialmesh%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Frobertzhang%2FDocuments%2FGitHub%2Fsocialmesh&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_robertzhang_Documents_GitHub_socialmesh_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/Users/robertzhang/Documents/GitHub/socialmesh/app/api/auth/[...nextauth]/route.ts\",\n    nextConfigOutput,\n    userland: _Users_robertzhang_Documents_GitHub_socialmesh_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnJvYmVydHpoYW5nJTJGRG9jdW1lbnRzJTJGR2l0SHViJTJGc29jaWFsbWVzaCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZyb2JlcnR6aGFuZyUyRkRvY3VtZW50cyUyRkdpdEh1YiUyRnNvY2lhbG1lc2gmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ2tDO0FBQy9HO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29jaWFsbWVzaC8/ZTUxMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvcm9iZXJ0emhhbmcvRG9jdW1lbnRzL0dpdEh1Yi9zb2NpYWxtZXNoL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9yb2JlcnR6aGFuZy9Eb2N1bWVudHMvR2l0SHViL3NvY2lhbG1lc2gvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Frobertzhang%2FDocuments%2FGitHub%2Fsocialmesh%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Frobertzhang%2FDocuments%2FGitHub%2Fsocialmesh&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth/prisma-adapter */ \"(rsc)/./node_modules/@auth/prisma-adapter/index.js\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_2__.PrismaClient();\n// Generate a unique state identifier for this session\nconst generateNonce = ()=>{\n    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Date.now().toString(36);\n};\n// Development hardcoded secret - DO NOT USE IN PRODUCTION\nconst DEV_SECRET = \"76c395a3cd2f3ebc5f8d3a0c8d3f8c3e5f8d3a0c8d3f8c3e5f8d3a0c\";\nconst authOptions = {\n    adapter: (0,_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__.PrismaAdapter)(prisma),\n    providers: [\n        // Use a custom configuration instead of the built-in LinkedInProvider\n        {\n            id: \"linkedin\",\n            name: \"LinkedIn\",\n            type: \"oauth\",\n            clientId: process.env.LINKEDIN_CLIENT_ID || \"\",\n            clientSecret: process.env.LINKEDIN_CLIENT_SECRET || \"\",\n            wellKnown: \"https://www.linkedin.com/oauth/.well-known/openid-configuration\",\n            authorization: {\n                params: {\n                    scope: \"openid profile email\"\n                }\n            },\n            idToken: true,\n            checks: [\n                \"state\"\n            ],\n            // Override the issuer verification to work with LinkedIn's non-standard implementation\n            client: {\n                token_endpoint_auth_method: \"client_secret_post\",\n                id_token_signed_response_alg: \"RS256\"\n            },\n            // Customize profile extraction to handle LinkedIn's data format\n            profile (profile) {\n                console.log(\"LinkedIn profile:\", JSON.stringify(profile, null, 2));\n                return {\n                    id: profile.sub,\n                    name: profile.name,\n                    email: profile.email,\n                    image: profile.picture\n                };\n            }\n        }\n    ],\n    callbacks: {\n        async session ({ session, user }) {\n            // Add user id to session\n            if (session.user) {\n                session.user.id = user.id;\n            }\n            return session;\n        },\n        async jwt ({ token, user }) {\n            // Add user id to token\n            if (user) {\n                token.id = user.id;\n            }\n            return token;\n        }\n    },\n    pages: {\n        signIn: \"/auth/signin\",\n        signOut: \"/auth/signout\",\n        error: \"/auth/error\"\n    },\n    debug: \"development\" === \"development\",\n    logger: {\n        error (code, metadata) {\n            console.error(`Auth error: ${code}`, metadata);\n        },\n        warn (code) {\n            console.warn(`Auth warning: ${code}`);\n        },\n        debug (code, metadata) {\n            console.log(`Auth debug: ${code}`, metadata);\n        }\n    },\n    // Use the environment variable, but fall back to a hardcoded secret in development\n    secret: process.env.NEXTAUTH_SECRET || DEV_SECRET\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFnQztBQUdvQjtBQUNQO0FBRTdDLE1BQU1HLFNBQVMsSUFBSUQsd0RBQVlBO0FBRS9CLHNEQUFzRDtBQUN0RCxNQUFNRSxnQkFBZ0I7SUFDcEIsT0FBT0MsS0FBS0MsTUFBTSxHQUFHQyxRQUFRLENBQUMsSUFBSUMsU0FBUyxDQUFDLEdBQUcsTUFDeENILEtBQUtDLE1BQU0sR0FBR0MsUUFBUSxDQUFDLElBQUlDLFNBQVMsQ0FBQyxHQUFHLE1BQ3hDQyxLQUFLQyxHQUFHLEdBQUdILFFBQVEsQ0FBQztBQUM3QjtBQUVBLDBEQUEwRDtBQUMxRCxNQUFNSSxhQUFhO0FBRVosTUFBTUMsY0FBK0I7SUFDMUNDLFNBQVNaLG1FQUFhQSxDQUFDRTtJQUN2QlcsV0FBVztRQUNULHNFQUFzRTtRQUN0RTtZQUNFQyxJQUFJO1lBQ0pDLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLGtCQUFrQixJQUFJO1lBQzVDQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLHNCQUFzQixJQUFJO1lBQ3BEQyxXQUFXO1lBQ1hDLGVBQWU7Z0JBQUVDLFFBQVE7b0JBQUVDLE9BQU87Z0JBQXVCO1lBQUU7WUFDM0RDLFNBQVM7WUFDVEMsUUFBUTtnQkFBQzthQUFRO1lBQ2pCLHVGQUF1RjtZQUN2RkMsUUFBUTtnQkFDTkMsNEJBQTRCO2dCQUM1QkMsOEJBQThCO1lBQ2hDO1lBQ0EsZ0VBQWdFO1lBQ2hFQyxTQUFRQSxPQUFPO2dCQUNiQyxRQUFRQyxHQUFHLENBQUMscUJBQXFCQyxLQUFLQyxTQUFTLENBQUNKLFNBQVMsTUFBTTtnQkFDL0QsT0FBTztvQkFDTGxCLElBQUlrQixRQUFRSyxHQUFHO29CQUNmdEIsTUFBTWlCLFFBQVFqQixJQUFJO29CQUNsQnVCLE9BQU9OLFFBQVFNLEtBQUs7b0JBQ3BCQyxPQUFPUCxRQUFRUSxPQUFPO2dCQUN4QjtZQUNGO1FBQ0Y7S0FDRDtJQUNEQyxXQUFXO1FBQ1QsTUFBTUMsU0FBUSxFQUFFQSxPQUFPLEVBQUVDLElBQUksRUFBRTtZQUM3Qix5QkFBeUI7WUFDekIsSUFBSUQsUUFBUUMsSUFBSSxFQUFFO2dCQUNoQkQsUUFBUUMsSUFBSSxDQUFDN0IsRUFBRSxHQUFHNkIsS0FBSzdCLEVBQUU7WUFDM0I7WUFDQSxPQUFPNEI7UUFDVDtRQUNBLE1BQU1FLEtBQUksRUFBRUMsS0FBSyxFQUFFRixJQUFJLEVBQUU7WUFDdkIsdUJBQXVCO1lBQ3ZCLElBQUlBLE1BQU07Z0JBQ1JFLE1BQU0vQixFQUFFLEdBQUc2QixLQUFLN0IsRUFBRTtZQUNwQjtZQUNBLE9BQU8rQjtRQUNUO0lBQ0Y7SUFDQUMsT0FBTztRQUNMQyxRQUFRO1FBQ1JDLFNBQVM7UUFDVEMsT0FBTztJQUNUO0lBQ0FDLE9BQU9oQyxrQkFBeUI7SUFDaENpQyxRQUFRO1FBQ05GLE9BQU1HLElBQUksRUFBRUMsUUFBUTtZQUNsQnBCLFFBQVFnQixLQUFLLENBQUMsQ0FBQyxZQUFZLEVBQUVHLEtBQUssQ0FBQyxFQUFFQztRQUN2QztRQUNBQyxNQUFLRixJQUFJO1lBQ1BuQixRQUFRcUIsSUFBSSxDQUFDLENBQUMsY0FBYyxFQUFFRixLQUFLLENBQUM7UUFDdEM7UUFDQUYsT0FBTUUsSUFBSSxFQUFFQyxRQUFRO1lBQ2xCcEIsUUFBUUMsR0FBRyxDQUFDLENBQUMsWUFBWSxFQUFFa0IsS0FBSyxDQUFDLEVBQUVDO1FBQ3JDO0lBQ0Y7SUFDQSxtRkFBbUY7SUFDbkZFLFFBQVFyQyxRQUFRQyxHQUFHLENBQUNxQyxlQUFlLElBQUk5QztBQUN6QyxFQUFDO0FBRUQsTUFBTStDLFVBQVUxRCxnREFBUUEsQ0FBQ1k7QUFFaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2NpYWxtZXNoLy4vYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHM/YzhhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJ1xuaW1wb3J0IHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSAnbmV4dC1hdXRoJ1xuaW1wb3J0IExpbmtlZEluUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9saW5rZWRpbidcbmltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tICdAYXV0aC9wcmlzbWEtYWRhcHRlcidcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcblxuLy8gR2VuZXJhdGUgYSB1bmlxdWUgc3RhdGUgaWRlbnRpZmllciBmb3IgdGhpcyBzZXNzaW9uXG5jb25zdCBnZW5lcmF0ZU5vbmNlID0gKCkgPT4ge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDE1KSArIFxuICAgICAgICAgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDE1KSArIFxuICAgICAgICAgRGF0ZS5ub3coKS50b1N0cmluZygzNilcbn1cblxuLy8gRGV2ZWxvcG1lbnQgaGFyZGNvZGVkIHNlY3JldCAtIERPIE5PVCBVU0UgSU4gUFJPRFVDVElPTlxuY29uc3QgREVWX1NFQ1JFVCA9IFwiNzZjMzk1YTNjZDJmM2ViYzVmOGQzYTBjOGQzZjhjM2U1ZjhkM2EwYzhkM2Y4YzNlNWY4ZDNhMGNcIlxuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcbiAgYWRhcHRlcjogUHJpc21hQWRhcHRlcihwcmlzbWEpLFxuICBwcm92aWRlcnM6IFtcbiAgICAvLyBVc2UgYSBjdXN0b20gY29uZmlndXJhdGlvbiBpbnN0ZWFkIG9mIHRoZSBidWlsdC1pbiBMaW5rZWRJblByb3ZpZGVyXG4gICAge1xuICAgICAgaWQ6IFwibGlua2VkaW5cIixcbiAgICAgIG5hbWU6IFwiTGlua2VkSW5cIixcbiAgICAgIHR5cGU6IFwib2F1dGhcIixcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5MSU5LRURJTl9DTElFTlRfSUQgfHwgJycsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkxJTktFRElOX0NMSUVOVF9TRUNSRVQgfHwgJycsXG4gICAgICB3ZWxsS25vd246IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL29hdXRoLy53ZWxsLWtub3duL29wZW5pZC1jb25maWd1cmF0aW9uXCIsXG4gICAgICBhdXRob3JpemF0aW9uOiB7IHBhcmFtczogeyBzY29wZTogXCJvcGVuaWQgcHJvZmlsZSBlbWFpbFwiIH0gfSxcbiAgICAgIGlkVG9rZW46IHRydWUsXG4gICAgICBjaGVja3M6IFtcInN0YXRlXCJdLFxuICAgICAgLy8gT3ZlcnJpZGUgdGhlIGlzc3VlciB2ZXJpZmljYXRpb24gdG8gd29yayB3aXRoIExpbmtlZEluJ3Mgbm9uLXN0YW5kYXJkIGltcGxlbWVudGF0aW9uXG4gICAgICBjbGllbnQ6IHtcbiAgICAgICAgdG9rZW5fZW5kcG9pbnRfYXV0aF9tZXRob2Q6IFwiY2xpZW50X3NlY3JldF9wb3N0XCIsXG4gICAgICAgIGlkX3Rva2VuX3NpZ25lZF9yZXNwb25zZV9hbGc6IFwiUlMyNTZcIixcbiAgICAgIH0sXG4gICAgICAvLyBDdXN0b21pemUgcHJvZmlsZSBleHRyYWN0aW9uIHRvIGhhbmRsZSBMaW5rZWRJbidzIGRhdGEgZm9ybWF0XG4gICAgICBwcm9maWxlKHByb2ZpbGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJMaW5rZWRJbiBwcm9maWxlOlwiLCBKU09OLnN0cmluZ2lmeShwcm9maWxlLCBudWxsLCAyKSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQ6IHByb2ZpbGUuc3ViLFxuICAgICAgICAgIG5hbWU6IHByb2ZpbGUubmFtZSxcbiAgICAgICAgICBlbWFpbDogcHJvZmlsZS5lbWFpbCxcbiAgICAgICAgICBpbWFnZTogcHJvZmlsZS5waWN0dXJlLFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICB9LFxuICBdLFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdXNlciB9KSB7XG4gICAgICAvLyBBZGQgdXNlciBpZCB0byBzZXNzaW9uXG4gICAgICBpZiAoc2Vzc2lvbi51c2VyKSB7XG4gICAgICAgIHNlc3Npb24udXNlci5pZCA9IHVzZXIuaWRcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXNzaW9uXG4gICAgfSxcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XG4gICAgICAvLyBBZGQgdXNlciBpZCB0byB0b2tlblxuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgdG9rZW4uaWQgPSB1c2VyLmlkXG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW5cbiAgICB9XG4gIH0sXG4gIHBhZ2VzOiB7XG4gICAgc2lnbkluOiAnL2F1dGgvc2lnbmluJyxcbiAgICBzaWduT3V0OiAnL2F1dGgvc2lnbm91dCcsXG4gICAgZXJyb3I6ICcvYXV0aC9lcnJvcicsXG4gIH0sXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JywgLy8gRW5hYmxlIGRlYnVnIGluIGRldmVsb3BtZW50XG4gIGxvZ2dlcjoge1xuICAgIGVycm9yKGNvZGUsIG1ldGFkYXRhKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBBdXRoIGVycm9yOiAke2NvZGV9YCwgbWV0YWRhdGEpXG4gICAgfSxcbiAgICB3YXJuKGNvZGUpIHtcbiAgICAgIGNvbnNvbGUud2FybihgQXV0aCB3YXJuaW5nOiAke2NvZGV9YClcbiAgICB9LFxuICAgIGRlYnVnKGNvZGUsIG1ldGFkYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZyhgQXV0aCBkZWJ1ZzogJHtjb2RlfWAsIG1ldGFkYXRhKVxuICAgIH1cbiAgfSxcbiAgLy8gVXNlIHRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZSwgYnV0IGZhbGwgYmFjayB0byBhIGhhcmRjb2RlZCBzZWNyZXQgaW4gZGV2ZWxvcG1lbnRcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQgfHwgREVWX1NFQ1JFVCxcbn1cblxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb25zKVxuXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH0gIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiUHJpc21hQWRhcHRlciIsIlByaXNtYUNsaWVudCIsInByaXNtYSIsImdlbmVyYXRlTm9uY2UiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJEYXRlIiwibm93IiwiREVWX1NFQ1JFVCIsImF1dGhPcHRpb25zIiwiYWRhcHRlciIsInByb3ZpZGVycyIsImlkIiwibmFtZSIsInR5cGUiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJMSU5LRURJTl9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJMSU5LRURJTl9DTElFTlRfU0VDUkVUIiwid2VsbEtub3duIiwiYXV0aG9yaXphdGlvbiIsInBhcmFtcyIsInNjb3BlIiwiaWRUb2tlbiIsImNoZWNrcyIsImNsaWVudCIsInRva2VuX2VuZHBvaW50X2F1dGhfbWV0aG9kIiwiaWRfdG9rZW5fc2lnbmVkX3Jlc3BvbnNlX2FsZyIsInByb2ZpbGUiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInN1YiIsImVtYWlsIiwiaW1hZ2UiLCJwaWN0dXJlIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInVzZXIiLCJqd3QiLCJ0b2tlbiIsInBhZ2VzIiwic2lnbkluIiwic2lnbk91dCIsImVycm9yIiwiZGVidWciLCJsb2dnZXIiLCJjb2RlIiwibWV0YWRhdGEiLCJ3YXJuIiwic2VjcmV0IiwiTkVYVEFVVEhfU0VDUkVUIiwiaGFuZGxlciIsIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/@auth"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Frobertzhang%2FDocuments%2FGitHub%2Fsocialmesh%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Frobertzhang%2FDocuments%2FGitHub%2Fsocialmesh&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();