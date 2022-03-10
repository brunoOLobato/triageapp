/**
 * Home
 */
export default function() {
  setTimeout(function() {
    $('.mega-menu').hide();
    $('#loading').addClass('hide');
  }, 1000);
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
  $(document).on('click', '.menu-open .wraper', function() {
    $('body,html').toggleClass('menu-open');
    $('#open-menu').toggleClass('opened').attr('aria-expanded', 'true');
    return false;
  });
  $(document).on('click', '.item-menu-mobile > a', function() {
    $(this).toggleClass('act').closest('li').find('.itens-lists-menu-mobile').slideToggle();
    return false;
  });
  $(document).on('click', '.subitem-menu-mobile', function() {
    $(this).closest('div').find('ul').slideToggle();
    return false;
  });
  $(document).on('click', '.menu-mobile > a', function() {
    $(this).toggleClass('act').closest('li').find('.lists-menu-mobile').slideToggle();
    return false;
  });
}