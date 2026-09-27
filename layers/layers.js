var wms_layers = [];

var format_LimiteMunicipal_0 = new ol.format.GeoJSON();
var features_LimiteMunicipal_0 = format_LimiteMunicipal_0.readFeatures(json_LimiteMunicipal_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteMunicipal_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteMunicipal_0.addFeatures(features_LimiteMunicipal_0);
var lyr_LimiteMunicipal_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteMunicipal_0, 
                style: style_LimiteMunicipal_0,
                popuplayertitle: 'Limite Municipal',
                interactive: true,
    title: 'Limite Municipal<br />\
    <img src="styles/legend/LimiteMunicipal_0_0.png" /> Baixadas Litorâneas<br />\
    <img src="styles/legend/LimiteMunicipal_0_1.png" /> Centro-Sul Fluminense<br />\
    <img src="styles/legend/LimiteMunicipal_0_2.png" /> Costa Verde<br />\
    <img src="styles/legend/LimiteMunicipal_0_3.png" /> Médio Paraíba<br />\
    <img src="styles/legend/LimiteMunicipal_0_4.png" /> Metropolitana<br />\
    <img src="styles/legend/LimiteMunicipal_0_5.png" /> Noroeste Fluminense<br />\
    <img src="styles/legend/LimiteMunicipal_0_6.png" /> Norte Fluminense<br />\
    <img src="styles/legend/LimiteMunicipal_0_7.png" /> Serrana<br />' });
var format_Bairro_1 = new ol.format.GeoJSON();
var features_Bairro_1 = format_Bairro_1.readFeatures(json_Bairro_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bairro_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bairro_1.addFeatures(features_Bairro_1);
var lyr_Bairro_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bairro_1, 
                style: style_Bairro_1,
                popuplayertitle: 'Bairro',
                interactive: true,
    title: 'Bairro<br />\
    <img src="styles/legend/Bairro_1_0.png" /> 0 - 1<br />\
    <img src="styles/legend/Bairro_1_1.png" /> 1 - 5<br />\
    <img src="styles/legend/Bairro_1_2.png" /> 5 - 20<br />\
    <img src="styles/legend/Bairro_1_3.png" /> 20 - 50<br />\
    <img src="styles/legend/Bairro_1_4.png" /> 50 - 70<br />\
    <img src="styles/legend/Bairro_1_5.png" /> 70 - 100<br />\
    <img src="styles/legend/Bairro_1_6.png" /> 100 - 200<br />\
    <img src="styles/legend/Bairro_1_7.png" /> 200 - 2945<br />' });
var format_FerroviaTrajetos_2 = new ol.format.GeoJSON();
var features_FerroviaTrajetos_2 = format_FerroviaTrajetos_2.readFeatures(json_FerroviaTrajetos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FerroviaTrajetos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FerroviaTrajetos_2.addFeatures(features_FerroviaTrajetos_2);
var lyr_FerroviaTrajetos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FerroviaTrajetos_2, 
                style: style_FerroviaTrajetos_2,
                popuplayertitle: 'Ferrovia Trajetos',
                interactive: false,
                title: '<img src="styles/legend/FerroviaTrajetos_2.png" /> Ferrovia Trajetos'
            });
var format_Ferrovia_3 = new ol.format.GeoJSON();
var features_Ferrovia_3 = format_Ferrovia_3.readFeatures(json_Ferrovia_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ferrovia_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ferrovia_3.addFeatures(features_Ferrovia_3);
var lyr_Ferrovia_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ferrovia_3, 
                style: style_Ferrovia_3,
                popuplayertitle: 'Ferrovia',
                interactive: true,
                title: '<img src="styles/legend/Ferrovia_3.png" /> Ferrovia'
            });
var format_MetroTrajetos_4 = new ol.format.GeoJSON();
var features_MetroTrajetos_4 = format_MetroTrajetos_4.readFeatures(json_MetroTrajetos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MetroTrajetos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MetroTrajetos_4.addFeatures(features_MetroTrajetos_4);
var lyr_MetroTrajetos_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MetroTrajetos_4, 
                style: style_MetroTrajetos_4,
                popuplayertitle: 'Metro Trajetos',
                interactive: false,
                title: '<img src="styles/legend/MetroTrajetos_4.png" /> Metro Trajetos'
            });
