"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Dress",
          price: 500,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chudidhar",
          price: 999,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete("Products", {
      [Op.or]: [{ name: "Dress" }, { name: "Chudidhar" }],
    });
  },
};
