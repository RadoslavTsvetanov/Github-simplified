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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "zod":
/*!**********************!*\
  !*** external "zod" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("zod");;

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _server_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/server/auth */ \"(api)/./src/server/auth.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_server_auth__WEBPACK_IMPORTED_MODULE_1__]);\n_server_auth__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_server_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlDO0FBQ1c7QUFFNUMsaUVBQWVBLGdEQUFRQSxDQUFDQyxxREFBV0EsQ0FBQ0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dpdGh1Yi1zaW1wbGlmaWVkLy4vc3JjL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/NTBhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwifi9zZXJ2ZXIvYXV0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJhdXRoT3B0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "(api)/./src/server/auth.ts":
/*!****************************!*\
  !*** ./src/server/auth.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   getServerAuthSession: () => (/* binding */ getServerAuthSession)\n/* harmony export */ });\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _env_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/env.mjs */ \"(api)/./src/env.mjs\");\n/* harmony import */ var _server_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/server/db */ \"(api)/./src/server/db.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_env_mjs__WEBPACK_IMPORTED_MODULE_3__, _server_db__WEBPACK_IMPORTED_MODULE_4__]);\n([_env_mjs__WEBPACK_IMPORTED_MODULE_3__, _server_db__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n/**\n * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.\n *\n * @see https://next-auth.js.org/configuration/options\n */ const authOptions = {\n    callbacks: {\n        session: ({ session, user })=>({\n                ...session,\n                user: {\n                    ...session.user,\n                    id: user.id\n                }\n            })\n    },\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__.PrismaAdapter)(_server_db__WEBPACK_IMPORTED_MODULE_4__.prisma),\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: _env_mjs__WEBPACK_IMPORTED_MODULE_3__.env.GITHUB_CLIENT_ID,\n            clientSecret: _env_mjs__WEBPACK_IMPORTED_MODULE_3__.env.GITHUB_CLIENT_SECRET\n        })\n    ]\n};\n/**\n * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.\n *\n * @see https://next-auth.js.org/configuration/nextjs\n */ const getServerAuthSession = (ctx)=>{\n    return (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(ctx.req, ctx.res, authOptions);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmVyL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUEwRDtBQU12QztBQUNxQztBQUN4QjtBQUNLO0FBdUJyQzs7OztDQUlDLEdBQ00sTUFBTUssY0FBK0I7SUFDMUNDLFdBQVc7UUFDVEMsU0FBUyxDQUFDLEVBQUVBLE9BQU8sRUFBRUMsSUFBSSxFQUFFLEdBQU07Z0JBQy9CLEdBQUdELE9BQU87Z0JBQ1ZDLE1BQU07b0JBQ0osR0FBR0QsUUFBUUMsSUFBSTtvQkFDZkMsSUFBSUQsS0FBS0M7Z0JBQ1g7WUFDRjtJQUNGO0lBQ0FDLFNBQVNWLHdFQUFhQSxDQUFDSSw4Q0FBTUE7SUFDN0JPLFdBQVc7UUFDVFQsaUVBQWNBLENBQUM7WUFDYlUsVUFBVVQseUNBQUdBLENBQUNVO1lBQ2RDLGNBQWNYLHlDQUFHQSxDQUFDWTtRQUNwQjtLQVVEO0FBQ0gsRUFBRTtBQUVGOzs7O0NBSUMsR0FDTSxNQUFNQyx1QkFBdUIsQ0FBQ0M7SUFJbkMsT0FBT2hCLDJEQUFnQkEsQ0FBQ2dCLElBQUlDLEtBQUtELElBQUlFLEtBQUtkO0FBQzVDLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naXRodWItc2ltcGxpZmllZC8uL3NyYy9zZXJ2ZXIvYXV0aC50cz8yMmJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tIFwiQG5leHQtYXV0aC9wcmlzbWEtYWRhcHRlclwiO1xuaW1wb3J0IHsgdHlwZSBHZXRTZXJ2ZXJTaWRlUHJvcHNDb250ZXh0IH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7XG4gIGdldFNlcnZlclNlc3Npb24sXG4gIHR5cGUgTmV4dEF1dGhPcHRpb25zLFxuICB0eXBlIERlZmF1bHRTZXNzaW9uLFxufSBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgR2l0aHViUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ2l0aHViXCI7XG5pbXBvcnQgeyBlbnYgfSBmcm9tIFwifi9lbnYubWpzXCI7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwifi9zZXJ2ZXIvZGJcIjtcblxuLyoqXG4gKiBNb2R1bGUgYXVnbWVudGF0aW9uIGZvciBgbmV4dC1hdXRoYCB0eXBlcy4gQWxsb3dzIHVzIHRvIGFkZCBjdXN0b20gcHJvcGVydGllcyB0byB0aGUgYHNlc3Npb25gXG4gKiBvYmplY3QgYW5kIGtlZXAgdHlwZSBzYWZldHkuXG4gKlxuICogQHNlZSBodHRwczovL25leHQtYXV0aC5qcy5vcmcvZ2V0dGluZy1zdGFydGVkL3R5cGVzY3JpcHQjbW9kdWxlLWF1Z21lbnRhdGlvblxuICovXG5kZWNsYXJlIG1vZHVsZSBcIm5leHQtYXV0aFwiIHtcbiAgaW50ZXJmYWNlIFNlc3Npb24gZXh0ZW5kcyBEZWZhdWx0U2Vzc2lvbiB7XG4gICAgdXNlcjoge1xuICAgICAgaWQ6IHN0cmluZztcbiAgICAgIC8vIC4uLm90aGVyIHByb3BlcnRpZXNcbiAgICAgIC8vIHJvbGU6IFVzZXJSb2xlO1xuICAgIH0gJiBEZWZhdWx0U2Vzc2lvbltcInVzZXJcIl07XG4gIH1cblxuICAvLyBpbnRlcmZhY2UgVXNlciB7XG4gIC8vICAgLy8gLi4ub3RoZXIgcHJvcGVydGllc1xuICAvLyAgIC8vIHJvbGU6IFVzZXJSb2xlO1xuICAvLyB9XG59XG5cbi8qKlxuICogT3B0aW9ucyBmb3IgTmV4dEF1dGguanMgdXNlZCB0byBjb25maWd1cmUgYWRhcHRlcnMsIHByb3ZpZGVycywgY2FsbGJhY2tzLCBldGMuXG4gKlxuICogQHNlZSBodHRwczovL25leHQtYXV0aC5qcy5vcmcvY29uZmlndXJhdGlvbi9vcHRpb25zXG4gKi9cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xuICBjYWxsYmFja3M6IHtcbiAgICBzZXNzaW9uOiAoeyBzZXNzaW9uLCB1c2VyIH0pID0+ICh7XG4gICAgICAuLi5zZXNzaW9uLFxuICAgICAgdXNlcjoge1xuICAgICAgICAuLi5zZXNzaW9uLnVzZXIsXG4gICAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgfSxcbiAgICB9KSxcbiAgfSxcbiAgYWRhcHRlcjogUHJpc21hQWRhcHRlcihwcmlzbWEpLFxuICBwcm92aWRlcnM6IFtcbiAgICBHaXRodWJQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogZW52LkdJVEhVQl9DTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IGVudi5HSVRIVUJfQ0xJRU5UX1NFQ1JFVCxcbiAgICB9KSxcbiAgICAvKipcbiAgICAgKiAuLi5hZGQgbW9yZSBwcm92aWRlcnMgaGVyZS5cbiAgICAgKlxuICAgICAqIE1vc3Qgb3RoZXIgcHJvdmlkZXJzIHJlcXVpcmUgYSBiaXQgbW9yZSB3b3JrIHRoYW4gdGhlIEdpdGh1YiBwcm92aWRlci4gRm9yIGV4YW1wbGUsIHRoZVxuICAgICAqIEdpdEh1YiBwcm92aWRlciByZXF1aXJlcyB5b3UgdG8gYWRkIHRoZSBgcmVmcmVzaF90b2tlbl9leHBpcmVzX2luYCBmaWVsZCB0byB0aGUgQWNjb3VudFxuICAgICAqIG1vZGVsLiBSZWZlciB0byB0aGUgTmV4dEF1dGguanMgZG9jcyBmb3IgdGhlIHByb3ZpZGVyIHlvdSB3YW50IHRvIHVzZS4gRXhhbXBsZTpcbiAgICAgKlxuICAgICAqIEBzZWUgaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL3Byb3ZpZGVycy9naXRodWJcbiAgICAgKi9cbiAgXSxcbn07XG5cbi8qKlxuICogV3JhcHBlciBmb3IgYGdldFNlcnZlclNlc3Npb25gIHNvIHRoYXQgeW91IGRvbid0IG5lZWQgdG8gaW1wb3J0IHRoZSBgYXV0aE9wdGlvbnNgIGluIGV2ZXJ5IGZpbGUuXG4gKlxuICogQHNlZSBodHRwczovL25leHQtYXV0aC5qcy5vcmcvY29uZmlndXJhdGlvbi9uZXh0anNcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFNlcnZlckF1dGhTZXNzaW9uID0gKGN0eDoge1xuICByZXE6IEdldFNlcnZlclNpZGVQcm9wc0NvbnRleHRbXCJyZXFcIl07XG4gIHJlczogR2V0U2VydmVyU2lkZVByb3BzQ29udGV4dFtcInJlc1wiXTtcbn0pID0+IHtcbiAgcmV0dXJuIGdldFNlcnZlclNlc3Npb24oY3R4LnJlcSwgY3R4LnJlcywgYXV0aE9wdGlvbnMpO1xufTtcbiJdLCJuYW1lcyI6WyJQcmlzbWFBZGFwdGVyIiwiZ2V0U2VydmVyU2Vzc2lvbiIsIkdpdGh1YlByb3ZpZGVyIiwiZW52IiwicHJpc21hIiwiYXV0aE9wdGlvbnMiLCJjYWxsYmFja3MiLCJzZXNzaW9uIiwidXNlciIsImlkIiwiYWRhcHRlciIsInByb3ZpZGVycyIsImNsaWVudElkIiwiR0lUSFVCX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdJVEhVQl9DTElFTlRfU0VDUkVUIiwiZ2V0U2VydmVyQXV0aFNlc3Npb24iLCJjdHgiLCJyZXEiLCJyZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/server/auth.ts\n");

