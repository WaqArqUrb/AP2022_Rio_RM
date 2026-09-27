var size = 0;
var placement = 'point';

var style_Ferrovia_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "6.5px \'Open Sans\', sans-serif";
    var labelFill = "#397c1c";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if (feature.get("f3") !== null) {
        labelText = String(feature.get("f3"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(0,144,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(0,144,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];

    return style;
};
