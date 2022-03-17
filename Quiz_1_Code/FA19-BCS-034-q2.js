let palindrome=(str)=>{
    const array=str.split('');
    const reverse=array.reverse();
    const revStr=reverse.join('');
    if(str===revStr){
        console.log('String is a palindrome');
    }
    else{
        console.log('String is not a palindrome')
    }
}

palindrome('sadia');