(function () {
    $('.left-menu-wrap > ul').toggleClass('submenu');
    $('.left-menu-wrap .js ul').hide();
    $('.left-menu-wrap .js').click(function(e) {
      $('.left-menu-wrap .js ul').slideToggle(200);
      $('.submenu').toggleClass('active');
      e.stopPropagation();
    });
    $(document).click(function() {
      if ($('.left-menu-wrap .js ul').is(':visible')) {
        $('.left-menu-wrap .js ul', this).slideUp();
        $('.dropdown-toggle').removeClass('active');
      }
    });
  });