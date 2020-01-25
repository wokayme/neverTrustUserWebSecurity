const comments = require('./placeToSolve')
module.exports = `

<!doctype html>
<html lang="en" class="h-100">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="author" content="Wokay hacker">
    <title>Hacking practice</title>
    <link rel="stylesheet" href="https://wokayme.github.io/neverTrustUserWebSecurity/bootstrap.min.css">
    <link rel="stylesheet" href="https://wokayme.github.io/neverTrustUserWebSecurity/cdn.v0${'NUMBER_TO_REPLACE'}.min.css">
    <style>
      body{
        width: 80%;
        padding: 40px 0; 
        margin: 0 auto;
      }
        .avatar{
          width: 110px;
          height: 110px;
          border-radius: 50%;
        }
        .separator{
          padding: 20px;
        }
    </style>
  </head>
  <body class="d-flex flex-column">
    <h1>Welcome to hacking practice</h1>
    <blockquote class="blockquote text-left">
      <p class="mb-0" id="quote"></p>
      <footer class="blockquote-footer">first test on production by <cite title="Source Title">Wokay</cite></footer>
    </blockquote>
    ${comments}
</body>
</html>


`;