var format_Metro_5 = new ol.format.GeoJSON();
var features_Metro_5 = format_Metro_5.readFeatures(json_Metro_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Metro_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Metro_5.addFeatures(features_Metro_5);
var lyr_Metro_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Metro_5, 
                style: style_Metro_5,
                popuplayertitle: 'Metro',
                interactive: true,
                title: '<img src="styles/legend/Metro_5.png" /> Metro'
            });
var format_RegioMetropolitanaRJ_6 = new ol.format.GeoJSON();
var features_RegioMetropolitanaRJ_6 = format_RegioMetropolitanaRJ_6.readFeatures(json_RegioMetropolitanaRJ_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RegioMetropolitanaRJ_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioMetropolitanaRJ_6.addFeatures(features_RegioMetropolitanaRJ_6);
var lyr_RegioMetropolitanaRJ_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioMetropolitanaRJ_6, 
                style: style_RegioMetropolitanaRJ_6,
                popuplayertitle: 'Região Metropolitana RJ',
                interactive: true,
                title: '<img src="styles/legend/RegioMetropolitanaRJ_6.png" /> Região Metropolitana RJ'
            });
var format_Rio_7 = new ol.format.GeoJSON();
var features_Rio_7 = format_Rio_7.readFeatures(json_Rio_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rio_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rio_7.addFeatures(features_Rio_7);
var lyr_Rio_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rio_7, 
                style: style_Rio_7,
                popuplayertitle: 'Rio',
                interactive: true,
                title: '<img src="styles/legend/Rio_7.png" /> Rio'
            });

