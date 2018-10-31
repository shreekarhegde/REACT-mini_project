class Mean{
    constructor(array) {
        this.array = array;
    }

    mean() {
        let sum = 0, i;
        for (i = 0; i < this.array.length; i++){
            sum += this.array[i];
        }
        return Math.round(sum /i );
    }
}

function findMean(array) {
    let arr = new Mean(array);
    return arr.mean();
}

console.log(findMean([15,15,20,15]));