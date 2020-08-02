var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var imageObj = document.getElementById("scream");
resize (imageObj) ;

function start(){

context.clearRect(0, 0, canvas.width, canvas.height);
context.drawImage(imageObj, 0, 0, imageObj.width, imageObj.height);

}
 
 
  function resize () {
      var w =imageObj.width ;
    var h = imageObj.height ;
     if (h > 1500)
         imageObj.height=1500 ;
     if (w > 1500)
         imageObj.width =1500;
     canvas.width = imageObj.width ;
    canvas.height = imageObj.height;
  };
 
 
 function mix1 () {
    resize (imageObj) ;
    start() ;
    
    var imageData = context.getImageData(0, 0, imageObj.width, imageObj.height);
var data = imageData.data;
   
     for(var i = 0; i < data.length; i += 4) {



              data[i] = data[i + 2];
              data[i + 1] = data[i + 1];
              data[i + 2] = data[i + 1];

              continue ;

}
context.putImageData(imageData,0,0) ;
var dataURL = canvas.toDataURL('image/jpeg');
document.getElementById('canvasImg1').src = dataURL;


};

function mix2(){
       resize (imageObj) ;
        start() ;
       
    var imageData = context.getImageData(0, 0, imageObj.width, imageObj.height);
var data = imageData.data;
    
     
      for(var i = 0; i < data.length; i += 4) {



              data[i] = data[i + 2];
              data[i + 1] = data[i + 1];
              data[i + 2] = data[i];

              continue ;

}

    context.putImageData(imageData,0,0) ;
    var dataURL = canvas.toDataURL('image/jpeg');
    document.getElementById('canvasImg2').src = dataURL;

};

function mix3(){
       resize (imageObj) ;
       start();
    var imageData = context.getImageData(0, 0, imageObj.width, imageObj.height);
var data = imageData.data;
    
     
   for(var i = 0; i < data.length; i += 4) {



              data[i] = data[i + 1];
              data[i + 1] = data[i];
              data[i + 2] = data[i + 2];

              continue ;

}

    context.putImageData(imageData,0,0) ;
    var dataURL = canvas.toDataURL('image/jpeg');
    document.getElementById('canvasImg3').src = dataURL;

};

function mix4(){
    resize (imageObj) ;
        start() ;
    var imageData = context.getImageData(0, 0, imageObj.width, imageObj.height);
var data = imageData.data;
    
    

          for(var i = 0; i < data.length; i += 4) {



              data[i] = data[i + 1];
              data[i + 1] =data[i + 2];
              data[i + 2] = data[i + 1];

              continue ;

}
    context.putImageData(imageData,0,0) ;
    var dataURL = canvas.toDataURL('image/jpeg');
    document.getElementById('canvasImg4').src = dataURL;

};

function mix5(){
       resize (imageObj) ;
        start() ;
    var imageData = context.getImageData(0, 0, imageObj.width, imageObj.height);
var data = imageData.data;
     
         for(var i = 0; i < data.length; i += 4)
         {
          var brightness =  data[i] + data[i + 1] +  data[i + 2];

          // red
          data[i] = 255 - data[i];
          // green
          data[i + 1] = 255 - data[i + 1];
          // blue
          data[i + 2] = 255 - data[i + 2];
}
    context.putImageData(imageData,0,0) ;
    var dataURL = canvas.toDataURL('image/jpeg');
    document.getElementById('canvasImg5').src = dataURL;

};





function stop(){
    
    canvas.width = 0 ;
    canvas.height = 0;
    
};