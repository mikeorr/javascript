2016-12-19
==========

Installed Node from https://nodejs.org/ . Version 6.9.2 LTS.

It doesn't come with installation instructions so I used 'stow' to
install it to /usr/local after deleting non-install files
(READMEs).

"node" has a manpage. "npm" doesn't. NPM has better documentation than
Nodel it's at https://docs.npmjs.com/ .

`What is node.js exactly?  <https://www.youtube.com/watch?v=pU9Q6oiQNd0>`_:

    Node's globals are ``global`` and ``process``, not ``window`` and
    ``document`` as in a web browser. "node module1" runs a file "module1.js".

    ``console.log("Foo")`` => print statement.

    If a module contains ``module.exports.a = "Foo";`` and the caller contains
    ``var mod = require("./module1"(;``, then ``mod.a`` is a property. Inside
    the module, ``exports`` is the same as ``mobule.exports``. Or the exports
    cam be a runnable function.

    "$ npm install underscore" => download underscore to
    "node_modules/underscore.js". You can use it in Javascript with
    ``var _ = require("underscore")"``.

    "$ npm init" => create an NPM package. (Creates "package.json".)

    "$ node install -S backbone" => install Backbone and add it to
    "package.json".

    "$ npm install" => instal all the dependencies listed in "package.json".

    The video has an example of a minimal web server.

Node documentation:

    "$ npm install -g npm@latest". "npm -v" => NPM version 4.0.5.

Installed 'underscore' and 'backbone'.
