# from decimal import *

# getcontext().prec = 2
# total = Decimal(0);

#  This is the start of the program

total = 0
while 1:
    print ("You've inserted: "+"${:,.2f}".format(total/100))
    coin = input("> Enter coin (Q, D, N, X, DC): ").lower()
    if coin == 'x':
        break
    elif coin == 'q':
        total += 25
    elif coin == 'd':
        total += 10
    elif coin == 'n':
        total += 5
    elif coin == 'dc':
        total += 100
    else:
        print ("Unknown coin type")
    
while (total >= 65):

    print ("\nYou have "+"${:,.2f}".format(total/100)+" to spend.")
    print ("What would you like?")
    print (" 1. Doritos - $.75")
    print (" 2. Takis - $1.00")
    print (" 3. Mike & Ikes - $0.65")

    cost = 0
    while (cost == 0):
        choice = input("> Choice: ")
        if choice == '1':
            cost = 75
        elif choice == '2':
            cost = 100
        elif choice == '3':
            cost = 65
        else:
            print ("Invalid choice. Try again.")

    change = total - cost
    if change >= 0:
        print ("Your change: "+"${:,.2f}".format(change/100))
    else:
        print ("Sorry, you're "+"${:,.2f}".format(abs(change)/100)+" short.")
    total -= cost

