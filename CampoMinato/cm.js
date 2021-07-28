var app = angular.module('campominato',[])

app.directive('ngRightClick', function($parse) 
{
    return function(scope, element, attrs) 
	{
        var fn = $parse(attrs.ngRightClick);
        element.bind('contextmenu', function(event) 
		{
            scope.$apply(function() 
			{
                event.preventDefault();
                fn(scope, {$event:event});
            });
        });
    };
});



app.controller('Controller',function($scope)
{
	$scope.righe = 10;
	$scope.colonne = 10;
	$scope.nbombe = 10;
	$scope.visualizza = false;
	
	$scope.casella = function(x,y)
	{	
		this.x = x;
		this.y = y;
		this.valore = "N";
		this.mostra = "N";
		console.log("aaaaa");
		this.bombeattorno = function()
		{
			var cont = 0;	
			if(this.x!=0 && this.x!=$scope.colonne-1 && this.y!=0 && this.y!=$scope.righe-1)
			{
				if($scope.griglia [this.x-1][this.y-1].valore=="B")
					cont++;
				if($scope.griglia [this.x-1][this.y].valore=="B")
					cont++;
				if($scope.griglia [this.x-1][this.y+1].valore=="B")
					cont++;
				if($scope.griglia [this.x][this.y-1].valore=="B")
					cont++;
				if($scope.griglia [this.x][this.y+1].valore=="B")
					cont++;
				if($scope.griglia [this.x+1][this.y-1].valore=="B")
					cont++;
				if($scope.griglia [this.x+1][this.y].valore=="B")
					cont++;
				if($scope.griglia [this.x+1][this.y+1].valore=="B")
					cont++;
			}
			else
			if(this.y==0)
			{
				if(this.y==0 && this.x==0)
				{
					if($scope.griglia [this.x][this.y+1].valore=="B")
						cont++;
					if($scope.griglia [this.x+1][this.y+1].valore=="B")
						cont++;
					if($scope.griglia [this.x+1][this.y].valore=="B")
						cont++;
				}
				else
				if(this.y==0 && this.x==$scope.colonne-1)
				{
					if($scope.griglia [this.x-1][this.y].valore=="B")
						cont++;
					if($scope.griglia [this.x][this.y+1].valore=="B")
						cont++;
					if($scope.griglia [this.x-1][this.y+1].valore=="B")
						cont++;
				}
				else
				{
					if($scope.griglia [this.x-1][this.y].valore=="B")
						cont++;
					if($scope.griglia [this.x+1][this.y].valore=="B")
						cont++;
					if($scope.griglia [this.x][this.y+1].valore=="B")
						cont++;
					if($scope.griglia [this.x-1][this.y+1].valore=="B")
						cont++;
					if($scope.griglia [this.x+1][this.y+1].valore=="B")
						cont++;
				}
			}
			else
			if(this.y==$scope.righe-1)
			{
				if(this.y==$scope.righe-1 && this.x==0)
				{
					if($scope.griglia [this.x+1][this.y].valore=="B")
						cont++;
					if($scope.griglia [this.x][this.y-1].valore=="B")
						cont++;
					if($scope.griglia [this.x+1][this.y-1].valore=="B")
						cont++;
				}
				else
				if(this.y==$scope.righe-1 && this.x==$scope.colonne-1)
				{
					if($scope.griglia [this.x-1][this.y].valore=="B")
						cont++;
					if($scope.griglia [this.x-1][this.y-1].valore=="B")
						cont++;
					if($scope.griglia [this.x][this.y-1].valore=="B")
						cont++;
				}
				else
				{
					if($scope.griglia [this.x-1][this.y].valore=="B")
						cont++;
					if($scope.griglia [this.x+1][this.y].valore=="B")
						cont++;
					if($scope.griglia [this.x-1][this.y-1].valore=="B")
						cont++;
					if($scope.griglia [this.x][this.y-1].valore=="B")
						cont++;
					if($scope.griglia [this.x+1][this.y-1].valore=="B")
						cont++;
				}
			}
			else
			if(this.x==0)
			{
				if($scope.griglia [this.x][this.y-1].valore=="B")
						cont++;
				if($scope.griglia [this.x][this.y+1].valore=="B")
						cont++;
				if($scope.griglia [this.x+1][this.y].valore=="B")
						cont++;
				if($scope.griglia [this.x+1][this.y-1].valore=="B")
						cont++;
				if($scope.griglia [this.x+1][this.y+1].valore=="B")
						cont++;
			}
			else
			if(this.x==$scope.colonne-1)
			{
				if($scope.griglia [this.x][this.y-1].valore=="B")
						cont++;
				if($scope.griglia [this.x][this.y+1].valore=="B")
						cont++;
				if($scope.griglia [this.x-1][this.y].valore=="B")
						cont++;
				if($scope.griglia [this.x-1][this.y-1].valore=="B")
						cont++;
				if($scope.griglia [this.x-1][this.y+1].valore=="B")
						cont++;
			}
			return cont;
		}					
	}
	$scope.griglia =[];
	$scope.cambiagriglia = function()
	{
		$scope.griglia = [];
		for(var x=0; x<$scope.colonne; x++)
			$scope.griglia.push([]);
		console.log($scope.griglia);
	}
	$scope.cambiagriglia();
	$scope.gioca = function()
	{
		for(var x=0;x<$scope.colonne;x++)
			for(var y=0;y<$scope.righe;y++)
				$scope.griglia [x] [y]  = new $scope.casella(x,y);
			
		for(var i=0;i<$scope.nbombe;i++)
		{
			var x = parseInt(Math.random()*$scope.colonne);
			var y = parseInt(Math.random()*$scope.righe);
			if($scope.griglia [x][y].valore == "B")
				i--;
			else
				$scope.griglia [x][y].valore = "B";
			//devo evitare che si ripetano le stesse coordinate
		}
		document.getElementById("perso").innerHTML ="";
		$scope.vai = true;
	}
	$scope.gioca();
	$scope.clicca = function(c)
	{
		if($scope.vai)
		{	
			if(c.valore!="B")
			{
				c.mostra = c.bombeattorno();
				c.valore = 1;
				if(c.mostra==0)
					$scope.scopri(c.x,c.y);
			}
			else
			{
				$scope.vai = false;
				$scope.mostrabombe();
				document.getElementById("perso").innerHTML ="Hai Perso!!";
			}
		}	
		if($scope.casellelibere() == 0)
		{
			$scope.vai = false;
			document.getElementById("perso").innerHTML ="Hai Vinto!!";
		}
	}
	
	$scope.scopri = function(x,y)
	{
		$scope.griglia[x][y].mostra = $scope.griglia[x][y].bombeattorno();
		$scope.griglia[x][y].valore = 1;
			
		if($scope.griglia[x][y].mostra==0)
		{
			if(x!=0 && x!=$scope.colonne-1 && y!=0 && y!=$scope.righe-1)
			{
				if($scope.coperta(x-1,y-1))
					$scope.scopri(x-1,y-1);
				if($scope.coperta(x-1,y))
					$scope.scopri(x-1,y);
				if($scope.coperta(x-1,y+1))
					$scope.scopri(x-1,y+1);
				if($scope.coperta(x,y-1))
					$scope.scopri(x,y-1);
				if($scope.coperta(x,y+1))
					$scope.scopri(x,y+1);
				if($scope.coperta(x+1,y-1))
					$scope.scopri(x+1,y-1);
				if($scope.coperta(x+1,y))
					$scope.scopri(x+1,y);
				if($scope.coperta(x+1,y+1))
					$scope.scopri(x+1,y+1);
			}
			else
			if(y==0)
			{
				if(y==0 && x==0)
				{
					if($scope.coperta(x,y+1))
					$scope.scopri(x,y+1);
					if($scope.coperta(x+1,y+1))
					$scope.scopri(x+1,y+1);
					if($scope.coperta(x+1,y))
					$scope.scopri(x+1,y);
				}
				else
				if(y==0 && x==$scope.colonne-1)
				{
					if($scope.coperta(x-1,y))
					$scope.scopri(x-1,y);
					if($scope.coperta(x,y+1))
					$scope.scopri(x,y+1);
					if($scope.coperta(x-1,y+1))
					$scope.scopri(x-1,y+1);
				}
				else
				{
					if($scope.coperta(x-1,y))
					$scope.scopri(x-1,y);
					if($scope.coperta(x+1,y))
					$scope.scopri(x+1,y);
					if($scope.coperta(x,y+1))
					$scope.scopri(x,y+1);
					if($scope.coperta(x-1,y+1))
					$scope.scopri(x-1,y+1);
					if($scope.coperta(x+1,y+1))
					$scope.scopri(x+1,y+1);
				}
			}
			else
			if(y==$scope.righe-1)
			{
				if(y==$scope.righe-1 && x==0)
				{
					if($scope.coperta(x+1,y))
					$scope.scopri(x+1,y);
					if($scope.coperta(x,y-1))
					$scope.scopri(x,y-1);
					if($scope.coperta(x+1,y-1))
					$scope.scopri(x+1,y-1);
				}
				else
				if(y==$scope.righe-1 && x==$scope.colonne-1)
				{
					if($scope.coperta(x-1,y))
					$scope.scopri(x-1,y);
					if($scope.coperta(x-1,y-1))
					$scope.scopri(x-1,y-1);
					if($scope.coperta(x,y-1))
					$scope.scopri(x,y-1);
				}
				else
				{
					if($scope.coperta(x-1,y))
					$scope.scopri(x-1,y);
					if($scope.coperta(x+1,y))
					$scope.scopri(x+1,y);
					if($scope.coperta(x-1,y-1))
					$scope.scopri(x-1,y-1);
					if($scope.coperta(x,y-1))
					$scope.scopri(x,y-1);
					if($scope.coperta(x+1,y))
					$scope.scopri(x+1,y);
				}
			}
			else
			if(x==0)
			{
				if($scope.coperta(x,y-1))
					$scope.scopri(x,y-1);
				if($scope.coperta(x,y+1))
					$scope.scopri(x,y+1);
				if($scope.coperta(x+1,y))
					$scope.scopri(x+1,y);
				if($scope.coperta(x+1,y-1))
					$scope.scopri(x+1,y-1);
				if($scope.coperta(x+1,y+1))
					$scope.scopri(x+1,y+1);
			}
			else
			if(x==$scope.colonne-1)
			{
				if($scope.coperta(x,y-1))
					$scope.scopri(x,y-1);
				if($scope.coperta(x,y+1))
					$scope.scopri(x,y+1);
				if($scope.coperta(x-1,y))
					$scope.scopri(x-1,y);
				if($scope.coperta(x-1,y-1))
					$scope.scopri(x-1,y-1);
				if($scope.coperta(x-1,y+1))
					$scope.scopri(x-1,y+1);
			}
		}
	}
	$scope.casellelibere = function()
	{
		var cont = 0;
		for(var x=0;x<$scope.colonne;x++)
			for(var y=0;y<$scope.righe;y++)
				if($scope.griglia[x][y].valore!="B" && $scope.griglia[x][y].valore=="N")
					cont++;
		
		return cont;
	}
	
	$scope.mostrabombe = function()
	{
		for(var x=0;x<$scope.colonne;x++)
			for(var y=0;y<$scope.righe;y++)
				if($scope.griglia[x][y].valore=="B")
					$scope.griglia[x][y].mostra="B";
	}
	
	$scope.coperta = function(x,y)
	{
		var coperto = false;
		if($scope.griglia[x][y].valore=="N")	
			coperto = true;
		return coperto;
	}
	$scope.bandiera = function(c)
	{
		if(c.mostra=="N")
			c.mostra = "bandiera";
		else if(c.mostra=="bandiera")
			c.mostra = "N";
	}
	
	console.log($scope.griglia);
	
});
