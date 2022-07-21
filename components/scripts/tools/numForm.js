export default function numForm ( num ) {
    if( num >= 1000 ) {
        num = num/1000
        if( num%1 != 0){
            num = num.toFixed(1)
            num += ""
            num = num.replace(".",",")+"k"
        }
        else if( num < 10) num = `${ num },0k`
        else { num = `${ num }k` }
    }
    else if( num >= 1000000 ) num = `${ num/1000000 }M`
    
    return num
}