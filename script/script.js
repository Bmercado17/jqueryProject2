$(document).ready(function() {
  function startOverlay(overlayId) {
    $(".overlay-veil").fadeTo("300", "0.6", function() {
      var element = $('div[data-overlayItem="' + overlayId + '"]');
      element.fadeIn("3000");
      element.addClass("active");
    });
  }

  function closeOverlayAll(overlayId) {
    startOverlay(overlayId);
  }
  $(".overlay-item-click").on("click", function(e) {
    e.preventDefault();
    var overlayId = $(this).data("overlay");
    closeOverlayAll(overlayId);
  });
});
