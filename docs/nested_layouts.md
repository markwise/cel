# Nested layouts

A layout can be nested an unlimited number of times to create complex structures. Although it is unlikely for most designs that you will need to nest a layout more than two levels deep.

Nested layouts are created by adding a new layout as a child of a column.

_Note that Cel doesn't support direct level nesting, so columns cannot be layouts._

__ex:__  
The following layout has one level of nesting.

```html
<div class="split by:2">
	<div class="cel">
		<div class="split by:2">
			<div class="cel">A1</div>
			<div class="cel">A2</div>
		</div>
	</div>
	<div class="cel">B</div>
</div>
```

__ex:__  
The following layout has two levels of nesting.

```html
<div class="split by:2">
	<div class="cel">
		<div class="split by:2">
			<div class="cel">
				<div split by:2>
					<div class="cel">AAA</div>
					<div class="cel">AAB</div>
				</div>
			</div>
			<div class="cel">AB</div>
		</div>
	</div>
	<div class="cel">B</div>
</div>
```