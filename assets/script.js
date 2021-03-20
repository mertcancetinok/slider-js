var models  = [
    {
        name: 'Resim 1',
        image :'assets/img/img1.jpg'
    },
    {
        name: 'Resim 2',
        image :'assets/img/img2.jpg'
    },
    {
        name: 'Resim 3',
        image :'assets/img/img3.jpg'
    }
];
var index = 0;
var slayCount = models.length;
var settings={
    duration : '4000',
    random : true,

};
var interval;
document.querySelectorAll('.control').forEach(function(item){item.addEventListener('mouseenter',function(){
    clearInterval(interval);
    })
})
document.querySelectorAll('.control').forEach(function(item){item.addEventListener('mouseleave',function(){
    init(settings);
    })
})


function init(settings){
    var prev;

    interval = setInterval(function(){
        if(settings.random){
            do{
                index = Math.floor(Math.random()*slayCount)
            }while(index==prev)
            prev = index;
            
        }else{
            if(slayCount==index+1){
                index = -1;
            }
            showSlide(index)
            index++;
        }
        console.log(index)
        showSlide(index)
    },settings.duration)
}
init(settings)
showSlide(index);
document.querySelector('.left-side').addEventListener('click',function(){
    index--;
    showSlide(index)
    console.log(index)
});

document.querySelector('.right-side').addEventListener('click',function(){
    index++
    showSlide(index)
    console.log(index)
});

function showSlide(i){
    index = i;
    if(i<0){
        index = slayCount - 1;
    }
    if(i>=slayCount){
        index=0;
    }
    document.querySelector('.slider-img').setAttribute('src',models[index].image)
}


