var Africa08 = 1028;
var Africa18 = 1235.5;
var AfricaRel = Math.round(Africa18 / total * 100);
var AfricaChange = Math.round(((Africa18 / Africa08) - 1) * 100);
var AfricaGrowth = Math.round(Africa18 - Africa08);
var SouthAmerica08 = 1132.6;
var SouthAmerica18 = 1261.5;
var SouthAmericaRel = Math.round(SouthAmerica18 / total * 100);
var SouthAmericaChange = Math.round(((SouthAmerica18 / SouthAmerica08) - 1) * 100);
var SouthAmericaGrowth = Math.round(SouthAmerica18 - SouthAmerica08);
var Europe08 = 4965.7;
var Europe18 = 4209.3;
var EuropeRel = Math.round(Europe18 / total * 100);
var EuropeChange = Math.round(((Europe18 / Europe08) - 1) * 100);
var EuropeGrowth = Math.round(Europe18 - Europe08);
var NorthAmerica08 = 6600.4;
var NorthAmerica18 = 6035.6;
var NorthAmericaRel = Math.round(NorthAmerica18 / total * 100);
var NorthAmericaChange = Math.round(((NorthAmerica18 / NorthAmerica08) - 1) * 100);
var NorthAmericaGrowth = Math.round(NorthAmerica18 - NorthAmerica08);
var Asia08 = 12954.7;
var Asia18 = 16274.1;
var AsiaRel = Math.round(Asia18 / total * 100);
var AsiaChange = Math.round(((Asia18 / Asia08) - 1) * 100);
var AsiaGrowth = Math.round(Asia18 - Asia08);
var Australia08 = 1993;
var Australia18 = 2100.5;
var AustraliaRel = Math.round(Australia18 / total * 100);
var AustraliaChange = Math.round(((Australia18 / Australia08) - 1) * 100);
var AustraliaGrowth = Math.round(Australia18 - Australia08);
var total = Africa18 + SouthAmerica18 + Europe18 + NorthAmerica18 + Asia18 + Australia18;
function myFunction(name, value18, valueRel, valueChange, valueGrowth) {
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in " + name;
    document.querySelector(".h2_01").innerHTML = value18.toString();
    document.querySelector("p").innerHTML = "Emission absolute of " + name + " in 2018";
    document.querySelector(".h2_02").innerHTML = Math.round(value18 / total * 100) + "%";
    document.querySelector(".h2_03").innerHTML = valueChange + "%";
    document.querySelector(".h2_04").innerHTML = valueGrowth + "kg CO2";
    document.querySelector(".chart").setAttribute("style", "height:" + Math.round(value18 / total * 100) + "%");
}
document.querySelector(".europe").addEventListener("click", myFunction.bind(null, "Europe", Europe18, EuropeRel, EuropeChange, EuropeGrowth));
document.querySelector(".northamerica").addEventListener("click", myFunction.bind(null, "North America", NorthAmerica18, NorthAmericaRel, NorthAmericaChange, NorthAmericaGrowth));
document.querySelector(".southamerica").addEventListener("click", myFunction.bind(null, "South America", SouthAmerica18, SouthAmericaRel, SouthAmericaChange, SouthAmericaGrowth));
document.querySelector(".africa").addEventListener("click", myFunction.bind(null, "Africa", Africa18, AfricaRel, AfricaChange, AfricaGrowth));
document.querySelector(".asia").addEventListener("click", myFunction.bind(null, "Asia", Asia18, AsiaRel, AsiaChange, AsiaGrowth));
document.querySelector(".australia").addEventListener("click", myFunction.bind(null, "Australia", Australia18, AustraliaRel, AustraliaChange, AustraliaGrowth));
//# sourceMappingURL=script6.js.map