var app = angular.module('antjs', []);
app.controller('antjs',function($scope, $http, $filter, $timeout, $window, $sce) 
{

	var red = new Image();
	red.src = "red.png";
	var yel = new Image();
	yel.src = "yellow.png";
	var freccia = new Image();
	freccia.src = "freccia.gif";
	var audio = new Audio("Pecora che urla.mp3");
	$scope.giocatore = "1";
	$scope.colonne = ["0","1","2","3","4","5","6"];
	$scope.righe   = ["0","1","2","3","4","5","6"];
	
	$scope.contenuti = [
						["0","0","0","0","0","0","0"],
						["0","0","0","0","0","0","0"],
						["0","0","0","0","0","0","0"],
						["0","0","0","0","0","0","0"],
						["0","0","0","0","0","0","0"],
						["0","0","0","0","0","0","0"],
						["0","0","0","0","0","0","0"]
					   ];
	$scope.svuota = function()
	{
		$scope.contenuti = [
						["0","0","0","0","0","0","0"],
						["0","0","0","0","0","0","0"],
						["0","0","0","0","0","0","0"],
						["0","0","0","0","0","0","0"],
						["0","0","0","0","0","0","0"],
						["0","0","0","0","0","0","0"],
						["0","0","0","0","0","0","0"]
					   ];
	}
	
	
	
	$scope.contenuto = function(x,y)
	{
		var v = $scope.contenuti[y][x];
		if(v==0)
			return "vuoto.png";
		if(v==1)
			return red.src;
		if(v==2)
			return yel.src;
	}
	
	$scope.posiziona = function(x)
	{	
		for(var i=6; i>=0; i--)
		{
			if($scope.contenuti[i][x]==0)
			{
				$scope.contenuti[i][x] = $scope.giocatore;
				
				$scope.cambiogiocatore();
				break;
			}
		}
	}
	
	var a = true;
	$scope.cambiogiocatore = function()
	{
		if(a)
		{
			a = false;
			$scope.giocatore = "2";
		}
		else
		{
			a = true;
			$scope.giocatore = "1";
		}
	}
	
	$scope.vincitore = function(x,y)
	{
		var ris = $scope.vittoria(x,y);
		if(ris!="0")
			$scope.v = ris;
	}

	$scope.pos = -1;
	
	$scope.modifica = function(col)
	{
		$scope.pos = col;
	}
	
	$scope.freccia = function(a)
	{
		if($scope.pos == a)
			return freccia.src;
		else
			return "Empty.png";
	}
});