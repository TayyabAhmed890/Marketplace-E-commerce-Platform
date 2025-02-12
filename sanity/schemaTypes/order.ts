export default {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: "user",
      title: "User Details",
      type: "object",
      fields: [
        { name: "id", title: "User ID", type: "string" }, // Added ID field
        { name: "name", title: "Name", type: "string" },
        { name: "email", title: "Email", type: "string" },
        { name: "address", title: "Address", type: "string" },
        { name: "phone", title: "Phone", type: "string" },
      ],
    },
    {
      name: "items",
      title: "Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Name", type: "string" },
            { name: "quantity", title: "Quantity", type: "number" },
            { name: "price", title: "Price", type: "number" },
            { name: "imageUrl", title: "Image URL", type: "url" },
          ],
        },
      ],
    },
    {
      name: "totalPrice",
      title: "Total Price",
      type: "number",
    },
    {
      name: "orderDate",
      title: "Order Date",
      type: "datetime",
    },
  ],
};
