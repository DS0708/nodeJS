const country = {
    name: "Korea",
    population: "5178579",
    get_name: function () {
        return this.name;
    }
};

country.name = "KR"

console.log(country)
console.log(country.get_name)
console.log(country.get_name())