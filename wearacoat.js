function wereaCoat (temp){
  if(temp<0){
    return "stay inside";
  } else if ( temp<30){
    return "wear a coat and a hat"
  } else if ( temp<50){
    return "wear a coat"
  } else {
    return "wear whatever you want"
  }
}

console.log ( wereaCoat (15))
console.log ( wereaCoat (35))
console.log ( wereaCoat (58))
console.log ( wereaCoat (-2))

