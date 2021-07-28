var metro = [];
metro["rossa"] = "rho,pero,molino,san leonardo,bonola,uruguay,lampugnano,qt8,lotto,amendola,buonarroti,pagano,conciliazione,cadorna,cairoli,cordusio,duomo,san babila,palestro,porta venezia,lima,loreto,pasteur,rovereto,turro,gorla,precotto,villa san giovanni,sesto marelli,sesto rondo,sesto primo maggio".split(",");
metro["gialla"]= "comasina,affori,affori centro,dergano,maciachini,zara,sondrio,centrale,repubblica,turati,montenapoleone,duomo,missori,crocetta,porta romana,lodi tibb,brenta,corvetto,porto di mare,rogoredo,san donato".split(",");
metro["verde"] = "assago,milanofiori,famagosta,romolo,porta genova,sant'agostino,sant'ambrogio,cadorna,lanza,moscova,garibaldi,gioia,centrale,caiazzo,loreto,piola,lambrate,udine,cimiano,crescenzago,cascina gobba,cologno sud,cologno centro,cologno nord".split(",");
metro["lilla"] = "san siro stadio,san siro ippodromo,segesta,lotto,portello,tre torri,domodossola,gerusalemme,censio,monumentale,garibaldi,isola,zara,marche,istria,ca'granda,bicocca,ponale,bignami".split(",");

