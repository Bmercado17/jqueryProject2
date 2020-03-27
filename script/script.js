$(document).ready(function() {
  function startOverlay(overlayId) {
    $(".overlay-veil").fadeTo("300", "0.6", function() {
      //with the 'var' below,we are searching for all divs with the data-overlayItem
      //inside the var element with overlayId in single quotes we target the overlay
      //we want which could be overlay item 1 or 2.
      var element = $('div[data-overlayItem ="' + overlayId + '"]');
      element.fadeIn("300");
      element.addClass("active");
    });
  }

  function closeOverlayAll(overlayId) {
    $(".overlay-component").each(function() {
      //each card
      if ($(this).hasClass("active")) {
        //if the overlay-component has the class activ
        $(".overlay-veil").fadeOut(); //fade it out
        $(this).fadeOut("300", function() {
          //fade out the veil (background )
          $(this).removeClass("active"); //and remove the class active ..and close it
        });
      }
    });
    if (overlayId !== false) {
      startOverlay(overlayId); //then re started
    }
  }
  $(".closeOverlay").on("click", function() {
    closeOverlayAll(false);
  });
  $(".overlay-item-click").on("click", function(e) {
    e.preventDefault();
    var overlayId = $(this).data("overlay");
    closeOverlayAll(overlayId);
  });
});
