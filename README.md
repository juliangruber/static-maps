
# static-maps

Turn markup into google maps.

## Example

First serve some html and include map placeholders of the format
`<div class="map-todo" data-latitude=LATITUDE data-longitude=LONGITUDE>`. Make
sure you don't forget to include the
[google maps js api](https://developers.google.com/maps/documentation/javascript/tutorial):

```html
<body>
  <style>
    .map {
      width: 100%;
      height: 200px;
    }
  </style>

  <div
    class="map-todo"
    data-latitude="47.8800"
    data-longitude="10.6225">
  </div>

  <div
    class="map-todo"
    data-latitude="40.7142"
    data-longitude="-74.0064">
  </div>

  <script src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>
  <script src="/example.js"></script>
</body>

```

Then convert all of them to dynamic maps:

```js
var convert = require('static-maps');

convert();
```

And you'll get something like:

![example](/example/screenshot.png)

Check [/example](https://github.com/juliangruber/static-maps/tree/master/example)
for the full example.

## API

### convert([mapOpts], [markerOpts])

Convert all dom elements that match `.map-todo` to Google Maps.

Sensible defaults for `mapOpts` have been chosen for you, but you can extend
them and the `markerOpts` by passing the respective object.

```js
var mapOpts = {
  zoom: 15,
  mapTypeId: maps.MapTypeId.ROADMAP
};

var markerOpts = {};
```

## Installation

With [npm](https://npmjs.org) do:

```bash
npm install static-maps
```

Then bundle for the browser with
[browserify](https://github.com/substack/node-browserify) and make sure
you include the
[google maps js api](https://developers.google.com/maps/documentation/javascript/tutorial)
before the bundle.

## License

(MIT)

Copyright (c) 2013 Julian Gruber &lt;julian@juliangruber.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

