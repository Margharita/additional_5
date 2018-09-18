module.exports = function check(str, bracketsConfig) {
  let bracketsArr = [];

  for(let i = 0; i < bracketsConfig.length; i++){
  	let brack = "";
  	for(let j = 0; j < bracketsConfig[i].length; j++){
  		brack += bracketsConfig[i][j];
  	}
  	bracketsArr.push(brack);
  }
  for(let i = 0; i < str.length; i++){
  	for(let j = 0; j < bracketsArr.length; j++){
  	  if(str.indexOf(bracketsArr[j]) >= 0){
  	  	str = str.replace(String(bracketsArr[j]),'');
  	  	i--;
  	  	break;
  	  }
  	}
  }
  
  if(str.length === 0)
  	return true;
  else 
  	return false;
}

