// Factory Function
function createBankAccount(accountHolder, mobile, email, initialBalance) {
    let balance = initialBalance;
    return {
        accountHolder: accountHolder,
        mobile: mobile,
        email: email,
        deposit: function (amount) {
            if (amount > 0) {
                balance += amount;
                console.log("₹" + amount + " deposited successfully.");
            } else {
                console.log("Invalid Deposit Amount.");
            }
        },
        withdraw: function (amount) {
            if (amount <= 0) {
                console.log("Invalid Withdraw Amount.");
            } else if (amount > balance) {
                console.log("Insufficient Balance.");
            } else {
                balance -= amount;
                console.log("₹" + amount + " withdrawn successfully.");
            }
        },

        checkBalance: function () {
            console.log("Current Balance: ₹" + balance);
        },
        checkBankProfile: function () {
            console.log("------- Bank Profile -------");
            console.log("Account Holder : " + this.accountHolder);
            console.log("Mobile         : " + this.mobile);
            console.log("Email          : " + this.email);
            console.log("Balance        : ₹" + balance);
            console.log("----------------------------");
        }
    };
}
const account1 = createBankAccount(
    "Sanskriti Ahirwar",
    "9876543210",
    "sanskriti@gmail.com",
    10000
);
account1.deposit(5000);
account1.withdraw(3000);
account1.checkBalance();
account1.checkBankProfile();
const anotherAccount = createBankAccount(
    "s",
    "9123456789",
    "@gmail.com",
    5000
);

account1.checkBankProfile.call(anotherAccount);
account1.deposit.apply(anotherAccount, [2000]);
anotherAccount.checkBalance();