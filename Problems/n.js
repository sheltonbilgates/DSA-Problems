// 
// 
function merge(x,y){
    let n = Math.min(x.length,y.length)
    temp = ''
    let i
    for( i=0; i<n; i++){
        temp = temp + x[i] + y[i]
    }
    return temp + x.slice(i) + y.slice(i)

}

console.log(merge("abc", "123456"));