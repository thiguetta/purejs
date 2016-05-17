# purejs
pure javascript micro libraries

# Usage

Imagine your browser address bar URL is `http://www.example.com/index.html?message=test`:
````html
<!DOCTYPE html>
<html>
    <head>
        <title>Title</title>
    </head>
    <body>
        <p id="message"></p>
        <script src="https://raw.githubusercontent.com/thiguetta/purejs/master/dist/query_string.min.js"></script>
        <script type="text/javascript">
            var msg = query_string.getParameterValue('message'); //get the value of parameter message. i.e "test"
            document.getElementById('message').textContent = msg;

            var parameters = query_string.getParameters(); //get all the parameters in the query string.
            console.log(parameters); // i.e. ["message"];
        </script>
    </body>
</html>
````