var posizioni = [];
//lilla
posizioni[metro["lilla"][0]] = {x:2,y:16,linea:"purple"};
posizioni[metro["lilla"][1]] = {x:4,y:16,linea:"purple"};
posizioni[metro["lilla"][2]] = {x:7,y:16,linea:"purple"};
posizioni[metro["lilla"][3]] = {x:10,y:16,linea:"purple"}; //lotto
posizioni[metro["lilla"][4]] = {x:11,y:14,linea:"purple"};
posizioni[metro["lilla"][5]] = {x:12,y:13,linea:"purple"};
posizioni[metro["lilla"][6]] = {x:13,y:12,linea:"purple"};
posizioni[metro["lilla"][7]] = {x:16,y:12,linea:"purple"};
posizioni[metro["lilla"][8]] = {x:19,y:12,linea:"purple"};
posizioni[metro["lilla"][9]] = {x:24,y:12,linea:"purple"};
posizioni[metro["lilla"][10]] = {x:27,y:12,linea:"purple"};
posizioni[metro["lilla"][11]] = {x:27,y:10,linea:"purple"};
posizioni[metro["lilla"][12]] = {x:27,y:9,linea:"purple"};
posizioni[metro["lilla"][13]] = {x:27,y:8,linea:"purple"};
posizioni[metro["lilla"][14]] = {x:27,y:7,linea:"purple"};
posizioni[metro["lilla"][15]] = {x:27,y:6,linea:"purple"};
posizioni[metro["lilla"][16]] = {x:27,y:5,linea:"purple"};
posizioni[metro["lilla"][17]] = {x:27,y:4,linea:"purple"};
posizioni[metro["lilla"][18]] = {x:27,y:3,linea:"purple"};
//verde
posizioni[metro["verde"][0]] = {x:23,y:29,linea:"green"};
posizioni[metro["verde"][1]] = {x:25,y:27,linea:"green"};
posizioni[metro["verde"][2]] = {x:27,y:25,linea:"green"};
posizioni[metro["verde"][3]] = {x:27,y:24,linea:"green"};
posizioni[metro["verde"][4]] = {x:27,y:23,linea:"green"};
posizioni[metro["verde"][5]] = {x:27,y:22,linea:"green"};
posizioni[metro["verde"][6]] = {x:27,y:21,linea:"green"};
posizioni[metro["verde"][7]] = {x:27,y:18,linea:"green"}; //cadorna
posizioni[metro["verde"][8]] = {x:27,y:16,linea:"green"};
posizioni[metro["verde"][9]] = {x:27,y:14,linea:"green"};
posizioni[metro["verde"][10]] = {x:27,y:12,linea:"green"}; //garibaldi
posizioni[metro["verde"][11]] = {x:30,y:12,linea:"green"};
posizioni[metro["verde"][12]] = {x:33,y:12,linea:"green"}; //centrale
posizioni[metro["verde"][13]] = {x:35,y:12,linea:"green"}; 
posizioni[metro["verde"][14]] = {x:39,y:12,linea:"green"};
posizioni[metro["verde"][15]] = {x:42,y:12,linea:"green"};
posizioni[metro["verde"][16]] = {x:45,y:12,linea:"green"};
posizioni[metro["verde"][17]] = {x:47,y:10,linea:"green"};
posizioni[metro["verde"][18]] = {x:48,y:9,linea:"green"};
posizioni[metro["verde"][19]] = {x:49,y:8,linea:"green"};
posizioni[metro["verde"][20]] = {x:49,y:7,linea:"green"};
posizioni[metro["verde"][21]] = {x:49,y:6,linea:"green"};
posizioni[metro["verde"][22]] = {x:49,y:5,linea:"green"};
posizioni[metro["verde"][23]] = {x:49,y:4,linea:"green"};
//rossa
posizioni[metro["rossa"][0]] = {x:2,y:7,linea:"red"};
posizioni[metro["rossa"][1]] = {x:3,y:8,linea:"red"};
posizioni[metro["rossa"][2]] = {x:5,y:10,linea:"red"};
posizioni[metro["rossa"][3]] = {x:6,y:11,linea:"red"};
posizioni[metro["rossa"][4]] = {x:7,y:12,linea:"red"};
posizioni[metro["rossa"][5]] = {x:8,y:13,linea:"red"};
posizioni[metro["rossa"][6]] = {x:9,y:14,linea:"red"}; 
posizioni[metro["rossa"][7]] = {x:10,y:15,linea:"red"}; //lotto
posizioni[metro["rossa"][8]] = {x:11,y:16,linea:"red"};
posizioni[metro["rossa"][9]] = {x:12,y:17,linea:"red"};
posizioni[metro["rossa"][10]] = {x:13,y:18,linea:"red"};
posizioni[metro["rossa"][11]] = {x:16,y:18,linea:"red"};
posizioni[metro["rossa"][12]] = {x:20,y:18,linea:"red"};
posizioni[metro["rossa"][13]] = {x:27,y:18,linea:"red"};
posizioni[metro["rossa"][14]] = {x:30,y:18,linea:"red"};
posizioni[metro["rossa"][15]] = {x:32,y:18,linea:"red"};
posizioni[metro["rossa"][16]] = {x:37,y:18,linea:"red"};
posizioni[metro["rossa"][17]] = {x:38,y:17,linea:"red"};
posizioni[metro["rossa"][18]] = {x:39,y:16,linea:"red"};
posizioni[metro["rossa"][19]] = {x:39,y:15,linea:"red"};
posizioni[metro["rossa"][20]] = {x:39,y:14,linea:"red"};
posizioni[metro["rossa"][21]] = {x:39,y:13,linea:"red"};
posizioni[metro["rossa"][22]] = {x:39,y:11,linea:"red"};
posizioni[metro["rossa"][23]] = {x:39,y:10,linea:"red"};
posizioni[metro["rossa"][24]] = {x:39,y:9,linea:"red"};
posizioni[metro["rossa"][25]] = {x:39,y:8,linea:"red"};
posizioni[metro["rossa"][26]] = {x:39,y:7,linea:"red"};
posizioni[metro["rossa"][27]] = {x:39,y:6,linea:"red"};
posizioni[metro["rossa"][28]] = {x:39,y:5,linea:"red"};
posizioni[metro["rossa"][29]] = {x:39,y:4,linea:"red"};

