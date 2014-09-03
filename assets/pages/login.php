<div class="container">
    <div class="col-md-6 col-md-offset-3">
        <form id="loginForm" name="loginForm" novalidate>
            <div class="col-md-10">
                <div class="col-md-3">
                    <label for="name">First Name:</label>
                </div>
                <div class="col-md-7 ">
                    <input type="text" data-ng-model="form.firstName" name="firstName" id="firstName" class="form-control" required />
                     <span class="error" data-ng-show="loginForm.input.$error.required">Required!</span>
                 </div>
            </div>
            <div class="col-md-10">
                <div class="col-md-3 ">
                    <label for="name">Last Name:</label>
                </div>
                <div class="col-md-7 ">
                    <input type="text" data-ng-model="form.lastName" name="lastName" id="lastName"  class="form-control" required />
                </div>
                </div>
            <div class="col-md-10">
                <div class="col-md-3 ">
                    <label for="name">Password:</label>
                </div>
                <div class="col-md-7 ">
                    <input type="password" data-ng-model="form.password" name="password" id="password"  class="form-control" required />
                </div>
             </div>
            <div class="col-md-10">
                <div class="col-md-3 "></div>
                <div class="col-md-7 ">
                    <button type="submit" data-ng-click="signup($event)" class="btn" id="submit" ng-disabled="loginForm.$invalid" name="submit">Submit</button>
                </div>

             </div>
        </form>
    </div>
    <my-customer></my-customer>
</div>
