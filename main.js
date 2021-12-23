name_a=[];

function submit(){
  var name_d=[];

    for(var j=1;j<=4;j++){

        var name=document.getElementById("name_"+j).value;

        name_a.push(name);
    }

    console.log(name_a);

    var length=name_a.length;

    console.log(length);

    for(var k=0;k<length;k++)

    {

name_d.push("<h4>NAME - "+ name_a[k] + "</h4>");

console.log(name_d);


    }

    document.getElementById("display_name_c").innerHTML=name_d;
    var r=name_d.join(" ");
    document.getElementById("display_name_wc").innerHTML=r;
    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";

}
function sort(){
    name_a.sort();
    console.log(name_a);
    var name_d_s=[];
    var length=name_a.length;

    console.log(length);

    for(var k=0;k<length;k++)

    {

name_d_s.push("<h4>NAME - "+ name_a[k] + "</h4>");

console.log(name_d_s);


    }
    var r=name_d_s.join(" ");
    document.getElementById("display_name_wc").innerHTML=r;

    
}