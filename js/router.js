/* ============================================================
   ROUTER
   Minimal hash-based client-side router.
   No dependencies, works on any static host without config.
   Route patterns support a single dynamic segment: "/projects/:id"
   ============================================================ */

'use strict';

const Router = (() => {
  const routes = [];
  let notFoundHandler = null;
  let currentCleanup = null;

  /** Register a route. Pattern: "/", "/projects", "/projects/:id" */
  function register(pattern, handler) {
    const paramNames = [];
    const regexStr = pattern
      .replace(/\/:([^/]+)/g, (_, name) => {
        paramNames.push(name);
        return '/([^/]+)';
      })
      .replace(/\//g, '\\/');
    const regex = new RegExp(`^${regexStr}$`);
    routes.push({ pattern, regex, paramNames, handler });
  }

  function registerNotFound(handler) {
    notFoundHandler = handler;
  }

  function parseHash() {
    let hash = window.location.hash || '#/';
    hash = hash.replace(/^#/, '');
    if (hash === '') hash = '/';
    const [path] = hash.split('?');
    return path;
  }

  function matchRoute(path) {
    for (const route of routes) {
      const match = path.match(route.regex);
      if (match) {
        const params = {};
        route.paramNames.forEach((name, i) => {
          params[name] = decodeURIComponent(match[i + 1]);
        });
        return { route, params };
      }
    }
    return null;
  }

  function resolve() {
    const path = parseHash();
    const matched = matchRoute(path);

    if (typeof currentCleanup === 'function') {
      try { currentCleanup(); } catch (e) { /* noop */ }
      currentCleanup = null;
    }

    if (matched) {
      const result = matched.route.handler(matched.params);
      if (typeof result === 'function') currentCleanup = result;
    } else if (notFoundHandler) {
      const result = notFoundHandler();
      if (typeof result === 'function') currentCleanup = result;
    }

    window.scrollTo(0, 0);
  }

  function navigate(path) {
    if (window.location.hash === `#${path}`) {
      resolve();
    } else {
      window.location.hash = path;
    }
  }

  function init() {
    window.addEventListener('hashchange', resolve);
    resolve();
  }

  /** Re-render whatever route is currently active (e.g. after a language switch) */
  function refresh() {
    resolve();
  }

  return { register, registerNotFound, navigate, init, parseHash, refresh };
})();
