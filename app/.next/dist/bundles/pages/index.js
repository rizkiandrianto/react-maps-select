module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/head.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
var _jsxFileName = '/Users/rizkiandrianto/Works/learn-next/app/components/head.js';




var defaultDescription = '';
var defaultOGURL = '';
var defaultOGImage = '';

var Head = function Head(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { charSet: 'UTF-8', __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'title',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      },
      props.title || ''
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'description', content: props.description || defaultDescription, __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'icon', sizes: '192x192', href: '/static/touch-icon.png', __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'apple-touch-icon', href: '/static/touch-icon.png', __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'mask-icon', href: '/static/favicon-mask.svg', color: '#49B882', __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'icon', href: '/static/favicon.ico', __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:url', content: props.url || defaultOGURL, __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:title', content: props.title || '', __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:description', content: props.description || defaultDescription, __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'twitter:site', content: props.url || defaultOGURL, __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'twitter:card', content: 'summary_large_image', __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'twitter:image', content: props.ogImage || defaultOGImage, __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:image', content: props.ogImage || defaultOGImage, __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:image:width', content: '1200', __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:image:height', content: '630', __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      }
    })
  );
};

Head.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_2_prop_types__["string"],
  description: __WEBPACK_IMPORTED_MODULE_2_prop_types__["string"],
  url: __WEBPACK_IMPORTED_MODULE_2_prop_types__["string"],
  ogImage: __WEBPACK_IMPORTED_MODULE_2_prop_types__["string"]
};

/* harmony default export */ __webpack_exports__["a"] = (Head);

/***/ }),

/***/ "./components/nav.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__head__ = __webpack_require__("./components/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
var _jsxFileName = '/Users/rizkiandrianto/Works/learn-next/app/components/nav.js';





var links = [{ href: 'https://github.com/segmentio/create-next-app', label: 'Github' }].map(function (link) {
  link.key = 'nav-link-' + link.href + '-' + link.label;
  return link;
});

