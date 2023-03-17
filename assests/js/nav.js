const createNav=()=>{
  let nav=document.queryselector('.navbar');
  nav.innerHTML=`
    <div class="nav">
      <img src="https://imgur.com/hzIY1Q1"class="Brand-logo" alt="">
      <div class="nav-items">
        <div class="search">
          <input type="text" class= "search-box" placholder="">
          <button class="search-btn">search</button>
        </div>
        <a href="#"><img src="https://imgur.com/zrxsHnx alt=""></a>
        <a href="#"><img src="https://imgur.com/DvY5uEA alt=""></a>
      </div>
      </div>
    <ul class="links-container">
      <li class="link-item"><a href="#" class="link">home</a></li>
      <li class="link-item"><a href="#" class="link">cats</a></li>
      <li class="link-item"><a href="#" class="link">dogs</a></li>
      <li class="link-item"><a href="#" class="link">birds</a></li>
      <li class="link-item"><a href="#" class="link">offers</a></li>
      <li class="link-item"><a href="#" class="link">shipping</a></li>
      </ul> `;
}
createNav();
