$(document).ready(function() {
  // Web Design Portfolio Animations
  $('.web_design_portfolio_item_thumb').click( function(event) {
    // Save away our current target thumb
    var target = event.currentTarget;
    $('#web_design_portfolio').fadeOut(400, function() {
      // Thumbnails have now been faded out.
      // 1. Hide all thumbs.
      $('.web_design_portfolio_item_thumb').hide();

      // 2. Show #web_design_portfolio.
      $('#web_design_portfolio').show();

      // 3. Change the class of target.
      target.setAttribute('class', 'web_design_portfolio_item');
      target = $('.web_design_portfolio_item'); // Must reinitialize target. For some reason, we lose its reference when we change its class.

      // 4. Cufon - Redraw Fonts
      // Cufon.replace('.web_design_portfolio_item h1', { fontFamily: 'Menlo' });

      // 5. Show Closebox
      $('#closebox').show();

      // 6. Animate in target
      target.fadeIn(400, function() {
        // Force a relayout, so webkit must recalculate the body height.
        $('body')[0].style.display = 'none';
        $('body')[0].style.display = 'block';

        // Target has been faded in. Now setup exit strategy.
        $('#closebox').click( function(event) {
          // 1. Hide #web_design_portfolio.
          $('.web_design_portfolio_item').fadeOut(400, function() {
            // PortfolioItem has now been faded out.

            // Force a relayout, so webkit must recalculate the body height.
            $('body')[0].style.display = 'none';
            $('body')[0].style.display = 'block';

            // 2. Change the class of target.
            this.setAttribute('class', 'web_design_portfolio_item_thumb');

            // 3. Cufon - Redraw Fonts
            // Cufon.replace('.web_design_portfolio_item_thumb h1', { fontFamily: 'Menlo' });

            // 4. Hide Closebox
            $('#closebox').hide();

            // 4. Show all thumbs.
            $('.web_design_portfolio_item_thumb').show();
          });
        });
      });
    });// end fadeOut();
  });// end click();
});// end ready();


// Hover In
function handleThumbOver(event) {
    var src = $(this).attr('src');
    src = src.substr(0, src.length-4) + '_hover.png';
    $(this).children('img').attr('src', src);
}

// Hover Out
function handleThumbOut(event) {
    var src = $(this).children('img').attr('src');
    src = src.substr(0, src.length-10) + '.png';
    $(this).children('img').attr('src', src);
}
