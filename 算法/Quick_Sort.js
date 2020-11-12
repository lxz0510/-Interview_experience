let arr = [11, 3, 13, 4, 15, 6, 17]

function partition(arr,left,right){
    let pivot = arr[Math.floor(arr.length/2)];
    let i = left
    let j = right
    while(i <= j){
        while(arr[i] < pivot) i++
        while(arr[j] > pivot) j--
        if(i <= j){
            //执行交换S
            //交换的就是ij对应的下标的值
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }
    return i ;
}
function quick(arr,left,right){
    if(arr.length > 1 ){
        let index = partition(arr,left,right);
        if(left < index -1 ) quick(arr,left,index-1)
        if(right > index) quick(arr,index,right)
    }
    return arr 
}
function quickSort(arr) {
    return quick(arr, 0, arr.length - 1)
  }