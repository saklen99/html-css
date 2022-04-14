let index = 0;

function next(x){
    index =index+x;
    show(index);
}

show(index);

function show(num)
{
    let slides=document.getElementsByClassName('image');

    if(num == slides.length)
    {
        index = 0;
        num = 0;
    }
    if(num < 0)
    {
        index = slides.length-1;
        num = slides.length-1;
    }

    for(let y of slides)
    {
        y.style.display="none";
    }

    slides[num].style.display="block";

    
}