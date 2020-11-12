/**
  * elweb v1.0.1
  * (c) 2020 Abdelrahman Awad
  * @license MIT
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@vue/composition-api')) :
  typeof define === 'function' && define.amd ? define(['exports', '@vue/composition-api'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.VueUseWeb = {}, global.vueCompositionApi));
}(this, (function (exports, compositionApi) { 'use strict';

  var events = ['chargingchange', 'chargingtimechange', 'dischargingtimechange', 'levelchange'];
  function useBattery() {
      var isCharging = compositionApi.ref(false);
      var chargingTime = compositionApi.ref(0);
      var dischargingTime = compositionApi.ref(0);
      var level = compositionApi.ref(1);
      function updateBatteryInfo() {
          isCharging.value = this.charging;
          chargingTime.value = this.chargingTime || 0;
          dischargingTime.value = this.dischargingTime || 0;
          level.value = this.level;
      }
      compositionApi.onMounted(function () {
          if (!('getBattery' in navigator)) {
              return;
          }
          navigator.getBattery().then(function (battery) {
              updateBatteryInfo.call(battery);
              events.forEach(function (evt) {
                  battery.addEventListener(evt, updateBatteryInfo);
              });
          });
      });
      compositionApi.onUnmounted(function () {
          if (!('getBattery' in navigator)) {
              return;
          }
          navigator.getBattery().then(function (battery) {
              events.forEach(function (evt) {
                  battery.removeEventListener(evt, updateBatteryInfo);
              });
          });
      });
      return {
          isCharging: isCharging,
          chargingTime: chargingTime,
          dischargingTime: dischargingTime,
          level: level
      };
  }

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */

  var __assign = function() {
      __assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };

  function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  }

  function __generator(thisArg, body) {
      var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
      function verb(n) { return function (v) { return step([n, v]); }; }
      function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while (_) try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];
              switch (op[0]) {
                  case 0: case 1: t = op; break;
                  case 4: _.label++; return { value: op[1], done: false };
                  case 5: _.label++; y = op[1]; op = [0]; continue;
                  case 7: op = _.ops.pop(); _.trys.pop(); continue;
                  default:
                      if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                      if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                      if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                      if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                      if (t[2]) _.ops.pop();
                      _.trys.pop(); continue;
              }
              op = body.call(thisArg, _);
          } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
          if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
      }
  }

  function useClipboard() {
      var text = compositionApi.ref('');
      function onCopy() {
          return __awaiter(this, void 0, void 0, function () {
              var _a;
              return __generator(this, function (_b) {
                  switch (_b.label) {
                      case 0:
                          _a = text;
                          return [4 /*yield*/, navigator.clipboard.readText()];
                      case 1:
                          _a.value = _b.sent();
                          return [2 /*return*/];
                  }
              });
          });
      }
      compositionApi.onMounted(function () {
          window.addEventListener('copy', onCopy);
      });
      compositionApi.onUnmounted(function () {
          window.removeEventListener('copy', onCopy);
      });
      function write(txt) {
          text.value = txt;
          return navigator.clipboard.writeText(txt);
      }
      return {
          text: text,
          write: write
      };
  }

  function useDeviceLight() {
      var value = compositionApi.ref(null);
      function handler(event) {
          value.value = event.value;
      }
      // TODO: Should we debounce/throttle the event?
      compositionApi.onMounted(function () {
          window.addEventListener('devicelight', handler);
      });
      compositionApi.onUnmounted(function () {
          window.removeEventListener('devicelight', handler);
      });
      return {
          value: value
      };
  }

  function throttle(wait, fn) {
      if (wait === 0) {
          return fn;
      }
      var timeout;
      return (function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
          }
          var later = function () {
              timeout = undefined;
              // check if the fn call was cancelled.
              fn.apply(void 0, args);
          };
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
      });
  }
  var hasWindow = typeof window !== 'undefined';

  function useDeviceMotion(options) {
      if (options === void 0) { options = { throttleMs: 10 }; }
      var acceleration = compositionApi.ref({ x: null, y: null, z: null });
      var rotationRate = compositionApi.ref({ alpha: null, beta: null, gamma: null });
      var interval = compositionApi.ref(0);
      var accelerationIncludingGravity = compositionApi.ref({
          x: null,
          y: null,
          z: null
      });
      function onDeviceMotion(event) {
          acceleration.value = event.acceleration;
          accelerationIncludingGravity.value = event.accelerationIncludingGravity;
          rotationRate.value = event.rotationRate;
          interval.value = event.interval;
      }
      var handler = options.throttleMs ? throttle(options.throttleMs, onDeviceMotion) : onDeviceMotion;
      compositionApi.onMounted(function () {
          window.addEventListener('devicemotion', handler, false);
      });
      compositionApi.onUnmounted(function () {
          window.removeEventListener('devicemotion', handler, false);
      });
      return {
          acceleration: acceleration,
          accelerationIncludingGravity: accelerationIncludingGravity,
          rotationRate: rotationRate,
          interval: interval
      };
  }

  function useDeviceOrientation() {
      var isAbsolute = compositionApi.ref(false);
      var alpha = compositionApi.ref(0);
      var beta = compositionApi.ref(0);
      var gamma = compositionApi.ref(0);
      function handler(event) {
          isAbsolute.value = event.absolute;
          alpha.value = event.alpha;
          beta.value = event.beta;
          gamma.value = event.gamma;
      }
      compositionApi.onMounted(function () {
          window.addEventListener('deviceorientation', handler);
      });
      compositionApi.onUnmounted(function () {
          window.removeEventListener('deviceorientation', handler);
      });
      return {
          isAbsolute: isAbsolute,
          alpha: alpha,
          beta: beta,
          gamma: gamma
      };
  }

  function useEventListener(target, type, handler, options) {
      compositionApi.onMounted(function () {
          var t = compositionApi.isRef(target) ? target.value : target;
          t.addEventListener(type, handler, options);
      });
      compositionApi.onBeforeUnmount(function () {
          var t = compositionApi.isRef(target) ? target.value : target;
          t.removeEventListener(type, handler, options);
      });
  }

  /**
   * Tracks visibility of the page.
   *
   * @returns True if the document is currently visible.
   *
   * @example
   * setup() {
   *  const isVisible = useDocumentVisibility()
   *  watch(() => console.log(isVisible))
   * }
   *
   */
  function useDocumentVisibility() {
      var documentIsVisible = function () { return document.visibilityState === 'visible'; };
      var isVisible = compositionApi.ref(hasWindow ? documentIsVisible() : true);
      useEventListener(document, 'visibilitychange', function () {
          isVisible.value = documentIsVisible();
      });
      return isVisible;
  }

  function useFetch(url, options) {
      var response = compositionApi.ref(null);
      var isLoading = compositionApi.ref(false);
      var success = compositionApi.ref(false);
      var error = compositionApi.ref(false);
      var cancelled = compositionApi.ref(false);
      var type = compositionApi.ref('unknown');
      var status = compositionApi.ref(undefined);
      var statusText = compositionApi.ref('');
      var headers = compositionApi.ref({});
      var signal;
      var controller;
      if (typeof AbortController !== 'undefined') {
          controller = new AbortController();
          signal = controller.signal;
      }
      function execute() {
          isLoading.value = true;
          return window
              .fetch(url, __assign({ signal: signal }, options))
              .then(function (res) {
              var _a, _b;
              success.value = res.ok;
              error.value = !res.ok;
              isLoading.value = false;
              statusText.value = res.statusText;
              status.value = res.status;
              type.value = res.type;
              var responseHeaders = {};
              res.headers.forEach(function (value, key) {
                  responseHeaders[key] = value;
              });
              headers.value = responseHeaders;
              var isContentTypeJson = ((_a = res.headers.get('content-type')) === null || _a === void 0 ? void 0 : _a.slice(0, (_b = res.headers.get('content-type')) === null || _b === void 0 ? void 0 : _b.indexOf(';'))) ===
                  'application/json';
              if (isContentTypeJson) {
                  return res.json();
              }
              return res.text();
          })
              .then(function (responseValue) {
              // Graceful degradation for cancellation.
              if (cancelled.value) {
                  return;
              }
              response.value = responseValue;
          })
              .catch(function () {
              error.value = true;
              isLoading.value = false;
          });
      }
      compositionApi.onMounted(execute);
      function cancel() {
          if (success.value) {
              return;
          }
          cancelled.value = true;
          if (controller) {
              controller.abort();
          }
      }
      return {
          response: response,
          status: status,
          statusText: statusText,
          headers: headers,
          isLoading: isLoading,
          cancelled: cancelled,
          error: error,
          success: success,
          cancel: cancel,
          execute: execute
      };
  }

  function useFullscreen(target) {
      var isFullscreen = compositionApi.ref(false);
      function exitFullscreen() {
          if (document.fullscreenElement) {
              document.exitFullscreen();
          }
          isFullscreen.value = false;
      }
      function enterFullscreen() {
          exitFullscreen();
          target.value.requestFullscreen().then(function () {
              isFullscreen.value = true;
          });
      }
      return {
          isFullscreen: isFullscreen,
          enterFullscreen: enterFullscreen,
          exitFullscreen: exitFullscreen
      };
  }

  function useGeolocation(options) {
      var locatedAt = compositionApi.ref(null);
      var error = compositionApi.ref('');
      var coords = compositionApi.ref({
          accuracy: 0,
          latitude: 0,
          longitude: 0,
          altitude: null,
          altitudeAccuracy: null,
          heading: null,
          speed: null
      });
      function updatePosition(position) {
          locatedAt.value = position.timestamp;
          coords.value = position.coords;
          error.value = '';
      }
      var watcher;
      compositionApi.onMounted(function () {
          if ('geolocation' in navigator) {
              watcher = window.navigator.geolocation.watchPosition(updatePosition, undefined, options);
          }
      });
      compositionApi.onUnmounted(function () {
          if (watcher) {
              window.navigator.geolocation.clearWatch(watcher);
          }
      });
      return {
          coords: coords,
          locatedAt: locatedAt,
          error: error
      };
  }

  function useHardwareConcurrency() {
      var logicalProcessors = compositionApi.ref(0);
      var unsupported = compositionApi.ref(false);
      function resolveConcurrency() {
          if (!hasWindow) {
              compositionApi.onMounted(resolveConcurrency);
          }
          if ('hardwareConcurrency' in window.navigator) {
              logicalProcessors.value = window.navigator.hardwareConcurrency;
          }
          unsupported.value = true;
      }
      resolveConcurrency();
      return { logicalProcessors: logicalProcessors, unsupported: unsupported };
  }

  function useIntersectionObserver(target, options) {
      if (options === void 0) { options = { root: null, rootMargin: '0px' }; }
      var intersectionRatio = compositionApi.ref(0);
      var isIntersecting = compositionApi.ref(false);
      var isFullyInView = compositionApi.ref(false);
      function observe() {
          if (target.value) {
              observer.observe(target.value);
          }
      }
      var observer;
      compositionApi.onMounted(function () {
          observer = new IntersectionObserver(function (_a) {
              var entry = _a[0];
              intersectionRatio.value = entry.intersectionRatio;
              if (entry.intersectionRatio > 0) {
                  isIntersecting.value = true;
                  isFullyInView.value = entry.intersectionRatio >= 1;
                  return;
              }
              isIntersecting.value = false;
          }, options);
          observe();
      });
      function unobserve() {
          if (!observer)
              return;
          if (target.value) {
              observer.unobserve(target.value);
          }
      }
      compositionApi.onUnmounted(unobserve);
      return {
          intersectionRatio: intersectionRatio,
          isIntersecting: isIntersecting,
          isFullyInView: isFullyInView,
          observe: observe,
          unobserve: unobserve
      };
  }

  function parseValue(serializedVal) {
      var value = null;
      try {
          value = JSON.parse(serializedVal);
      }
      catch (_a) {
          value = serializedVal;
      }
      return value;
  }
  function useLocalStorage(key, def) {
      var value = compositionApi.ref(null);
      var init = function () {
          var serializedVal = localStorage.getItem(key);
          if (serializedVal !== null) {
              value.value = parseValue(serializedVal);
              return;
          }
          value.value = def;
      };
      var initialized = false;
      // early init if possible.
      if (typeof window !== 'undefined') {
          init();
          initialized = true;
      }
      function handler(e) {
          if (e.key === key) {
              value.value = e.newValue ? parseValue(e.newValue) : null;
          }
      }
      compositionApi.onMounted(function () {
          if (!initialized) {
              init();
          }
          window.addEventListener('storage', handler, true);
      });
      compositionApi.onUnmounted(function () {
          localStorage.setItem(key, JSON.stringify(value.value));
          window.removeEventListener('storage', handler);
      });
      return {
          value: value
      };
  }

  function useMedia(query) {
      var mediaQuery;
      // try to fetch initial value (avoid SSR issues)
      if (typeof window !== 'undefined') {
          mediaQuery = window.matchMedia(query);
      }
      var matches = compositionApi.ref(mediaQuery ? mediaQuery.matches : false);
      function handler(event) {
          matches.value = event.matches;
      }
      compositionApi.onMounted(function () {
          if (!mediaQuery) {
              mediaQuery = window.matchMedia(query);
          }
          matches.value = mediaQuery.matches;
          mediaQuery.addListener(handler);
      });
      compositionApi.onUnmounted(function () {
          mediaQuery.removeListener(handler);
      });
      return matches;
  }

  function useMemoryStatus() {
      var deviceMemory = compositionApi.ref(0);
      var unsupported = compositionApi.ref(false);
      var totalJSHeapSize = compositionApi.ref(undefined);
      var usedJSHeapSize = compositionApi.ref(undefined);
      var jsHeapSizeLimit = compositionApi.ref(undefined);
      function resolveMemory() {
          if (!hasWindow) {
              compositionApi.onMounted(resolveMemory);
          }
          if (!('deviceMemory' in window.navigator)) {
              unsupported.value = true;
              return;
          }
          deviceMemory.value = window.navigator.deviceMemory;
          if ('memory' in window.performance) {
              var memory = window.performance.memory;
              totalJSHeapSize.value = memory.totalJSHeapSize;
              usedJSHeapSize.value = memory === null || memory === void 0 ? void 0 : memory.usedJSHeapSize;
              jsHeapSizeLimit.value = memory === null || memory === void 0 ? void 0 : memory.jsHeapSizeLimit;
          }
      }
      resolveMemory();
      return { deviceMemory: deviceMemory, unsupported: unsupported };
  }

  function useMousePosition() {
      var x = compositionApi.ref(0);
      var y = compositionApi.ref(0);
      function handler(e) {
          x.value = e.clientX;
          y.value = e.clientY;
      }
      compositionApi.onMounted(function () {
          window.addEventListener('mousemove', handler, false);
      });
      compositionApi.onUnmounted(function () {
          window.removeEventListener('mousemove', handler, false);
      });
      return {
          x: x,
          y: y
      };
  }

  function useNetwork() {
      var isOnline = compositionApi.ref(true);
      var saveData = compositionApi.ref(false);
      var offlineAt = compositionApi.ref(undefined);
      var downlink = compositionApi.ref(undefined);
      var downlinkMax = compositionApi.ref(undefined);
      var effectiveType = compositionApi.ref(undefined);
      var type = compositionApi.ref('unknown');
      function updateNetworkInformation() {
          isOnline.value = window.navigator.onLine;
          offlineAt.value = isOnline.value ? undefined : Date.now();
          // skip for non supported browsers.
          if (!('connection' in window.navigator)) {
              return;
          }
          downlink.value = window.navigator.connection.downlink;
          downlinkMax.value = window.navigator.connection.downlinkMax;
          effectiveType.value = window.navigator.connection.effectiveType;
          saveData.value = window.navigator.connection.saveData;
          type.value = window.navigator.connection.type;
      }
      var onOffline = function () {
          isOnline.value = false;
          offlineAt.value = Date.now();
      };
      var onOnline = function () {
          isOnline.value = true;
      };
      compositionApi.onMounted(function () {
          updateNetworkInformation();
          window.addEventListener('offline', onOffline);
          window.addEventListener('online', onOnline);
          if ('connection' in window.navigator) {
              window.navigator.connection.addEventListener('change', updateNetworkInformation, false);
          }
      });
      compositionApi.onUnmounted(function () {
          window.removeEventListener('offline', onOffline);
          window.removeEventListener('online', onOnline);
          if ('connection' in window.navigator) {
              window.navigator.connection.removeEventListener('change', updateNetworkInformation, false);
          }
      });
      return {
          isOnline: isOnline,
          saveData: saveData,
          offlineAt: offlineAt,
          downlink: downlink,
          downlinkMax: downlinkMax,
          effectiveType: effectiveType,
          type: type
      };
  }

  function usePreferredColorScheme() {
      var queries = {
          light: '(prefers-color-scheme: light)',
          dark: '(prefers-color-scheme: dark)',
          'no-preference': '(prefers-color-scheme: no-preference)'
      };
      var isDark = useMedia(queries.dark);
      var isLight = useMedia(queries.light);
      var theme = compositionApi.computed(function () {
          if (isDark.value) {
              return 'dark';
          }
          if (isLight.value) {
              return 'light';
          }
          return 'no-preference';
      });
      return theme;
  }

  function usePreferredLanguages() {
      var value = compositionApi.ref(navigator.languages);
      function handler() {
          value.value = navigator.languages;
      }
      compositionApi.onMounted(function () {
          window.addEventListener('languagechange', handler);
      });
      compositionApi.onUnmounted(function () {
          window.removeEventListener('languagechange', handler);
      });
      return value;
  }

  function useScript(opts) {
      var isLoading = compositionApi.ref(false);
      var error = compositionApi.ref(false);
      var success = compositionApi.ref(false);
      var promise = new Promise(function (resolve, reject) {
          compositionApi.onMounted(function () {
              var script = document.createElement('script');
              // script.async = opts.async || true;
              // script.async = opts.defer || true;
              // script.noModule = !opts.module || false;
              script.onload = function () {
                  isLoading.value = false;
                  success.value = true;
                  error.value = false;
                  resolve();
              };
              script.onerror = function (err) {
                  isLoading.value = false;
                  success.value = false;
                  error.value = true;
                  reject(err);
              };
              script.src = opts.src;
              document.head.appendChild(script);
          });
      });
      return {
          isLoading: isLoading,
          error: error,
          success: success,
          toPromise: function () { return promise; }
      };
  }

  function useWebSocket(url) {
      var data = compositionApi.ref(null);
      var state = compositionApi.ref('CONNECTING');
      var ws;
      var close = function close(code, reason) {
          if (!ws)
              return;
          ws.close(code, reason);
      };
      var send = function send(data) {
          if (!ws)
              return;
          ws.send(data);
      };
      compositionApi.onMounted(function () {
          ws = new WebSocket(url);
          ws.onopen = function () {
              state.value = 'OPEN';
          };
          ws.onclose = ws.onerror = function () {
              state.value = 'CLOSED';
          };
          ws.onmessage = function (e) {
              data.value = e.data;
          };
      });
      compositionApi.onUnmounted(function () {
          ws.close();
      });
      return {
          data: data,
          state: state,
          close: close,
          send: send
      };
  }

  function useWindowScrollPosition(options) {
      if (options === void 0) { options = { throttleMs: 100 }; }
      var x = compositionApi.ref(0);
      var y = compositionApi.ref(0);
      function setScrollPos() {
          x.value = window.pageXOffset;
          y.value = window.pageYOffset;
      }
      var onScroll = throttle(options.throttleMs, setScrollPos);
      compositionApi.onBeforeMount(function () {
          setScrollPos();
      });
      compositionApi.onMounted(function () {
          window.addEventListener('scroll', onScroll, { passive: true });
      });
      compositionApi.onUnmounted(function () {
          window.removeEventListener('scroll', onScroll);
      });
      return {
          x: x,
          y: y
      };
  }

  function useWindowSize(options) {
      if (options === void 0) { options = { throttleMs: 100 }; }
      var width = compositionApi.ref(0);
      var height = compositionApi.ref(0);
      function setSize() {
          width.value = window.innerWidth;
          height.value = window.innerHeight;
      }
      var onResize = throttle(options.throttleMs, setSize);
      compositionApi.onBeforeMount(function () {
          setSize();
      });
      compositionApi.onMounted(function () {
          window.addEventListener('resize', onResize, { passive: true });
      });
      compositionApi.onUnmounted(function () {
          window.removeEventListener('resize', onResize);
      });
      return {
          height: height,
          width: width
      };
  }

  function useWorker(url) {
      var data = compositionApi.ref(null);
      var worker;
      var post = function post(val) {
          if (!worker)
              return;
          worker.postMessage(val);
      };
      var terminate = function terminate() {
          if (!worker)
              return;
          worker.terminate();
      };
      compositionApi.onMounted(function () {
          worker = new Worker(url);
          worker.onmessage = function (e) {
              data.value = e.data;
          };
      });
      compositionApi.onUnmounted(function () {
          worker.terminate();
      });
      return {
          data: data,
          post: post,
          terminate: terminate
      };
  }

  var defaultNotificationOptions = {
      onClick: null,
      onShow: null,
      onError: null,
      onClose: null
  };
  function useNotification(title, options, methods) {
      var _this = this;
      if (options === void 0) { options = {}; }
      if (methods === void 0) { methods = defaultNotificationOptions; }
      var notification = compositionApi.ref(null);
      var requestPermission = function () { return __awaiter(_this, void 0, void 0, function () {
          return __generator(this, function (_a) {
              switch (_a.label) {
                  case 0:
                      if (!('permission' in Notification && Notification.permission !== 'denied')) return [3 /*break*/, 2];
                      return [4 /*yield*/, Notification.requestPermission()];
                  case 1:
                      _a.sent();
                      _a.label = 2;
                  case 2: return [2 /*return*/];
              }
          });
      }); };
      compositionApi.onMounted(requestPermission);
      compositionApi.onUnmounted(function () {
          notification.value = null;
      });
      var showNotifcation = function () {
          notification.value = new Notification(title, options);
          notification.value.onclick = methods.onClick;
          notification.value.onshow = methods.onShow;
          notification.value.onerror = methods.onError;
          notification.value.onclose = methods.onClose;
      };
      return { showNotifcation: showNotifcation };
  }

  function useDeviceMedia(constraints) {
      var streamRef = compositionApi.ref(null);
      var errorRef = compositionApi.ref(null);
      compositionApi.onMounted(function () {
          navigator.mediaDevices
              .getUserMedia(constraints)
              .then(function (stream) { return (streamRef.value = stream); })
              .catch(function (err) {
              errorRef.value = err;
          });
      });
      return {
          stream: streamRef,
          error: errorRef
      };
  }

  exports.useBattery = useBattery;
  exports.useClipboard = useClipboard;
  exports.useDeviceLight = useDeviceLight;
  exports.useDeviceMedia = useDeviceMedia;
  exports.useDeviceMotion = useDeviceMotion;
  exports.useDeviceOrientation = useDeviceOrientation;
  exports.useDocumentVisibility = useDocumentVisibility;
  exports.useEventListener = useEventListener;
  exports.useFetch = useFetch;
  exports.useFullscreen = useFullscreen;
  exports.useGeolocation = useGeolocation;
  exports.useHardwareConcurrency = useHardwareConcurrency;
  exports.useIntersectionObserver = useIntersectionObserver;
  exports.useLocalStorage = useLocalStorage;
  exports.useMedia = useMedia;
  exports.useMemoryStatus = useMemoryStatus;
  exports.useMousePosition = useMousePosition;
  exports.useNetwork = useNetwork;
  exports.useNotification = useNotification;
  exports.usePreferredColorScheme = usePreferredColorScheme;
  exports.usePreferredLanguages = usePreferredLanguages;
  exports.useScript = useScript;
  exports.useWebSocket = useWebSocket;
  exports.useWindowScrollPosition = useWindowScrollPosition;
  exports.useWindowSize = useWindowSize;
  exports.useWorker = useWorker;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
