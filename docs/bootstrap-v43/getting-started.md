# Introduction
If you try to use the Bootstrap's starter template only, the Blogger's environment gives you many errors and it doesn't leave you save your work. It happens because the Blogger's engine needs some patterns to works correctly.

## Starter Template for Blogger
This is a simple template with required stuffs to Blogger works fine like [Bootstrap's Starter Template](https://getbootstrap.com/docs/4.3/getting-started/introduction/#starter-template).

```xml
<!-- Required by Blogger -->
<?xml version="1.0" encoding="UTF-8" ?>

<!-- Required by Blogger, DOCTYPE needs to be uppercase -->
<!DOCTYPE html>

<!-- Changed by Blogger, after the first save, xmlns attributes are added -->
<html lang='en' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>

  <head>
    <!-- Required meta tags -->
    <meta charset='utf-8'/>
    <meta content='width=device-width, initial-scale=1, shrink-to-fit=no' name='viewport'/>

    <!-- Required by Blogger -->
    <b:skin><![CDATA[]]></b:skin>

    <!-- Bootstrap CSS -->
    <link crossorigin='anonymous' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' rel='stylesheet'/>

    <title>Blogger With: Joining useful things simply!</title>
  </head>

  <body>
    <h1>Hello, world!</h1>

    <!-- Required by Blogger -->
    <b:section id='unique'/>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script crossorigin='anonymous' integrity='sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo' src='https://code.jquery.com/jquery-3.3.1.slim.min.js'/>
    <script crossorigin='anonymous' integrity='sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1' src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js'/>
    <script crossorigin='anonymous' integrity='sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM' src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js'/>
  </body>

</html>
```

## In short
You need...

**To add:**  
+ `<?xml version="1.0" encoding="UTF-8" ?>` in the first line;
+ `<b:skin><![CDATA[]]></b:skin>` in the head tag;
+ `<b:section id='unique'/>` in the body tag.

**To change:**  
+ `<!DOCTYPE html>` to uppercase;
+ All tags aren't closed. Use `/>`, in the same tag, or `</TAGNAME>` to close them.
