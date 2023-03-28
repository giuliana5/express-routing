class Operations {

    // turn string into number array
    constructor(numString) {
        let numArr = numString.split(',');
        this.nums = numArr.map(Number);
    };


    mean() {
        const mean = this.nums.reduce((sum, num) => sum + num) / this.nums.length;
        return {
            operation: "mean",
            value: mean
        }
    };


    median() {
        const sortedNums = this.nums.sort((a, b) => a - b)
        const half = Math.floor(sortedNums.length / 2);
      
        if (this.nums.length % 2) {
            return {
                operation: "median",
                value: this.nums[half]
            };
        }
        
        return {
            operation: "median",
            value: (this.nums[half - 1] + this.nums[half]) / 2
        };
    };


    mode() {
    
        let numObj = {}
      
        for (let i = 0; i < this.nums.length; i++) {
            let num = this.nums[i];
    
            if (numObj[num]) {
                numObj[num] += 1;
            } else {
                numObj[num] = 1
            }
        }
      
        let largestVal = -1;
        let largestValKey = -1;
      
        Object.keys(numObj).forEach(key => {
            let value = numObj[key];
            if (value > largestVal) {
                largestVal = value;
                largestValKey = key;
            };
        })
      
        return {
            operation: "mode",
            value: largestValKey
        }
    };
};


module.exports = {
    Operations
};
