class Store {
    constructor(id, monthIncomeList) {
        this.id = id;
        this.monthList = monthIncomeList;
    }
    calculateAnnualTotal() {
        return this.monthList.reduce((sum, monthIncome) => sum + monthIncome, 0)
    }
    calculateSellerPayment() {
        let annualTotal = this.calculateAnnualTotal();
        if (annualTotal <= 500000) return annualTotal * 3 / 100;
        else if (annualTotal < 700000) return annualTotal * 5 / 100;
    }
    printToPage() {
        const name = document.createElement('div');
        name.classList.add('text-center',"mt-5");        
        name.innerHTML = `شماره فروشگاه : ${this.id} ميزان فروش در سال : ${this.calculateAnnualTotal()} پرداختي به فروشنده : ${this.calculateSellerPayment()}`;
        document.getElementById('list').appendChild(name);
    }
};

const stores = [
    new Store(1,
        [
            20000,
            30000,
            40000,
            30000,
            50000,
            20000,
            10000,
            40000,
            30000,
            25000,
            55000,
            60000
        ]),
    new Store(2,
        [25000,
            35000,
            35000,
            30000,
            40000,
            10000,
            60000,
            50000,
            60000,
            35000,
            65000,
            80000
        ]),
    new Store(3,
        [40000,
            60000,
            10000,
            15000,
            75000,
            25000,
            45000,
            80000,
            30000,
            65000,
            75000,
            90000
        ])
]

let maxSeler = 0;
let maxSale = 0;
stores.map(s => {
    s.printToPage(); 
    let annualSale = s.calculateAnnualTotal();
    if (annualSale > maxSale){
        maxSale = annualSale;
        maxSeler = s.id
    } 
})

const bestSeller = document.createElement('p');
bestSeller.classList.add('text-center');
bestSeller.innerHTML = `فروشگاه ${maxSeler} با ${maxSale} فروش، بیشترین مقدار فروش سالیانه را دارد.`
document.getElementById('list').appendChild(bestSeller);