class FindSum{
    constructor(numbers){
        this.numbers = numbers;
    }

    sum() {
        let result = this.numbers.reduce(function(a, n) {
            if(n > 0) {
                return a + n;
            }else {
                return a;
            }
        }, 0);
        return result;
    }
}

function sumPos(a) {
    let s = new FindSum(a);
    return s.sum();
}

console.log(sumPos([1,2,3,-2]));