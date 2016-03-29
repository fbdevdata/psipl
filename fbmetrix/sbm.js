/* Data Structures */
DOMAIN={
      NAME:0,
      PRIORITY:1
}
var dmns = {
    info:[
        ["http://foninfo.net/",1]
    ],
    access:[
        ["http://acfbc.info/",1]
    ],
    pub:[
        ["fonbet.com",0],
        ["bkfonbet.com",0],
        ["bk-fonbet.com",1],
        ["bkfon-bet.com",1],
        ["bkfonbet.club",1],
        ["fon-bet-bk.com",1],
        ["fonsportsbet.com",1]
    ]
}
var sectionList = {
  mainPage: {
    ru: "http://%DOMAIN%/ru",
    en: "http://%DOMAIN%/en",
    test: "http://%DOMAIN%/test_object.js"
  },
  registration: {
    ru: "https://reg.%DOMAIN%/users/ru/registration.html",
    en: "https://reg.%DOMAIN%/users/en/registration.html",
    test: "https://reg.%DOMAIN%/users/test_object.js"
  },
  lostPass: {
    ru: "https://reg.%DOMAIN%/users/ru/lostpass.html",
    en: "https://reg.%DOMAIN%/users/en/lostpass.html",
    test: "https://reg.%DOMAIN%/users/test_object.js"
  },
  rules: {
    ru: "http://%DOMAIN%/ru/rules",
    en: "http://%DOMAIN%/en/rules-en",
    test: "http://%DOMAIN%/test_object.js"
  },
  mobile: {
    ru: "http://%DOMAIN%/ru/mobi",
    en: "http://%DOMAIN%/en/mobile-en",
    test: "http://%DOMAIN%/test_object.js"
  },
  winclient: {
    ru: "http://%DOMAIN%/ru/winclient",
    en: "http://%DOMAIN%/en/winclient-en",
    test: "http://%DOMAIN%/test_object.js"
  },
  myaccount: {
    ru: "https://account.%DOMAIN%/MyAccount/?locale=ru",
    en: "https://account.%DOMAIN%/MyAccount/?locale=en",
    test: "https://account.%DOMAIN%/MyAccount/test_object.js"
  },
  payments: {
    ru: "http://%DOMAIN%/ru/payments",
    en: "http://%DOMAIN%/en/payments-eng",
    test: "http://%DOMAIN%/test_object.js"
  },
  results: {
    ru: "http://results.%DOMAIN%/?locale=ru",
    en: "http://results.%DOMAIN%/?lang=en",
    test: "http://results.%DOMAIN%/test_object.js"
  },
  stats: {
    ru: "http://stat.%DOMAIN%/lru/",
    en: "http://stat.%DOMAIN%/len/",
    test: "http://stat.%DOMAIN%/test_object.js"
  },
  bets: {
    ru: "https://bets.%DOMAIN%/?locale=ru",
    en: "https://bets.%DOMAIN%/?locale=en",
    test: "https://bets.%DOMAIN%/test_object.js"
  },
  live: {
    ru: "https://live.%DOMAIN%/?locale=ru",
    en: "https://live.%DOMAIN%/?locale=en",
    test: "https://live.%DOMAIN%/test_object.js"
  },
  tote: {
    ru: "https://toto.%DOMAIN%/?locale=ru",
    en: "https://toto.%DOMAIN%/?locale=en",
    test: "https://toto.%DOMAIN%/test_object.js"
  },
  racing: {
    ru: "https://racing.%DOMAIN%/ru/racing/",
    en: "https://racing.%DOMAIN%/en/racing/",
    test: "https://racing.%DOMAIN%/test_object.js"
  },
  financials: {
    ru: "https://fivelevel.%DOMAIN%/Fivelevel/?locale=ru",
    en: "https://fivelevel.%DOMAIN%/Fivelevel/?locale=en",
    test: "https://fivelevel.%DOMAIN%/Fivelevel/test_object.js"
  }
}
/* Get Script Attributes */
var JS_NAME = 'sbm.js';
var jsAttributes=null
for (var i in document.scripts) {
      var scriptName = document.scripts[i].src;
      scriptName = scriptName?scriptName:'';
      if (scriptName.indexOf(JS_NAME)>=0) {
            jsAttributes = document.scripts[i].attributes;
            break;
      }
}

sectionName="mainPage";
waitTime=3000;
timeoutTime=10000;
localeLang="ru"
if (jsAttributes) {
      if (jsAttributes["section"]) 
            sectionName=jsAttributes["section"].textContent.toLowerCase();
      if (jsAttributes["wait"])
            waitTime=jsAttributes["wait"].textContent.toLowerCase();
      if (jsAttributes["locale"])
            localeLang=jsAttributes["locale"].textContent.toLowerCase();
}

/* Append test scripts */
var testURLs = []
var validURLs = [];
var inValidURLs = [];

var head = document.getElementsByTagName("head")[0];
var timestamp=new Date().getTime();
    
dmns.pub.forEach(function(domain) { 
      testURL = sectionList[sectionName]["test"].replace("%DOMAIN%",domain[DOMAIN.NAME]);
      routeURL = sectionList[sectionName][localeLang].replace("%DOMAIN%",domain[DOMAIN.NAME]);
      testURLs.push(testURL);
      
      var el = document.createElement('script');
      el.src = testURL+"?"+timestamp;
      el.onload = function(e){ validURLs.push(this.getAttribute("route"))}
      el.onerror = function(e){ inValidURLs.push(this.getAttribute("route"))}
      el.setAttribute("route",routeURL)
      el.async = true;
      el.type = "text/javascript";
      head.appendChild(el);
})

/* Proccess Query Parameters */
var params=[];
var currentURL=window.location.href;
var destURL=sectionList[sectionName][localeLang];

//gather all parameters togather (to params)
if (currentURL.indexOf("?")) {
    params = currentURL.split("?")[1].split("&");
}
if (destURL.indexOf("?")) {
    params = destURL.split("?")[1].split("&").concat(params);
}

//process control parameters
var ignoredParams = ["set_path_to"];
var cleanParams   = [];
for (var i in params) {
  var kv = params[i].split("=");
  //if set_path_to param present - append path to link path
  if (kv[0] == "set_path_to") {
    link += kv[1];
  }
  if (ignoredParams.indexOf(kv[0]) > -1) {
    continue;
  }
  cleanParams.push(kv[0] + (kv[1]?"="+kv[1]:""));
}

/* Redirect functions */
function redirectToMirror() {
    if (validURLs.length == 0) {
        setTimeout(redirectToMirror, waitTime);
        return;
    }

    var link = validURLs[Math.floor(Math.random() * validURLs.length)];
    if (link.indexOf("?")) {
        link=link.split("?")[0];
    }
    if (cleanParams.length > 0) {
        link += "?" + cleanParams.join("&");
    }
    document.writeln(link+"<br>");
    //window.location.href = link;
}
function redirectToAccessPage() {
    var link = dmns.access[Math.floor(Math.random() * dmns.access.length)][DOMAIN.NAME];
    if (link !== undefined) {
        document.writeln(link+"<br>")
        //window.location.href = link;
    }      
}

/* Schedule Redirects */
setTimeout(redirectToMirror, waitTime);
setTimeout(redirectToAccessPage, timeoutTime);
