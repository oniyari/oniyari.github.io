var app = angular.module('scacchiapp', []);
app.controller('scacchictrl', function($scope) 
{
	/*
		0 nulla
		1 pedone
		2 torre
		3 cavallo
		4 alfiere
		5 regina
		6 re
	*/

	$scope.cella = function(val,x,y,col)
	{
		this.val = val;
		this.x = x;
		this.y = y;
		this.col = col;
		this.style = {};
	}
	
	$scope.scacchiera = [[],[],[],[],[],[],[],[]];
	//Riempi la scacchiera
	for(var k=0; k<8; k++)
	{
		var colore = (k==0 || k==1 ? "n" : "b");
		for(var i=0; i<8; i++)
		{
			if(k==1 || k==6)
				$scope.scacchiera[k][i] = new $scope.cella(1,k,i,colore);
			else if( (k==0 || k==7) && (i==0 || i==7) )
				$scope.scacchiera[k][i] = new $scope.cella(2,k,i,colore);
			else if( (k==0 || k==7) && (i==1 || i==6) )
				$scope.scacchiera[k][i] = new $scope.cella(3,k,i,colore);
			else if( (k==0 || k==7) && (i==2 || i==5) )
				$scope.scacchiera[k][i] = new $scope.cella(4,k,i,colore);
			else if( (k==0 && i==3) || (k==7 && i==3))
				$scope.scacchiera[k][i] = new $scope.cella(5,k,i,colore);
			else if( (k==0 && i==4) || (k==7 && i==4))
				$scope.scacchiera[k][i] = new $scope.cella(6,k,i,colore);
			else
				$scope.scacchiera[k][i] = new $scope.cella(0,k,i,colore);
		}
	}
	$scope.selected = undefined;
	
	$scope.annulla = function()
	{
		$scope.selected = undefined;
		colora();
	}
	
	$scope.seleziona = function(x, y)
	{
		//Se selezioni una casella vuota senza aver selezionato nulla prima non fare niente
		if($scope.selected == undefined && $scope.scacchiera[x][y].val == 0)
			return;
		//Se selezioni la stessa casella selezionata in precedenza annulla la selezione
		if($scope.selected != undefined)
			if($scope.selected.x == x && $scope.selected.y == y)
			{
				$scope.annulla();
				return;
			}
		//se non ero in fase di spostamento mi salvo la pedina selezionata ed attivo la fase di spostamento
		if($scope.selected == undefined)
		{
			$scope.selected = $scope.scacchiera[x][y];
			colora();
		}
		//Altrimenti se ero già in fase di spostamento verifico che lo spostamento sia valido
		else if( validaSpostamento($scope.selected, $scope.scacchiera[x][y], true) )
		{
			//Sostituisco i valori tra le due caselle
			var valbub = $scope.scacchiera[x][y].val;
			$scope.scacchiera[x][y].val = $scope.selected.val;
			$scope.scacchiera[$scope.selected.x][$scope.selected.y].val = valbub;
			//Sostituisco i colori tra le due caselle
			var valbub = $scope.scacchiera[x][y].col;
			$scope.scacchiera[x][y].col = $scope.selected.col;
			$scope.scacchiera[$scope.selected.x][$scope.selected.y].col = valbub;

			$scope.annulla();
		}
	}
	
	var validaSpostamento = function (da , a , mangia)
	{
		var controls = [sposPedone,sposTorre,sposCavallo,sposAlfiere,sposRegina,sposRe];
		return controls[da.val-1](da,a, mangia);
	}
	
	//METODI PER GLI SPOSTAMENTI DELLE PEDINE
	var sposPedone = function (da , a, mangia)
	{
		var ris = false;
		
		//deve essere sulla stessa y
		//se sei bianco devi andare -1, nero +1.
		//Una volta constatato che mi voglio spostare in avanti, controllo che non ci sia nessuno
				
		if(da.y == a.y)
			if(
				(da.col=="b" && da.x == (a.x+1))
				||
				(da.col=="n" && da.x == (a.x-1))
			  )
				if($scope.scacchiera[a.x][a.y].val == 0) 
					ris = true;
		
		//se vado in una y differente deve essere + o - 1 rispetto a da.y
		//controllare se vado in su o in giu in base al colore
		//controllare che ci sia qualcuno nella casella di destinazione e che sia del colore opposto
		//eliminare quella casella
		if(da.y == a.y-1 || da.y == a.y+1)
			if(
				(da.col=="b" && da.x == (a.x+1))
				||
				(da.col=="n" && da.x == (a.x-1))
			  )
				if(a.val!=0 && da.col != a.col)
				{
					ris = true;
					if(mangia)
						mangiaPedina(a);
				}
				
		//se vai avanti di due caselle puoi farlo a patto che ti trovi su da.x 1 e sei nero o da.x 6 e sei bianco
		if(da.y == a.y)
			if(
				(da.col=="b" && da.x == (a.x+2) && da.x == 6)
				||
				(da.col=="n" && da.x == (a.x-2) && da.x == 1)
			  )
			  if($scope.scacchiera[a.x][a.y].val == 0) 
					ris = true;
		return ris;
	}
	
	var sposTorre = function (da , a, mangia)
	{
		var ris = true;
		//Se ti muovi in diagonale non ti lascio
		if(da.x != a.x && da.y != a.y)
			return false;
		//Se vuoi andare in una casella dove c'è uno del tuo colore non ti lascio
		if(da.col == a.col && a.val != 0)
			return false;
		
		//Verificare che di mezzo non ci sia nessuno
		//verifica su quale asse controllare, prima x e poi y
		if(da.x != a.x)
		{
			//variabile contatore per andare per esempio a controllare dalla posizione 2 alla posizione 6
			var i = da.x;
			while(i!=a.x)
			{
				if($scope.scacchiera[i][da.y].val!=0 && i!=da.x)
				{
					ris = false;
					break;
				}
				if(da.x<a.x)
					i++;
				else if(da.x>a.x)
					i--;
			}
		}
		else if(da.y != a.y)
		{
			var i = da.y;
			while(i!=a.y)
			{
				if($scope.scacchiera[da.x][i].val!=0 && i!=da.y)
				{
					ris = false;
					break;
				}
				if(da.y<a.y)
					i++;
				else if(da.y>a.y)
					i--;
			}
		}
		
		if(ris && a.val!=0 && mangia)
			mangiaPedina(a);
		
		return ris;
	}
	
	var sposCavallo = function (da , a, mangia)
	{
		//Se vuoi andare in una casella dove c'è uno del tuo colore non ti lascio
		if(da.col == a.col && a.val != 0)
			return false;
		var ris = false;
		
		var difx = da.x - a.x;
		var dify = da.y - a.y;
		
		if  (
				(difx == -1 && dify == -2) ||
				(difx == -2 && dify == -1) ||
				(difx == -2 && dify ==  1) ||
				(difx == -1 && dify ==  2) ||
				(difx ==  1 && dify ==  2) ||
				(difx ==  2 && dify ==  1) ||
				(difx ==  2 && dify == -1) ||
				(difx ==  1 && dify == -2) 
			)
			ris = true;
		
		if(ris && a.val!=0 && mangia)
			mangiaPedina(a);
		
		return ris;
	}
	
	var sposAlfiere = function (da , a, mangia)
	{
		//Se vuoi andare in una casella dove c'è uno del tuo colore non ti lascio
		if(da.col == a.col && a.val != 0)
			return false;
		var ris = false;
		
		if(Math.abs(da.x-a.x) == Math.abs(da.y-a.y))
			ris = true;
		
		//scelgo la direzione in cui sto andando
		var dirv = (da.x > a.x ? "a" : "b");
		var diro = (da.y > a.y ? "s" : "d");
		var x1 = da.x;
		var y1 = da.y;
		if(ris)
			while(x1!=a.x && y1!=a.y)
			{
				if($scope.scacchiera[x1][y1].val != 0 && x1 != da.x && y1 != da.y)
				{
					ris = false;
					break;
				}
				//In base alla direzione presa scelgo la prossima casella da controllare
				x1 += dirv=="a" ? -1 : 1;
				y1 += diro=="s" ? -1 : 1;
			}
		
		//Se puoi spostarti e la destinazione è occupata mangia la pedina
		if(ris && a.val!=0 && mangia)
			mangiaPedina(a);
		return ris;
	}
	
	var sposRegina = function (da , a, mangia)
	{
		var ris = false;
		//Se vuoi andare in una casella dove c'è uno del tuo colore non ti lascio
		if(da.col == a.col && a.val != 0)
			return false;
		
		//Verificare che di mezzo non ci sia nessuno
		//verifica su quale asse controllare, prima x e poi y
		if(da.x == a.x || da.y == a.y)
		{
			ris = true;
			if(da.x != a.x)
			{
				//variabile contatore per andare per esempio a controllare dalla posizione 2 alla posizione 6
				var i = da.x;
				while(i!=a.x)
				{
					if($scope.scacchiera[i][da.y].val!=0 && i!=da.x)
					{
						ris = false;
						break;
					}
					if(da.x<a.x)
						i++;
					else if(da.x>a.x)
						i--;
				}
			}
			else if(da.y != a.y)
			{
				var i = da.y;
				while(i!=a.y)
				{
					if($scope.scacchiera[da.x][i].val!=0 && i!=da.y)
					{
						ris = false;
						break;
					}
					if(da.y<a.y)
						i++;
					else if(da.y>a.y)
						i--;
				}
			}
		}
		else
		{
			if(Math.abs(da.x-a.x) == Math.abs(da.y-a.y))
			ris = true;
		
			//scelgo la direzione in cui sto andando
			var dirv = (da.x > a.x ? "a" : "b");
			var diro = (da.y > a.y ? "s" : "d");
			var x1 = da.x;
			var y1 = da.y;
			if(ris)
				while(x1!=a.x && y1!=a.y)
				{
					if($scope.scacchiera[x1][y1].val != 0 && x1 != da.x && y1 != da.y)
					{
						ris = false;
						break;
					}
					//In base alla direzione presa scelgo la prossima casella da controllare
					x1 += dirv=="a" ? -1 : 1;
					y1 += diro=="s" ? -1 : 1;
				}
		}
		if(ris && a.val!=0 && mangia)
			mangiaPedina(a);
		
		return ris;
	}
	
	var sposRe = function (da , a, mangia)
	{
		//Se vuoi andare in una casella dove c'è uno del tuo colore non ti lascio
		if(da.col == a.col && a.val != 0)
			return false;
		var ris = Math.abs(da.x-a.x) < 2 && Math.abs(da.y-a.y) < 2;
		
		//Se puoi spostarti e la destinazione è occupata mangia la pedina
		if(ris && a.val!=0 && mangia)
			mangiaPedina(a);
		
		return ris;
	}
	
	$scope.scheda = function()
	{
		var ris = "Seleziona una pedina per muoverla..";
		var l = "ABCDEFGH".split("");
		
		if($scope.selected != undefined)
			ris = "Hai selezionato " + l[$scope.selected.x] + ($scope.selected.y+1);
		
		
		return ris;
	}
	
	var mangiaPedina = function(cas)
	{
		console.log("Sto mangiando " + cas.x + " " + cas.y);
		cas.val = 0;
		cas.col = "b";
	}

	var colora = function()
	{
		if($scope.selected == undefined)
		{
			for(x in $scope.scacchiera)
				for(y in $scope.scacchiera[x])
					$scope.scacchiera[x][y].style = {};
			return;
		}
		for(x in $scope.scacchiera)
			for(y in $scope.scacchiera[x])
				if( validaSpostamento($scope.selected, $scope.scacchiera[x][y], false) )
					$scope.scacchiera[x][y].style = {'background-color':'blue'};
				
	}
	
});