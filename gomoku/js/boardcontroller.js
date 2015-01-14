'use strict';

/**
*  Controller for the game board. Keeps track of the state of each
*  space and the current move number. Also checks if a move was a 
*  winning move and resets the board when the new game button is
*  clicked.
*/
app.controller('BoardController',
    function($scope, $element) {
        $scope.gameCount = 0;
        $scope.boardData = [
            [
                {"row": 0, "col": 0, "class": "circle"},
                {"row": 0, "col": 1, "class": "circle"},
                {"row": 0, "col": 2, "class": "circle"},
                {"row": 0, "col": 3, "class": "circle"},
                {"row": 0, "col": 4, "class": "circle"},
                {"row": 0, "col": 5, "class": "circle"},
                {"row": 0, "col": 6, "class": "circle"},
                {"row": 0, "col": 7, "class": "circle"},
                {"row": 0, "col": 8, "class": "circle"},
                {"row": 0, "col": 9, "class": "circle"},
                {"row": 0, "col": 10, "class": "circle"},
                {"row": 0, "col": 11, "class": "circle"}
            ],
            [
                {"row": 1, "col": 0, "class": "circle"},
                {"row": 1, "col": 1, "class": "circle"},
                {"row": 1, "col": 2, "class": "circle"},
                {"row": 1, "col": 3, "class": "circle"},
                {"row": 1, "col": 4, "class": "circle"},
                {"row": 1, "col": 5, "class": "circle"},
                {"row": 1, "col": 6, "class": "circle"},
                {"row": 1, "col": 7, "class": "circle"},
                {"row": 1, "col": 8, "class": "circle"},
                {"row": 1, "col": 9, "class": "circle"},
                {"row": 1, "col": 10, "class": "circle"},
                {"row": 1, "col": 11, "class": "circle"}
            ],
            [
                {"row": 2, "col": 0, "class": "circle"},
                {"row": 2, "col": 1, "class": "circle"},
                {"row": 2, "col": 2, "class": "circle"},
                {"row": 2, "col": 3, "class": "circle"},
                {"row": 2, "col": 4, "class": "circle"},
                {"row": 2, "col": 5, "class": "circle"},
                {"row": 2, "col": 6, "class": "circle"},
                {"row": 2, "col": 7, "class": "circle"},
                {"row": 2, "col": 8, "class": "circle"},
                {"row": 2, "col": 9, "class": "circle"},
                {"row": 2, "col": 10, "class": "circle"},
                {"row": 2, "col": 11, "class": "circle"}
            ],
            [
                {"row": 3, "col": 0, "class": "circle"},
                {"row": 3, "col": 1, "class": "circle"},
                {"row": 3, "col": 2, "class": "circle"},
                {"row": 3, "col": 3, "class": "circle"},
                {"row": 3, "col": 4, "class": "circle"},
                {"row": 3, "col": 5, "class": "circle"},
                {"row": 3, "col": 6, "class": "circle"},
                {"row": 3, "col": 7, "class": "circle"},
                {"row": 3, "col": 8, "class": "circle"},
                {"row": 3, "col": 9, "class": "circle"},
                {"row": 3, "col": 10, "class": "circle"},
                {"row": 3, "col": 11, "class": "circle"}
            ],
            [
                {"row": 4, "col": 0, "class": "circle"},
                {"row": 4, "col": 1, "class": "circle"},
                {"row": 4, "col": 2, "class": "circle"},
                {"row": 4, "col": 3, "class": "circle"},
                {"row": 4, "col": 4, "class": "circle"},
                {"row": 4, "col": 5, "class": "circle"},
                {"row": 4, "col": 6, "class": "circle"},
                {"row": 4, "col": 7, "class": "circle"},
                {"row": 4, "col": 8, "class": "circle"},
                {"row": 4, "col": 9, "class": "circle"},
                {"row": 4, "col": 10, "class": "circle"},
                {"row": 4, "col": 11, "class": "circle"}
            ],
            [
                {"row": 5, "col": 0, "class": "circle"},
                {"row": 5, "col": 1, "class": "circle"},
                {"row": 5, "col": 2, "class": "circle"},
                {"row": 5, "col": 3, "class": "circle"},
                {"row": 5, "col": 4, "class": "circle"},
                {"row": 5, "col": 5, "class": "circle"},
                {"row": 5, "col": 6, "class": "circle"},
                {"row": 5, "col": 7, "class": "circle"},
                {"row": 5, "col": 8, "class": "circle"},
                {"row": 5, "col": 9, "class": "circle"},
                {"row": 5, "col": 10, "class": "circle"},
                {"row": 5, "col": 11, "class": "circle"}
            ],
            [
                {"row": 6, "col": 0, "class": "circle"},
                {"row": 6, "col": 1, "class": "circle"},
                {"row": 6, "col": 2, "class": "circle"},
                {"row": 6, "col": 3, "class": "circle"},
                {"row": 6, "col": 4, "class": "circle"},
                {"row": 6, "col": 5, "class": "circle"},
                {"row": 6, "col": 6, "class": "circle"},
                {"row": 6, "col": 7, "class": "circle"},
                {"row": 6, "col": 8, "class": "circle"},
                {"row": 6, "col": 9, "class": "circle"},
                {"row": 6, "col": 10, "class": "circle"},
                {"row": 6, "col": 11, "class": "circle"}
            ],
            [
                {"row": 7, "col": 0, "class": "circle"},
                {"row": 7, "col": 1, "class": "circle"},
                {"row": 7, "col": 2, "class": "circle"},
                {"row": 7, "col": 3, "class": "circle"},
                {"row": 7, "col": 4, "class": "circle"},
                {"row": 7, "col": 5, "class": "circle"},
                {"row": 7, "col": 6, "class": "circle"},
                {"row": 7, "col": 7, "class": "circle"},
                {"row": 7, "col": 8, "class": "circle"},
                {"row": 7, "col": 9, "class": "circle"},
                {"row": 7, "col": 10, "class": "circle"},
                {"row": 7, "col": 11, "class": "circle"}
            ],
            [
                {"row": 8, "col": 0, "class": "circle"},
                {"row": 8, "col": 1, "class": "circle"},
                {"row": 8, "col": 2, "class": "circle"},
                {"row": 8, "col": 3, "class": "circle"},
                {"row": 8, "col": 4, "class": "circle"},
                {"row": 8, "col": 5, "class": "circle"},
                {"row": 8, "col": 6, "class": "circle"},
                {"row": 8, "col": 7, "class": "circle"},
                {"row": 8, "col": 8, "class": "circle"},
                {"row": 8, "col": 9, "class": "circle"},
                {"row": 8, "col": 10, "class": "circle"},
                {"row": 8, "col": 11, "class": "circle"}
            ],
            [
                {"row": 9, "col": 0, "class": "circle"},
                {"row": 9, "col": 1, "class": "circle"},
                {"row": 9, "col": 2, "class": "circle"},
                {"row": 9, "col": 3, "class": "circle"},
                {"row": 9, "col": 4, "class": "circle"},
                {"row": 9, "col": 5, "class": "circle"},
                {"row": 9, "col": 6, "class": "circle"},
                {"row": 9, "col": 7, "class": "circle"},
                {"row": 9, "col": 8, "class": "circle"},
                {"row": 9, "col": 9, "class": "circle"},
                {"row": 9, "col": 10, "class": "circle"},
                {"row": 9, "col": 11, "class": "circle"}
            ],
            [
                {"row": 10, "col": 0, "class": "circle"},
                {"row": 10, "col": 1, "class": "circle"},
                {"row": 10, "col": 2, "class": "circle"},
                {"row": 10, "col": 3, "class": "circle"},
                {"row": 10, "col": 4, "class": "circle"},
                {"row": 10, "col": 5, "class": "circle"},
                {"row": 10, "col": 6, "class": "circle"},
                {"row": 10, "col": 7, "class": "circle"},
                {"row": 10, "col": 8, "class": "circle"},
                {"row": 10, "col": 9, "class": "circle"},
                {"row": 10, "col": 10, "class": "circle"},
                {"row": 10, "col": 11, "class": "circle"}
            ],
            [
                {"row": 11, "col": 0, "class": "circle"},
                {"row": 11, "col": 1, "class": "circle"},
                {"row": 11, "col": 2, "class": "circle"},
                {"row": 11, "col": 3, "class": "circle"},
                {"row": 11, "col": 4, "class": "circle"},
                {"row": 11, "col": 5, "class": "circle"},
                {"row": 11, "col": 6, "class": "circle"},
                {"row": 11, "col": 7, "class": "circle"},
                {"row": 11, "col": 8, "class": "circle"},
                {"row": 11, "col": 9, "class": "circle"},
                {"row": 11, "col": 10, "class": "circle"},
                {"row": 11, "col": 11, "class": "circle"}
            ]
        ];
    
        $scope.hideIntro = function() {
            console.log('click start');
            $element.children('#intro-bkgd').fadeOut();
            $element.children('#intro').fadeOut();
            $scope.updateCurrPlayer();
        }
    
        $scope.reset = function() {
            console.log('reset');
            $scope.gameCount = 0;
            $scope.boardData.forEach(function(row, rowIndex) {
               row.forEach(function(col, colIndex) {
                   if (col.class !== "circle") {
                       col.class = "circle";
                   }
               });
            });
            
            $scope.$broadcast('reset');
            $scope.clearWinner();
            $scope.updateCurrPlayer();
        }
        
        $scope.updateCurrPlayer = function() {
            console.log('update');
            if ($scope.gameCount % 2 === 0) {
                $element.find('#curr-player-piece').removeClass().addClass('circle-blue');
            } else {
                $element.find('#curr-player-piece').removeClass().addClass('circle-red');
            }
        }
        
        $scope.deactivateBoard = function() {
            $scope.$broadcast('deactivate');
        }
        
        $scope.$on('click', function(event, locationData) {
            $scope.boardData[locationData.row][locationData.col]['class'] = locationData.color;
            
            if($scope.checkWin(locationData)) {
                console.log(locationData.color + ' wins');
                $scope.displayWinner(locationData.color);
                $scope.deactivateBoard();
            } else {
                if ($scope.gameCount == 144) {
                    $element.find('#winner-status').addClass('purple-text').text('draw!');
                } else {
                    $scope.gameCount++;
                    $scope.updateCurrPlayer();
                }
            }
        });
    
        $scope.checkWin = function(locationData) {
            if ($scope.countColor(locationData, 1, 0) === 5 ||
                $scope.countColor(locationData, 0, 1) === 5 ||
                $scope.countColor(locationData, 1, 1) === 5 ||
                $scope.countColor(locationData, 1, -1) === 5) {
                
                return true;
                
                }
            return false;
        }
        
        $scope.countColor = function(locationData, xDir, yDir) {
            var count = 1;
            
            var currRow = locationData.row + xDir,
                currCol = locationData.col + yDir;
            
            while (currRow >= 0 && currRow <= 11 &&
                   currCol >= 0 && currCol <= 11 &&
                   $scope.boardData[currRow][currCol]['class'] == locationData.color) {
                count++;
                currRow += xDir;
                currCol += yDir;
            }
            
            currRow = locationData.row - xDir;
            currCol = locationData.col - yDir;
            
            while (currRow >= 0 && currRow <= 11 &&
                   currCol >= 0 && currCol <= 11 &&
                   $scope.boardData[currRow][currCol]['class'] == locationData.color) {
                count++;
                currRow -= xDir;
                currCol -= yDir;
            }
            return count;
        }
        
        $scope.displayWinner = function(winnerColor) {
            if (winnerColor == 'circle-blue') {
                $element.find('#winner-status').addClass('blue-text').text('blue wins!');
            } else {
                $element.find('#winner-status').addClass('red-text').text('red wins!');
            }
        }
        
        $scope.clearWinner = function() {
            $element.find('#winner-status').removeClass().empty();
        }
    }
);
