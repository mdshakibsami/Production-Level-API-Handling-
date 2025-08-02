const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is running.......");
});

app.get("/api/products", (req, res) => {
  // Food items data
  const foodItems = [
    {
      id: 1,
      name: "Classic Burger",
      price: 12.99,
      description:
        "Juicy beef patty with lettuce, tomato, cheese, and our special sauce on a toasted bun",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
    },
    {
      id: 2,
      name: "Margherita Pizza",
      price: 16.5,
      description:
        "Traditional Italian pizza with fresh mozzarella, tomato sauce, and basil leaves",
      image:
        "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400",
    },
    {
      id: 3,
      name: "Caesar Salad",
      price: 9.99,
      description:
        "Crisp romaine lettuce with parmesan cheese, croutons, and creamy Caesar dressing",
      image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?w=400",
    },
    {
      id: 4,
      name: "Grilled Salmon",
      price: 22.95,
      description:
        "Fresh Atlantic salmon grilled to perfection, served with lemon butter sauce and vegetables",
      image:
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400",
    },
    {
      id: 5,
      name: "Chicken Tacos",
      price: 11.75,
      description:
        "Three soft shell tacos filled with seasoned grilled chicken, avocado, and salsa",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400",
    },
    {
      id: 6,
      name: "Spaghetti Carbonara",
      price: 14.25,
      description:
        "Classic Italian pasta with eggs, cheese, pancetta, and black pepper",
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc6d2c5f7?w=400",
    },
    {
      id: 7,
      name: "BBQ Ribs",
      price: 19.99,
      description:
        "Tender pork ribs slow-cooked with smoky BBQ sauce, served with coleslaw",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400",
    },
    {
      id: 8,
      name: "Vegetable Stir Fry",
      price: 10.5,
      description:
        "Fresh mixed vegetables stir-fried with ginger and soy sauce, served over rice",
      image:
        "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400",
    },
    {
      id: 9,
      name: "Chocolate Cake",
      price: 7.95,
      description:
        "Rich chocolate layer cake with chocolate frosting and berry garnish",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
    },
    {
      id: 10,
      name: "Fish and Chips",
      price: 13.99,
      description: "Beer-battered cod with crispy fries and tartar sauce",
      image: "https://images.unsplash.com/photo-1544982503-9f984c14501a?w=400",
    },
  ];

  if (req.query.search) {
    console.log(req.query.search, foodItems[0].name);
    const filterFoodItems = foodItems.filter((food) =>
      food.name.toLowerCase().includes(req.query.search)
    );
    console.log(filterFoodItems);
    res.send(filterFoodItems);
    return;
  }

  setTimeout(() => {
    res.send(foodItems);
  }, 4000);
});

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
