/*declare array to put objects in it*/
var productContainer;
if(localStorage.getItem("productContainer")==null){
    productContainer=[];
}else{
    //getdata from localStorage and transfer it to array of object//
    productContainer=JSON.parse(localStorage.getItem("productData"));
     displayProduct();
}
    
/*put id in variables*/
function addProduct()
{
    window.alert("hjk");
  var productName=document.getElementById("productNameInp").value;  
    var productPrice=document.getElementById("productPriceInp").value;
   
    //create object//
    var product={
    name:productName,
    price:productPrice,   
    }
    
    productContainer.push(product);
    localStorage.setItem("productData",JSON.stringify(productContainer));//put data in localStorage in string form//
     displayProduct(); 
}

/*show data in container*/
function displayProduct(){
    
  var temp= "";
    for(var i=0; i<productContainer.length ;i++){
        temp+= `<div class="col-md-3">
        <div class="products">
<img src="img/portfolio_05.jpg" class="img-fluid" >
            <h4>`+productContainer[i].name+`<span class="badge badge-primary ml-3">`+productContainer[i].category+`</span></h4>
            <p>`+productContainer[i].des+`</p>
            <div class="price">`+productContainer[i].price+`</div>
<button onclick="deleteProduct(`+i+`)" class="btn btn-outLine-danger">delete</button>
            </div>
        </div>;`
  
    }
    document.getElementById("productRow").innerHTML=temp;
    
}
   /*delete item*/
    function deletProduct(index){
        
        window.alert(index);
        var deleted=productContainer.splice(index,1);
localStorage.setItem("productData",JSON.stringify(productContainer));
     displayProduct(); 
    
    }
    
    
    
    
    