let myLead=[];
const id1=document.getElementById("ul-el");
const id2=document.getElementById("save");
const id3=document.getElementById("inp");
const id4=document.getElementById("tmp");
const id5=document.getElementById("delete");
const id6=document.getElementById("tab");
let leadFromLocalStorage=JSON.parse(localStorage.getItem("myLead"));


if(leadFromLocalStorage){
   myLead=leadFromLocalStorage;
   render();
}

// myLead=JSON.parse(myLead);
// myLead=JSON.stringify(myLead);
// console.log(typeof myLead);

id5.addEventListener("dblclick",function(){
   localStorage.clear();
   myLead=[]
   render();
})




id2.addEventListener("click",function() {
 myLead.push(id3.value);
 
 localStorage.setItem("myLead",JSON.stringify(myLead))
 id3.value="";
   console.log(localStorage.getItem("myLead"));

 render();
}); 


function render(){
   let item="";
   for(let i=0;i<myLead.length;i++){
      //id1.innerHTML+="<li>"+myLead[i]+"</li> ";
   //    let li=document.createElement("li");
   //    li.textContent=myLead[i];
   //  id1.append(li);
   //item+="<li>"+"<a href='"+myLead[i]+"'>"+myLead[i]+ "</a>" + "</li>";
   // template string
   item+=`
    <li>
    <a target='_blank' href='${myLead[i]}'>
      ${myLead[i]}
   </a>
   </li>
   
   `
   }
   id1.innerHTML=item;
}


tab.addEventListener("click",function(){
   chrome.tabs.query({active:true,currentWindow:true},function(tabs){
      myLead.push(tabs[0].url);
      localStorage.setItem("myLead",JSON.stringify(myLead));
      render(myLead);
   })
});