//gialla
posizioni[metro["gialla"][0]] = {x:15,y:3,linea:"yellow"};
posizioni[metro["gialla"][1]] = {x:17,y:4,linea:"yellow"};
posizioni[metro["gialla"][2]] = {x:19,y:5,linea:"yellow"};
posizioni[metro["gialla"][3]] = {x:21,y:6,linea:"yellow"};
posizioni[metro["gialla"][4]] = {x:23,y:7,linea:"yellow"};
posizioni[metro["gialla"][5]] = {x:27,y:9,linea:"yellow"};
posizioni[metro["gialla"][6]] = {x:33,y:10,linea:"yellow"};
posizioni[metro["gialla"][7]] = {x:33,y:12,linea:"yellow"};
posizioni[metro["gialla"][8]] = {x:33,y:14,linea:"yellow"};
posizioni[metro["gialla"][9]] = {x:33,y:15,linea:"yellow"};
posizioni[metro["gialla"][10]] = {x:33,y:16,linea:"yellow"};
posizioni[metro["gialla"][11]] = {x:35,y:18,linea:"yellow"};
posizioni[metro["gialla"][12]] = {x:37,y:20,linea:"yellow"};
posizioni[metro["gialla"][13]] = {x:38,y:21,linea:"yellow"};
posizioni[metro["gialla"][14]] = {x:39,y:22,linea:"yellow"};
posizioni[metro["gialla"][15]] = {x:40,y:23,linea:"yellow"};
posizioni[metro["gialla"][16]] = {x:42,y:25,linea:"yellow"};
posizioni[metro["gialla"][17]] = {x:43,y:26,linea:"yellow"};
posizioni[metro["gialla"][18]] = {x:44,y:27,linea:"yellow"};
posizioni[metro["gialla"][19]] = {x:45,y:28,linea:"yellow"};
posizioni[metro["gialla"][20]] = {x:47,y:28,linea:"yellow"};



function fillOptions()
{
	var start = document.getElementById("start");
	var destination = document.getElementById("destination");
	
	for(var line in metro)
		for(var f=0;f<metro[line].length;f++)
		{
			var x = document.createElement("option");
			x.text = metro[line][f];
			x.value = metro[line][f];
			var y = document.createElement("option");
			y.text = metro[line][f];
			y.value = metro[line][f];
			start.options.add(x);
			destination.options.add(y);
		}
}



function calcolaFermateAdiacenti(n)
{
	var ris = [];
	for(var linea in metro)
		for(var fermata in metro[linea])
			if(metro[linea][fermata] == n)
			{
				if(fermata > 0)
					ris.push(metro[linea][fermata-1]);
				if(fermata < metro[linea].length -1)
					ris.push(metro[linea][fermata-1+2]); //Se faccio +1 il coglione lo tratta come stringa
			}
	return ris;
}


var mappa = [];
var fatti = [];
for(var linea in metro)
	for(var fer in metro[linea])
		if(!fatti.includes(metro[linea][fer]))
		{
			mappa[metro[linea][fer]] = calcolaFermateAdiacenti(metro[linea][fer]);
			fatti.push(metro[linea][fer]);
		}
		
function stampa()
{
	var x = calcola(
					document.getElementById("start").value,
					document.getElementById("destination").value
					)[0];
	var ris = "";
	for(var i in x)
		ris += x[i] + "<br>";
	
	drawLines();
	document.getElementById("path").innerHTML = ris;
	
	var canvas = document.getElementById('map');
	if (canvas.getContext)
	{
		var ctx2 = canvas.getContext('2d'); 
		for(var f=0; f<x.length; f++)
		{
			try
			{
				ctx2.beginPath();
				ctx2.strokeStyle = "black";
				ctx2.moveTo(
							posizioni[x[f]].x* 20 - 20,
							posizioni[x[f]].y* 30 - 50
							);
				ctx2.lineTo(
							posizioni[x[f+1]].x* 20 - 20,
							posizioni[x[f+1]].y* 30 - 50
							);
				ctx2.lineWidth = 3;
				ctx2.stroke();
			}
			catch(e){}
		}
	}
}

		
function calcola (partenza , arrivo)
{
	var strade = calc(partenza,[],arrivo, []);
	// Possibili percorsi
	//console.log(strade);
	var min = strade[0].length;
	
	for(var i=1; i<strade.length; i++)
		if(strade[i].length < min)
			min = strade[i].length;
	
	var ris = [];
	for(var i=0; i<strade.length; i++)
		if(strade[i].length == min)
			ris.push(strade[i]);
	
	return ris;
}	
				  //missori, []   , lodi  , []
				  //lodi, [missori,crocetta,porta romana,lodi]   , lodi  , []