lyr_LimiteMunicipal_0.setVisible(true);lyr_Bairro_1.setVisible(true);lyr_FerroviaTrajetos_2.setVisible(true);lyr_Ferrovia_3.setVisible(true);lyr_MetroTrajetos_4.setVisible(true);lyr_Metro_5.setVisible(true);lyr_RegioMetropolitanaRJ_6.setVisible(true);lyr_Rio_7.setVisible(true);
var layersList = [lyr_LimiteMunicipal_0,lyr_Bairro_1,lyr_FerroviaTrajetos_2,lyr_Ferrovia_3,lyr_MetroTrajetos_4,lyr_Metro_5,lyr_RegioMetropolitanaRJ_6,lyr_Rio_7];
lyr_LimiteMunicipal_0.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'Cidade', 'Municipios_Populacao': 'População', 'Municipios_Eleitores': 'Eleitores', 'Municipios_Votos AP_2022': 'AP 2022 Cidade', 'Região': 'Região', });
lyr_Bairro_1.set('fieldAliases', {'fid': 'fid', 'nome': 'Bairro', 'codbairro_': 'codbairro_', 'Eleitores': 'Eleitores', 'Populacao': 'População', 'Votos AP 2022 no Bairro': 'AP 2022 Bairro', });
lyr_FerroviaTrajetos_2.set('fieldAliases', {'fid': 'fid', 'ramal': 'ramal', });
lyr_Ferrovia_3.set('fieldAliases', {'fid': 'fid', 'f3': 'Estação', });
lyr_MetroTrajetos_4.set('fieldAliases', {'fid': 'fid', 'tipo': 'tipo', });
lyr_Metro_5.set('fieldAliases', {'fid': 'fid', 'nome': 'Estação', });
lyr_RegioMetropolitanaRJ_6.set('fieldAliases', {'fid': 'fid', 'LOCAL': 'Local de Votação', 'ENDERECO': 'Endereço', 'ZONA': 'Z.E.', 'SECAO': 'SECAO', 'Votos_AP2022': 'Votos_AP2022', 'Votos_AP2022_Local': 'AP 2022 Local', 'NM_MUN': 'Cidade', 'Municipios_Populacao': 'População', 'Municipios_Eleitores': 'Eleitores', 'Municipios_Votos AP_2022': 'AP 2022 Cidade', 'Região': 'Região', });
lyr_Rio_7.set('fieldAliases', {'fid': 'fid', 'NM_LOCAL_VOTACAO': 'Local de Votação', 'Endereço': 'Endereço', 'NM_MUNICIPIO': 'Município', 'NR_ZONA': 'NR_ZONA', 'NR_SECAO': 'NR_SECAO', 'QT_VOTOS': 'QT_VOTOS', 'VOTOS_AP2022': 'VOTOS_AP2022', 'Bairro': 'Bairro', 'codbairro_': 'codbairro_', 'Eleitores': 'Eleitores', 'Populacao': 'População', 'AP2022_LOCAL_VOTACAO': 'AP 2022 Local', });
lyr_LimiteMunicipal_0.set('fieldImages', {'fid': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'Municipios_Populacao': 'TextEdit', 'Municipios_Eleitores': 'TextEdit', 'Municipios_Votos AP_2022': 'TextEdit', 'Região': 'TextEdit', });
lyr_Bairro_1.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'codbairro_': 'Range', 'Eleitores': 'TextEdit', 'Populacao': 'TextEdit', 'Votos AP 2022 no Bairro': 'TextEdit', });
lyr_FerroviaTrajetos_2.set('fieldImages', {'fid': 'TextEdit', 'ramal': 'TextEdit', });
lyr_Ferrovia_3.set('fieldImages', {'fid': 'TextEdit', 'f3': 'TextEdit', });
lyr_MetroTrajetos_4.set('fieldImages', {'fid': 'TextEdit', 'tipo': 'TextEdit', });
lyr_Metro_5.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', });
lyr_RegioMetropolitanaRJ_6.set('fieldImages', {'fid': 'TextEdit', 'LOCAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'ZONA': 'TextEdit', 'SECAO': 'TextEdit', 'Votos_AP2022': 'TextEdit', 'Votos_AP2022_Local': 'TextEdit', 'NM_MUN': 'TextEdit', 'Municipios_Populacao': 'TextEdit', 'Municipios_Eleitores': 'TextEdit', 'Municipios_Votos AP_2022': 'TextEdit', 'Região': 'TextEdit', });
lyr_Rio_7.set('fieldImages', {'fid': 'TextEdit', 'NM_LOCAL_VOTACAO': 'TextEdit', 'Endereço': 'TextEdit', 'NM_MUNICIPIO': 'TextEdit', 'NR_ZONA': 'TextEdit', 'NR_SECAO': 'TextEdit', 'QT_VOTOS': 'TextEdit', 'VOTOS_AP2022': 'TextEdit', 'Bairro': 'TextEdit', 'codbairro_': 'Range', 'Eleitores': 'TextEdit', 'Populacao': 'TextEdit', 'AP2022_LOCAL_VOTACAO': 'TextEdit', });
lyr_LimiteMunicipal_0.set('fieldLabels', {'fid': 'hidden field', 'CD_MUN': 'hidden field', 'NM_MUN': 'inline label - always visible', 'Municipios_Populacao': 'inline label - always visible', 'Municipios_Eleitores': 'inline label - always visible', 'Municipios_Votos AP_2022': 'inline label - always visible', 'Região': 'inline label - always visible', });
lyr_Bairro_1.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - always visible', 'codbairro_': 'hidden field', 'Eleitores': 'inline label - always visible', 'Populacao': 'inline label - always visible', 'Votos AP 2022 no Bairro': 'inline label - always visible', });
lyr_FerroviaTrajetos_2.set('fieldLabels', {'fid': 'no label', 'ramal': 'no label', });
lyr_Ferrovia_3.set('fieldLabels', {'fid': 'hidden field', 'f3': 'inline label - always visible', });
lyr_MetroTrajetos_4.set('fieldLabels', {'fid': 'hidden field', 'tipo': 'inline label - always visible', });
lyr_Metro_5.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - always visible', });
lyr_RegioMetropolitanaRJ_6.set('fieldLabels', {'fid': 'hidden field', 'LOCAL': 'inline label - always visible', 'ENDERECO': 'inline label - always visible', 'ZONA': 'hidden field', 'SECAO': 'hidden field', 'Votos_AP2022': 'hidden field', 'Votos_AP2022_Local': 'inline label - always visible', 'NM_MUN': 'hidden field', 'Municipios_Populacao': 'hidden field', 'Municipios_Eleitores': 'hidden field', 'Municipios_Votos AP_2022': 'hidden field', 'Região': 'hidden field', });
lyr_Rio_7.set('fieldLabels', {'fid': 'hidden field', 'NM_LOCAL_VOTACAO': 'inline label - always visible', 'Endereço': 'inline label - always visible', 'NM_MUNICIPIO': 'hidden field', 'NR_ZONA': 'hidden field', 'NR_SECAO': 'hidden field', 'QT_VOTOS': 'hidden field', 'VOTOS_AP2022': 'hidden field', 'Bairro': 'inline label - always visible', 'codbairro_': 'hidden field', 'Eleitores': 'inline label - always visible', 'Populacao': 'inline label - always visible', 'AP2022_LOCAL_VOTACAO': 'inline label - always visible', });
lyr_Rio_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});