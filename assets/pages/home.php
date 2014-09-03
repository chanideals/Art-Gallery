<div class="container-fluid">
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="{{img.index}}" class="{{img.class}}" data-ng-repeat="img in images"></li>
      </ol>
      <div class="carousel-inner">
        <div class="item slides {{img.class}}" data-ng-repeat="img in images" >
          <div class="container">
            <img data-ng-src="{{img.src}}" alt="{{img.alt}}"/>
            <div class="carousel-caption">
              {{img.caption}}
            </div>
          </div>
        </div>
      </div>
      <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a>
      <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>
    </div><!-- /.carousel -->
    <div class="container">
      <div class="col-md-2 col-sm-2 column left">Chan Ideals</div>
      <div class="col-md-8 col-sm-2 column center">Chan Ideals</div>
      <div class="col-md-2 col-sm-2 column right">Chan Ideals</div>
    </div>
</div>
