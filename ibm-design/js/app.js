var app = angular.module("IbmEnterprise", []);

app.controller("AppController", function($scope, $document) {
    "use strict";
    
    $scope.screen = {
        home: true,
        country: false,
        pickupTime: false,
        returnTime: false,
        carClass: false,
        age: false,
        results: false,
        details: false,
        rentNow: false,
        order: false
    };
    
    $scope.options = {
        countries: [
            "US",
            "Canada",
            "Mexico"
        ],
        carClasses: [
            {
                type: "Economy",
                day: "$19.24",
                total: "$63.25",
                desc: "Kia Rio or similar",
                features: [
                    "4 doors",
                    "Automatic",
                    "Air Conditioning",
                    "AM/FM CD Player"
                ],
                mileage: "This vehicle comes with unlimited mileage",
                img: "img/economy.png"
            },
            {
                type: "Compact",
                day: "$19.24",
                total: "$63.25",
                desc: "Nissan Versa Note or similar",
                img: "img/compact.png"
            },
            {
                type: "Intermediate",
                day: "$19.91",
                total: "$65.00",
                desc: "Toyota Corolla or similar",
                img: "img/intermediate.png"
            },
            {
                type: "Fullsize",
                day: "$25.65",
                total: "$79.94",
                desc: "Ford Fusion or similar",
                img: "img/full-size.png"
            },
        ],
        ages: [
            "25 and up",
            "21 to 24",
            "18 to 20"
        ],
        times: [
            "midnight",
            "1am",
            "2am",
            "3am",
            "4am",
            "5am",
            "6am",
            "7am",
            "8am",
            "9am",
            "10am",
            "11am",
            "noon",
            "1pm",
            "2pm",
            "3pm",
            "4pm",
            "5pm",
            "6pm",
            "7pm",
            "8pm",
            "9pm",
            "10pm",
            "11pm"
        ],
    };
    
    $scope.params = {
        country: "Country",
        pickupLocation: "",
        returnLocation: "",
        pickupDate: "Pick Up Date",
        pickupTime: "Pick Up Time",
        returnDate: "Return Date",
        returnTime: "Return Time",
        carClass: "Vehicle Type",
        age: "Renter's Age",
        coupon: ""
    };
    
    $scope.results = {
        pos: 0
    }
    
    $scope.currentCar;
    
    // controller fxns
    $scope.search = function(bool) {
        $scope.screen.home = false;
        $scope.screen.results = true;
        if (bool) $scope.screen.details = false;
    }
    
    $scope.selectCountry = function(country) {
        console.log(country);
        $scope.params.country = country;
        $scope.goToHome();
    };
    
    $scope.selectClass = function(carClass) {
        $scope.params.carClass = carClass;
        $scope.goToHome();
    };
    
    $scope.selectAge = function(age) {
        $scope.params.age = age;
        $scope.goToHome();
    };
    
    $scope.getPickupDate = function() {
        $scope.params.pickupDate = "April 17, 2015"
    };
    
    $scope.getReturnDate = function() {
        $scope.params.returnDate = "April 19, 2015"
    };
    
    $scope.selectPickupTime = function(time) {
        $scope.params.pickupTime = time;
        $scope.goToHome();
    };
    
    $scope.selectReturnTime = function(time) {
        $scope.params.returnTime = time;
        $scope.goToHome();
    };
    
    $scope.goToHome = function() {
        $scope.screen.home = true;
        $scope.screen.age = false;
        $scope.screen.carClass = false;
        $scope.screen.country = false;
        $scope.screen.pickupTime = false;
        $scope.screen.returnTime = false;
        $scope.screen.results = false;
        $scope.screen.details = false;
        $scope.screen.rentNow = false;
    };
    
    $scope.goToCountry = function() {
        $scope.screen.home = false;
        $scope.screen.country = true;  
    };
    
    $scope.goToClass = function() {
        $scope.screen.home = false;
        $scope.screen.carClass = true;  
    };
    
    $scope.goToAge = function() {
        $scope.screen.home = false;
        $scope.screen.age = true;  
    };
    
    $scope.goToPickupTimes = function() {
        $scope.screen.home = false;
        $scope.screen.pickupTime = true;  
    };
    $scope.goToReturnTimes = function() {
        $scope.screen.home = false;
        $scope.screen.returnTime = true;  
    };
    
    $scope.goToDetails = function() {
        $scope.screen.results = false;
        $scope.screen.details = true;
        
        $scope.currentCar = $scope.options.carClasses[$scope.results.pos];
        
    }
    
    $scope.rentNow = function(toggle) {
        $scope.screen.rentNow = toggle;
    }
    
    $scope.scroll = function($event) {
        if ($scope.screen.results) {
            var flow = $("#results-flow"),
                left = flow.position().left;
            
            if ($event.keyCode == 39 && $scope.results.pos != 3) {
                //right
                flow.animate({left: (left - 320) + "px"}, 100);
                $scope.results.pos++;
            } else if ($event.keyCode == 37 && $scope.results.pos != 0) {
                //left
                flow.animate({left: (left + 320) + "px"}, 100);
                $scope.results.pos--;
            }
        }
    };
});

app.directive("keyPress", function($document, $parse) {
    "use strict";
    return function($scope, $element, $attributes) {
        var scopeExpression = $attributes.keyPress;
        var invoker = $parse(scopeExpression);

        $document.on("keydown", function(event){
            $scope.$apply(function(){
                invoker(
                    $scope,
                    {$event: event}
                );
            });
        });
    }
});
