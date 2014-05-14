(function($) {
  function dumpTag() {
    var oldTag = this.tagName;
    var $newTag = $(this).addClass("mw-was-" + oldTag.toLowerCase());
    $newTag.replaceWith(function() {
      var attributes = "";
      $.each($newTag[0].attributes, function(i, attr) {
        // toEl.attr(attr.name, attr.value);
        attributes = attributes + " " + attr.name + '="' + attr.value + '"';
      });

      return "<div" + attributes + ">" + $newTag.html() + "</div>";
    });
  }

  $.fn.tableDump = function() {
    this.filter("table").each(function() {
      $this = $(this);
      /* so here's what we need to do:
       1) get all attributes from table, and replace it with a div with all those attributes. 
       2) DO THE SAME FOR EACH CHILD down to a td, or th! 
      */

      // list of table elements I care about.
      var tableElements = "thead, tbody, tfoot, tr, td, th"

      var bottom = "td, th";
      var middle = "tr";
      var top    = "thead, tbody, tfoot, colgroup";
      var tiptop = "table"

      // $this.find(tableElements).each(dumpTag);
      $this.find(bottom).each(dumpTag);
      $this.find(middle).each(dumpTag);
      $this.find(top).each(dumpTag);
      $this.each(dumpTag);

    });
    return this;
  };
}(jQuery));
