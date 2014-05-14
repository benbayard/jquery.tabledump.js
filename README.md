jquery.tabledump.js
===================

Turn an HTML table in to a series of divs. 

## Usage

```
$("table").tableDump();
```

### Chains

You can chain together commands like you would expect. Unfortunately due to how `$.fn.replaceWith()` works this too returns the original table not the transformed one. 

```
$("table").addClass("potato").tableDump().appendTo("div");
```
