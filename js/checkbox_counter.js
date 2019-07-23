'use strict';

(function() {
  let checkboxes = document.querySelectorAll("input[type='checkbox']");
  let checked = document.querySelectorAll("input[type='checkbox']:checked");
  console.log(`Total: ${checkboxes.length} Checked: ${checked.length}.`);
})();