var Nav = function Nav() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'nav',
    {
      className: 'jsx-3661331558',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'ul',
      {
        className: 'jsx-3661331558',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'li',
        {
          className: 'jsx-3661331558',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
          { prefetch: true, href: '/', __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'a',
            {
              className: 'jsx-3661331558',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              }
            },
            'Home'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'ul',
        {
          className: 'jsx-3661331558',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        },
        links.map(function (_ref) {
          var key = _ref.key,
              href = _ref.href,
              label = _ref.label;
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'li',
            { key: key, className: 'jsx-3661331558',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
              { href: href, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 23
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'a',
                {
                  className: 'jsx-3661331558',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                  }
                },
                label
              )
            )
          );
        })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '3661331558',
      css: 'body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;}nav.jsx-3661331558{text-align:center;}ul.jsx-3661331558{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}nav.jsx-3661331558>ul.jsx-3661331558{padding:4px 16px;}li.jsx-3661331558{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:6px 8px;}a.jsx-3661331558{color:#067df7;text-decoration:none;font-size:13px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL25hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQmdCLEFBR2tCLEFBSVMsQUFHTCxBQUlJLEFBR0osQUFJQyxTQWpCdUUsS0FrQmhFLEdBUHZCLENBUEEsaUJBZWlCLGVBQ2pCLHdCQWJnQyxBQU9kLGdCQUNsQixJQWRBLCtGQU9BIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL25hdi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcml6a2lhbmRyaWFudG8vV29ya3MvbGVhcm4tbmV4dCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJy4vaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgbGlua3MgPSBbXG4gIHsgaHJlZjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zZWdtZW50aW8vY3JlYXRlLW5leHQtYXBwJywgbGFiZWw6ICdHaXRodWInIH1cbl0ubWFwKGxpbmsgPT4ge1xuICBsaW5rLmtleSA9IGBuYXYtbGluay0ke2xpbmsuaHJlZn0tJHtsaW5rLmxhYmVsfWBcbiAgcmV0dXJuIGxpbmtcbn0pXG5cbmNvbnN0IE5hdiA9ICgpID0+IChcbiAgPG5hdj5cbiAgICA8dWw+XG4gICAgICA8bGk+XG4gICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGE+SG9tZTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9saT5cbiAgICAgIDx1bD5cbiAgICAgICAge2xpbmtzLm1hcChcbiAgICAgICAgICAoeyBrZXksIGhyZWYsIGxhYmVsIH0pID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2tleX0+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxuICAgICAgICAgICAgICAgIDxhPntsYWJlbH08L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKVxuICAgICAgICApfVxuICAgICAgPC91bD5cbiAgICA8L3VsPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgOmdsb2JhbChib2R5KSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LEF2ZW5pciBOZXh0LEF2ZW5pcixIZWx2ZXRpY2Esc2Fucy1zZXJpZjtcbiAgICAgIH1cbiAgICAgIG5hdiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIHVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgfVxuICAgICAgbmF2ID4gdWwge1xuICAgICAgICBwYWRkaW5nOiA0cHggMTZweDtcbiAgICAgIH1cbiAgICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZzogNnB4IDhweDtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogIzA2N2RmNztcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L25hdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTmF2XG4iXX0= */\n/*@ sourceURL=app/components/nav.js */'
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Nav);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_head__ = __webpack_require__("./components/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_nav__ = __webpack_require__("./components/nav.js");
var _jsxFileName = '/Users/rizkiandrianto/Works/learn-next/app/pages/index.js';






/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      className: 'jsx-2880368761',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_components_head__["a" /* default */], { title: 'Home', __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components_nav__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'jsx-2880368761' + ' ' + 'hero',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'h1',
        {
          className: 'jsx-2880368761' + ' ' + 'title',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        },
        'Welcome to Next!'
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'p',
        {
          className: 'jsx-2880368761' + ' ' + 'description',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        },
        'To get started, edit ',
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'code',
          {
            className: 'jsx-2880368761',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          },
          'pages/index.js'
        ),
        ' and save to reload.'
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-2880368761' + ' ' + 'row',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
          { href: 'https://github.com/zeit/next.js#getting-started', __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'a',
            {
              className: 'jsx-2880368761' + ' ' + 'card',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'h3',
              {
                className: 'jsx-2880368761',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 17
                }
              },
              'Getting Started \u2192'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'p',
              {
                className: 'jsx-2880368761',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 18
                }
              },
              'Learn more about Next on Github and in their examples'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
          { href: 'https://open.segment.com/create-next-app', __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'a',
            {
              className: 'jsx-2880368761' + ' ' + 'card',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'h3',
              {
                className: 'jsx-2880368761',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 23
                }
              },
              'Examples \u2192'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'p',
              {
                className: 'jsx-2880368761',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                }
              },
              'Find other example boilerplates on the ',
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'code',
                {
                  className: 'jsx-2880368761',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                  }
                },
                'create-next-app'
              ),
              ' site'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
          { href: 'https://github.com/segmentio/create-next-app', __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'a',
            {
              className: 'jsx-2880368761' + ' ' + 'card',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'h3',
              {
                className: 'jsx-2880368761',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 31
                }
              },
              'Create Next App \u2192'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'p',
              {
                className: 'jsx-2880368761',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 32
                }
              },
              'Was this tool helpful? Let us know how we can improve it'
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '2880368761',
      css: '.hero.jsx-2880368761{width:100%;color:#333;}.title.jsx-2880368761{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:48px;}.title.jsx-2880368761,.description.jsx-2880368761{text-align:center;}.row.jsx-2880368761{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.card.jsx-2880368761{padding:18px 18px 24px;width:220px;text-align:left;text-decoration:none;color:#434343;border:1px solid #9B9B9B;}.card.jsx-2880368761:hover{border-color:#067df7;}.card.jsx-2880368761 h3.jsx-2880368761{margin:0;color:#067df7;font-size:18px;}.card.jsx-2880368761 p.jsx-2880368761{margin:0;padding:12px 0 0;font-size:13px;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ2dCLEFBR29CLEFBSUYsQUFPUyxBQUdGLEFBT08sQUFRRixBQUdaLEFBS0EsU0FoQ0UsQUE0QkcsQUFLRyxFQXJDTixLQWNXLEVBSHhCLEVBTm1CLENBd0JuQixDQTVCQSxDQW9CYyxBQVlHLEdBS0EsU0FoQkMsRUFoQkMsQ0FTSixBQW1CZixHQUthLFVBaEJVLENBaUJ2QixFQWpDaUIsZUFDakIsR0FnQmdCLGNBQ1cseUJBQzNCLENBVnFCLHFFQUNVLDJIQUMvQiIsImZpbGUiOiJhcHAvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3JpemtpYW5kcmlhbnRvL1dvcmtzL2xlYXJuLW5leHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICdjb21wb25lbnRzL2hlYWQnXG5pbXBvcnQgTmF2IGZyb20gJ2NvbXBvbmVudHMvbmF2J1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQgdGl0bGU9XCJIb21lXCIgLz5cbiAgICA8TmF2IC8+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9cIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPldlbGNvbWUgdG8gTmV4dCE8L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5UbyBnZXQgc3RhcnRlZCwgZWRpdCA8Y29kZT5wYWdlcy9pbmRleC5qczwvY29kZT4gYW5kIHNhdmUgdG8gcmVsb2FkLjwvcD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS96ZWl0L25leHQuanMjZ2V0dGluZy1zdGFydGVkXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgPGgzPkdldHRpbmcgU3RhcnRlZCAmcmFycjs8L2gzPlxuICAgICAgICAgICAgPHA+TGVhcm4gbW9yZSBhYm91dCBOZXh0IG9uIEdpdGh1YiBhbmQgaW4gdGhlaXIgZXhhbXBsZXM8L3A+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL29wZW4uc2VnbWVudC5jb20vY3JlYXRlLW5leHQtYXBwXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgPGgzPkV4YW1wbGVzICZyYXJyOzwvaDM+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgRmluZCBvdGhlciBleGFtcGxlIGJvaWxlcnBsYXRlcyBvbiB0aGUgPGNvZGU+Y3JlYXRlLW5leHQtYXBwPC9jb2RlPiBzaXRlXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc2VnbWVudGlvL2NyZWF0ZS1uZXh0LWFwcFwiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgIDxoMz5DcmVhdGUgTmV4dCBBcHAgJnJhcnI7PC9oMz5cbiAgICAgICAgICAgIDxwPldhcyB0aGlzIHRvb2wgaGVscGZ1bD8gTGV0IHVzIGtub3cgaG93IHdlIGNhbiBpbXByb3ZlIGl0PC9wPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuaGVybyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgIH1cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctdG9wOiA4MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgfVxuICAgICAgLnRpdGxlLCAuZGVzY3JpcHRpb24ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAucm93IHtcbiAgICAgICAgbWF4LXdpZHRoOiA4ODBweDtcbiAgICAgICAgbWFyZ2luOiA4MHB4IGF1dG8gNDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICB9XG4gICAgICAuY2FyZCB7XG4gICAgICAgIHBhZGRpbmc6IDE4cHggMThweCAyNHB4O1xuICAgICAgICB3aWR0aDogMjIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6ICM0MzQzNDM7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5QjlCOUI7XG4gICAgICB9XG4gICAgICAuY2FyZDpob3ZlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzA2N2RmNztcbiAgICAgIH1cbiAgICAgIC5jYXJkIGgzIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogIzA2N2RmNztcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgfVxuICAgICAgLmNhcmQgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMTJweCAwIDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcbiJdfQ== */\n/*@ sourceURL=app/pages/index.js */'
    })
  );
});

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map