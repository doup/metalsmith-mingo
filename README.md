> **THIS PROJECT IS NO LONGER MAINTAINED, OPEN A ISSUE IF YOU WANT TAKE OWNERSHIP**

# metalsmith-mingo

Wrapper for the [Mingo](https://github.com/kofrasa/mingo) library which allows to make MongoDB style queries in Javascript. You can use this plugin instead of `metalsmith-collections` querying directly in your templates, e.g.:

```javascript
find({ locale: locale, type: 'article' }).sort({ date: -1 }).all()
```

See Mingo for full [query documentation](https://github.com/kofrasa/mingo).

## Installation

    $ npm install --save metalsmith-mingo

## Usage

Add the plugin, preferably just before `templates` plugin.

```javascript
var mingo = require('metalsmith-mingo');

Metalsmith(__dirname)
    .use(mingo())

```

Then in your templates you can query the files:

```javascript
find({ locale: locale, type: 'article' }).sort({ date: -1 }).all()
findOne({ filename: 'index.html' })
```

Note that `filename` is added by the plugin.

## Options

**filename** `String`: Name of the attribute for exposing filename in files. So if the filename is `index.html`, the attribute would be `file[filename] = 'index.html'`. Default: `filename`.

**find** `String`: Name for exposing Mingo `find` in Metalsmith metadata. Default: `find`.

**findOne** `String`: Name for exposing `findOne` sugar method in Metalsmith metadata. Note that this method does not exist in Mingo, it's just sugar for `find().first()`, if you need to sort before fetching one element use `find` instead. Default: `findOne`.

## License

The MIT License (MIT)

Copyright (c) 2015 Asier Illarramendi <asier@illarra.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
