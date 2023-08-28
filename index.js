const image = document.getElementById('inputImage')
const cropper=new Cropper(inputImage,{
    aspectRatio:0,
    viewMode:0,
})

document.getElementById('cropImage').addEventListener('click',function(){
    var croppedImage=cropper.getCroppedCanvas().toDataURL('inputImage/png');
document.getElementById('outputImage').src=croppedImage

})

