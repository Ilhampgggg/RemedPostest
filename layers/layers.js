var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_aksesibilitas_univunion_1 = new ol.format.GeoJSON();
var features_aksesibilitas_univunion_1 = format_aksesibilitas_univunion_1.readFeatures(json_aksesibilitas_univunion_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aksesibilitas_univunion_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aksesibilitas_univunion_1.addFeatures(features_aksesibilitas_univunion_1);
var lyr_aksesibilitas_univunion_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aksesibilitas_univunion_1, 
                style: style_aksesibilitas_univunion_1,
                popuplayertitle: "aksesibilitas_univ — union",
                interactive: true,
    title: 'aksesibilitas_univ — union<br />\
    <img src="styles/legend/aksesibilitas_univunion_1_0.png" /> 1,2km (15 menit)<br />\
    <img src="styles/legend/aksesibilitas_univunion_1_1.png" /> 2,4km (30 menit)<br />'
        });
var format_UnivSurabaya_2 = new ol.format.GeoJSON();
var features_UnivSurabaya_2 = format_UnivSurabaya_2.readFeatures(json_UnivSurabaya_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UnivSurabaya_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnivSurabaya_2.addFeatures(features_UnivSurabaya_2);
var lyr_UnivSurabaya_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnivSurabaya_2, 
                style: style_UnivSurabaya_2,
                popuplayertitle: "Univ Surabaya",
                interactive: true,
    title: 'Univ Surabaya<br />\
    <img src="styles/legend/UnivSurabaya_2_0.png" /> ITS<br />\
    <img src="styles/legend/UnivSurabaya_2_1.png" /> UIN Sunan Ampel<br />\
    <img src="styles/legend/UnivSurabaya_2_2.png" /> UNAIR<br />\
    <img src="styles/legend/UnivSurabaya_2_3.png" /> UNESA<br />\
    <img src="styles/legend/UnivSurabaya_2_4.png" /> UPNV Jatim<br />'
        });

lyr_Positron_0.setVisible(true);lyr_aksesibilitas_univunion_1.setVisible(true);lyr_UnivSurabaya_2.setVisible(true);
var layersList = [lyr_Positron_0,lyr_aksesibilitas_univunion_1,lyr_UnivSurabaya_2];
lyr_aksesibilitas_univunion_1.set('fieldAliases', {'fid': 'fid', 'Access': 'Access', });
lyr_UnivSurabaya_2.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'Deskripsi Univ_QS WUR': 'Deskripsi Univ_QS WUR', 'Deskripsi Univ_Didirikan': 'Deskripsi Univ_Didirikan', 'Deskripsi Univ_Fakultas': 'Deskripsi Univ_Fakultas', 'Foto': 'Foto', });
lyr_aksesibilitas_univunion_1.set('fieldImages', {'fid': 'TextEdit', 'Access': 'TextEdit', });
lyr_UnivSurabaya_2.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'Deskripsi Univ_QS WUR': 'TextEdit', 'Deskripsi Univ_Didirikan': 'Range', 'Deskripsi Univ_Fakultas': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_aksesibilitas_univunion_1.set('fieldLabels', {'fid': 'hidden field', 'Access': 'inline label - always visible', });
lyr_UnivSurabaya_2.set('fieldLabels', {'fid': 'hidden field', 'Nama': 'inline label - always visible', 'Kampus': 'inline label - always visible', 'Deskripsi Univ_QS WUR': 'inline label - always visible', 'Deskripsi Univ_Didirikan': 'inline label - always visible', 'Deskripsi Univ_Fakultas': 'header label - always visible', 'Foto': 'no label', });
lyr_UnivSurabaya_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});