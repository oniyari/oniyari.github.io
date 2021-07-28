var app = angular.module('tetrisapp', []);

app.controller('tetriscontroller', function($scope, $interval) 
{
    $scope.speeds = [500,450,400,360,320,290,260,230,215,190,175,150,130,100];
    $scope.pause = false;
    $scope.lines  = 0;
    $scope.level  = function(){return parseInt($scope.lines/10) + 1};
    $scope.points = 0;
    $scope.board = [];
    var rotI = [
                    [{x:1,y:0},{x:1,y:1},{x:1,y:2},{x:1,y:3}],
                    [{x:0,y:2},{x:1,y:2},{x:2,y:2},{x:3,y:2}],
                    [{x:2,y:0},{x:2,y:1},{x:2,y:2},{x:2,y:3}],
                    [{x:0,y:1},{x:1,y:1},{x:2,y:1},{x:3,y:1}]
               ];
    
    var rotL = [
                    [{x:1,y:0},{x:1,y:1},{x:1,y:2},{x:0,y:2}],
                    [{x:0,y:1},{x:1,y:1},{x:2,y:1},{x:2,y:2}],
                    [{x:1,y:2},{x:1,y:1},{x:1,y:0},{x:2,y:0}],
                    [{x:2,y:1},{x:1,y:1},{x:0,y:1},{x:0,y:0}]
                ];

    var rotJ = [
                    [{x:1,y:0},{x:1,y:1},{x:1,y:2},{x:2,y:2}],
                    [{x:0,y:1},{x:1,y:1},{x:2,y:1},{x:2,y:0}],
                    [{x:1,y:2},{x:1,y:1},{x:1,y:0},{x:0,y:0}],
                    [{x:2,y:1},{x:1,y:1},{x:0,y:1},{x:0,y:2}]
                ];

    var rotS = [
                    [{x:1,y:0},{x:1,y:1},{x:0,y:1},{x:0,y:2}],
                    [{x:0,y:1},{x:1,y:1},{x:1,y:2},{x:2,y:2}],
                    [{x:1,y:2},{x:1,y:1},{x:2,y:1},{x:2,y:0}],
                    [{x:2,y:1},{x:1,y:1},{x:1,y:0},{x:0,y:0}]
                ];

    var rotZ = [
                    [{x:0,y:0},{x:0,y:1},{x:1,y:1},{x:1,y:2}],
                    [{x:0,y:2},{x:1,y:2},{x:1,y:1},{x:2,y:1}],
                    [{x:2,y:2},{x:2,y:1},{x:1,y:1},{x:1,y:0}],
                    [{x:2,y:0},{x:1,y:0},{x:1,y:1},{x:0,y:1}]
                ];

    var rotT = [
                    [{x:1,y:0},{x:1,y:1},{x:2,y:1},{x:1,y:2}],
                    [{x:0,y:1},{x:1,y:1},{x:1,y:0},{x:2,y:1}],
                    [{x:1,y:2},{x:1,y:1},{x:0,y:1},{x:1,y:0}],
                    [{x:2,y:1},{x:1,y:1},{x:1,y:2},{x:0,y:1}]
                ];


    var prototypesRotations = {
                                "i" : rotI ,
                                "l" : rotL ,
                                "j" : rotJ ,
                                "z" : rotZ ,
                                "s" : rotS ,
                                "t" : rotT  
                              };

    var protoI = [{x:1,y:3},{x:1,y:4},{x:1,y:5},{x:1,y:6}];
    var protoL = [{x:1,y:3},{x:1,y:4},{x:1,y:5},{x:0,y:5}];
    var protoJ = [{x:0,y:3},{x:0,y:4},{x:0,y:5},{x:1,y:5}];
    var protoZ = [{x:0,y:3},{x:0,y:4},{x:1,y:4},{x:1,y:5}];
    var protoS = [{x:1,y:3},{x:1,y:4},{x:0,y:4},{x:0,y:5}];
    var protoO = [{x:0,y:4},{x:1,y:4},{x:0,y:5},{x:1,y:5}];
    var protoT = [{x:0,y:3},{x:0,y:4},{x:1,y:4},{x:0,y:5}];
    
    var prototypes = [
                        {obj:protoI, type:'i'}, 
                        {obj:protoL, type:'l'}, 
                        {obj:protoJ, type:'j'}, 
                        {obj:protoZ, type:'z'}, 
                        {obj:protoS, type:'s'}, 
                        {obj:protoO, type:'o'}, 
                        {obj:protoT, type:'t'}
                    ];
    
    $scope.box = function(x,y)
    {
        this.x = x;
        this.y = y;
        this.type = "empty";
    }

    $scope.drawBoard = function()
    {
        for(var y=0; y<22; y++)
        {
            $scope.board.push([]);
            for(var x=0; x<10; x++)
                $scope.board[y].push(new $scope.box(x,y));
        }
    }

    $scope.calculateBG = function()
    {
        return "mario0.png";
    }

    $scope.cancelFullLines = function()
    {
        var n = 0;
        for(var x=0; x<$scope.board.length; x++)
        {
            var canc = true;
            for(var y=0; y<$scope.board[x].length; y++)
                if($scope.board[x][y].type == "empty")
                    canc = false;
            if(canc)
            {
                $scope.board.splice(x,1);
                n++;
                x--;
            }
        }
        var levelBefore = $scope.level();
        $scope.lines  += n;
        $scope.points += (n == 1 ? 80   :
                          n == 2 ? 200  :
                          n == 3 ? 600  : 
                          n == 4 ? 1200 : 0) * $scope.level();
        
        if($scope.level() > levelBefore)
        {
            $interval.cancel($scope.p);
            $scope.p = $interval(function(){$scope.down()}, $scope.speed());
        }

        for(var y=0; y<n; y++)
        {
            $scope.board.unshift([]);
            for(var x=0; x<10; x++)
                $scope.board[0].push(new $scope.box(x,0));
        }
    }

    $scope.piece = function(type)
    {
        this.pos = [];
        this.type = type;
        this.rotation = 0;
        this.fillPos = function(num)
        {
            for(var p in prototypes[num].obj)
                this.pos.push( {x:prototypes[num].obj[p].x , y:prototypes[num].obj[p].y} );       
        }
        this.include = function(x,y)
        {
            var res = false;
            for(p in this.pos)
                if(this.pos[p].x == x && this.pos[p].y == y)
                    res = true;
            return res;
        }
        this.canMove = function(addX, addY)
        {
            var canMove = true;

            for(p in this.pos)
            {
                var ytemp = this.pos[p].y+addY;
                var xtemp = this.pos[p].x+addX;
                if(
                    ytemp == $scope.board[0].length            ||
                    ytemp == -1                                 ||
                    xtemp == $scope.board.length               ||
                    ($scope.board[xtemp][ytemp].type != "empty" && 
                    !this.include(xtemp, ytemp))
                  )
                    canMove = false;
            }
            return canMove;
        }
        this.rotate = function()
        {
            var r = this.rotation;
            this.rotation ++;
            if(this.rotation >= 4)
                this.rotation = 0;

            var revert = [];
            for(p in this.pos)
                revert.push({x : this.pos[p].x , y : this.pos[p].y});
            
            for(p in this.pos)
            {
                var newx = prototypesRotations[this.type][r][p].x - prototypesRotations[this.type][this.rotation][p].x;
                var newy = prototypesRotations[this.type][r][p].y - prototypesRotations[this.type][this.rotation][p].y;

                this.pos[p].x -= newx;
                this.pos[p].y -= newy;

                if(
                    this.pos[p].x < 0                           || 
                    this.pos[p].x > $scope.board.length-1       || 
                    this.pos[p].y < 0                           || 
                    this.pos[p].y > $scope.board[0].length-1    ||
                    $scope.board[this.pos[p].x][this.pos[p].y].type != "empty"
                  )
                {
                    for(p in this.pos)
                    {
                        this.pos[p].x = revert[p].x;
                        this.pos[p].y = revert[p].y;
                    }
                    this.rotation = r;
                    break;
                }
            }
            
            
        }
        this.down = function()
        {
            if(this.canMove(1,0))
                for(p in this.pos)
                    this.pos[p].x ++;
            else
            {
                $scope.drawSelectedBox();
                $scope.cancelFullLines();
                $scope.gameover();
                $scope.generate();
            }
        }
        this.left = function()
        {
            if(this.canMove(0,-1))
                for(p in this.pos)
                    this.pos[p].y --;
        }
        this.right = function()
        {
            if(this.canMove(0,1))
                for(p in this.pos)
                    this.pos[p].y ++;
        }
    }
    $scope.selectedBox = undefined;

    $scope.generate = function()
    {
        var cas = parseInt(Math.random() * 7);
        
        var pos = prototypes[cas].obj;
        //console.log("Generated:");
        for(var p in pos)
            $scope.board[pos[p].x][pos[p].y].type = prototypes[cas].type;
        
        $scope.selectedBox = new $scope.piece(prototypes[cas].type);
        $scope.selectedBox.fillPos(cas);
        
        //console.log($scope.selectedBox);
    }

    $scope.removeSelectedBox = function()
    {
        if($scope.selectedBox != undefined)
            for(var p in $scope.selectedBox.pos)
                $scope.board[$scope.selectedBox.pos[p].x][$scope.selectedBox.pos[p].y].type = "empty";
    }

    $scope.drawSelectedBox = function()
    {
        var pos = $scope.selectedBox.pos;
        //console.log($scope.selectedBox);
        for(var p in pos)
            $scope.board[pos[p].x][pos[p].y].type = $scope.selectedBox.type;
    }

    $scope.down = function()
    {
        //console.log("giu")
        $scope.removeSelectedBox();
        $scope.selectedBox.down();
        $scope.drawSelectedBox();
    }

    $scope.left = function()
    {
        $scope.removeSelectedBox();
        $scope.selectedBox.left();
        $scope.drawSelectedBox();
    }

    $scope.right = function()
    {
        $scope.removeSelectedBox();
        $scope.selectedBox.right();
        $scope.drawSelectedBox();
    }

    $scope.rotate = function()
    {
        if($scope.selectedBox.type != "o")
        {
            $scope.removeSelectedBox()
            $scope.selectedBox.rotate();
            $scope.drawSelectedBox();
        }
    }

    $scope.key = ($event) => 
    {
        console.log($event.key);
        e = $event.key;
        if (e == ' ') 
        {
            if(!$scope.pause)
                $interval.cancel($scope.p);
            else
                $scope.p = $interval(function(){$scope.down()}, $scope.speed());
            $scope.pause = !$scope.pause;
        }
        else if (e == 's')
            $scope.down();
        else if (e == 'a')
            $scope.left();
        else if (e == 'd')
            $scope.right();
        else if (e == 'l')
            $scope.rotate();
    }   

    $scope.speed = function()
    {
        return  $scope.speeds[$scope.level()-1] == undefined ?
                $scope.speeds[$scope.speeds.length-1]      :
                $scope.speeds[$scope.level()-1]              ;
    }

    $scope.gameover = function()
    {
        for(var x = 0; x < 3; x++)
            for(var y= 3; y<7; y++)
                if($scope.board[x][y].type != "empty")
                    alert("** GAME OVER **");
        return false;
    }
    $scope.drawBoard();
    $scope.generate();
    $scope.p = $interval(function(){$scope.down()}, $scope.speed());
});