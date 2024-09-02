function Kth_greatest_in_array(arr, k){

    for (let i = 0; i < k; i++){
        let max_index = i;
        let tmp = arr[i];

    
    for (let j = i+1; j < arr.lenght; j++){

        if(arr[j] > arr[max_index]){
            max_index = j;
        }
    }

    }

}