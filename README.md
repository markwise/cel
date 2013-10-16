# Cel

Cel is a CSS framework for creating responsive layouts that are flexible and scale with any screen size on any device.

Cel is owned and maintained by Mark Wise and is released under the [MIT License](LICENSE.txt).

_Note that this project is actively being developed and is subject to change based on work towards the 1.0.0 release. That means syntax and current features may change or be removed in future revisions._


# Getting started

The current version is 0.2.0 released on 9/30/2013.

[Download the latest release](https://github.com/markwise/cel/raw/master/release/0.2.0/cel-0.2.0.zip)

Once downloaded, unzip the resource and there should be a folder containing four files that include the uncompressed and min versions of the latest release. The min versions should be used for production. The uncompressed versions can be discarded, used for reference or for development.

- [cel-0.2.0.css](release/0.2.0/cel-0.2.0.css)
- [cel-0.2.0.js](release/0.2.0/cel-0.2.0.js)
- [cel-0.2.0.min.css](release/0.2.0/cel-0.2.0.min.css)
- [cel-0.2.0.min.js](release/0.2.0/cel-0.2.0.min.js)


### Usage

Link the css file in the head section of the document, the same as you would with any other external stylesheet. 

```html
<head>
	<title></title>
	<link rel="stylesheet" href="split-0.2.0.min.css">
</head>
```

The js file can be included in the head section of the document or at the bottom of the page.

```html
<head>
	<title></title>
	<link rel="stylesheet" href="split-0.2.0.min.css">
	<script src="split-0.2.0.min.js"></script>
</head>
```

or

```html
<body>
	...
	<script src="split-0.2.0.min.js"></script>
</body>
</html>
```


# Documentation

Documentation for the current release can be found in the [wiki](https://github.com/markwise/cel/wiki).

A history of improvements, added features and bug fixes can be found in the [changelog](changelog.md).

A running list of ideas that may be part of a future release can be found in [todos](todos.txt). This includes potential changes to syntax, improvements to the code base, new feature requests and other completely outlandish ideas to be explored.


# Browser compatibility

Supported browsers include:

- Android 2.1+
- Chrome
- Internet Explorer 8+
- iOS 3.2+
- Firefox 12+
- Opera 4+
- Safari 4+




