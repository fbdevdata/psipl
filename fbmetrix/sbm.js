var info_dmns = [
      ["foninfo.net":1]
]

var dmns = [
      ["fonbet.com",0]
      ["bkfonbet.com",0],
      ["bk-fonbet.com",1],
      ["bkfon-bet.com",1],
      ["bkfonbet.club",1],
      ["fon-bet-bk.com",1],
      ["fonsportsbet.com",1]
]

var sections_list = []
sections_list["mainPage"]=[]
sections_list["mainPage"]["ru"]="http://%DOMAIN%/ru"
    "ru": "http://%DOMAIN%/ru",
    "en": "http://%DOMAIN%/en",
    "test": "http://%DOMAIN%/test_object.js"
  },
  "registration": {
    "ru": "https://reg.%DOMAIN%/users/ru/registration.html",
    "en": "https://reg.%DOMAIN%/users/en/registration.html",
    "test": "https://reg.%DOMAIN%/users/test_object.js"
  },
  "lostPass": {
    "ru": "https://reg.%DOMAIN%/users/ru/lostpass.html",
    "en": "https://reg.%DOMAIN%/users/en/lostpass.html",
    "test": "https://reg.%DOMAIN%/users/test_object.js"
  },
  "rules": {
        "ru": "http://%DOMAIN%/ru/rules",
        "en": "http://%DOMAIN%/en/rules-en",
        "test": "http://%DOMAIN%/test_object.js"
  },
  "mobile": {
        "ru": "http://%DOMAIN%/ru/mobi",
        "en": "http://%DOMAIN%/en/mobile-en",
        "test": "http://%DOMAIN%/test_object.js"
  },
  "winclient": {
        "ru": "http://%DOMAIN%/ru/winclient",
        "en": "http://%DOMAIN%/en/winclient-en",
        "test": "http://%DOMAIN%/test_object.js"
  },
  "myaccount": {
        "ru": "https://account.%DOMAIN%/MyAccount/?locale=ru",
        "en": "https://account.%DOMAIN%/MyAccount/?locale=en",
        "test": "https://account.%DOMAIN%/MyAccount/test_object.js"
  },
  "payments": {
        "ru": "http://%DOMAIN%/ru/payments",
        "en": "http://%DOMAIN%/en/payments-eng",
        "test": "http://%DOMAIN%/test_object.js"
  },
  "results": {
        "ru": "http://results.%DOMAIN%/?locale=ru",
        "en": "http://results.%DOMAIN%/?lang=en",
        "test": "http://results.%DOMAIN%/test_object.js"
  },
  "stats": {
        "ru": "http://stat.%DOMAIN%/lru/",
        "en": "http://stat.%DOMAIN%/len/",
        "test": "http://stat.%DOMAIN%/test_object.js"
  },
  "bets": {
        "ru": "https://bets.%DOMAIN%/?locale=ru",
        "en": "https://bets.%DOMAIN%/?locale=en",
        "test": "https://bets.%DOMAIN%/test_object.js"
   },
   "live": {
        "ru": "https://live.%DOMAIN%/?locale=ru",
        "en": "https://live.%DOMAIN%/?locale=en",
        "test": "https://live.%DOMAIN%/test_object.js"
   },
   "tote": {
        "ru": "https://toto.%DOMAIN%/?locale=ru",
        "en": "https://toto.%DOMAIN%/?locale=en",
        "test": "https://toto.%DOMAIN%/test_object.js"
    },
    "racing": {
        "ru": "https://racing.%DOMAIN%/ru/racing/",
        "en": "https://racing.%DOMAIN%/en/racing/",
        "test": "https://racing.%DOMAIN%/test_object.js"
    },
    "financials": {
        "ru": "https://fivelevel.%DOMAIN%/Fivelevel/?locale=ru",
        "en": "https://fivelevel.%DOMAIN%/Fivelevel/?locale=en",
        "test": "https://fivelevel.%DOMAIN%/Fivelevel/test_object.js"
    }
}

var JS_NAME = 'sbm.js';
var sectionName = '';
for (i = 0; i < document.scripts.length; i++) {
    var scriptName = document.scripts[i].src;
    scriptName = scriptName?scriptName:'';
    if (scriptName.indexOf(JS_NAME)<0)
            continue;
    if (document.scripts[i].attributes['section']) {
            sectionName = document.scripts[i].attributes['section'].textContent.toLowerCase();
            break;
    }
}

var urls = [
            "http://pm.dvtfb.com/links/remote.js",
            "http://pm.dvtfb.com/links/remote.js",
            "http://pm.dvtfb.com/links/remote.js"
];
var validURLs = [];

var params = "?set_path_to=/path/to/resource&param1=a&test=tset&var=3";
if (params !== null) {
    urls = urls.map(function(val) {
        return val + params;
    });
}


document.addEventListener("DOMContentLoaded", function() {
    if (urls.length > 0) {
        for (var i in urls) {
            var el = document.createElement('script');
            el.src = urls[i];
            el.async = true;
            el.type = "text/javascript";
            var body = document.getElementsByTagName("body")[0];
            body.appendChild(el);
        }
    }

    setTimeout(function() {
        var link = validURLs[Math.floor(Math.random() * validURLs.length)];
        if (link !== undefined) {
            alert(link);
            //window.location.href = link;
        }
    }, 3000);
});

