let foodMenu=[
    {
        foodName:"BUGRES",
        img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT99.jpg?ver=22.26",
        menuList:[
            {
                id:1,
                menuName:"Chicken Burger Buddy Meal",
                price: 499.05,
                type:"non-veg",
                
                desc:"Share 2 Classic Chicken Zingers & a Medium Popcorn in this delightful combo for 2",
                img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/zcblg2ctjjeswzc0lopk",

            },
            {
                id:2,
                menuName:"Mixed Chicken Zinger Burger Doubles",
                price: 344.76,
                type:"non-veg",
                
                desc:"Best-seller combo of classic chicken zinger & tandoori zinger",
                img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/rwleh8asbhnyea0mnswj",
            },
            {
                id:3,
                menuName:"2 X Veg Krisper Burgers",
                price: 187.76,
                type:"veg",
                
                desc:"2 delicious veg value burgers - at a deal price",
                img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/cvqb24o2vlkd967jzzas",
            },
        ]
    },
    {
        foodName:"SNACKS",
        img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT89.jpg?ver=22.26",
        menuList:[
            {
                id:4,
                menuName:"Strips & Rice Combo",
                price: 359.05,
                type:"non-veg",
                
                desc:"4 strips, 1 Dips, flavorful Rice & Gravy at a deal price [serves 1-2]",
                img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/jnmt3ihdbdy8f4yiziki",
            },
            {
                id:5,
                menuName:"Biryani Rice",
                price: 139.07,
                type:"veg",
                
                desc:"Flavorful aromatic rice to pair with your KFC favorites",
                img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/euv6xsfs75dudpadu7br",
            },
            {
                id:6,
                menuName:"Hot & Crispy Chicken -2pc",
                price: 154.75,
                type:"non-veg",
                
                desc:"Signature Hot & crispy chicken",
                img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/m7q813n17jh4nrhtt7ss",
            },
        ]
    },
    {
        foodName:"BRIYANI BUCKET",
        img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT190.jpg?ver=22.26",
        menuList: [
            {
            id:7,
            menuName:"Classic Chicken Biryani Bucket-Large",
            price: 475.86,
            type:"non-veg",
            
            
            desc:"Large portions of our new Hyderabadi style Biryani rice served with 2 pc Hot & Crispy Chicken & 2 Spicy Gravies [serves 2]",
            img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/t0ev2on1riwnzmmzin4t",
        },
        {
            id:8,
            menuName:"Veg Biryani Bucket",
            price: 188.57,
            type:"veg",
            
            
            desc:"New Hyderabadi style Biryani rice served with a crispy Veg Patty & a Spicy Gravy [serves 1]",
            img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/owthzjdjtwqladefseoj",
        },
        {
            id:9,
            menuName:"Smoky Grilled Chicken Biryani Bucket",
            price: 288.34,
            type:"non-veg",
            
            
            desc:"New Hyderabadi style Biryani rice served with 1 pc Smoky Red Chicken & a Spicy Gravy [serves 1]",
            img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/fqbeyat62s8dxbdjq3i4",
        },
    ]
    }
]

let container=document.getElementById("restaurantList");

if(!localStorage.getItem("kfc")){
    localStorage.setItem("kfc",JSON.stringify(foodMenu))
}


let foodMenu_array=JSON.parse(localStorage.getItem("kfc"));
//console.log(foodMenu_array);
function returnCards(foodMenu){
    return"<div class=row\">" +foodMenu.map(kfc=>`
    <div id="kfcCards"  class="col-4 flex">
    <a href="view.html?foodName=${kfc.foodName}">
    
    <div class="card-item Card ">
    <img src="${kfc.img}" class="card-img-top" alt=""/>
        <div class="card-body">
            <h5 class="card-title">${kfc.foodName}</h5>
            
        </div>
</div>
</a>
</div>`).join('') + "</div>";
}


container.innerHTML = returnCards(foodMenu);
//localStorage.setItem("kfc",JSON.stringify(foodMenu));