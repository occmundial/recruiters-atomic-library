webpackHotUpdate_N_E("pages/headerLoggedComplete",{

/***/ "./components/organisms/headerOrg/index.tsx":
/*!**************************************************!*\
  !*** ./components/organisms/headerOrg/index.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _occmundial_occ_atomic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @occmundial/occ-atomic */ "./node_modules/@occmundial/occ-atomic/build/index.js");
/* harmony import */ var _occmundial_occ_atomic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_occmundial_occ_atomic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_HeaderOrg_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/HeaderOrg.module.css */ "./styles/HeaderOrg.module.css");
/* harmony import */ var _styles_HeaderOrg_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_HeaderOrg_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_left__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config/left */ "./components/organisms/headerOrg/config/left.tsx");
/* harmony import */ var _config_links__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/links */ "./components/organisms/headerOrg/config/links.tsx");
/* harmony import */ var _config_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config/cookies */ "./components/organisms/headerOrg/config/cookies.tsx");
/* harmony import */ var _config_top__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config/top */ "./components/organisms/headerOrg/config/top.tsx");
/* harmony import */ var _config_center__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config/center */ "./components/organisms/headerOrg/config/center.tsx");
/* harmony import */ var _config_right__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config/right */ "./components/organisms/headerOrg/config/right.tsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _common_useWindowSize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/useWindowSize */ "./components/common/useWindowSize.tsx");
/* harmony import */ var _molecules_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../molecules/menu */ "./components/molecules/menu/index.tsx");


var _jsxFileName = "C:\\Users\\pc\\Documents\\Repos\\recruiters-atomic-library\\components\\organisms\\headerOrg\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();













var contingencyModal = 'https://cdn-shop.occ.com.mx/recruiters-home-page/img/contingencyModal.png';

