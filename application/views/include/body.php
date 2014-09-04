<div class="navbar navbar navbar-fixed-top" role="navigation" data-ng-controller="NavCtrl">
      <div class="container-fluid" >
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" ui-sref="home">Chan Ideals</a>
        </div>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a ui-sref="home">Home</a></li>
            <li><a ui-sref="dashboard" >Dashboard </a></li>
            <li><a ui-sref="login">Login</a></li>
            <li><a ui-sref="about">About</a></li>
          </ul>
          <form class="navbar-form navbar-right">
            <input type="text" class="form-control" placeholder="Search..." data-ng-keypress="changed($event)">
          </form>
        </div>
      </div>
    </div>
      <div  class="container-fluid" data-ng-controller="MainCtrl">
        	<div ui-view="main" class="slide" ></div>
      </div>