/***/ }),

/***/ "(api)/./src/server/db.ts":
/*!**************************!*\
  !*** ./src/server/db.ts ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _env_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/env.mjs */ \"(api)/./src/env.mjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_env_mjs__WEBPACK_IMPORTED_MODULE_1__]);\n_env_mjs__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: _env_mjs__WEBPACK_IMPORTED_MODULE_1__.env.NODE_ENV === \"development\" ? [\n        \"query\",\n        \"error\",\n        \"warn\"\n    ] : [\n        \"error\"\n    ]\n});\nif (_env_mjs__WEBPACK_IMPORTED_MODULE_1__.env.NODE_ENV !== \"production\") globalForPrisma.prisma = prisma;\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmVyL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEM7QUFDZDtBQUVoQyxNQUFNRSxrQkFBa0JDO0FBSWpCLE1BQU1DLFNBQ1hGLGdCQUFnQkUsVUFDaEIsSUFBSUosd0RBQVlBLENBQUM7SUFDZkssS0FDRUoseUNBQUdBLENBQUNLLGFBQWEsZ0JBQWdCO1FBQUM7UUFBUztRQUFTO0tBQU8sR0FBRztRQUFDO0tBQVE7QUFDM0UsR0FBRztBQUVMLElBQUlMLHlDQUFHQSxDQUFDSyxhQUFhLGNBQWNKLGdCQUFnQkUsU0FBU0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naXRodWItc2ltcGxpZmllZC8uL3NyYy9zZXJ2ZXIvZGIudHM/YWE2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IGVudiB9IGZyb20gXCJ+L2Vudi5tanNcIjtcblxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsVGhpcyBhcyB1bmtub3duIGFzIHtcbiAgcHJpc21hOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgY29uc3QgcHJpc21hID1cbiAgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA/P1xuICBuZXcgUHJpc21hQ2xpZW50KHtcbiAgICBsb2c6XG4gICAgICBlbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiA/IFtcInF1ZXJ5XCIsIFwiZXJyb3JcIiwgXCJ3YXJuXCJdIDogW1wiZXJyb3JcIl0sXG4gIH0pO1xuXG5pZiAoZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYTtcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJlbnYiLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWxUaGlzIiwicHJpc21hIiwibG9nIiwiTk9ERV9FTlYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/server/db.ts\n");

