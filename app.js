
var visionParams = {     
    "requests": [
        {
            "image": {
                "source": {
                    "imageUri": "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                }
            },
            "features": [
                { 
                    "type": "LOGO_DETECTION",
                    "maxResults": 1
                }
            ]
        }
    ]
};

var visionURL = "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyBI3WAEmOJs4olFxglxPjlVsvBOQhGrLIQ"

// $.post(visionURL, visionParams.JSON, function (error, response, body) {
//     console.log(error);
//     console.log(response);
//     console.log(body);
// });

$.ajax({
    url: visionURL,
    type: "POST",
    dataType: "json",
    data: visionParams.JSON
}).done(function(response){
console.log(response);
});

