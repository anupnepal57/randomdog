var dog = new XMLHttpRequest();
var button= document.querySelector('button');
button.onclick=function(){
    dog.open('Get','https://dog.ceo/api/breeds/image/random') ;
    dog.send();

}
        
        
    function showImages(link){
        var image = document.createElement('img');
        image.setAttribute('src',`${link}`);
        document.getElementById('output').innerText = '';
        document.getElementById('output').appendChild(image);
    }
dog.onreadystatechange = function(){
    console.log('data',this);
    if(this.readyState == 4 && this.status == 200 ) {
        var data= JSON.parse(this.responseText);
        showImages(data.message)
    }
}


