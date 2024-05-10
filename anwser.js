function productFib(prod){
  let [n,nPlus]=[0,1]
  while(n*nPlus<prod){
    [n,nPlus]=[nPlus,nPlus+n]
  }
  return [n,nPlus,n*nPlus===prod]
}
