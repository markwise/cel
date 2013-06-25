0.1.0 docs

# Cel

Cel is a CSS library that does not rely on pixel perfection to create multi-column layouts. Column widths use percentage values so they are flexible and scale with any screen size on any device.

Supports CH, SA, FF, OP, IE8+

There are five classes, two core class and three helper classes.

- [split](#split)
- [cel](#split)
- [by](#by)
- [with-gap](#with-gap)
- [and-line](#and-line)

### The nickel tour

To create a split element add the class `cel` to columns and the class `split` to the columns' parent.

```html
<div class="split">
    <div class="cel">A</div>
    <div class="cel">B</div>
    <div class="cel">C</div>
</div>
```

The classes `split` and `cel` are the only required classes in the cel library. Cel is added to columns and split is added to the columns' parent, which floats cel elements left and self clears them.

In addition to `split` and `cel`, there are three helper classes `by`, `with-gap` and `and-line` briefly described below.

#### by

The class `by` is used to define a layout for a split element. This class has no default value and requires an argument expressed as an integer or a fraction. If the argument is an integer, column widths will be split evenly by that value. If the argument is a fraction, column widths will be split by a ratio based on that value.

The following split element defines a layout with three equal width columns.

```html
<div class="split by:3">
    <div class="cel">A</div>
    <div class="cel">B</div>
    <div class="cel">C</div>
</div>
```

The following split element defines a layout by a ratio of 2 to 1. Column A is 2x the width of column B.

```html
<div class="split by:2/1">
    <div class="cel">A</div>
    <div class="cel">B</div>
</div>
```

#### with-gap

The class `with-gap` adds horizontal space between columns. The default gap size is 2.5%, but additional gap sizes can be expressed by passing an optional integer value as an argument.

To use the default gap size of 2.5%, add the class `with-gap` to a split element.

```html
<div class="split by:3 with-gap">
    <div class="cel">A</div>
    <div class="cel">B</div>
    <div class="cel">C</div>
</div>
```

To use a 1% gap size, pass the value 1 as an argument to the class.

```html
<div class="split by:3 with-gap:1">
    <div class="cel">A</div>
    <div class="cel">B</div>
    <div class="cel">C</div>
</div>
```

#### and-line

The class `and-line` adds a vertical line rule between columns. This class cannot be used by itself, it can only be used with the class `with-gap`.

To add a line, add the class `and-line` to a split element that also has the class `with-gap`.

```html
<div class="split by:3 with-gap and-line">
    <div class="cel">A</div>
    <div class="cel">B</div>
    <div class="cel">C</div>
</div>
```

#### And here we are

This concludes the nickel tour. More details on each class can be found below.


## split

The classes `split` and `cel` are the only required classes in the cel library. Cel is added to columns and split is added to the columns' parent, which floats cel elements left and self clears them.

Split by itself creates a generic float box that can be used with helper classes to further refine a layout. Although not recommended, you can also work outside the cel architecture and define your own column widths, gap sizes etc. In doing this, helper classes may not work as expected.

To create a split element add the class `cel` to columns and the class `split` to the columns' parent.

```html
<div class="split">
    <div class="cel">A</div>
    <div class="cel">B</div>
</div>
```

#### Nesting

A split element's structure can be nested to create complex layouts as shown below.

```html
<div class="split">
    <div class="cel">
        <div class="split">
            <div class="cel">A1</div>
            <div class="cel">A2</div>
        </div>
    </div>
    <div class="cel"></div>
</div>
```

Columns, however, cannot be split elements.

not

```html
<div class="split">
    <div class="cel split">
        <div class="cel">A1</div>
        <div class="cel">A2</div>
    </div>
    <div class="cel">B</div>
</div>
```

or

```html
<div class="split">
    <div class="split">
        <div class="cel">A1</div>
        <div class="cel">A2</div>
    </div>
    <div class="cel">B</div>
</div>
```


## by

The class `by` is used to define a layout for a split element. This class has no default value and requires an argument expressed as an integer or a fraction. If the argument is an integer, column widths will be split evenly by that value. If the argument is a fraction, column widths will be split by a ratio based on that value.

Split supports up to five equal width columns and six ratios that affect two column layouts.

If the argument is an integer:

__by:2__ - two equal width columns  
__by:3__ - three equal width columns  
__by:4__ - four equal width columns  
__by:5__ - five equal width columns  

If the argument is a fraction:

__by:1/2__ - column two is 2x the size of column one  
__by:2/1__ - column one is 2x the size of column two  
__by:1/3__ - column two is 3x the size of column one  
__by:3/1__ - column one is 3x the size of column two  
__by:2/3__ - column two is 1/3 wider than column one  
__by:3/2__ - column one is 1/3 wider than column two  

The following split element defines a layout with three equal width columns.

```html
<div class="split by:3">
    <div class="cel">A</div>
    <div class="cel">B</div>
    <div class="cel">C</div>
</div>
```

The following split element defines a layout by a ratio of 2 to 1. Column A is 2x the width of column B.

```html
<div class="split by:2/1">
    <div class="cel">A</div>
    <div class="cel">B</div>
</div>
```

The following split element defines a layout by a ratio of 2 to 3. Column B is 1/3 wider than column A.

```html
<div class="split by:2/3">
    <div class="cel">A</div>
    <div class="cel">B</div>
</div>
```


## with-gap

The class `with-gap` adds horizontal space between columns. The default gap size is 2.5%, but additional gap sizes can be expressed by passing an optional integer value as an argument.

Split supports gap sizes up to 5%.

__with-gap__   -  2.5% gap (default)  
__with-gap:1__ - 1% gap  
__with-gap:2__ - 2% gap  
__with-gap:3__ - 3% gap  
__with-gap:4__ - 4% gap  
__with-gap:5__ - 5% gap  

To use the default gap size, add the class `with-gap` to a split element.

```html
<div class="split with-gap">
    <div class="cel">A</div>
    <div class="cel">B</div>
</div>
```

To use a 1% gap size, pass the value 1 as an argument to the class.

```html
<div class="split with-gap:1">
    <div class="cel">A</div>
    <div class="cel">B</div>
</div>
```


## and-line

The class `and-line` adds a vertical line rule between columns. This class cannot be used by itself, it can only be used with the class `with-gap`.

To add a line, add the class `and-line` to a split element that also has the class `with-gap`.

```html
<div class="split with-gap and-line">
    <div class="cel">A</div>
    <div class="cel">B</div>
</div>
```

#### Disclaimer on usage

Lines are created by inserting content for each column using a :before pseudo-element, and are positioned relative to the split element not the column. This allows the top and bottom edges of a line to always be flush with the top and bottom edges of the split element.

Lines are offset from the columns left edge using a negative margin value. Because of this, border-left and/or padding-left styles cannot be used on columns with a line. Doing so will incorrectly offset a line from the columns left edge.

It is by design that lines can only be used with a gap. The space between a line and column should provide adequate separation where padding left on a column isn't necessary. If more space is needed increase the gap size.


#### Customizing line styles

The default line styles are `border-left:1px solid #ccc`. Because split is designed to use a 1px line width, only border style and color values should be changed.

The following style rules will change the lines style and color values site wide.

```css
.split > :before {
	border-left-style:dashed;
	border-left-color:blue;
}
```

or

```css
.split > :before {
	border-style:dashed;
	border-color:blue;
}
```

or

```css
.split > :before {
	border:dashed blue;
}
```

You do not have to use border-left-style and border-left-color to change the styles for a line. Styles have been setup so you can more generically target the line using border-style and border-color or even the shorthand syntax border:style color.




