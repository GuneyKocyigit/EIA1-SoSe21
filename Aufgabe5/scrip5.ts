console .log('Emissionen der Welt');

var Africa2008:number = 1028;
var Africa2018:number = 1235.5;

var SouthAmerica2008:number = 1132.6;
var SouthAmerica2018:number = 1261.5;

var Europa2008:number = 4965.7;
var Europa2018:number = 4209.3;

var NorthAmerika2008:number = 6600.4;
var NorthAmerika2018:number = 6035.6;

var Asia2008:number = 12954.7;
var Asia2018:number = 16274.1;

var Australia2008:number = 1993;
var Australia2018:number = 2100.5;

var EmissionenGesamt2018:number = (Africa2018 + SouthAmerica2018 + Europa2018 + NorthAmerika2018 + Asia2018 + Australia2018);
var Hundert:number = 100;

console .log('Die Emission von Europa ist: ' + Europa2018 + 'kg CO2.');
console .log('Relativ zur Gesamtemission der Welt verursacht Europa damit ' + (Hundert / (EmissionenGesamt2018 / Europa2018)).toFixed (2) + '%.') ;
console .log('Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um ' + (((Europa2018/Europa2008)-1)*100).toFixed (2) + '% verändert.');
console .log('2018 im Vergleich zu 2008 sind das ' + Math.round(Europa2018 - Europa2008) + 'kg CO2');

console .log('Die Emission von Africa ist: ' + Africa2018 + 'kg CO2.');
console .log('Relativ zur Gesamtemission der Welt verursacht Afrika damit ' + (Hundert / (EmissionenGesamt2018 / Africa2018)).toFixed (2) + '%.') ;
console .log('Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um ' + (((Africa2018/Africa2008)-1)*100).toFixed (2) + '% verändert.');
console .log('2018 im Vergleich zu 2008 sind das ' + Math.round(Africa2018 - Africa2008) + 'kg CO2');

console .log('Die Emission von Suedamerika ist: ' + SouthAmerica2018 + 'kg CO2.');
console .log('Relativ zur Gesamtemission der Welt verursacht Suedamerika damit ' + (Hundert / (EmissionenGesamt2018 / SouthAmerica2018)).toFixed (2) + '%.') ;
console .log('Für Suedamerika hat sich 2018 im Vergleich zu 2008 die Emission um ' + (((SouthAmerica2018 / SouthAmerica2008)-1)*100).toFixed (2) + '% verändert.');
console .log('2018 im Vergleich zu 2008 sind das ' + Math.round(SouthAmerica2018 - SouthAmerica2008) + 'kg CO2');

console .log('Die Emission von Nordamerika ist: ' + NorthAmerika2018 + 'kg CO2.');
console .log('Relativ zur Gesamtemission der Welt verursacht Nordamerika damit ' + (Hundert / (EmissionenGesamt2018 /NorthAmerika2018)).toFixed (2) + '%.') ;
console .log('Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um ' + (((NorthAmerika2018 / NorthAmerika2008)-1)*100).toFixed (2) + '% verändert.');
console .log('2018 im Vergleich zu 2008 sind das ' + Math.round(NorthAmerika2018 - NorthAmerika2008) + 'kg CO2');

console .log('Die Emission von Asien ist: ' + Asia2018 + 'kg CO2.');
console .log('Relativ zur Gesamtemission der Welt verursacht Asien damit ' + (Hundert / (EmissionenGesamt2018 / Asia2018)).toFixed (2) + '%.') ;
console .log('Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um ' + (((Asia2018 / Asia2008)-1)*100).toFixed (2) + '% verändert.');
console .log('2018 im Vergleich zu 2008 sind das ' + Math.round(Asia2018 - Asia2008) + 'kg CO2');

console .log('Die Emission von Australien ist: ' + Australia2018 + 'kg CO2.');
console .log('Relativ zur Gesamtemission der Welt verursacht Australien damit ' + (Hundert / (EmissionenGesamt2018 / Australia2018)).toFixed (2) + '%.') ;
console .log('Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um ' + (((Australia2018 / Australia2008)-1)*100).toFixed (2) + '% verändert.');
console .log('2018 im Vergleich zu 2008 sind das ' + Math.round(Australia2018 - Australia2008) + 'kg CO2');