/**
 * Home
 */
export default function() {
  setTimeout(function() {
    $('.mega-menu').hide();
  }, 200);
  $(document).on('click', '.anchor', function() {
    var $target = $(this).attr('href');
    var $offset = $($target).position().top;
    $('body,html').animate({ scrollTop: $offset }, 1000);
    return false;
  });
  $(document).on('click', '.slide-toggle', function() {
    var $target = $(this).data('open');
    $('.' + $target).slideToggle();
    return false;
  });
  $(document).on('click', '#open-menu', function() {
    $('body,html').toggleClass('menu-open');
    $(this).toggleClass('opened').attr('aria-expanded', 'true');
    return false;
  });
}