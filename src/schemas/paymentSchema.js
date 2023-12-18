const { gql } = require("apollo-server-express");

const PaymentSchema = gql`
  type Payment {
    id: ID!
    nim: String!
    bulan_tagihan_spp: String!
    nominal: Int!
    status: String!
  }

  type Mutation {
    makePayment: Payment
  }
`;

module.exports = PaymentSchema;
