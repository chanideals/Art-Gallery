<div class="col-sm-3 col-md-2 sidebar"  >
        <ul class="nav nav-sidebar">
            <li data-ng-repeat="link in links">
	          <a ui-sref="{{link.href}}" class="{{link.class}}" data-ng-click="setTemplate(link.index)">{{link.text}}</a>
	        </li>
          </ul>
</div>
<div ui-view="dash-content" class="slide col-md-5">

</div>
