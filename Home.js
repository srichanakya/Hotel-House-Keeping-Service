


var arr1 = [];
var fullList = [];
var arrCopy = []
function btnClass(p){

    if(arr1.includes(p) == false)
    {arr1.push(p);
        document.getElementById(p).style.background = "rgb(26, 255, 0)";}
    else{
        for(let i=0;i<=arr1.length;i++){
            if(arr1[i] == p){
            console.log(arr1[i]+"before delete")
            delete arr1[i];
            document.getElementById(p).style.background = "rgb(255, 145, 0)";
            }
        }
    }    
    sort_unique(arr1);
    //console.log("Sorted array "+arr1);
}


function makeList(){
    //console.log(document.getElementById('noofmades').value)
    for(var i =0; i<arr1.length;i++){
         if (arr1[i] != undefined)
        {
            arrCopy[i] = arr1[i]
        }   
    }
     console.log(arrCopy)
   var sp = splitToNChunks(arrCopy,parseInt((document.getElementById('noofmades').value)));
    console.log(sp)
var html = ""
   for(var room =0;room<sp.length;room++){
    
        html += "<table border='1'>";
        html +="<tr><td>"+new Date().toLocaleDateString();+"</td></tr>";
        html +="<tr><th>Name</th><th>____________________</th></tr>"
    html +="<tr><th>Cleaned</th><th>Room</th></tr>"
    for(var row=0;row<sp[room].length;row++){
        html += "<tr>";
        html += "<td></td>";
        html += "<td>"+sp[room][row]+"</td>";
        html += "</tr>";
    }
    html += "</table>";
    
    
}
document.getElementById('tablearea').innerHTML = html;

}


function getprint(){
    print(document.getElementById('tablearea'))
}

function splitToNChunks(array, n) {
    let result = [];
    for (let i = n; i > 0; i--) {
        result.push(array.splice(0, Math.ceil(array.length / i)));
    }
    return result;
}

function sort_unique(arr) {
    if (arr.length === 0) return arr;
    arr = arr.sort(function (a, b) { return a*1 - b*1; });
    var ret = [arr[0]];
    // for (var i = 1; i < arr.length; i++) { //Start loop at 1: arr[0] can never be a duplicate
    //   if (arr[i-1] !== arr[i]) {
    //     ret.push(arr[i]);
    //   }
    // }
    return arr;
    document.getElementById("heading").innerHTML = arr.join(' ');
  }



function selectall(){
    console.log("select all function")
    for(var sty = 0;sty < document.getElementsByClassName('selectallclass').length;sty++){
        arr1[sty] = document.getElementsByClassName('selectallclass')[sty].textContent;
     document.getElementsByClassName("selectallclass")[sty].style.backgroundColor = "rgb(26, 255, 0)";

    
    }
    sort_unique(arr1);
}


function unselectall(){
    for(var sty = 0;sty < document.getElementsByClassName('selectallclass').length;sty++){
     document.getElementsByClassName("selectallclass")[sty].style.backgroundColor = "rgb(255, 145, 0)";
    }
    
    arr1 = [];
    makeList();
}

//console.log(itemname.value);
