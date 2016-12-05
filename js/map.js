var PWS_IDS = ["0105008", "0110001", "0110005", "0110006", "0110008", "0110009", "0110011", "0110012", "0310002", "0410002", "0410005", "0410006", "0410007", "0410011", "0510004", "0710001", "0710002", "0710003", "0710004", "0710006", "0710007", "0710008", "0710009", "0810001", "0910001", "0910002", "0910013", "1010001", "1010003", "1010004", "1010007", "1010018", "1010019", "1010021", "1010024", "1010026", "1010027", "1010029", "1110003", "1210001", "1210004", "1210006", "1210009", "1210013", "1210016", "1310001", "1310002", "1310004", "1310006", "1500333", "1510001", "1510003", "1510005", "1510006", "1510012", "1510015", "1510017", "1510018", "1510019", "1510020", "1510021", "1510022", "1510026", "1510029", "1510031", "1510032", "1610003", "1610004", "1610005", "1710005", "1810001", "1910001", "1910003", "1910004", "1910005", "1910007", "1910009", "1910011", "1910013", "1910017", "1910019", "1910024", "1910026", "1910028", "1910030", "1910033", "1910034", "1910036", "1910038", "1910039", "1910040", "1910042", "1910043", "1910044", "1910046", "1910047", "1910049", "1910051", "1910052", "1910059", "1910062", "1910063", "1910065", "1910067", "1910073", "1910077", "1910079", "1910083", "1910090", "1910091", "1910092", "1910096", "1910098", "1910101", "1910102", "1910104", "1910105", "1910124", "1910125", "1910126", "1910127", "1910130", "1910134", "1910140", "1910142", "1910143", "1910144", "1910146", "1910148", "1910152", "1910154", "1910155", "1910156", "1910157", "1910166", "1910167", "1910173", "1910179", "1910191", "1910194", "1910204", "1910212", "1910213", "1910223", "1910225", "1910234", "1910239", "1910240", "1910245", "2000851", "2110002", "2110003", "2310003", "2400234", "2410004", "2410005", "2410009", "2410010", "2610001", "2701202", "2710001", "2710008", "2710009", "2710010", "2710011", "2710017", "2810003", "2810005", "2910003", "2910004", "3010001", "3010002", "3010003", "3010004", "3010010", "3010017", "3010018", "3010022", "3010023", "3010027", "3010030", "3010035", "3010036", "3010037", "3010038", "3010041", "3010042", "3010046", "3010047", "3010053", "3010062", "3010064", "3010068", "3010069", "3010073", "3010079", "3010092", "3010094", "3010100", "3010101", "3110001", "3110004", "3110005", "3110008", "3110010", "3110150", "3301428", "3310001", "3310002", "3310005", "3310006", "3310007", "3310008", "3310009", "3310012", "3310016", "3310020", "3310021", "3310022", "3310025", "3310029", "3310031", "3310032", "3310036", "3310037", "3310038", "3310044", "3310051", "3310074", "3410001", "3410002", "3410004", "3410006", "3410008", "3410009", "3410011", "3410014", "3410015", "3410016", "3410018", "3410020", "3410021", "3410023", "3510001", "3510003", "3600010", "3610001", "3610004", "3610005", "3610008", "3610012", "3610013", "3610014", "3610015", "3610018", "3610022", "3610024", "3610025", "3610029", "3610034", "3610036", "3610037", "3610038", "3610039", "3610041", "3610043", "3610049", "3610050", "3610052", "3610055", "3610057", "3610064", "3610073", "3610120", "3610121", "3610125", "3710001", "3710002", "3710005", "3710006", "3710008", "3710010", "3710013", "3710014", "3710015", "3710016", "3710018", "3710019", "3710020", "3710021", "3710023", "3710025", "3710026", "3710027", "3710029", "3710034", "3710037", "3910001", "3910004", "3910005", "3910007", "3910011", "3910012", "3910015", "3910027", "4010001", "4010002", "4010004", "4010007", "4010008", "4010009", "4010011", "4010014", "4010026", "4110001", "4110003", "4110006", "4110008", "4110009", "4110011", "4110013", "4110016", "4110017", "4110018", "4110021", "4110022", "4110023", "4110024", "4110025", "4110027", "4210001", "4210004", "4210006", "4210007", "4210010", "4210011", "4210016", "4310001", "4310004", "4310005", "4310006", "4310007", "4310009", "4310011", "4310012", "4310014", "4310019", "4310022", "4410010", "4410011", "4410013", "4410014", "4410017", "4510001", "4510005", "4510006", "4510014", "4710011", "4810001", "4810002", "4810003", "4810004", "4810005", "4810007", "4810008", "4910004", "4910005", "4910006", "4910009", "4910012", "4910013", "4910014", "4910017", "5010005", "5010013", "5010014", "5010017", "5010018", "5010019", "5010028", "5110002", "5210004", "5410002", "5410003", "5410010", "5410015", "5410041", "5500363", "5510009", "5610002", "5610007", "5610009", "5610011", "5610016", "5610017", "5610018", "5610019", "5610020", "5610023", "5610024", "5610040", "5610043", "5610059", "5610063", "5710001", "5710003", "5710006", "5805001", "5810001", "580002"];

var map;
var pwsid;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.9, lng: -120.7},
    zoom: 8
  });

  // Zoom into user location if possible.
  // (Disabling for now for testing while we're in France.)
  /*if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(pos) {
      var userLocation = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      };
      map.setCenter(userLocation);
      map.setZoom(10);
    });
  }*/

  // Load water supplier GeoJSON data.
  $.getJSON('data/water-suppliers.geojson', null, function (data) {
    // Add GeoJSON regions and style them.
    var regions = data.features.filter(function (x) { return PWS_IDS.indexOf(x.properties.pwsid) > -1; });

    map.data.addGeoJson({type: 'FeatureCollection', features: regions});

    map.data.setStyle(function(feature) {
      var id = parseInt(feature.getProperty('pwsid'));
      var color = ['#09C', '#6C6', '#39C', '#039'][(id % 123) % 4];

      return {
        fillColor: color,
        strokeColor: color,
        strokeWeight: 2
      };
    });

    // Add mouseover & click events.
    var infoWindow = new google.maps.InfoWindow();

    map.data.addListener('mouseover', function (event) {
      var id = event.feature.getProperty('pwsid');
      var name = event.feature.getProperty('pwsname').toProperCase();

      map.data.overrideStyle(event.feature, {strokeWeight: 4});

      infoWindow.open(map);
      infoWindow.setPosition(event.latLng);
      infoWindow.setContent('<div id="infoWindow" onClick="openBudgetPane(\'' + id + '\',\'' + name + '\')">' + name + '</div>');

      google.maps.event.addListenerOnce(map, 'mousemove', function() {
        map.data.revertStyle();
        infoWindow.close();
      });
    });

    map.data.addListener('click', function (event) {
      openBudgetPane(event.feature.getProperty('pwsid'), event.feature.getProperty('pwsname'));
    });

    // Wait a bit for things to render, then hide the spinner.
    setTimeout(function () {
      $('#mapSpinner').hide();
    }, 1000);
  });
}
