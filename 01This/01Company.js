class Company {

    constructor() {

        this.departments = []
    }

    addEmployee(username, salary, position, department) {

        if (!username  
            || !position  
            || !department
            || !salary) {

            throw new Error("Invalid input!");

        } else if (Number(salary) <= 0) {

            throw new Error(" Invalid input!");

        } else {

            if (!this.departments.filter(x => x.department === department)[0]) {

                let obj = {
                    department: department,
                    employees: []
                }

                this.departments.push(obj)
            }

            this.departments
                .filter(x => x.department === department)[0]
                .employees
                .push({ username: username, salary: +salary, position: position })

            return `New employee is hired. Name: ${username}. Position: ${position}`;
        }
    }

    averageSalary(arr = []) {
        
        return arr
            .reduce((acc, el) => {
                acc += el.salary
                return acc;
            }, 0) / arr.length;
    }

    bestDepartment() {

        let bestDep = this.departments.sort((a, b) => this.averageSalary(b.employees) - this.averageSalary(a.employees))[0];

        let aver = this.averageSalary(bestDep.employees);

        let result = `Best Department is: ${bestDep.department}\nAverage salary: ${aver.toFixed(2)}\n`

        bestDep.employees
            .sort((a, b) => b.salary - a.salary
                || a.username.localeCompare(b.username))
            .map(x => {
                result += `${x.username} ${x.salary} ${x.position}\n`

            });

        return result.trim();
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());


