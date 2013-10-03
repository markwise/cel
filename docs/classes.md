# Classes

Cel is comprised of seven core classes that include:

<table>
    <tbody>
        <tr>
            <td><a href="#split-cel"><strong>split</strong></a></td>
            <td>Defines a layout</td>
        </tr>
        <tr>
            <td><a href="#split-cel"><strong>cel</strong></a></td>
            <td>Defines a column within a layout</td>
        </tr>
        <tr>
            <td><a href="#by"><strong>by</strong></a></td>
            <td>Sets column widths</td>
        </tr>
        <tr>
            <td><a href="#with-gap"><strong>with-gap</strong></a></td>
            <td>Adds horizontal space between columns</td>
        </tr>
        <tr>
            <td><a href="#align"><strong>align</strong></a></td>
            <td>Changes the vertical alignment of columns</td>
        </tr>
        <tr>
            <td><a href="#flip"><strong>flip</strong></a></td>
            <td>Changes the direction of columns</td>
        </tr>
        <tr>
            <td><a href="#cel-line"><strong>cel-line</strong></a></td>
            <td>Creates a vertical line divider between columns</td>
        </tr>
    </tbody>
</table>
 
There are two additional classes, show and hide that are not part of the core set of classes. They are discussed in the documentation describing responsive layouts.


# split, cel

The classes split and cel are the only required classes in the Cel framework. Split defines a layout and cel defines a column within a layout.

__ex:__  
To create a layout, add the class cel to columns and the class split to the columns' parent.

```html
<div class="split">
	<div class="cel">A</div>
	<div class="cel">B</div>
</div>
```

Columns are created by setting the element's display type to inline-block. This allows width and height values to be set and columns to be manipulated by text properties, such as text-align, vertical-align and text-direction, all of which are used throughout the cel framework.

The default horizontal alignment of columns is justify and cannot be changed with a class and should not be changed outside the cel framework. Cel relies on justified alignment to keep the first and last columns of each line flush with left and right edges of a layout while distributing additional columns evenly across the remaining space. This provides a natural way to create gaps between columns without using margins or positioning.

The default vertical alignment of columns is top and can be changed with the class align.

The default direction of columns is left to right and can be changed with the class flip to reverse the order of columns in the rendered page.


# by

The class by creates a structured layout context in which the cel framework defines column widths. In this context, it is not safe to author column widths without affecting the core framework.

By requires an argument expressed as an integer or a fraction. If the argument is an integer, column widths will be split evenly by that value. If the argument is a fraction, column widths will be split by a ratio based on that value.

Cel supports up to five equal width columns and six ratios that affect two column layouts.

If the argument is an integer:

<table>
    <tbody>
        <tr>
            <td>by:2</td>
            <td>two equal width columns</td>
        </tr>
        <tr>
            <td>by:3</td>
            <td>three equal width columns</td>
        </tr>
        <tr>
            <td>by:4</td>
            <td>four equal width columns</td>
        </tr>
        <tr>
            <td>by:5</td>
            <td>five equal width columns</td>
        </tr>  
    </tbody>
</table>

If the argument is a fraction:

<table>
    <tbody>
        <tr>
            <td>by:1/2</td>
            <td>column two is 2x the size of column one</td>
        </tr>
        <tr>
            <td>by:2/1</td>
            <td>column one is 2x the size of column two</td>
        </tr>  
        <tr>
            <td>by:1/3</td>
            <td>column two is 3x the size of column one</td>
        </tr>  
        <tr>
            <td>by:3/1</td>
            <td>column one is 3x the size of column two</td>
        </tr>  
        <tr>
            <td>by:2/3</td>
            <td>column two is 1/3 wider than column one</td>
        </tr>  
        <tr>
            <td>by:3/2</td>
            <td>column one is 1/3 wider than column two</td>
        </tr>    
    </tbody>
</table>

__ex:__  
To define a layout with three equal width columns, add the class by:3 to a layout.

```html
<div class="split by:3">
	<div class="cel">A</div>
	<div class="cel">B</div>
	<div class="cel">C</div>
</div>
```

__ex:__  
The following layout defines column widths by a ratio of 2 to 1. Column A is 2x the width of column B.

```html
<div class="split by:2/1">
	<div class="cel">A</div>
	<div class="cel">B</div>
</div>
```


# with-gap

The class with-gap adds horizontal space between columns and can only be used in combination with the class by.

With-gap requires an argument expressed as an integer that represents a percentage of a layout's width. Cel supports gap sizes up to 5%.

Supported values include:

