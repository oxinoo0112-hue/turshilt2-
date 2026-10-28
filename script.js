// 1) Slider
var i=0,n=3,s=document.getElementById('slides');
function go(k){i=(k+n)%n;s.style.transform='translateX(-'+i*100+'%)'}
document.getElementById('next').onclick=function(){go(i+1)};
document.getElementById('prev').onclick=function(){go(i-1)};
setInterval(function(){go(i+1)},5000);

// 2) Data-driven sections (JS-ээр давтагдах хэсгийг үүсгэнэ)
var cats=['Нүүр будалт','Багц','Хүүхдийн','Чийгшүүлэгч','Цэвэрлэгээ','Нүд','Эрэгтэй','Маск','Арчилгаа','Бие','Уруул','Нарны'];
document.getElementById('cats').innerHTML=cats.map(function(c){return '<a class="cat" href="#"><i></i>'+c+'</a>'}).join('');

var products=[['Serum A','85,900₮','хямдралтай'],['Serum B','85,900₮','хямдралтай'],['Eyeshadow','21,900₮','бэлэгтэй'],['Mask','4,900₮','хямдралтай']];
document.getElementById('products').innerHTML=products.map(function(p){
  return '<a class="card" href="#"><div class="img"></div><div>'+p[0]+'</div><div class="price">'+p[1]+'<span class="tag">'+p[2]+'</span></div></a>'}).join('');

var branches=[['Encanto Mall','БЗД, 3-р давхар','11:00 - 21:00'],['Tara Center','ХУД, 2-р давхар','10:00 - 20:30'],['ITC салбар','СБД, 1-р давхар','11:00 - 21:00']];
document.getElementById('branchList').innerHTML=branches.map(function(b){
  return '<a class="branch" href="#"><b>'+b[0]+'</b><small>'+b[1]+'</small><small>Даваа - Ням: '+b[2]+'</small></a>'}).join('');
