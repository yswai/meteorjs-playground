Template.registerHelper('money', function (val) {
   console.log(accounting);
   return accounting.formatMoney(val/100);
});