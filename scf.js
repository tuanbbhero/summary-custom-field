var tpProjectCustomFields = function() {
  if ($('.summary-item').length > 0) {
    var tpSummaryItems = $('.summary-item');
    var totalItems = tpSummaryItems.length;
    var batchSize = 5;
    var delayBetweenBatches = 500;
    
    function processBatch(startIndex) {
      var endIndex = Math.min(startIndex + batchSize, totalItems);
      
      for (var i = startIndex; i < endIndex; i++) {
        (function(index) {
          var tpSummaryItem = $(tpSummaryItems[index]);
          var tpSummaryLink = tpSummaryItem.find('a.summary-title-link');
          var tpProjectUrl = tpSummaryLink.attr('href');
          
          if (tpProjectUrl && tpSummaryLink.length && tpSummaryLink.prev('.summary-custom-field').length === 0) {
            var cacheBuster = '?nocache=' + new Date().getTime() + Math.random();
            $.get(tpProjectUrl + cacheBuster, function(tpData) {
              var tpCustomField = $(tpData).find('p.custom-field').clone();
              
              if (tpCustomField.length) {
                if (tpSummaryLink.prev('.summary-custom-field').length === 0) {
                  tpCustomField.addClass('summary-custom-field');
                  tpSummaryLink.before(tpCustomField);
                  
                  tpCustomField.css({
                    'opacity': '0.8'
                  });
                }
              }
            });
          }
        })(i);
      }
      
      if (endIndex < totalItems) {
        setTimeout(function() {
          processBatch(endIndex);
        }, delayBetweenBatches);
      }
    }
    
    processBatch(0);
  }
};
var tpCustomFieldsInitialized = false;
function initializeCustomFields() {
  if (!tpCustomFieldsInitialized) {
    tpCustomFieldsInitialized = true;
    setTimeout(function() {
      tpProjectCustomFields();
    }, 1000);
  }
}
$(document).ready(function() {
  initializeCustomFields();
});
$(window).on('load', function() {
  initializeCustomFields();
});
