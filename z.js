let price  = int(input("Price:"))
let deposit  = int(input("Deposit:"))
let percent  = int(input("Percents:"))
let per_mon  = int(input("Per month:"))
let debt = price - deposit
let per_year = per_mon*12
i = 0
if per_year < price1 * percent/100:
    print("unend")
else:
    while price1 >= per_year:
        price1 = (price1 - per_year)+(price1 - per_year)*(percent/100)
        i += 1
        print(round(price1),i)

    r = price1/per_mon

    print(i,"years",round(r),"month")