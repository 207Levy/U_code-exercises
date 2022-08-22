const Bank = function () {
  let money = 500;
  const depositCash = function(cash){
    (money += cash);}
  const checkBalance = () => console.log(money);
  return {

    depositCash,
    checkBalance,
  };
};

const bank = Bank();
bank.depositCash(200);
bank.depositCash(250);
bank.checkBalance(); //should print 950
