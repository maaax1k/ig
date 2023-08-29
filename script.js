function calculate(){
  var result = Math.floor(Math.random()*10+1)*100;;
  var kcal = document.getElementById('kkal');
  var brf = document.getElementById('brf');
  var fit = document.getElementById('fit');
  var book = document.getElementById('book');
  good = document.getElementById('good');
  var sum = Number (document.getElementById('sum').value) - 1000;
  if(!kcal.checked){
    result += 500;
  }
  if(!brf.checked){
    result += 400;
  }
  if(!fit.checked){
    result += 500;
  }
  if(sum>0){
    result +=sum;
  }
  
  if(book.checked){
    document.getElementById('result1').textContent = 'Music+';
  }
  else{
    document.getElementById('result1').textContent = 'Music-';
  }
  if(good.checked){
    document.getElementById('result2').textContent = 'Cs and Videos+';
  }
  else{
    document.getElementById('result2').textContent = 'Cs and Videos-';
  }
  document.getElementById('result').textContent = result + ' tg';
}
