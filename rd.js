$('.close').click(function() {
  $('.screenpage:visible').hide().siblings().eq(Math.floor(Math.random() * 9)).show();
});
