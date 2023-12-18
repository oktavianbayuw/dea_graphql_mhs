const PaymentRepository = require("../data/paymentRepository");

const PaymentResolver = {
  Mutation: {
    makePayment: async () => {
      return PaymentRepository.makePayment();
    },
  },
};

module.exports = PaymentResolver;
