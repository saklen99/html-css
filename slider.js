var index=1;
slider(index)

function next(n) {

    slider(index+=n)
}
function pre()
{

}

function slider(n)
{
    var s= document.getElementsByClassName(Image)
}

if(n>s.lenth)
{
    index=1;
} 
if(n<1)
{
    index=s.lenth;
}
for(i=0;i<s.lenth;i++)
{
    s[i].style.display="none"
}





