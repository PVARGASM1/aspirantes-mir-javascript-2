        function max (num){
        let resultado =[];

        if (num.length == []){
                return undefined
            }
        for (let i=0; i<num.length; i++){
            if (resultado < num[i]){
                resultado = num[i];
        }
    return max.indexOf(resultado);
        }
    }
            console.log(max([1, 2, 3])) // 3
            console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
            console.log(max([])) // undefined