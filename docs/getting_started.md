# Getting started

The current version is 0.2.0 released on 9/30/2013.

[Download the latest release](https://github.com/markwise/cel/raw/master/release/cel-0.2.0.zip)

Once downloaded, unzip the resource and there should be a folder containing four files that include the uncompressed and min versions of the latest release. The min versions should be used for production. The uncompressed versions can be discarded, used for reference or for development.

- [cel-0.2.0.css](https://github.com/markwise/cel/blob/master/release/cel-0.2.0.css)
- [cel-0.2.0.js](https://github.com/markwise/cel/blob/master/release/cel-0.2.0.js)
- [cel-0.2.0.min.css](https://github.com/markwise/cel/blob/master/release/cel-0.2.0.min.css)
- [cel-0.2.0.min.js](https://github.com/markwise/cel/blob/master/release/cel-0.2.0.min.js)


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
