let menuSelect = JSON.parse(localStorage.getItem("kfc"));
const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const url = urlParams.get('foodName')
        alert(url);
        
        
        let menuContainer = document.getElementById("menuList")
        let cart = document.querySelectorAll(".addToCart");
        console.log(cart);

        for(let i =0; i < menuSelect.length; i++){
            if(url == menuSelect[i].foodName){
               let menu = menuSelect[i].menuList;
               let ele = "";
              for(let i = 0; i < menu.length; i++){
                ele += `<div class="card mb-3 cardBorder">
                <div class="row no-gutters">   
                  <div class="col-md-9">
                    <div class="card-body pl-0">
                        <img src="${menu[i].img}">
                      <h5 class="card-title">${menu[i].menuName}</h5>
                      <p class="card-text d-inline"><span>${menu[i].price}</span></p>
                      <p class="card-text"><small class="text-muted">${menu[i].desc}</small></p>
                    </div>
                  </div>
                  <div class="col-md-3 my-auto addBtn">
                    <button class="btn btn-outline-success my-2 my-sm-0 ml-5 addToCart" type="submit">Add to Cart <i class="fa-solid fa-cart-shopping"></i></button>
                  </div>
                </div>
              </div>`

              menuContainer.innerHTML = ele;
              }
            }
        }


        //cart

        let btn = document.getElementsByClassName("addToCart")
        for(let i = 0; i < btn.length; i++){
          let cartBtn = btn[i]
          cartBtn.addEventListener("click", (event) => {
            var product = {
              foodNames : event.target.parentElement.parentElement.children[0].children[0].children[1].textContent,
              foodPrice : event.target.parentElement.parentElement.children[0].children[0].children[2].textContent,
              totalPrice : parseInt(event.target.parentElement.parentElement.children[0].children[0].children[1].textContent),
              quantity : 1
            }

            addItemToLocal(product);
            cartViewCard()
          })
        }
        function addItemToLocal(product){
          if(!localStorage.getItem("productInCart")){
            localStorage.setItem("productInCart", JSON.stringify([]))
          }
          let cartItem =JSON.parse(localStorage.getItem("productInCart"))
          cartItem.push(product)
          localStorage.setItem("productInCart", JSON.stringify(cartItem))
          console.log(cartItem);
        }

        function cartViewCard()
        {
          var cartView = JSON.parse(localStorage.getItem("productInCart"))
          console.log(cartView);
          let cartEle = "";
          let subTotal = 0;
          for(let i = 0; i < cartView.length; i++){
            //alert(cartView.length)
            cartEle +='<div style="width: 18rem;"><div class="card-body"><p class="card-text"><div class="row m-0"><div class="col-9 p-0">'+cartView[i].foodNames+'</div><div class="col-3 p-0 pl-2"> <span>'+cartView[i].foodPrice+'</span></div></div></p><a href="#" class="card-link" onclick="deleteSelect('+ i +')"><i class="fa-solid fa-trash text-danger">detele</i></a></div></div>'
            subTotal = subTotal + parseInt(cartView[i].foodPrice) 
          }
          document.getElementById("cartView").innerHTML = cartEle;
          document.getElementById("subTotals").innerHTML = subTotal;
        }
        // if(!JSON.parse(localStorage.getItem("email"))){
        //   let logele = "";
        //   logele = `
        //   <a href="login.html"><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Place Order</button></a> 
        //   `
        //   document.getElementById("verifyLogin") = logele;
        // }
        
        cartViewCard()

        function deleteSelect(i){
          let newLocal = JSON.parse(localStorage.getItem("productInCart"))
          console.log(i);
          newLocal.splice(i, 1);
          localStorage.setItem("productInCart", JSON.stringify(newLocal))
          cartViewCard()
        }
      
        // <img src="${menu[i].imgUrl}" class="card-img-top" alt=""/>

       function placeOrders(){
        // if(!localStorage.getItem("email")){
        //   window.location.href="login.html"
        // }else{
          window.location.href="placeorder.html"
        // }
      
       
      }
      
       