function calc(ultimo, strada, arrivo, tot)
{
	if(ultimo==arrivo)
	{
		strada.push(ultimo);
		var t = [];
		for(var i in strada)
			t.push(strada[i]);
		tot.push(t);
		strada.pop();
		return tot;
	}
	else
	{
		strada.push(ultimo);
		//console.log(strada);
		for(var fermata in mappa[ultimo])
			if(!strada.includes(mappa[ultimo][fermata]))
				calc(mappa[ultimo][fermata], strada, arrivo, tot);
		strada.pop();
		return tot;
	}
}

function drawLines()
{
	var canvas = document.getElementById('map');
	if (canvas.getContext)
	{
		var ctx = canvas.getContext('2d'); 
		for(var line in metro)
		{
			for(var f=0; f<metro[line].length; f++)
			{
				try
				{
					ctx.beginPath();
					//console.log(f);
					console.log("Da : " +metro[line][f] + "****" + posizioni[metro[line][f]].x + "***" + posizioni[metro[line][f]].y);
					console.log("A : " +metro[line][f+1] + "****" + posizioni[metro[line][f+1]].x + "***" + posizioni[metro[line][f+1]].y);
					//console.log("===========================");
					if(posizioni[metro[line][f]].linea == posizioni[metro[line][f+1]].linea)
						ctx.strokeStyle = posizioni[metro[line][f]].linea;
					else
						ctx.strokeStyle = posizioni[metro[line][f-1]].linea;
					
					if(posizioni[metro[line][f]].linea == "green" && posizioni[metro[line][f+1]].linea == "red")
						ctx.strokeStyle = "green";
					if(posizioni[metro[line][f]].linea == "purple" && posizioni[metro[line][f+1]].linea == "yellow")
						ctx.strokeStyle = "purple";
					
					ctx.moveTo(
								posizioni[metro[line][f]].x* 20 - 20,
								posizioni[metro[line][f]].y* 30 - 50
								);
					ctx.lineTo(
								posizioni[metro[line][f+1]].x* 20 - 20,
								posizioni[metro[line][f+1]].y* 30 - 50
								);
					ctx.lineWidth = 0;
					ctx.stroke();
				}
				catch(e){}
			}
		}
	}
}

function draw()
{
	var canvas = document.getElementById('map');
	if (canvas.getContext)
	{
		var ctx = canvas.getContext('2d'); 
		ctx.font = "12px Arial";
		var lato = -15;
		for(var p in posizioni)
		{
			lato *= -1;
			
			var x = posizioni[p].x * 20 - 20;
			var y = posizioni[p].y * 30 - 50;
			var r = 6;
			ctx.beginPath();
			ctx.arc(x, y, r, 0, 2 * Math.PI, false);
			ctx.lineWidth = 1;
			ctx.strokeStyle = posizioni[p].linea;
			ctx.stroke();
			if(posizioni[p].linea!="purple")
				ctx.fillText(p,x-10,y-15);
			else
			{
				if( posizioni[p].y == 16  || posizioni[p].y == 12 ) 
					ctx.fillText(p,x-10,y-lato);
				else if( posizioni[p].x == 27 || posizioni[p].y == 14)
					ctx.fillText(p,x+10,y+2);
				else
					ctx.fillText(p,x-10,y-15);
				
			}
		}
	}
}

function start()
{
	fillOptions();
	draw();
	drawLines();
}