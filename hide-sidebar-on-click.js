// fill-content-on-click.js
function (hook, vm) {
  var content = '.content';

  hook.doneEach(function () {
    var toggle = document.querySelector('.' + sidebarToggle);
    toggle.addEventListener('click', function () {
      var sidebar = document.querySelector('.' + sidebar);
      if (sidebar.style.display === 'block') {
        sidebar.style.display = 'none';
        // 内容铺满网页的逻辑
        var contentElement = document.querySelector(content);
        contentElement.style.width = '100%';
        contentElement.style.height = '100%';
        contentElement.style.maxHeight = '100%';
        contentElement.style.margin = '0';
        contentElement.style.padding = '0';
        contentElement.style.overflow = 'auto';
      }
    });
  });
}
