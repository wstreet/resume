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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// Module
var code = "<h1>个人简历</h1> <div class=\"information custom-block\"> <div class=\"info custom-block\"> <h2>个人信息</h2> </div> <ul> <li>姓       名：王泰东</li> <li>出生年月：1995.02</li> <li>性       别：男</li> <li>名       族：汉族</li> <li>毕业院校：中国石油大学（华东）</li> <li>学       历：本科</li> <li>求职意向：前端开发工程师</li> <li>电       话：18560684220</li> <li>邮       箱：wstreet7@outlook.com</li> <li>工作地点：杭州、成都</li> </ul> </div> <div class=\"info custom-block\"> <h2>教育背景</h2> </div> <p>2014.09-2018.06             中国石油大学（华东）               应用物理学（本科）</p> <div class=\"info custom-block\"> <h2>开源项目</h2> </div> <ul> <li>Github数据大屏: <a href=https://wstreet7.gitee.io/x-screen/#/ >https://wstreet7.gitee.io/x-screen</a></li> <li>Blog：<a href=https://wstreet.vip/ >https://wstreet.vip</a></li> <li>Github： <a href=https://github.com/wstreet>https://github.com/wstreet</a></li> </ul> <div class=\"info custom-block\"> <h2>专业技能</h2> </div> <ul> <li>熟练掌握HTML(5)，CSS(3)等网页制作技术，熟悉常用的页面布局</li> <li>熟练掌握原生Javascript编程、Ajax、DOM等技术</li> <li>熟练掌握React技术栈，包括React、Redux、Redux-thunk等，熟悉部分原理以及Redux源码</li> <li>熟练掌握webpack打包工具，可手动置项配目脚手架</li> <li>熟练使用Git工具进行多人、多分支协同开发</li> <li>熟悉浏览器渲染原理，了解Canvas，WebGL相关知识</li> <li>了解Nodejs和Mysql等服务的技术和小程序开发</li> </ul> <div class=\"info custom-block\"> <h2>工作经历</h2> </div> <p><strong>2019.06-至今                   杭州博彦信息技术有限公司 (外包阿里)            高级前端开发</strong></p> <ul> <li>负责项目日常开发工作，参与项目需求评审，设计项目前端架构</li> <li>项目技术难点突破，承担核心功能开发</li> <li>抽象公共组件并进行封装，减少重复性工作，提高开发效率</li> </ul> <p><strong>2018.06-2019.06             北京辰森世纪科技有限股份公司                       前端开发</strong></p> <ul> <li>产品需求评审，估期，积极主动推动项目开发</li> <li>根据产品需求以及UI设计，使用React（主）按时且高质量完成pc端和移动端（公众号）开发</li> <li>封装公共业务组件（基于Antd），提高开发效率，参与项目优化，提升用户体验</li> <li>与后端开发者配合完成接口联调，将数据渲染到界面上</li> </ul> <div class=\"info custom-block\"> <h2>项目经验</h2> </div> <p><strong>2019.06-至今                   杭州博彦信息技术有限公司(外包阿里)           高级前端开发</strong></p> <p>硬件决策平台：新品引入决策平台，主要负责新机型、新部件的立项以及引入测试的评审和实施<br/> 技术栈：React、Redux、Redux-thunk、Webpack</p> <h4>工作内容</h4> <ul> <li>参与项目需求研讨、技术选型、把控开发进度及风险</li> <li>开发硬件标准基线并在硬件新品引入审批流程中使用</li> <li>抽象公共组件并进行封装，减少重复性工作，提高开发效率</li> <li>供应链拓扑图形开发并实现交互共能</li> </ul> <h4>工作难点</h4> <ul> <li>组件开发：使用G6自定义节点和边实现拓扑图形，并实现筛选等交互功能</li> </ul> <p><strong>2018.06-2019.06             北京辰森世纪科技有限股份公司                       前端开发</strong></p> <p>聚合外卖：主要解决两大外卖平台、以及门店管理系统独立运行，造成商家维护菜品成本高、营业数据分散，需要手动整合等问题<br/> 技术栈：React、Dva、Antd、Webpack</p> <h4>工作内容</h4> <ul> <li>负责首页、财务报表、运营报表、监控中心，菜谱关联5大模块开发</li> <li>基于antd封装业务组件，提高开发效率，提升用户体验</li> <li>提前完成并上线且稳定运行</li> </ul> <h4>工作难点</h4> <ul> <li>通过调研拖动组件，实现了拖动菜品进行关联的功能</li> </ul> <div class=\"info custom-block\"> <h2>自我评价</h2> </div> <p>工作认真负责，主动承担责任，较强的自驱能力、学习能力，和团队合作精神。对技术的认知：技术的价值体现在实现业务价值。</p> ";
// Exports
module.exports = code;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _index_md__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_md__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _themes_resume_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _themes_resume_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_themes_resume_less__WEBPACK_IMPORTED_MODULE_1__);




const renderDownload = (root) => {
  const box = document.createElement('div')
  box.className = 'download iconfont icon-download'
  box.onclick = function() {
    window.print()
  }
  root.appendChild(box)
}


const render = (container, html) => {
  const root = document.querySelector(container)
  root.innerHTML = html
  renderDownload(root)
}

render('#root', _index_md__WEBPACK_IMPORTED_MODULE_0___default.a)

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);