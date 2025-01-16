function multiply(x,y){
    return x * y
    }
    
    function randomNumber(x,y){
        if(x > y) {
            let z = x 
            x = y 
            y = z
        }
        return Math.floor((Math.random() * (y-x)  ) + x) 
    }
    
    let arr = [1,5,3,7,23,64,12,432,52,14,2]
    
    function Sort(arr){
        for(i = 0; i< arr.length; i++) {
            for(j = 0; j<(arr.length - i); j++)
            if(arr[j] > arr[j+1]){
                let z = arr[j]
                arr[j] = arr[j+1] 
                arr[j+1] = z
            }
        }
        return arr
    }
    
    function primeLessThan(x){
        let primes = []
        if(x >= 2 )primes.push(2)
            if(x >= 3 )primes.push(3)
            if(x >= 5 )primes.push(5)
    for(y=0;y<x;y++){
        
    
        if(y%2 == 0 || y%3 == 0 || y%5 == 0) continue
        for(i = 0;  i < primes.length; i++)
                if(y%primes[i] == 0) continue
        primes.push(y)
        
    }
    return primes.sort((a,b) => a-b)
    }
    
    
    function isLeap(year){
     if ( year%4 == 0 && (year%100 !==0 || year% 400 ==0))
        return true
    else
    return false
    }
    
    function fibonacci(max){
        let arr = [0,1];
        
        while(arr[arr.length-1] + arr[arr.length-2] < max){
            arr.push(arr[arr.length-1] + arr[arr.length-2])
        }
        return arr
    }
    
    
    function oddEven(max){
        arr1 = [];
        arr2 = [];
        for (i=0; i<max; i++) i % 2 == 0 ? arr2.push(i) : arr1.push(i);
        return {
            odd: arr1,
            even: arr2
        }
    }
    
    // let object = {
    //     key1: value1,
    //     key2: value2
    // }
    
    function reverse (string){
        //Way 1
        let updatedString = ""
         for (let i = string.length-1 ; i >=0; i--) {
            updatedString += string[i]
         }
    
        //Way 2
         string = string.split('')
         for( i = 0; i < Math.floor(string.length/2); i++){
             let temp = string[i]
             string[i] = string[string.length - 1 - i]
             string[string.length - 1 - i] = temp
         }
         string = string.join('')
         
         //Way 3
         console.log(string.split('').reverse().join(''))
    
    }
    function checkPalindrome (string) {
        let temp = string.split('').reverse().join('')
        if (temp === string){
            return true
        }
        else{
            return false
        }
    
        
    }
    
    function maximum (array){
        let temp = array[0]
        for (let i = 0; i < array.length; i++) {
            if(temp< array[i]) temp = array[i] 
        }
        //return temp //way 1
    
        array.sort((a,b) => b-a)
        return array[0] // way 2
    }
    
    

      const data = require('./dataSet.json')
      //console.log(data)
    
    
      function sumstring (data)
      {
        let sum = 0
        for (let i = 0; i < data.length; i++) {
            sum += (data[i].address.zip)
        }
        return sum
      }
      console.log(sumstring(data))