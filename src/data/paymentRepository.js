const axios = require("axios");

class PaymentRepository {
  async makePayment() {
    try {
      const response = await axios.post(
        "http://payment.digitalevent.id/api/payment",
        {}
      );
      return response.data;
    } catch (error) {
      console.error("Error making payment", error);
      throw error;
    }
  }
}

module.exports = new PaymentRepository();
