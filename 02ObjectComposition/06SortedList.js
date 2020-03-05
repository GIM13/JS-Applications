function solve() {
    
    class SortedList {

        constructor() {

            this.sortedList = [];
            this.size = this.sortedList.length;
        }

        add = (num) => {

            this.sortedList.push(num);
            this.size = this.sortedList.length;

            return this.sortedList.sort((a, b) => a - b);
        }

        remove = (num) => {

            if (0 <= num && num < this.sortedList.length) {

                this.sortedList = this.sortedList.filter(x => this.sortedList.indexOf(x) !== num);
                this.size = this.sortedList.length;
               
                return this.sortedList;
            }
        }

        get = (num) => {

            if (0 <= num && num < this.sortedList.length) {

                return this.sortedList[num];
            }
        }
    }

    let sortList = new SortedList();
    return sortList;
}


// sortList.add(7);
// sortList.add(1);
// sortList.add(6);
// sortList.add(2);
// sortList.add(5);
// sortList.add(3);
// sortList.add(4);
// console.log(sortList.get(4));
// sortList.remove(5);
// console.log(sortList);