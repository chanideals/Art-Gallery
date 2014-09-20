<script type="text/ng-template" id="artTemplate.html">
<div class="container slider">
  <img data-ng-repeat="photo in photos" class="photo" data-swipe-left="showNext()"  data-swipe-right="showPrev()"
    data-ng-show="isActive($index)" data-ng-src="{{photo.src}}" />
      <!-- prev / next controls -->
        <a class="arrow prev" href="#" ng-click="showPrev()"></a>
        <a class="arrow next" href="#" ng-click="showNext()"></a>

</div>
</script>