var HeaderOrg = function HeaderOrg(_ref) {
  _s();

  var _ref$showCenter = _ref.showCenter,
      showCenter = _ref$showCenter === void 0 ? false : _ref$showCenter,
      _ref$showCounts = _ref.showCounts,
      showCounts = _ref$showCounts === void 0 ? false : _ref$showCounts,
      _ref$logged = _ref.logged,
      logged = _ref$logged === void 0 ? false : _ref$logged,
      _ref$showContingency = _ref.showContingency,
      showContingency = _ref$showContingency === void 0 ? false : _ref$showContingency,
      _ref$cartItems = _ref.cartItems,
      cartItems = _ref$cartItems === void 0 ? 0 : _ref$cartItems,
      _ref$chatItems = _ref.chatItems,
      chatItems = _ref$chatItems === void 0 ? 0 : _ref$chatItems,
      _ref$userName = _ref.userName,
      userName = _ref$userName === void 0 ? '' : _ref$userName,
      _ref$email = _ref.email,
      email = _ref$email === void 0 ? '' : _ref$email,
      _ref$userPhoto = _ref.userPhoto,
      userPhoto = _ref$userPhoto === void 0 ? '' : _ref$userPhoto,
      logout = _ref.logout,
      _ref$isMobile = _ref.isMobile,
      isMobile = _ref$isMobile === void 0 ? false : _ref$isMobile,
      _ref$tabSelected = _ref.tabSelected,
      tabSelected = _ref$tabSelected === void 0 ? 0 : _ref$tabSelected,
      _ref$rightTabSelected = _ref.rightTabSelected,
      rightTabSelected = _ref$rightTabSelected === void 0 ? 0 : _ref$rightTabSelected,
      _ref$local = _ref.local,
      local = _ref$local === void 0 ? false : _ref$local,
      _ref$dev = _ref.dev,
      dev = _ref$dev === void 0 ? false : _ref$dev,
      _ref$prod = _ref.prod,
      prod = _ref$prod === void 0 ? false : _ref$prod,
      _ref$orgMenu = _ref.orgMenu,
      orgMenu = _ref$orgMenu === void 0 ? false : _ref$orgMenu,
      _ref$organizationName = _ref.organizationName,
      organizationName = _ref$organizationName === void 0 ? '' : _ref$organizationName,
      _ref$teamName = _ref.teamName,
      teamName = _ref$teamName === void 0 ? '' : _ref$teamName,
      _ref$orgMenuLinks = _ref.orgMenuLinks,
      orgMenuLinks = _ref$orgMenuLinks === void 0 ? [] : _ref$orgMenuLinks,
      _ref$typeAdministrato = _ref.typeAdministrator,
      typeAdministrator = _ref$typeAdministrato === void 0 ? false : _ref$typeAdministrato,
      _ref$typeSubAdministr = _ref.typeSubAdministrator,
      typeSubAdministrator = _ref$typeSubAdministr === void 0 ? false : _ref$typeSubAdministr,
      _ref$referral = _ref.referral,
      referral = _ref$referral === void 0 ? '' : _ref$referral,
      _ref$isAdmin = _ref.isAdmin,
      isAdmin = _ref$isAdmin === void 0 ? false : _ref$isAdmin,
      _ref$validEmail = _ref.validEmail,
      validEmail = _ref$validEmail === void 0 ? false : _ref$validEmail,
      _ref$canReturn = _ref.canReturn,
      canReturn = _ref$canReturn === void 0 ? false : _ref$canReturn;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      scroll = _useState[0],
      toggleScroll = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      contingency = _useState2[0],
      setContingency = _useState2[1];

  var width = Object(_common_useWindowSize__WEBPACK_IMPORTED_MODULE_11__["default"])();

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showModal = _useState3[0],
      toggleContigencyModal = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      asideMenu = _useState4[0],
      setAsideMenu = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showMenu = _useState5[0],
      setShowMenu = _useState5[1];

  var handleScroll = function handleScroll() {
    if (window.pageYOffset === 0) {
      toggleScroll(false);
    } else {
      toggleScroll(true);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.addEventListener('scroll', handleScroll);
    return function () {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (showContingency) {
      var cookieBannerValue = Object(_config_cookies__WEBPACK_IMPORTED_MODULE_6__["getCookie"])(_config_cookies__WEBPACK_IMPORTED_MODULE_6__["cookieBanner"]);

      if (cookieBannerValue === null) {
        setContingency(true);
        Object(_config_cookies__WEBPACK_IMPORTED_MODULE_6__["setCookie"])(_config_cookies__WEBPACK_IMPORTED_MODULE_6__["cookieBanner"], true, local, dev, prod);
      } else if (cookieBannerValue === 'true') setContingency(true);
    }
  }, [showContingency]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_occmundial_occ_atomic__WEBPACK_IMPORTED_MODULE_2__["NavTab"], {
      top: scroll || logged ? undefined : Object(_config_top__WEBPACK_IMPORTED_MODULE_7__["top"])(isMobile, Object(_config_links__WEBPACK_IMPORTED_MODULE_5__["getRoot"])(local, dev, prod)),
      left: Object(_config_left__WEBPACK_IMPORTED_MODULE_4__["left"])(isMobile, logged, tabSelected, Object(_config_links__WEBPACK_IMPORTED_MODULE_5__["getRoot"])(local, dev, prod), asideMenu, setAsideMenu, orgMenu, "".concat(organizationName.substr(0, 19), "..."), teamName, orgMenuLinks),
      center: showCenter && Object(_config_center__WEBPACK_IMPORTED_MODULE_8__["center"])(isMobile, logged, Object(_config_links__WEBPACK_IMPORTED_MODULE_5__["getRoot"])(local, dev, prod), tabSelected),
      right: Object(_config_right__WEBPACK_IMPORTED_MODULE_9__["right"])(isMobile, logged, setShowMenu, showMenu, userName, userPhoto, Object(_config_right__WEBPACK_IMPORTED_MODULE_9__["loggedMenu"])(rightTabSelected, isMobile, Object(_config_links__WEBPACK_IMPORTED_MODULE_5__["getRoot"])(local, dev, prod), referral, cartItems > 0, chatItems > 0, orgMenuLinks, isAdmin, validEmail, canReturn, typeAdministrator, typeSubAdministrator, showCounts), logout, referral, cartItems, chatItems, Object(_config_links__WEBPACK_IMPORTED_MODULE_5__["getRoot"])(local, dev, prod), rightTabSelected, showCounts),
      fixed: true,
      hideOnScroll: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, _this), isMobile && logged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_occmundial_occ_atomic__WEBPACK_IMPORTED_MODULE_2__["NavTab"], {
      flexCenter: Object(_config_center__WEBPACK_IMPORTED_MODULE_8__["centerMobile"])(Object(_config_links__WEBPACK_IMPORTED_MODULE_5__["getRoot"])(local, dev, prod), tabSelected),
      fixed: true,
      bottom: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_occmundial_occ_atomic__WEBPACK_IMPORTED_MODULE_2__["NavAside"], {
      show: showMenu && width <= _occmundial_occ_atomic__WEBPACK_IMPORTED_MODULE_2__["grid"].lg - 1,
      onClose: function onClose() {
        return setShowMenu(false);
      },
      right: true,
      top: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_occmundial_occ_atomic__WEBPACK_IMPORTED_MODULE_2__["Flexbox"], {
        display: "flex",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_occmundial_occ_atomic__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
          name: userName,
          photo: userPhoto && userPhoto,
          size: 48
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_HeaderOrg_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.mobileData,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_occmundial_occ_atomic__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            subheading: true,
            children: userName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_occmundial_occ_atomic__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            small: true,
            mid: true,
            children: email
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 11
      }, _this),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_molecules_menu__WEBPACK_IMPORTED_MODULE_12__["default"], {
        mobile: isMobile,
        linksH: Object(_config_right__WEBPACK_IMPORTED_MODULE_9__["loggedMenu"])(rightTabSelected, isMobile, Object(_config_links__WEBPACK_IMPORTED_MODULE_5__["getRoot"])(local, dev, prod), referral, cartItems > 0, chatItems > 0, orgMenuLinks, isAdmin, validEmail, canReturn, typeAdministrator, typeSubAdministrator, showCounts),
        logout: logout
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: logged ? _styles_HeaderOrg_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.spaceLogged : _styles_HeaderOrg_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.space
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }, _this), contingency && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_occmundial_occ_atomic__WEBPACK_IMPORTED_MODULE_2__["Banner"], {
      onClose: function onClose() {
        Object(_config_cookies__WEBPACK_IMPORTED_MODULE_6__["setCookie"])(_config_cookies__WEBPACK_IMPORTED_MODULE_6__["cookieBanner"], false, local, dev, prod);
        setContingency(false);
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        children: ["Estas son las medidas de apoyo a nuestros clientes ante la contingencia del COVID-19.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          style: {
            textDecoration: 'underline',
            marginLeft: '8px',
            cursor: 'pointer'
          },
          role: "presentation",
          onClick: function onClick() {
            toggleContigencyModal(true);
          },
          children: "Con\xF3celas aqu\xED"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_occmundial_occ_atomic__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
      show: showModal,
      onClose: function onClose() {
        toggleContigencyModal(false);
      },
      size: "lg",
      imgTop: {
        img: contingencyModal,
        position: 'center',
        size: 'cover',
        color: _occmundial_occ_atomic__WEBPACK_IMPORTED_MODULE_2__["colors"].bgWhite
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_occmundial_occ_atomic__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          children: "Desde hace 24 a\xF1os, por empresas como la tuya, es que hoy  somos la bolsa de trabajo en l\xEDnea l\xEDder en M\xE9xico. Has estado con nosotros siempre. Ahora nos toca apoyarte."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_occmundial_occ_atomic__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          topSmall: true,
          children: "Es por esto que queremos comunicarte las nuevas y diversas acciones que hemos creado para apoyar a tu compa\xF1\xEDa en los pr\xF3ximos d\xEDas:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_occmundial_occ_atomic__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            topSmall: true,
            tag: "li",
            children: "Nuestros servicios est\xE1n funcionando al 100% y te atendemos 24/7."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_occmundial_occ_atomic__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            tag: "li",
            children: "Adquiere tus vacantes con hasta 6 meses sin intereses con tarjetas Mastercard y Visa.*"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_occmundial_occ_atomic__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            tag: "li",
            children: "Si adquieres nuevos cr\xE9ditos desde nuestro carrito en l\xEDnea, tendr\xE1s 90 d\xEDas de vigencia para hacer uso de ellos.**"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_occmundial_occ_atomic__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            tag: "li",
            children: "Extensi\xF3n de la visibilidad de vacantes en el sitio por 60 d\xEDas (el doble de lo habitual)."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_occmundial_occ_atomic__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            tag: "li",
            children: "Tips y contenido estrat\xE9gico para liderar a tu empresa durante la contingencia."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_occmundial_occ_atomic__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            tag: "li",
            children: "Certificaci\xF3n sin costo y 100% en l\xEDnea sobre el uso de nuestra plataforma."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_occmundial_occ_atomic__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          topSmall: true,
          children: "Te invitamos a contactar a tu ejecutivo de cuenta para que juntos, determinemos los apoyos que pueden beneficiar m\xE1s a tu empresa."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_occmundial_occ_atomic__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          strong: true,
          topSmall: true,
          children: "No te detengas, nosotros no lo hemos hecho."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_occmundial_occ_atomic__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          strong: true,
          children: "\xA1Continuemos generando empleo y mejores oportunidades a millones de mexicanos, juntos lo vamos a lograr!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_occmundial_occ_atomic__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          micro: true,
          topBase: true,
          low: true,
          children: "*3 y 6 meses sin intereses disponibles para adquirir desde 2 vacantes hasta 10 vacantes b\xE1sicas, destacadas o premium con tarjeta Visa y Mastercard. ** Aplica \xFAnicamente en productos adquiridos en l\xEDnea desde 1 y hasta 10 vacantes. V\xE1lido para cualquier tipo de vacante: b\xE1sica, destacada o premium. Vigencia del 1o de julio del 2020 al 31 de diciembre del 2020. *** Promoci\xF3n sujeta a disponibilidad y cambio sin previo aviso."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 5
  }, _this);
};

_s(HeaderOrg, "ygHSu8JMCaJ52GvX+KkNNaVAiCQ=");

_c = HeaderOrg;
HeaderOrg.propTypes = {
  /** Shows Cart or Chat counts */
  showCounts: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,

  /** Shows middle navigation menu */
  showCenter: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,

  /** user is logged or not */
  logged: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,

  /** Shows Covid contingency banner */
  showContingency: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,

  /** Shows Covid contingency banner */
  logout: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,

  /** Determines cart items */
  cartItems: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number,

  /** Determines chat items */
  chatItems: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number,

  /** user's userName  */
  userName: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,

  /** user's photo  */
  userPhoto: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,

  /** user's email  */
  email: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,

  /** Determines if isMobile */
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,

  /** Determines what tab is selected in the left/center navigation */
  tabSelected: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number,

  /** Determines what tab is selected in the right navigation */
  rightTabSelected: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number,

  /** Determines if the env is local for links */
  local: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,

  /** Determines if the env is dev for links */
  dev: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,

  /** Determines if the env is prod for links */
  prod: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,

  /** External toggle for the orgMenu */
  orgMenu: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,

  /** Determines name of the organization */
  organizationName: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,

  /** Determines name of the team */
  teamName: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,

  /** Determines links of the organization menu */
  orgMenuLinks: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array,

  /** Determines referral name for the checkout analytics */
  referral: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,

  /** Determines if the account is an admin */
  isAdmin: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,

  /** Determines if the account has a valid email */
  validEmail: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,

  /** Determines if the account can return to R11 sections */
  canReturn: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,

  /** Determines if the levelAccount is an admin*/
  typeAdministrator: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,

  /** Determines if the levelAccount is a subAdmin*/
  typeSubAdministrator: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (HeaderOrg);

var _c;

$RefreshReg$(_c, "HeaderOrg");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvaGVhZGVyT3JnL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjb250aW5nZW5jeU1vZGFsIiwiSGVhZGVyT3JnIiwic2hvd0NlbnRlciIsInNob3dDb3VudHMiLCJsb2dnZWQiLCJzaG93Q29udGluZ2VuY3kiLCJjYXJ0SXRlbXMiLCJjaGF0SXRlbXMiLCJ1c2VyTmFtZSIsImVtYWlsIiwidXNlclBob3RvIiwibG9nb3V0IiwiaXNNb2JpbGUiLCJ0YWJTZWxlY3RlZCIsInJpZ2h0VGFiU2VsZWN0ZWQiLCJsb2NhbCIsImRldiIsInByb2QiLCJvcmdNZW51Iiwib3JnYW5pemF0aW9uTmFtZSIsInRlYW1OYW1lIiwib3JnTWVudUxpbmtzIiwidHlwZUFkbWluaXN0cmF0b3IiLCJ0eXBlU3ViQWRtaW5pc3RyYXRvciIsInJlZmVycmFsIiwiaXNBZG1pbiIsInZhbGlkRW1haWwiLCJjYW5SZXR1cm4iLCJ1c2VTdGF0ZSIsInNjcm9sbCIsInRvZ2dsZVNjcm9sbCIsImNvbnRpbmdlbmN5Iiwic2V0Q29udGluZ2VuY3kiLCJ3aWR0aCIsIndpbmRvd1NpemUiLCJzaG93TW9kYWwiLCJ0b2dnbGVDb250aWdlbmN5TW9kYWwiLCJhc2lkZU1lbnUiLCJzZXRBc2lkZU1lbnUiLCJzaG93TWVudSIsInNldFNob3dNZW51IiwiaGFuZGxlU2Nyb2xsIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvb2tpZUJhbm5lclZhbHVlIiwiZ2V0Q29va2llIiwiY29va2llQmFubmVyIiwic2V0Q29va2llIiwidW5kZWZpbmVkIiwidG9wIiwiZ2V0Um9vdCIsImxlZnQiLCJzdWJzdHIiLCJjZW50ZXIiLCJyaWdodCIsImxvZ2dlZE1lbnUiLCJjZW50ZXJNb2JpbGUiLCJncmlkIiwibGciLCJzdHlsZXMiLCJtb2JpbGVEYXRhIiwic3BhY2VMb2dnZWQiLCJzcGFjZSIsInRleHREZWNvcmF0aW9uIiwibWFyZ2luTGVmdCIsImN1cnNvciIsImltZyIsInBvc2l0aW9uIiwic2l6ZSIsImNvbG9yIiwiY29sb3JzIiwiYmdXaGl0ZSIsInByb3BUeXBlcyIsIlByb3B0eXBlcyIsImJvb2wiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIm51bWJlciIsInN0cmluZyIsImFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1BLGdCQUF3QixHQUFHLDJFQUFqQzs7QUE4QkEsSUFBTUMsU0FBMEIsR0FBRyxTQUE3QkEsU0FBNkIsT0EyQmhCO0FBQUE7O0FBQUEsNkJBMUJqQkMsVUEwQmlCO0FBQUEsTUExQmpCQSxVQTBCaUIsZ0NBMUJKLEtBMEJJO0FBQUEsNkJBekJqQkMsVUF5QmlCO0FBQUEsTUF6QmpCQSxVQXlCaUIsZ0NBekJKLEtBeUJJO0FBQUEseUJBeEJqQkMsTUF3QmlCO0FBQUEsTUF4QmpCQSxNQXdCaUIsNEJBeEJSLEtBd0JRO0FBQUEsa0NBdkJqQkMsZUF1QmlCO0FBQUEsTUF2QmpCQSxlQXVCaUIscUNBdkJDLEtBdUJEO0FBQUEsNEJBdEJqQkMsU0FzQmlCO0FBQUEsTUF0QmpCQSxTQXNCaUIsK0JBdEJMLENBc0JLO0FBQUEsNEJBckJqQkMsU0FxQmlCO0FBQUEsTUFyQmpCQSxTQXFCaUIsK0JBckJMLENBcUJLO0FBQUEsMkJBcEJqQkMsUUFvQmlCO0FBQUEsTUFwQmpCQSxRQW9CaUIsOEJBcEJOLEVBb0JNO0FBQUEsd0JBbkJqQkMsS0FtQmlCO0FBQUEsTUFuQmpCQSxLQW1CaUIsMkJBbkJULEVBbUJTO0FBQUEsNEJBbEJqQkMsU0FrQmlCO0FBQUEsTUFsQmpCQSxTQWtCaUIsK0JBbEJMLEVBa0JLO0FBQUEsTUFqQmpCQyxNQWlCaUIsUUFqQmpCQSxNQWlCaUI7QUFB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QW9CLEVBQUVxRCxrREFBUyxDQUFDQztBQXBEWixDQUF0QjtBQXVEZTVFLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2hlYWRlckxvZ2dlZENvbXBsZXRlLjk5ZmJmNzExZDBmOTA0Y2E1MTJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcclxuICBGcmFnbWVudCwgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUsXHJcbn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIE5hdlRhYiwgTmF2QXNpZGUsIFRleHQsIGdyaWQsIE1vZGFsLCBCYW5uZXIsIGNvbG9ycywgQXZhdGFyLCBGbGV4Ym94LFxyXG59IGZyb20gJ0BvY2NtdW5kaWFsL29jYy1hdG9taWMnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9IZWFkZXJPcmcubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IGxlZnQgfSBmcm9tICcuL2NvbmZpZy9sZWZ0JztcclxuaW1wb3J0IHsgZ2V0Um9vdCB9IGZyb20gJy4vY29uZmlnL2xpbmtzJztcclxuaW1wb3J0IHsgZ2V0Q29va2llLCBzZXRDb29raWUsIGNvb2tpZUJhbm5lciB9IGZyb20gJy4vY29uZmlnL2Nvb2tpZXMnO1xyXG5pbXBvcnQgeyB0b3AgfSBmcm9tICcuL2NvbmZpZy90b3AnO1xyXG5pbXBvcnQgeyBjZW50ZXIsIGNlbnRlck1vYmlsZSB9IGZyb20gJy4vY29uZmlnL2NlbnRlcic7XHJcbmltcG9ydCB7IHJpZ2h0LCBsb2dnZWRNZW51IH0gZnJvbSAnLi9jb25maWcvcmlnaHQnO1xyXG5pbXBvcnQgUHJvcHR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IHdpbmRvd1NpemUgZnJvbSAnLi4vLi4vY29tbW9uL3VzZVdpbmRvd1NpemUnO1xyXG5pbXBvcnQgSGVhZGVyTWVudSBmcm9tICcuLi8uLi9tb2xlY3VsZXMvbWVudSc7XHJcblxyXG5jb25zdCBjb250aW5nZW5jeU1vZGFsOiBzdHJpbmcgPSAnaHR0cHM6Ly9jZG4tc2hvcC5vY2MuY29tLm14L3JlY3J1aXRlcnMtaG9tZS1wYWdlL2ltZy9jb250aW5nZW5jeU1vZGFsLnBuZyc7XHJcbmV4cG9ydCBpbnRlcmZhY2UgSGVhZGVyUHJvcHMge1xyXG4gIHNob3dDb3VudHM/OiBib29sZWFuO1xyXG4gIHNob3dDZW50ZXI/OiBib29sZWFuO1xyXG4gIGxvZ2dlZD86IGJvb2xlYW47XHJcbiAgc2hvd0NvbnRpbmdlbmN5PzogYm9vbGVhbjtcclxuICBsb2dvdXQ6IEZ1bmN0aW9uO1xyXG4gIGNhcnRJdGVtcz86IG51bWJlcjtcclxuICBjaGF0SXRlbXM/OiBudW1iZXI7XHJcbiAgdXNlck5hbWU/OiBzdHJpbmc7XHJcbiAgdXNlclBob3RvPzogc3RyaW5nO1xyXG4gIGVtYWlsPzogc3RyaW5nO1xyXG4gIGlzTW9iaWxlPzogYm9vbGVhbjtcclxuICB0YWJTZWxlY3RlZD86IG51bWJlcjtcclxuICByaWdodFRhYlNlbGVjdGVkPzogbnVtYmVyO1xyXG4gIGxvY2FsPzogYm9vbGVhbjtcclxuICBkZXY/OiBib29sZWFuO1xyXG4gIHByb2Q/OiBib29sZWFuO1xyXG4gIG9yZ01lbnU/OiBib29sZWFuO1xyXG4gIG9yZ2FuaXphdGlvbk5hbWU/OiBzdHJpbmc7XHJcbiAgdGVhbU5hbWU/OiBzdHJpbmc7XHJcbiAgb3JnTWVudUxpbmtzPzogQXJyYXk8b2JqZWN0PjtcclxuICByZWZlcnJhbD86IHN0cmluZztcclxuICBpc0FkbWluPzogYm9vbGVhbjtcclxuICB2YWxpZEVtYWlsPzogYm9vbGVhbjtcclxuICBjYW5SZXR1cm4/OiBib29sZWFuO1xyXG4gIHR5cGVBZG1pbmlzdHJhdG9yPzogYm9vbGVhbjtcclxuICB0eXBlU3ViQWRtaW5pc3RyYXRvcj86IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IEhlYWRlck9yZzogRkM8SGVhZGVyUHJvcHM+ID0gKHtcclxuICBzaG93Q2VudGVyID0gZmFsc2UsXHJcbiAgc2hvd0NvdW50cyA9IGZhbHNlLFxyXG4gIGxvZ2dlZCA9IGZhbHNlLFxyXG4gIHNob3dDb250aW5nZW5jeSA9IGZhbHNlLFxyXG4gIGNhcnRJdGVtcyA9IDAsXHJcbiAgY2hhdEl0ZW1zID0gMCxcclxuICB1c2VyTmFtZSA9ICcnLFxyXG4gIGVtYWlsID0gJycsXHJcbiAgdXNlclBob3RvID0gJycsXHJcbiAgbG9nb3V0LFxyXG4gIGlzTW9iaWxlID0gZmFsc2UsXHJcbiAgdGFiU2VsZWN0ZWQgPSAwLFxyXG4gIHJpZ2h0VGFiU2VsZWN0ZWQgPSAwLFxyXG4gIGxvY2FsID0gZmFsc2UsXHJcbiAgZGV2ID0gZmFsc2UsXHJcbiAgcHJvZCA9IGZhbHNlLFxyXG4gIG9yZ01lbnUgPSBmYWxzZSxcclxuICBvcmdhbml6YXRpb25OYW1lID0gJycsXHJcbiAgdGVhbU5hbWUgPSAnJyxcclxuICBvcmdNZW51TGlua3MgPSBbXSxcclxuICB0eXBlQWRtaW5pc3RyYXRvciA9IGZhbHNlLFxyXG4gIHR5cGVTdWJBZG1pbmlzdHJhdG9yID0gZmFsc2UsXHJcbiAgcmVmZXJyYWwgPSAnJyxcclxuICBpc0FkbWluID0gZmFsc2UsXHJcbiAgdmFsaWRFbWFpbCA9IGZhbHNlLFxyXG4gIGNhblJldHVybiA9IGZhbHNlLFxyXG59OiBIZWFkZXJQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtzY3JvbGwsIHRvZ2dsZVNjcm9sbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NvbnRpbmdlbmN5LCBzZXRDb250aW5nZW5jeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgd2lkdGg6IG51bWJlciA9IHdpbmRvd1NpemUoKTtcclxuICBjb25zdCBbc2hvd01vZGFsLCB0b2dnbGVDb250aWdlbmN5TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthc2lkZU1lbnUsIHNldEFzaWRlTWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dNZW51LCBzZXRTaG93TWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpOiB2b2lkID0+IHtcclxuICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPT09IDApIHtcclxuICAgICAgdG9nZ2xlU2Nyb2xsKGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRvZ2dsZVNjcm9sbCh0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICByZXR1cm4gKCk6IHZvaWQgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNob3dDb250aW5nZW5jeSkge1xyXG4gICAgICBjb25zdCBjb29raWVCYW5uZXJWYWx1ZTogc3RyaW5nID0gZ2V0Q29va2llKGNvb2tpZUJhbm5lcik7XHJcbiAgICAgIGlmIChjb29raWVCYW5uZXJWYWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHNldENvbnRpbmdlbmN5KHRydWUpO1xyXG4gICAgICAgIHNldENvb2tpZShjb29raWVCYW5uZXIsIHRydWUsIGxvY2FsLCBkZXYsIHByb2QpO1xyXG4gICAgICB9IGVsc2UgaWYgKGNvb2tpZUJhbm5lclZhbHVlID09PSAndHJ1ZScpIHNldENvbnRpbmdlbmN5KHRydWUpO1xyXG4gICAgfVxyXG4gIH0sIFtzaG93Q29udGluZ2VuY3ldKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPE5hdlRhYlxyXG4gICAgICAgIHRvcD17c2Nyb2xsIHx8IGxvZ2dlZCA/IHVuZGVmaW5lZCA6IHRvcChpc01vYmlsZSwgZ2V0Um9vdChsb2NhbCwgZGV2LCBwcm9kKSl9XHJcbiAgICAgICAgbGVmdD17bGVmdChpc01vYmlsZSwgbG9nZ2VkLCB0YWJTZWxlY3RlZCwgZ2V0Um9vdChsb2NhbCwgZGV2LCBwcm9kKSwgYXNpZGVNZW51LCBzZXRBc2lkZU1lbnUsIG9yZ01lbnUsIGAke29yZ2FuaXphdGlvbk5hbWUuc3Vic3RyKDAsMTkpfS4uLmAsIHRlYW1OYW1lLCBvcmdNZW51TGlua3MpfVxyXG4gICAgICAgIGNlbnRlcj17c2hvd0NlbnRlciAmJiBjZW50ZXIoaXNNb2JpbGUsIGxvZ2dlZCwgZ2V0Um9vdChsb2NhbCwgZGV2LCBwcm9kKSwgdGFiU2VsZWN0ZWQpfVxyXG4gICAgICAgIHJpZ2h0PXtyaWdodChcclxuICAgICAgICAgIGlzTW9iaWxlLFxyXG4gICAgICAgICAgbG9nZ2VkLFxyXG4gICAgICAgICAgc2V0U2hvd01lbnUsXHJcbiAgICAgICAgICBzaG93TWVudSxcclxuICAgICAgICAgIHVzZXJOYW1lLFxyXG4gICAgICAgICAgdXNlclBob3RvLFxyXG4gICAgICAgICAgbG9nZ2VkTWVudShyaWdodFRhYlNlbGVjdGVkLCBpc01vYmlsZSwgZ2V0Um9vdChsb2NhbCwgZGV2LCBwcm9kKSwgcmVmZXJyYWwsIGNhcnRJdGVtcyA+IDAsIGNoYXRJdGVtcyA+IDAsIG9yZ01lbnVMaW5rcywgaXNBZG1pbiwgdmFsaWRFbWFpbCwgY2FuUmV0dXJuLCB0eXBlQWRtaW5pc3RyYXRvciwgdHlwZVN1YkFkbWluaXN0cmF0b3IsIHNob3dDb3VudHMpLFxyXG4gICAgICAgICAgbG9nb3V0LFxyXG4gICAgICAgICAgcmVmZXJyYWwsXHJcbiAgICAgICAgICBjYXJ0SXRlbXMsXHJcbiAgICAgICAgICBjaGF0SXRlbXMsXHJcbiAgICAgICAgICBnZXRSb290KGxvY2FsLCBkZXYsIHByb2QpLFxyXG4gICAgICAgICAgcmlnaHRUYWJTZWxlY3RlZCxcclxuICAgICAgICAgIHNob3dDb3VudHMsXHJcbiAgICAgICAgKX1cclxuICAgICAgICBmaXhlZFxyXG4gICAgICAgIGhpZGVPblNjcm9sbFxyXG4gICAgICAvPlxyXG4gICAgICB7aXNNb2JpbGUgJiYgbG9nZ2VkICYmIChcclxuICAgICAgICA8TmF2VGFiXHJcbiAgICAgICAgICBmbGV4Q2VudGVyPXtjZW50ZXJNb2JpbGUoZ2V0Um9vdChsb2NhbCwgZGV2LCBwcm9kKSwgdGFiU2VsZWN0ZWQpfVxyXG4gICAgICAgICAgZml4ZWRcclxuICAgICAgICAgIGJvdHRvbVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIDxOYXZBc2lkZVxyXG4gICAgICAgIHNob3c9e3Nob3dNZW51ICYmICh3aWR0aCA8PSBncmlkLmxnIC0gMSl9XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvd01lbnUoZmFsc2UpfVxyXG4gICAgICAgIHJpZ2h0XHJcbiAgICAgICAgdG9wPXsoXHJcbiAgICAgICAgICA8RmxleGJveCBkaXNwbGF5PVwiZmxleFwiPlxyXG4gICAgICAgICAgICA8QXZhdGFyIG5hbWU9e3VzZXJOYW1lfSBwaG90bz17dXNlclBob3RvICYmIHVzZXJQaG90b30gc2l6ZT17NDh9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9iaWxlRGF0YX0+XHJcbiAgICAgICAgICAgICAgPFRleHQgc3ViaGVhZGluZz57dXNlck5hbWV9PC9UZXh0PlxyXG4gICAgICAgICAgICAgIDxUZXh0IHNtYWxsIG1pZD57ZW1haWx9PC9UZXh0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvRmxleGJveD5cclxuICAgICAgICApfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEhlYWRlck1lbnVcclxuICAgICAgICAgIG1vYmlsZT17aXNNb2JpbGV9XHJcbiAgICAgICAgICBsaW5rc0g9e2xvZ2dlZE1lbnUocmlnaHRUYWJTZWxlY3RlZCwgaXNNb2JpbGUsIGdldFJvb3QobG9jYWwsIGRldiwgcHJvZCksIHJlZmVycmFsLCBjYXJ0SXRlbXMgPiAwLCBjaGF0SXRlbXMgPiAwLCBvcmdNZW51TGlua3MsIGlzQWRtaW4sIHZhbGlkRW1haWwsIGNhblJldHVybiwgdHlwZUFkbWluaXN0cmF0b3IsIHR5cGVTdWJBZG1pbmlzdHJhdG9yLCBzaG93Q291bnRzKX1cclxuICAgICAgICAgIGxvZ291dD17bG9nb3V0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvTmF2QXNpZGU+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtsb2dnZWQgPyBzdHlsZXMuc3BhY2VMb2dnZWQgOiBzdHlsZXMuc3BhY2V9IC8+XHJcbiAgICAgIHtjb250aW5nZW5jeSAmJiAoXHJcbiAgICAgICAgPEJhbm5lciBvbkNsb3NlPXsoKTogdm9pZCA9PiB7IHNldENvb2tpZShjb29raWVCYW5uZXIsIGZhbHNlLCBsb2NhbCwgZGV2LCBwcm9kKTsgc2V0Q29udGluZ2VuY3koZmFsc2UpOyB9fT5cclxuICAgICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgRXN0YXMgc29uIGxhcyBtZWRpZGFzIGRlIGFwb3lvIGEgbnVlc3Ryb3MgY2xpZW50ZXMgYW50ZSBsYSBjb250aW5nZW5jaWEgZGVsIENPVklELTE5LlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJywgbWFyZ2luTGVmdDogJzhweCcsIGN1cnNvcjogJ3BvaW50ZXInIH19XHJcbiAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCk6IHZvaWQgPT4geyB0b2dnbGVDb250aWdlbmN5TW9kYWwodHJ1ZSk7IH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDb27Ds2NlbGFzIGFxdcOtXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgPC9CYW5uZXI+XHJcbiAgICAgICl9XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHNob3c9e3Nob3dNb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXsoKTogdm9pZCA9PiB7IHRvZ2dsZUNvbnRpZ2VuY3lNb2RhbChmYWxzZSk7IH19XHJcbiAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICBpbWdUb3A9e3tcclxuICAgICAgICAgIGltZzogY29udGluZ2VuY3lNb2RhbCwgcG9zaXRpb246ICdjZW50ZXInLCBzaXplOiAnY292ZXInLCBjb2xvcjogY29sb3JzLmJnV2hpdGUsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8VGV4dD5cclxuICAgICAgICAgICAgRGVzZGUgaGFjZSAyNCBhw7FvcywgcG9yIGVtcHJlc2FzIGNvbW8gbGEgdHV5YSwgZXMgcXVlIGhveSAgc29tb3MgbGEgYm9sc2EgZGUgdHJhYmFqbyBlbiBsw61uZWEgbMOtZGVyIGVuIE3DqXhpY28uIEhhcyBlc3RhZG8gY29uIG5vc290cm9zIHNpZW1wcmUuIEFob3JhIG5vcyB0b2NhIGFwb3lhcnRlLlxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgdG9wU21hbGw+XHJcbiAgICAgICAgICAgIEVzIHBvciBlc3RvIHF1ZSBxdWVyZW1vcyBjb211bmljYXJ0ZSBsYXMgbnVldmFzIHkgZGl2ZXJzYXMgYWNjaW9uZXMgcXVlIGhlbW9zIGNyZWFkbyBwYXJhIGFwb3lhciBhIHR1IGNvbXBhw7HDrWEgZW4gbG9zIHByw7N4aW1vcyBkw61hczpcclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPFRleHQgdG9wU21hbGwgdGFnPVwibGlcIj5cclxuICAgICAgICAgICAgICBOdWVzdHJvcyBzZXJ2aWNpb3MgZXN0w6FuIGZ1bmNpb25hbmRvIGFsIDEwMCUgeSB0ZSBhdGVuZGVtb3MgMjQvNy5cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dCB0YWc9XCJsaVwiPlxyXG4gICAgICAgICAgICAgIEFkcXVpZXJlIHR1cyB2YWNhbnRlcyBjb24gaGFzdGEgNiBtZXNlcyBzaW4gaW50ZXJlc2VzIGNvbiB0YXJqZXRhcyBNYXN0ZXJjYXJkIHkgVmlzYS4qXHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgdGFnPVwibGlcIj5cclxuICAgICAgICAgICAgICBTaSBhZHF1aWVyZXMgbnVldm9zIGNyw6lkaXRvcyBkZXNkZSBudWVzdHJvIGNhcnJpdG8gZW4gbMOtbmVhLCB0ZW5kcsOhcyA5MCBkw61hcyBkZSB2aWdlbmNpYSBwYXJhIGhhY2VyIHVzbyBkZSBlbGxvcy4qKlxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHRhZz1cImxpXCI+XHJcbiAgICAgICAgICAgICAgRXh0ZW5zacOzbiBkZSBsYSB2aXNpYmlsaWRhZCBkZSB2YWNhbnRlcyBlbiBlbCBzaXRpbyBwb3IgNjAgZMOtYXMgKGVsIGRvYmxlIGRlIGxvIGhhYml0dWFsKS5cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dCB0YWc9XCJsaVwiPlxyXG4gICAgICAgICAgICAgIFRpcHMgeSBjb250ZW5pZG8gZXN0cmF0w6lnaWNvIHBhcmEgbGlkZXJhciBhIHR1IGVtcHJlc2EgZHVyYW50ZSBsYSBjb250aW5nZW5jaWEuXHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgdGFnPVwibGlcIj5cclxuICAgICAgICAgICAgICBDZXJ0aWZpY2FjacOzbiBzaW4gY29zdG8geSAxMDAlIGVuIGzDrW5lYSBzb2JyZSBlbCB1c28gZGUgbnVlc3RyYSBwbGF0YWZvcm1hLlxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPFRleHQgdG9wU21hbGw+XHJcbiAgICAgICAgICAgIFRlIGludml0YW1vcyBhIGNvbnRhY3RhciBhIHR1IGVqZWN1dGl2byBkZSBjdWVudGEgcGFyYSBxdWUganVudG9zLCBkZXRlcm1pbmVtb3MgbG9zIGFwb3lvcyBxdWUgcHVlZGVuIGJlbmVmaWNpYXIgbcOhcyBhIHR1IGVtcHJlc2EuXHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBzdHJvbmcgdG9wU21hbGw+XHJcbiAgICAgICAgICAgIE5vIHRlIGRldGVuZ2FzLCBub3NvdHJvcyBubyBsbyBoZW1vcyBoZWNoby5cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0IHN0cm9uZz5cclxuICAgICAgICAgICAgwqFDb250aW51ZW1vcyBnZW5lcmFuZG8gZW1wbGVvIHkgbWVqb3JlcyBvcG9ydHVuaWRhZGVzIGEgbWlsbG9uZXMgZGUgbWV4aWNhbm9zLCBqdW50b3MgbG8gdmFtb3MgYSBsb2dyYXIhXHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBtaWNybyB0b3BCYXNlIGxvdz5cclxuICAgICAgICAgICAgKjMgeSA2IG1lc2VzIHNpbiBpbnRlcmVzZXMgZGlzcG9uaWJsZXMgcGFyYSBhZHF1aXJpciBkZXNkZSAyIHZhY2FudGVzIGhhc3RhIDEwIHZhY2FudGVzIGLDoXNpY2FzLFxyXG4gICAgICAgICAgICBkZXN0YWNhZGFzIG8gcHJlbWl1bSBjb24gdGFyamV0YSBWaXNhIHkgTWFzdGVyY2FyZC5cclxuICAgICAgICAgICAgKiogQXBsaWNhIMO6bmljYW1lbnRlIGVuIHByb2R1Y3RvcyBhZHF1aXJpZG9zIGVuIGzDrW5lYSBkZXNkZSAxIHkgaGFzdGEgMTAgdmFjYW50ZXMuIFbDoWxpZG8gcGFyYSBjdWFscXVpZXIgdGlwbyBkZVxyXG4gICAgICAgICAgICB2YWNhbnRlOiBiw6FzaWNhLCBkZXN0YWNhZGEgbyBwcmVtaXVtLiBWaWdlbmNpYSBkZWwgMW8gZGUganVsaW8gZGVsIDIwMjAgYWwgMzEgZGUgZGljaWVtYnJlIGRlbCAyMDIwLlxyXG4gICAgICAgICAgICAqKiogUHJvbW9jacOzbiBzdWpldGEgYSBkaXNwb25pYmlsaWRhZCB5IGNhbWJpbyBzaW4gcHJldmlvIGF2aXNvLlxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuSGVhZGVyT3JnLnByb3BUeXBlcyA9IHtcclxuICAvKiogU2hvd3MgQ2FydCBvciBDaGF0IGNvdW50cyAqL1xyXG4gIHNob3dDb3VudHM6IFByb3B0eXBlcy5ib29sLFxyXG4gIC8qKiBTaG93cyBtaWRkbGUgbmF2aWdhdGlvbiBtZW51ICovXHJcbiAgc2hvd0NlbnRlcjogUHJvcHR5cGVzLmJvb2wsXHJcbiAgLyoqIHVzZXIgaXMgbG9nZ2VkIG9yIG5vdCAqL1xyXG4gIGxvZ2dlZDogUHJvcHR5cGVzLmJvb2wsXHJcbiAgLyoqIFNob3dzIENvdmlkIGNvbnRpbmdlbmN5IGJhbm5lciAqL1xyXG4gIHNob3dDb250aW5nZW5jeTogUHJvcHR5cGVzLmJvb2wsXHJcbiAgLyoqIFNob3dzIENvdmlkIGNvbnRpbmdlbmN5IGJhbm5lciAqL1xyXG4gIGxvZ291dDogUHJvcHR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAvKiogRGV0ZXJtaW5lcyBjYXJ0IGl0ZW1zICovXHJcbiAgY2FydEl0ZW1zOiBQcm9wdHlwZXMubnVtYmVyLFxyXG4gIC8qKiBEZXRlcm1pbmVzIGNoYXQgaXRlbXMgKi9cclxuICBjaGF0SXRlbXM6IFByb3B0eXBlcy5udW1iZXIsXHJcbiAgLyoqIHVzZXIncyB1c2VyTmFtZSAgKi9cclxuICB1c2VyTmFtZTogUHJvcHR5cGVzLnN0cmluZyxcclxuICAvKiogdXNlcidzIHBob3RvICAqL1xyXG4gIHVzZXJQaG90bzogUHJvcHR5cGVzLnN0cmluZyxcclxuICAgLyoqIHVzZXIncyBlbWFpbCAgKi9cclxuICBlbWFpbDogUHJvcHR5cGVzLnN0cmluZyxcclxuICAvKiogRGV0ZXJtaW5lcyBpZiBpc01vYmlsZSAqL1xyXG4gIGlzTW9iaWxlOiBQcm9wdHlwZXMuYm9vbCxcclxuICAvKiogRGV0ZXJtaW5lcyB3aGF0IHRhYiBpcyBzZWxlY3RlZCBpbiB0aGUgbGVmdC9jZW50ZXIgbmF2aWdhdGlvbiAqL1xyXG4gIHRhYlNlbGVjdGVkOiBQcm9wdHlwZXMubnVtYmVyLFxyXG4gIC8qKiBEZXRlcm1pbmVzIHdoYXQgdGFiIGlzIHNlbGVjdGVkIGluIHRoZSByaWdodCBuYXZpZ2F0aW9uICovXHJcbiAgcmlnaHRUYWJTZWxlY3RlZDogUHJvcHR5cGVzLm51bWJlcixcclxuICAvKiogRGV0ZXJtaW5lcyBpZiB0aGUgZW52IGlzIGxvY2FsIGZvciBsaW5rcyAqL1xyXG4gIGxvY2FsOiBQcm9wdHlwZXMuYm9vbCxcclxuICAvKiogRGV0ZXJtaW5lcyBpZiB0aGUgZW52IGlzIGRldiBmb3IgbGlua3MgKi9cclxuICBkZXY6IFByb3B0eXBlcy5ib29sLFxyXG4gIC8qKiBEZXRlcm1pbmVzIGlmIHRoZSBlbnYgaXMgcHJvZCBmb3IgbGlua3MgKi9cclxuICBwcm9kOiBQcm9wdHlwZXMuYm9vbCxcclxuICAvKiogRXh0ZXJuYWwgdG9nZ2xlIGZvciB0aGUgb3JnTWVudSAqL1xyXG4gIG9yZ01lbnU6IFByb3B0eXBlcy5ib29sLFxyXG4gIC8qKiBEZXRlcm1pbmVzIG5hbWUgb2YgdGhlIG9yZ2FuaXphdGlvbiAqL1xyXG4gIG9yZ2FuaXphdGlvbk5hbWU6IFByb3B0eXBlcy5zdHJpbmcsXHJcbiAgLyoqIERldGVybWluZXMgbmFtZSBvZiB0aGUgdGVhbSAqL1xyXG4gIHRlYW1OYW1lOiBQcm9wdHlwZXMuc3RyaW5nLFxyXG4gIC8qKiBEZXRlcm1pbmVzIGxpbmtzIG9mIHRoZSBvcmdhbml6YXRpb24gbWVudSAqL1xyXG4gIG9yZ01lbnVMaW5rczogUHJvcHR5cGVzLmFycmF5LFxyXG4gIC8qKiBEZXRlcm1pbmVzIHJlZmVycmFsIG5hbWUgZm9yIHRoZSBjaGVja291dCBhbmFseXRpY3MgKi9cclxuICByZWZlcnJhbDogUHJvcHR5cGVzLnN0cmluZyxcclxuICAvKiogRGV0ZXJtaW5lcyBpZiB0aGUgYWNjb3VudCBpcyBhbiBhZG1pbiAqL1xyXG4gIGlzQWRtaW46IFByb3B0eXBlcy5ib29sLFxyXG4gIC8qKiBEZXRlcm1pbmVzIGlmIHRoZSBhY2NvdW50IGhhcyBhIHZhbGlkIGVtYWlsICovXHJcbiAgdmFsaWRFbWFpbDogUHJvcHR5cGVzLmJvb2wsXHJcbiAgLyoqIERldGVybWluZXMgaWYgdGhlIGFjY291bnQgY2FuIHJldHVybiB0byBSMTEgc2VjdGlvbnMgKi9cclxuICBjYW5SZXR1cm46IFByb3B0eXBlcy5ib29sLFxyXG4gIC8qKiBEZXRlcm1pbmVzIGlmIHRoZSBsZXZlbEFjY291bnQgaXMgYW4gYWRtaW4qL1xyXG4gIHR5cGVBZG1pbmlzdHJhdG9yOiBQcm9wdHlwZXMuYm9vbCxcclxuICAvKiogRGV0ZXJtaW5lcyBpZiB0aGUgbGV2ZWxBY2NvdW50IGlzIGEgc3ViQWRtaW4qL1xyXG4gIHR5cGVTdWJBZG1pbmlzdHJhdG9yOiBQcm9wdHlwZXMuYm9vbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlck9yZztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==