<table>
    <tbody>
        <tr>
            <td>with-gap:1</td>
            <td>1% gap</td>
        </tr>
        <tr>
            <td>with-gap:2</td>
            <td>2% gap</td>
        </tr>
        <tr>
            <td>with-gap:3</td>
            <td>3% gap</td>
        </tr>
        <tr>
            <td>with-gap:4</td>
            <td>4% gap</td>
        </tr>
        <tr>
            <td>with-gap:5</td>
            <td>5% gap</td>
        </tr>
    </tbody>
</table>

__ex:__  
To add a 1% gap between columns, pass the value 1 as an argument to the class.

```html
<div class="split by:3 with-gap:1">
	<div class="cel">A</div>
	<div class="cel">B</div>
	<div class="cel">C</div>
</div>
```


# align

The class align is used to change the vertical alignment of columns.

Align requires an argument and can be the values top, middle and bottom, which correspond to CSS vertical-align property values. Columns are initially aligned top.

An alternate syntax can be used by specifying the first letter of a value only, e.g. m instead of middle. This provides a shorter more succinct syntax.

Supported values include:

<table>
    <tbody>
        <tr>
            <td>align:top</td>
            <td>align:t</td>
            <td>Columns top edges are aligned</td>
        </tr>
        <tr>
            <td>align:middle</td>
            <td>align:m</td>
            <td>Columns center points are aligned</td>
        </tr>
        <tr>
            <td>align:bottom</td>
            <td>align:b</td>
            <td>Columns bottom edges are aligned</td>
        </tr>
    </tbody>
</table>

__ex:__  
To align columns to their center points, add the class align:middle to a layout.

```html
<div class="split align:middle">
	<div class="cel">A</div>
	<div class="cel">B</div>
	<div class="cel">C</div>
</div>
```

Using the alternate syntax it would be:

```html
<div class="split align:m">
	<div class="cel">A</div>
	<div class="cel">B</div>
	<div class="cel">C</div>
</div>
```


# flip

The class flip is used to change the direction of columns.

__ex:__  
To reverse the column order, add the class flip to a layout. When the page is rendered, the columns will be ordered from left to right C, B, A.

```html
<div class="split flip">
	<div class="cel">A</div>
	<div class="cel">B</div>
	<div class="cel">C</div>
</div>
```


# cel-line

The class cel-line is used to create a vertical line divider.

_Note that cel lines can't be used with grid layouts (layouts that span multiple lines)._

Cel lines are created by adding the class cel-line to an empty <div> element and are typically placed between columns, but can be added anywhere within a layout.

__ex:__  
The following layout has two cel lines, one between each column.

```html
<div class="split by:3 with-gap:5">
	<div class="cel">A</div>
	<div class="cel-line"></div>
	<div class="cel">B</div>
	<div class="cel-line"></div>
	<div class="cel">C</div>
</div>
```

__ex:__  
The following layout has four cel lines, one before column A, after column C and in between columns.

```html
<div class="split by:3 with-gap:5">
	<div class="cel-line"></div>
	<div class="cel">A</div>
	<div class="cel-line"></div>
	<div class="cel">B</div>
	<div class="cel-line"></div>
	<div class="cel">C</div>
	<div class="cel-line"></div>
</div>
```

__ex:__  
The following layout has one cel line between columns A and B.

```html
<div class="split by:3 with-gap:5">
	<div class="cel">A</div>
	<div class="cel-line"></div>
	<div class="cel">B</div
	<div class="cel">C</div>
</div>
```

Because cel lines take up horizontal space, there can be as many cel lines added to a layout as space permits before columns and/or cel lines begin to wrap.

Wrapping is typically caused by column widths that add up to 100%, meaning columns will be flush without space to accommodate cel lines.

__ex:__  
The following three column layout is defined without gap spacing causing column C to wrap.

```html
<div class="split by:3">
	<div class="cel">A</div>
	<div class="cel-line"></div>
	<div class="cel">B</div
	<div class="cel-line"></div>
	<div class="cel">C</div>
</div>
```

### Customizing line styles

Cel lines use border style properties and have the default style border:1px solid #ccc. These styles can be changed globally or on a per instance basis.

_Note that only border style properties should be modified. Modifying other properties may produce unexpected results._

__ex:__  
To globally change styles, create a new style rule anywhere after the inclusion of the cel stylesheet that targets the class cel-line directly.

```css
<style>
	.cel-line {
		border-style:dotted;
		border-color:blue;
	}
</style>
```

__ex:__  
The width of a cel lines can also be changed. However, be mindful of available space especially when the window is resized as this can cause columns and/or cel lines to wrap.

```css
<style>
	.cel-line {
		border-width:3px;
	}
</style>
```

__ex:__  
The border style short syntax can be also used when setting all three border properties.

```css
<style>
	.cel-line {
		border:3px dotted blue;
	}
</style>
```