/***/ }),

/***/ "(api)/./src/env.mjs":
/*!*********************!*\
  !*** ./src/env.mjs ***!
  \*********************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   env: () => (/* binding */ env)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"zod\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__]);\nzod__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n/* eslint-disable @typescript-eslint/ban-ts-comment */ \n/**\n * Specify your server-side environment variables schema here.\n * This way you can ensure the app isn't built with invalid env vars.\n */ const server = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n    DATABASE_URL: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().url(),\n    NODE_ENV: zod__WEBPACK_IMPORTED_MODULE_0__.z.enum([\n        \"development\",\n        \"test\",\n        \"production\"\n    ]),\n    NEXTAUTH_SECRET:  false ? 0 : zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1).optional(),\n    NEXTAUTH_URL: zod__WEBPACK_IMPORTED_MODULE_0__.z.preprocess(// This makes Vercel deployments not fail if you don't set NEXTAUTH_URL\n    // Since NextAuth.js automatically uses the VERCEL_URL if present.\n    (str)=>process.env.VERCEL_URL ?? str, // VERCEL_URL doesn't include `https` so it cant be validated as a URL\n    process.env.VERCEL ? zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1) : zod__WEBPACK_IMPORTED_MODULE_0__.z.string().url()),\n    // Add `.min(1) on ID and SECRET if you want to make sure they're not empty\n    GITHUB_CLIENT_ID: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),\n    GITHUB_CLIENT_SECRET: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()\n});\n/**\n * Specify your client-side environment variables schema here.\n * This way you can ensure the app isn't built with invalid env vars.\n * To expose them to the client, prefix them with `NEXT_PUBLIC_`.\n */ const client = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n});\n/**\n * You can't destruct `process.env` as a regular object in the Next.js\n * edge runtimes (e.g. middlewares) or client-side so we need to destruct manually.\n * @type {Record<keyof z.infer<typeof server> | keyof z.infer<typeof client>, string | undefined>}\n */ const processEnv = {\n    DATABASE_URL: process.env.DATABASE_URL,\n    NODE_ENV: \"development\",\n    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,\n    NEXTAUTH_URL: process.env.NEXTAUTH_URL,\n    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,\n    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET\n};\n// Don't touch the part below\n// --------------------------\nconst merged = server.merge(client);\n/** @type z.infer<merged>\n *  @ts-ignore - can't type this properly in jsdoc */ let env = process.env;\nif (!!process.env.SKIP_ENV_VALIDATION == false) {\n    const isServer = \"undefined\" === \"undefined\";\n    const parsed = isServer ? merged.safeParse(processEnv) // on server we can validate all env vars\n     : client.safeParse(processEnv); // on client we can only validate the ones that are exposed\n    if (parsed.success === false) {\n        console.error(\"❌ Invalid environment variables:\", parsed.error.flatten().fieldErrors);\n        throw new Error(\"Invalid environment variables\");\n    }\n    /** @type z.infer<merged>\n   *  @ts-ignore - can't type this properly in jsdoc */ env = new Proxy(parsed.data, {\n        get (target, prop) {\n            if (typeof prop !== \"string\") return undefined;\n            // Throw a descriptive error if a server-side env var is accessed on the client\n            // Otherwise it would just be returning `undefined` and be annoying to debug\n            if (!isServer && !prop.startsWith(\"NEXT_PUBLIC_\")) throw new Error( false ? 0 : `❌ Attempted to access server-side environment variable '${prop}' on the client`);\n            /*  @ts-ignore - can't type this properly in jsdoc */ return target[prop];\n        }\n    });\n}\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvZW52Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLG9EQUFvRCxHQUM1QjtBQUV4Qjs7O0NBR0MsR0FDRCxNQUFNQyxTQUFTRCxrQ0FBQ0EsQ0FBQ0UsT0FBTztJQUN0QkMsY0FBY0gsa0NBQUNBLENBQUNJLFNBQVNDO0lBQ3pCQyxVQUFVTixrQ0FBQ0EsQ0FBQ08sS0FBSztRQUFDO1FBQWU7UUFBUTtLQUFhO0lBQ3REQyxpQkFDRUMsTUFBcUMsR0FDakNULENBQWlCLEdBQ2pCQSxrQ0FBQ0EsQ0FBQ0ksU0FBU00sSUFBSSxHQUFHQztJQUN4QkMsY0FBY1osa0NBQUNBLENBQUNhLFdBQ2QsdUVBQXVFO0lBQ3ZFLGtFQUFrRTtJQUNsRSxDQUFDQyxNQUFRTCxRQUFRTSxJQUFJQyxjQUFjRixLQUNuQyxzRUFBc0U7SUFDdEVMLFFBQVFNLElBQUlFLFNBQVNqQixrQ0FBQ0EsQ0FBQ0ksU0FBU00sSUFBSSxLQUFLVixrQ0FBQ0EsQ0FBQ0ksU0FBU0M7SUFFdEQsMkVBQTJFO0lBQzNFYSxrQkFBa0JsQixrQ0FBQ0EsQ0FBQ0k7SUFDcEJlLHNCQUFzQm5CLGtDQUFDQSxDQUFDSTtBQUMxQjtBQUVBOzs7O0NBSUMsR0FDRCxNQUFNZ0IsU0FBU3BCLGtDQUFDQSxDQUFDRSxPQUFPO0FBRXhCO0FBRUE7Ozs7Q0FJQyxHQUNELE1BQU1tQixhQUFhO0lBQ2pCbEIsY0FBY00sUUFBUU0sSUFBSVo7SUFDMUJHLFVBMUNGO0lBMkNFRSxpQkFBaUJDLFFBQVFNLElBQUlQO0lBQzdCSSxjQUFjSCxRQUFRTSxJQUFJSDtJQUMxQk0sa0JBQWtCVCxRQUFRTSxJQUFJRztJQUM5QkMsc0JBQXNCVixRQUFRTSxJQUFJSTtBQUVwQztBQUVBLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFFN0IsTUFBTUcsU0FBU3JCLE9BQU9zQixNQUFNSDtBQUM1QjttREFDbUQsR0FDbkQsSUFBSUwsTUFBTU4sUUFBUU07QUFFbEIsSUFBSSxDQUFDLENBQUNOLFFBQVFNLElBQUlTLHVCQUF1QixPQUFPO0lBQzlDLE1BQU1DLFdBQVcsZ0JBQWtCO0lBRW5DLE1BQU1DLFNBQVNELFdBQ1hILE9BQU9LLFVBQVVOLFlBQVkseUNBQXlDO09BQ3RFRCxPQUFPTyxVQUFVTixhQUFhLDJEQUEyRDtJQUU3RixJQUFJSyxPQUFPRSxZQUFZLE9BQU87UUFDNUJDLFFBQVFDLE1BQ04sb0NBQ0FKLE9BQU9JLE1BQU1DLFVBQVVDO1FBRXpCLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtJQUVBO3FEQUNtRCxHQUNuRGxCLE1BQU0sSUFBSW1CLE1BQU1SLE9BQU9TLE1BQU07UUFDM0JDLEtBQUlDLE1BQU0sRUFBRUMsSUFBSTtZQUNkLElBQUksT0FBT0EsU0FBUyxVQUFVLE9BQU9DO1lBQ3JDLCtFQUErRTtZQUMvRSw0RUFBNEU7WUFDNUUsSUFBSSxDQUFDZCxZQUFZLENBQUNhLEtBQUtFLFdBQVcsaUJBQ2hDLE1BQU0sSUFBSVAsTUFDUnhCLE1BQXFDLEdBQ2pDLENBQXdFLEdBQ3hFLENBQUMsd0RBQXdELEVBQUU2QixLQUFLLGVBQWUsQ0FBQztZQUV4RixtREFBbUQsR0FDbkQsT0FBT0QsTUFBTSxDQUFDQyxLQUFLO1FBQ3JCO0lBQ0Y7QUFDRjtBQUVlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2l0aHViLXNpbXBsaWZpZWQvLi9zcmMvZW52Lm1qcz9jM2I5Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudCAqL1xuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcblxuLyoqXG4gKiBTcGVjaWZ5IHlvdXIgc2VydmVyLXNpZGUgZW52aXJvbm1lbnQgdmFyaWFibGVzIHNjaGVtYSBoZXJlLlxuICogVGhpcyB3YXkgeW91IGNhbiBlbnN1cmUgdGhlIGFwcCBpc24ndCBidWlsdCB3aXRoIGludmFsaWQgZW52IHZhcnMuXG4gKi9cbmNvbnN0IHNlcnZlciA9IHoub2JqZWN0KHtcbiAgREFUQUJBU0VfVVJMOiB6LnN0cmluZygpLnVybCgpLFxuICBOT0RFX0VOVjogei5lbnVtKFtcImRldmVsb3BtZW50XCIsIFwidGVzdFwiLCBcInByb2R1Y3Rpb25cIl0pLFxuICBORVhUQVVUSF9TRUNSRVQ6XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXG4gICAgICA/IHouc3RyaW5nKCkubWluKDEpXG4gICAgICA6IHouc3RyaW5nKCkubWluKDEpLm9wdGlvbmFsKCksXG4gIE5FWFRBVVRIX1VSTDogei5wcmVwcm9jZXNzKFxuICAgIC8vIFRoaXMgbWFrZXMgVmVyY2VsIGRlcGxveW1lbnRzIG5vdCBmYWlsIGlmIHlvdSBkb24ndCBzZXQgTkVYVEFVVEhfVVJMXG4gICAgLy8gU2luY2UgTmV4dEF1dGguanMgYXV0b21hdGljYWxseSB1c2VzIHRoZSBWRVJDRUxfVVJMIGlmIHByZXNlbnQuXG4gICAgKHN0cikgPT4gcHJvY2Vzcy5lbnYuVkVSQ0VMX1VSTCA/PyBzdHIsXG4gICAgLy8gVkVSQ0VMX1VSTCBkb2Vzbid0IGluY2x1ZGUgYGh0dHBzYCBzbyBpdCBjYW50IGJlIHZhbGlkYXRlZCBhcyBhIFVSTFxuICAgIHByb2Nlc3MuZW52LlZFUkNFTCA/IHouc3RyaW5nKCkubWluKDEpIDogei5zdHJpbmcoKS51cmwoKVxuICApLFxuICAvLyBBZGQgYC5taW4oMSkgb24gSUQgYW5kIFNFQ1JFVCBpZiB5b3Ugd2FudCB0byBtYWtlIHN1cmUgdGhleSdyZSBub3QgZW1wdHlcbiAgR0lUSFVCX0NMSUVOVF9JRDogei5zdHJpbmcoKSxcbiAgR0lUSFVCX0NMSUVOVF9TRUNSRVQ6IHouc3RyaW5nKCksXG59KTtcblxuLyoqXG4gKiBTcGVjaWZ5IHlvdXIgY2xpZW50LXNpZGUgZW52aXJvbm1lbnQgdmFyaWFibGVzIHNjaGVtYSBoZXJlLlxuICogVGhpcyB3YXkgeW91IGNhbiBlbnN1cmUgdGhlIGFwcCBpc24ndCBidWlsdCB3aXRoIGludmFsaWQgZW52IHZhcnMuXG4gKiBUbyBleHBvc2UgdGhlbSB0byB0aGUgY2xpZW50LCBwcmVmaXggdGhlbSB3aXRoIGBORVhUX1BVQkxJQ19gLlxuICovXG5jb25zdCBjbGllbnQgPSB6Lm9iamVjdCh7XG4gIC8vIE5FWFRfUFVCTElDX0NMSUVOVFZBUjogei5zdHJpbmcoKS5taW4oMSksXG59KTtcblxuLyoqXG4gKiBZb3UgY2FuJ3QgZGVzdHJ1Y3QgYHByb2Nlc3MuZW52YCBhcyBhIHJlZ3VsYXIgb2JqZWN0IGluIHRoZSBOZXh0LmpzXG4gKiBlZGdlIHJ1bnRpbWVzIChlLmcuIG1pZGRsZXdhcmVzKSBvciBjbGllbnQtc2lkZSBzbyB3ZSBuZWVkIHRvIGRlc3RydWN0IG1hbnVhbGx5LlxuICogQHR5cGUge1JlY29yZDxrZXlvZiB6LmluZmVyPHR5cGVvZiBzZXJ2ZXI+IHwga2V5b2Ygei5pbmZlcjx0eXBlb2YgY2xpZW50Piwgc3RyaW5nIHwgdW5kZWZpbmVkPn1cbiAqL1xuY29uc3QgcHJvY2Vzc0VudiA9IHtcbiAgREFUQUJBU0VfVVJMOiBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwsXG4gIE5PREVfRU5WOiBwcm9jZXNzLmVudi5OT0RFX0VOVixcbiAgTkVYVEFVVEhfU0VDUkVUOiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXG4gIE5FWFRBVVRIX1VSTDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfVVJMLFxuICBHSVRIVUJfQ0xJRU5UX0lEOiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX0lELFxuICBHSVRIVUJfQ0xJRU5UX1NFQ1JFVDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9TRUNSRVQsXG4gIC8vIE5FWFRfUFVCTElDX0NMSUVOVFZBUjogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0xJRU5UVkFSLFxufTtcblxuLy8gRG9uJ3QgdG91Y2ggdGhlIHBhcnQgYmVsb3dcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNvbnN0IG1lcmdlZCA9IHNlcnZlci5tZXJnZShjbGllbnQpO1xuLyoqIEB0eXBlIHouaW5mZXI8bWVyZ2VkPlxuICogIEB0cy1pZ25vcmUgLSBjYW4ndCB0eXBlIHRoaXMgcHJvcGVybHkgaW4ganNkb2MgKi9cbmxldCBlbnYgPSBwcm9jZXNzLmVudjtcblxuaWYgKCEhcHJvY2Vzcy5lbnYuU0tJUF9FTlZfVkFMSURBVElPTiA9PSBmYWxzZSkge1xuICBjb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCI7XG5cbiAgY29uc3QgcGFyc2VkID0gaXNTZXJ2ZXJcbiAgICA/IG1lcmdlZC5zYWZlUGFyc2UocHJvY2Vzc0VudikgLy8gb24gc2VydmVyIHdlIGNhbiB2YWxpZGF0ZSBhbGwgZW52IHZhcnNcbiAgICA6IGNsaWVudC5zYWZlUGFyc2UocHJvY2Vzc0Vudik7IC8vIG9uIGNsaWVudCB3ZSBjYW4gb25seSB2YWxpZGF0ZSB0aGUgb25lcyB0aGF0IGFyZSBleHBvc2VkXG5cbiAgaWYgKHBhcnNlZC5zdWNjZXNzID09PSBmYWxzZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBcIuKdjCBJbnZhbGlkIGVudmlyb25tZW50IHZhcmlhYmxlczpcIixcbiAgICAgIHBhcnNlZC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnNcbiAgICApO1xuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZW52aXJvbm1lbnQgdmFyaWFibGVzXCIpO1xuICB9XG5cbiAgLyoqIEB0eXBlIHouaW5mZXI8bWVyZ2VkPlxuICAgKiAgQHRzLWlnbm9yZSAtIGNhbid0IHR5cGUgdGhpcyBwcm9wZXJseSBpbiBqc2RvYyAqL1xuICBlbnYgPSBuZXcgUHJveHkocGFyc2VkLmRhdGEsIHtcbiAgICBnZXQodGFyZ2V0LCBwcm9wKSB7XG4gICAgICBpZiAodHlwZW9mIHByb3AgIT09IFwic3RyaW5nXCIpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAvLyBUaHJvdyBhIGRlc2NyaXB0aXZlIGVycm9yIGlmIGEgc2VydmVyLXNpZGUgZW52IHZhciBpcyBhY2Nlc3NlZCBvbiB0aGUgY2xpZW50XG4gICAgICAvLyBPdGhlcndpc2UgaXQgd291bGQganVzdCBiZSByZXR1cm5pbmcgYHVuZGVmaW5lZGAgYW5kIGJlIGFubm95aW5nIHRvIGRlYnVnXG4gICAgICBpZiAoIWlzU2VydmVyICYmICFwcm9wLnN0YXJ0c1dpdGgoXCJORVhUX1BVQkxJQ19cIikpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcbiAgICAgICAgICAgID8gXCLinYwgQXR0ZW1wdGVkIHRvIGFjY2VzcyBhIHNlcnZlci1zaWRlIGVudmlyb25tZW50IHZhcmlhYmxlIG9uIHRoZSBjbGllbnRcIlxuICAgICAgICAgICAgOiBg4p2MIEF0dGVtcHRlZCB0byBhY2Nlc3Mgc2VydmVyLXNpZGUgZW52aXJvbm1lbnQgdmFyaWFibGUgJyR7cHJvcH0nIG9uIHRoZSBjbGllbnRgXG4gICAgICAgICk7XG4gICAgICAvKiAgQHRzLWlnbm9yZSAtIGNhbid0IHR5cGUgdGhpcyBwcm9wZXJseSBpbiBqc2RvYyAqL1xuICAgICAgcmV0dXJuIHRhcmdldFtwcm9wXTtcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IHsgZW52IH07XG4iXSwibmFtZXMiOlsieiIsInNlcnZlciIsIm9iamVjdCIsIkRBVEFCQVNFX1VSTCIsInN0cmluZyIsInVybCIsIk5PREVfRU5WIiwiZW51bSIsIk5FWFRBVVRIX1NFQ1JFVCIsInByb2Nlc3MiLCJtaW4iLCJvcHRpb25hbCIsIk5FWFRBVVRIX1VSTCIsInByZXByb2Nlc3MiLCJzdHIiLCJlbnYiLCJWRVJDRUxfVVJMIiwiVkVSQ0VMIiwiR0lUSFVCX0NMSUVOVF9JRCIsIkdJVEhVQl9DTElFTlRfU0VDUkVUIiwiY2xpZW50IiwicHJvY2Vzc0VudiIsIm1lcmdlZCIsIm1lcmdlIiwiU0tJUF9FTlZfVkFMSURBVElPTiIsImlzU2VydmVyIiwicGFyc2VkIiwic2FmZVBhcnNlIiwic3VjY2VzcyIsImNvbnNvbGUiLCJlcnJvciIsImZsYXR0ZW4iLCJmaWVsZEVycm9ycyIsIkVycm9yIiwiUHJveHkiLCJkYXRhIiwiZ2V0IiwidGFyZ2V0IiwicHJvcCIsInVuZGVmaW5lZCIsInN0YXJ0c1dpdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/env.mjs\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();