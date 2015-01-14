'use strict';

/**
*   Controller for an individual space. Handles mouse-overs and mouse-exits,
*   as well as clicks.
*/
app.controller('SpaceController',
    function($scope, $element, $attrs) {
        $scope.clicked = false;
    
        $scope.onClick = function() {
            if(!$scope.clicked) {
                $scope.clicked = !$scope.clicked;
                
                var row = parseInt($attrs.row);
                var col = parseInt($attrs.col);
                var color;
            
                if ($scope.gameCount % 2 === 0) {
                    $element.children('.circle').removeClass().addClass('circle-blue');
                    color = 'circle-blue';
                } else {
                    $element.children('.circle').removeClass().addClass('circle-red');
                    color = 'circle-red';
                }
                
                $scope.$emit('click',
                    {
                        'row': row,
                        'col': col,
                        'color': color
                    }
                );
            }
        }
        
        $scope.mouseEnter = function() {
            if(!$scope.clicked) {
                var row = parseInt($attrs.row);
                var col = parseInt($attrs.col);
                console.log('hover ' + $scope.gameCount + ' ' + row + ' ' + col);
                
                if ($scope.gameCount % 2 === 0) {
                    $element.children('.circle').removeClass().addClass('circle-blue');
                } else {
                    $element.children('.circle').removeClass().addClass('circle-red');
                }
            }
        }
        
        $scope.mouseLeave = function() {
            if(!$scope.clicked) {
                $element.children().removeClass().addClass('circle');
            }
        }
        
        $scope.$on('reset', function(event) {
            $scope.clicked = false;
        });
    
        $scope.$on('deactivate', function(event) {
            $scope.clicked = true;
        });
    }
);
