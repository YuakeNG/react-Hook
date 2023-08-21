// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/apple/Desktop/项目/前端业务Hook库/react-hook/node_modules/.pnpm/@umijs+runtime@3.5.41_react@16.14.0/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')})],
    "component": ((props) => dynamic({
          loader: async () => {
            const React = await import('react');
            const { default: getDemoRenderArgs } = await import(/* webpackChunkName: 'dumi_demos' */ '/Users/apple/Desktop/项目/前端业务Hook库/react-hook/node_modules/.pnpm/@umijs+preset-dumi@1.1.48_react-dom@18.2.0_react-router@6.4.2_react@18.2.0_typescript@5.1.3_umi@3.5.41/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
            const { default: Previewer } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi-theme-default/es/builtins/Previewer.js');
            const { usePrefersColor, context } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi/theme');

            return props => {
              
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
            }
          },
          loading: () => null,
        }))()
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')}), dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'/Users/apple/Desktop/项目/前端业务Hook库/react-hook/node_modules/.pnpm/dumi-theme-default@1.1.24_@umijs+preset-dumi@1.1.48_react-dom@18.2.0_react@18.2.0/node_modules/dumi-theme-default/es/layout.js')})],
    "routes": [
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__index.md' */'/Users/apple/Desktop/项目/前端业务Hook库/react-hook/docs/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1691915178000,
          "title": "首页",
          "hero": {
            "image": "/encode-hooks/short-logo.png",
            "desc": "<div class=\"markdown\"><p>印客学院 React 业务 Hooks</p></div>",
            "actions": [
              {
                "text": "指南",
                "link": "/guide"
              },
              {
                "text": "Hooks 列表",
                "link": "/hooks"
              }
            ]
          },
          "footer": "<div class=\"markdown\"><p>Copyright (c) © 2023 by encode studio, All Rights Reserved</p></div>",
          "slugs": [
            {
              "depth": 2,
              "value": "✨ 特性",
              "heading": "-特性"
            },
            {
              "depth": 2,
              "value": "📦 安装",
              "heading": "-安装"
            },
            {
              "depth": 2,
              "value": "🔨 使用",
              "heading": "-使用"
            }
          ]
        },
        "title": "首页 - 印客学院 encode hooks"
      },
      {
        "path": "/guide",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__guide__index.md' */'/Users/apple/Desktop/项目/前端业务Hook库/react-hook/docs/guide/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/guide/index.md",
          "updatedTime": 1691915178000,
          "slugs": [
            {
              "depth": 1,
              "value": "encode-hooks",
              "heading": "encode-hooks"
            },
            {
              "depth": 2,
              "value": "⛰️ 能力支持",
              "heading": "️-能力支持"
            },
            {
              "depth": 3,
              "value": "1. 可靠的代码健壮",
              "heading": "1-可靠的代码健壮"
            },
            {
              "depth": 3,
              "value": "2. 完善的文档能力",
              "heading": "2-完善的文档能力"
            },
            {
              "depth": 3,
              "value": "3. 完整的测试用例",
              "heading": "3-完整的测试用例"
            },
            {
              "depth": 2,
              "value": "🌟 设计目的",
              "heading": "-设计目的"
            },
            {
              "depth": 2,
              "value": "⚒️ 技术选型",
              "heading": "️-技术选型"
            },
            {
              "depth": 3,
              "value": "包管理工具 -- pnpm",
              "heading": "包管理工具----pnpm"
            },
            {
              "depth": 3,
              "value": "构建工具 -- webpack & gulp",
              "heading": "构建工具----webpack--gulp"
            },
            {
              "depth": 3,
              "value": "静态文件打包工具 -- dumi",
              "heading": "静态文件打包工具----dumi"
            },
            {
              "depth": 3,
              "value": "测试工具 -- jest",
              "heading": "测试工具----jest"
            },
            {
              "depth": 2,
              "value": "其他",
              "heading": "其他"
            },
            {
              "depth": 3,
              "value": "生成CHANGELOG",
              "heading": "生成changelog"
            },
            {
              "depth": 2,
              "value": "📧 联系",
              "heading": "-联系"
            }
          ],
          "title": "encode-hooks",
          "nav": {
            "path": "/guide",
            "title": "Guide"
          }
        },
        "title": "encode-hooks - 印客学院 encode hooks"
      },
      {
        "path": "/hooks/use-boolean/inde",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useBoolean__inde.md' */'/Users/apple/Desktop/项目/前端业务Hook库/react-hook/packages/hooks/src/useBoolean/inde.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useBoolean/inde.md",
          "updatedTime": 1691915178000,
          "nav": {
            "path": "/hooks",
            "title": "UseBoolean"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useBoolean",
              "heading": "useboolean"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            },
            {
              "depth": 3,
              "value": "Actions",
              "heading": "actions"
            }
          ],
          "title": "useBoolean",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-boolean",
            "title": "UseBoolean"
          }
        },
        "title": "useBoolean - 印客学院 encode hooks"
      },
      {
        "path": "/hooks/use-cookie-state",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useCookieState__index.md' */'/Users/apple/Desktop/项目/前端业务Hook库/react-hook/packages/hooks/src/useCookieState/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useCookieState/index.md",
          "updatedTime": 1691915178000,
          "nav": {
            "path": "/hooks",
            "title": "UseCookieState"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useCookieState",
              "heading": "usecookiestate"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "将 state 存储在 Cookie 中",
              "heading": "将-state-存储在-cookie-中"
            },
            {
              "depth": 3,
              "value": "setState 可以接收函数",
              "heading": "setstate-可以接收函数"
            },
            {
              "depth": 3,
              "value": "使用 option 配置 Cookie",
              "heading": "使用-option-配置-cookie"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            },
            {
              "depth": 3,
              "value": "Options",
              "heading": "options"
            }
          ],
          "title": "useCookieState",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-cookie-state",
            "title": "UseCookieState"
          }
        },
        "title": "useCookieState - 印客学院 encode hooks"
      },
      {
        "path": "/hooks/use-debounce",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useDebounce__index.md' */'/Users/apple/Desktop/项目/前端业务Hook库/react-hook/packages/hooks/src/useDebounce/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useDebounce/index.md",
          "updatedTime": 1691915178000,
          "nav": {
            "path": "/hooks",
            "title": "UseDebounce"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useDebounce",
              "heading": "usedebounce"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            },
            {
              "depth": 3,
              "value": "Options",
              "heading": "options"
            }
          ],
          "title": "useDebounce",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-debounce",
            "title": "UseDebounce"
          }
        },
        "title": "useDebounce - 印客学院 encode hooks"
      },
      {
        "path": "/hooks/use-debounce-fn",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useDebounceFn__index.md' */'/Users/apple/Desktop/项目/前端业务Hook库/react-hook/packages/hooks/src/useDebounceFn/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useDebounceFn/index.md",
          "updatedTime": 1691915178000,
          "nav": {
            "path": "/hooks",
            "title": "UseDebounceFn"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useDebounceFn",
              "heading": "usedebouncefn"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            },
            {
              "depth": 3,
              "value": "Options",
              "heading": "options"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            }
          ],
          "title": "useDebounceFn",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-debounce-fn",
            "title": "UseDebounceFn"
          }
        },
        "title": "useDebounceFn - 印客学院 encode hooks"
      },
      {
        "path": "/hooks/use-get-state",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useGetState__index.md' */'/Users/apple/Desktop/项目/前端业务Hook库/react-hook/packages/hooks/src/useGetState/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useGetState/index.md",
          "updatedTime": 1691915178000,
          "nav": {
            "path": "/hooks",
            "title": "UseGetState"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useGetState",
              "heading": "usegetstate"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "类型定义",
              "heading": "类型定义"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "useGetState",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-get-state",
            "title": "UseGetState"
          }
        },
        "title": "useGetState - 印客学院 encode hooks"
      },
      {
        "path": "/hooks/use-latest",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useLatest__index.md' */'/Users/apple/Desktop/项目/前端业务Hook库/react-hook/packages/hooks/src/useLatest/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useLatest/index.md",
          "updatedTime": 1691915178000,
          "nav": {
            "path": "/hooks",
            "title": "UseLatest"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useLatest",
              "heading": "uselatest"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "useLatest",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-latest",
            "title": "UseLatest"
          }
        },
        "title": "useLatest - 印客学院 encode hooks"
      },
      {
        "path": "/hooks/use-local-storage-state",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useLocalStorageState__index.md' */'/Users/apple/Desktop/项目/前端业务Hook库/react-hook/packages/hooks/src/useLocalStorageState/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useLocalStorageState/index.md",
          "updatedTime": 1691915178000,
          "nav": {
            "path": "/hooks",
            "title": "UseLocalStorageState"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useLocalStorageState",
              "heading": "uselocalstoragestate"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "将 state 存储在 localStorage 中",
              "heading": "将-state-存储在-localstorage-中"
            },
            {
              "depth": 3,
              "value": "存储复杂类型数据",
              "heading": "存储复杂类型数据"
            },
            {
              "depth": 3,
              "value": "自定义序列化和反序列化函数",
              "heading": "自定义序列化和反序列化函数"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            },
            {
              "depth": 3,
              "value": "Options",
              "heading": "options"
            },
            {
              "depth": 2,
              "value": "备注",
              "heading": "备注"
            }
          ],
          "title": "useLocalStorageState",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-local-storage-state",
            "title": "UseLocalStorageState"
          }
        },
        "title": "useLocalStorageState - 印客学院 encode hooks"
      },
      {
        "path": "/hooks/use-map",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useMap__index.md' */'/Users/apple/Desktop/项目/前端业务Hook库/react-hook/packages/hooks/src/useMap/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useMap/index.md",
          "updatedTime": 1691915178000,
          "nav": {
            "path": "/hooks",
            "title": "UseMap"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useMap",
              "heading": "usemap"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            }
          ],
          "title": "useMap",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-map",
            "title": "UseMap"
          }
        },
        "title": "useMap - 印客学院 encode hooks"
      },
      {
        "path": "/hooks/use-memoized-fn",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useMemoizedFn__index.md' */'/Users/apple/Desktop/项目/前端业务Hook库/react-hook/packages/hooks/src/useMemoizedFn/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useMemoizedFn/index.md",
          "updatedTime": 1691915178000,
          "nav": {
            "path": "/hooks",
            "title": "UseMemoizedFn"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useMemoizedFn",
              "heading": "usememoizedfn"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 3,
              "value": "性能提升",
              "heading": "性能提升"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            }
          ],
          "title": "useMemoizedFn",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-memoized-fn",
            "title": "UseMemoizedFn"
          }
        },
        "title": "useMemoizedFn - 印客学院 encode hooks"
      },
      {
        "path": "/hooks/use-previous",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__usePrevious__index.md' */'/Users/apple/Desktop/项目/前端业务Hook库/react-hook/packages/hooks/src/usePrevious/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/usePrevious/index.md",
          "updatedTime": 1691915178000,
          "nav": {
            "path": "/hooks",
            "title": "UsePrevious"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "usePrevious",
              "heading": "useprevious"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 3,
              "value": "自定义 shouldUpdate 函数",
              "heading": "自定义-shouldupdate-函数"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            }
          ],
          "title": "usePrevious",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-previous",
            "title": "UsePrevious"
          }
        },
        "title": "usePrevious - 印客学院 encode hooks"
      },
      {
        "path": "/hooks/use-reset-state",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useResetState__index.md' */'/Users/apple/Desktop/项目/前端业务Hook库/react-hook/packages/hooks/src/useResetState/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useResetState/index.md",
          "updatedTime": 1691915178000,
          "nav": {
            "path": "/hooks",
            "title": "UseResetState"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useResetState",
              "heading": "useresetstate"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "useResetState",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-reset-state",
            "title": "UseResetState"
          }
        },
        "title": "useResetState - 印客学院 encode hooks"
      },
      {
        "path": "/hooks/use-safe-state",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useSafeState__index.md' */'/Users/apple/Desktop/项目/前端业务Hook库/react-hook/packages/hooks/src/useSafeState/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useSafeState/index.md",
          "updatedTime": 1691915178000,
          "nav": {
            "path": "/hooks",
            "title": "UseSafeState"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useSafeState",
              "heading": "usesafestate"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "useSafeState",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-safe-state",
            "title": "UseSafeState"
          }
        },
        "title": "useSafeState - 印客学院 encode hooks"
      },
      {
        "path": "/hooks/use-session-storage-state",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useSessionStorageState__index.md' */'/Users/apple/Desktop/项目/前端业务Hook库/react-hook/packages/hooks/src/useSessionStorageState/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useSessionStorageState/index.md",
          "updatedTime": 1691915178000,
          "nav": {
            "path": "/hooks",
            "title": "UseSessionStorageState"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useSessionStorageState",
              "heading": "usesessionstoragestate"
            }
          ],
          "title": "useSessionStorageState",
          "group": {
            "path": "/hooks/use-session-storage-state",
            "title": "UseSessionStorageState"
          }
        },
        "title": "useSessionStorageState - 印客学院 encode hooks"
      },
      {
        "path": "/hooks/use-set",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useSet__index.md' */'/Users/apple/Desktop/项目/前端业务Hook库/react-hook/packages/hooks/src/useSet/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useSet/index.md",
          "updatedTime": 1691915178000,
          "nav": {
            "path": "/hooks",
            "title": "UseSet"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useSet",
              "heading": "useset"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            }
          ],
          "title": "useSet",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-set",
            "title": "UseSet"
          }
        },
        "title": "useSet - 印客学院 encode hooks"
      },
      {
        "path": "/hooks/use-set-state",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useSetState__index.md' */'/Users/apple/Desktop/项目/前端业务Hook库/react-hook/packages/hooks/src/useSetState/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useSetState/index.md",
          "updatedTime": 1691915178000,
          "nav": {
            "path": "/hooks",
            "title": "UseSetState"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useSetState",
              "heading": "usesetstate"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 3,
              "value": "使用回调更新",
              "heading": "使用回调更新"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            }
          ],
          "title": "useSetState",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-set-state",
            "title": "UseSetState"
          }
        },
        "title": "useSetState - 印客学院 encode hooks"
      },
      {
        "path": "/hooks/use-throttle",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useThrottle__index.md' */'/Users/apple/Desktop/项目/前端业务Hook库/react-hook/packages/hooks/src/useThrottle/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useThrottle/index.md",
          "updatedTime": 1691915178000,
          "nav": {
            "path": "/hooks",
            "title": "UseThrottle"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useThrottle",
              "heading": "usethrottle"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            },
            {
              "depth": 3,
              "value": "Options",
              "heading": "options"
            }
          ],
          "title": "useThrottle",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-throttle",
            "title": "UseThrottle"
          }
        },
        "title": "useThrottle - 印客学院 encode hooks"
      },
      {
        "path": "/hooks/use-throttle-fn",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useThrottleFn__index.md' */'/Users/apple/Desktop/项目/前端业务Hook库/react-hook/packages/hooks/src/useThrottleFn/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useThrottleFn/index.md",
          "updatedTime": 1691915178000,
          "nav": {
            "path": "/hooks",
            "title": "UseThrottleFn"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useThrottleFn",
              "heading": "usethrottlefn"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            },
            {
              "depth": 3,
              "value": "Options",
              "heading": "options"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            }
          ],
          "title": "useThrottleFn",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-throttle-fn",
            "title": "UseThrottleFn"
          }
        },
        "title": "useThrottleFn - 印客学院 encode hooks"
      },
      {
        "path": "/hooks/use-toggle",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useToggle__index.md' */'/Users/apple/Desktop/项目/前端业务Hook库/react-hook/packages/hooks/src/useToggle/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useToggle/index.md",
          "updatedTime": 1691915178000,
          "nav": {
            "path": "/hooks",
            "title": "UseToggle"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useToggle",
              "heading": "usetoggle"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 3,
              "value": "高级用法",
              "heading": "高级用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            },
            {
              "depth": 3,
              "value": "Actions",
              "heading": "actions"
            }
          ],
          "title": "useToggle",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-toggle",
            "title": "UseToggle"
          }
        },
        "title": "useToggle - 印客学院 encode hooks"
      },
      {
        "path": "/hooks/use-unmount",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useUnmount__index.md' */'/Users/apple/Desktop/项目/前端业务Hook库/react-hook/packages/hooks/src/useUnmount/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useUnmount/index.md",
          "updatedTime": 1691915178000,
          "nav": {
            "path": "/hooks",
            "title": "UseUnmount"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useUnmount",
              "heading": "useunmount"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "参数",
              "heading": "参数"
            }
          ],
          "title": "useUnmount",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-unmount",
            "title": "UseUnmount"
          }
        },
        "title": "useUnmount - 印客学院 encode hooks"
      },
      {
        "path": "/hooks/use-unmounted-ref",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useUnmountedRef__index.md' */'/Users/apple/Desktop/项目/前端业务Hook库/react-hook/packages/hooks/src/useUnmountedRef/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useUnmountedRef/index.md",
          "updatedTime": 1691915178000,
          "componentName": "useUnmountedRef",
          "nav": {
            "path": "/hooks",
            "title": "UseUnmountedRef"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useUnmountedRef",
              "heading": "useunmountedref"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            }
          ],
          "title": "useUnmountedRef",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-unmounted-ref",
            "title": "UseUnmountedRef"
          }
        },
        "title": "useUnmountedRef - 印客学院 encode hooks"
      },
      {
        "path": "/hooks/use-update-effect",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useUpdateEffect__index.md' */'/Users/apple/Desktop/项目/前端业务Hook库/react-hook/packages/hooks/src/useUpdateEffect/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useUpdateEffect/index.md",
          "updatedTime": 1691915178000,
          "nav": {
            "path": "/hooks",
            "title": "UseUpdateEffect"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useUpdateEffect",
              "heading": "useupdateeffect"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "useUpdateEffect",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-update-effect",
            "title": "UseUpdateEffect"
          }
        },
        "title": "useUpdateEffect - 印客学院 encode hooks"
      },
      {
        "path": "/hooks/use-boolean",
        "meta": {},
        "exact": true,
        "redirect": "/hooks/use-boolean/inde"
      },
      {
        "path": "/hooks",
        "meta": {},
        "exact": true,
        "redirect": "/hooks/use-unmount"
      }
    ],
    "title": "印客学院 encode hooks",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
