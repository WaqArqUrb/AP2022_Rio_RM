var size = 0;
var placement = 'point';
function categories_LimiteMunicipal_0(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement, textAlign, offsetX, offsetY, overflow, repeat) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    switch(valueStr) {
        case 'Baixadas Litorâneas':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,34,34,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.6839999999999999}),fill: new ol.style.Fill({color: 'rgba(201,217,217,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Centro-Sul Fluminense':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,34,34,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.6839999999999999}),fill: new ol.style.Fill({color: 'rgba(240,229,230,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Costa Verde':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,34,34,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.6839999999999999}),fill: new ol.style.Fill({color: 'rgba(186,209,206,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Médio Paraíba':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,34,34,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.6839999999999999}),fill: new ol.style.Fill({color: 'rgba(207,192,207,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Metropolitana':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,34,34,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.6839999999999999}),fill: new ol.style.Fill({color: 'rgba(218,206,206,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Noroeste Fluminense':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,34,34,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.6839999999999999}),fill: new ol.style.Fill({color: 'rgba(231,230,224,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Norte Fluminense':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,34,34,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.6839999999999999}),fill: new ol.style.Fill({color: 'rgba(230,213,230,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Serrana':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,34,34,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.6839999999999999}),fill: new ol.style.Fill({color: 'rgba(187,205,195,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
    }};

var style_LimiteMunicipal_0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Região");
    var labelFont = "7.800000000000001px \'Open Sans\', sans-serif";
    var labelFill = "#3232eb";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if (feature.get("NM_MUN") !== null) {
        labelText = String(feature.get("NM_MUN"));
    }
    
    var style = categories_LimiteMunicipal_0(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement, textAlign, offsetX, offsetY, overflow, repeat);

    return style;
};
