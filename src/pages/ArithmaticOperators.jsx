const ArithmaticOperators = () => {
    return (
        <section className="w-full py-10">
            <div className="custom-container space-y-5">
                <div className="w-full">
                    <h2 className="mb-5 text-green-800 font-semibold text-2xl">
                        Arithmetic Operators
                    </h2>
                    <p className="pl-5 mb-2">
                        Arithmetic operators perform mathematical calculations on numbers within aggregation pipeline expressions like <span className="font-semibold text-green-600">$project</span> and <span className="font-semibold text-green-600">$addFields</span>.
                    </p>
                    <p className="pl-5 mb-5">
                        Let's imagine we have this <span className="font-semibold text-green-600">products</span> collection:
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
db.products.insertMany([
  { "_id": 1, "name": "Laptop", "price": 1000, "discount": 100, "quantity": 5 },
  { "_id": 2, "name": "Phone", "price": 500, "discount": 50, "quantity": 10 },
  { "_id": 3, "name": "Tablet", "price": 300, "discount": 30, "quantity": 8 }
]);
        `}</code>
                    </pre>
                </div>

                {/* 1. $add */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">1. $add</h3>
                    <p className="pl-5 mb-5">
                        This operator adds numbers together or adds numbers to dates.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
db.products.aggregate([
  {
    $project: {
      name: 1,
      price: 1,
      totalCost: { $add: ["$price", 50] }
    }
  }
])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, <span className="text-sm text-green-600 font-semibold">totalCost</span> adds a fixed tax amount of 50 directly to each product's base price.
                    </p>
                </div>

                {/* 2. $subtract */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">2. $subtract</h3>
                    <p className="pl-5 mb-5">
                        This operator subtracts the second argument from the first argument.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
db.products.aggregate([
  {
    $project: {
      name: 1,
      price: 1,
      discount: 1,
      discountedPrice: { $subtract: ["$price", "$discount"] }
    }
  }
])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, <span className="text-sm text-green-600 font-semibold">discountedPrice</span> subtracts the item's discount from its original price.
                    </p>
                </div>

                {/* 3. $multiply */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">3. $multiply</h3>
                    <p className="pl-5 mb-5">
                        This operator multiplies two or more numbers together and returns the product.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
db.products.aggregate([
  {
    $project: {
      name: 1,
      price: 1,
      quantity: 1,
      inventoryValue: { $multiply: ["$price", "$quantity"] }
    }
  }
])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, <span className="text-sm text-green-600 font-semibold">inventoryValue</span> calculates the total stock valuation by multiplying unit price by available quantity.
                    </p>
                </div>

                {/* 4. $divide */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">4. $divide</h3>
                    <p className="pl-5 mb-5">
                        This operator divides the first number by the second number.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
db.products.aggregate([
  {
    $project: {
      name: 1,
      pricePerItem: {
        $divide: [{ $subtract: ["$price", "$discount"] }, "$quantity"]
      }
    }
  }
])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, the discounted price is computed with <span className="text-sm text-green-600 font-semibold">$subtract</span> first and then divided across the item quantity to get the effective cost per unit.
                    </p>
                </div>

                {/* 5. $mod */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">5. $mod</h3>
                    <p className="pl-5 mb-5">
                        This operator divides the first number by the second and returns the remainder (modulus).
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
db.products.aggregate([
  {
    $project: {
      name: 1,
      quantity: 1,
      isEven: { $eq: [{ $mod: ["$quantity", 2] }, 0] }
    }
  }
])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, <span className="text-sm text-green-600 font-semibold">$mod</span> computes the remainder of quantity divided by 2, and <span className="text-sm text-green-600 font-semibold">$eq</span> checks if the remainder is 0 to verify whether the stock count is an even number.
                    </p>
                </div>

                {/* 6. $abs */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">6. $abs</h3>
                    <p className="pl-5 mb-5">
                        This operator returns the absolute value of a number, converting negative numbers into positive numbers.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
db.products.aggregate([
  {
    $project: {
      name: 1,
      priceDiscount: { $abs: { $subtract: ["$price", "$discount"] } }
    }
  }
])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, <span className="text-sm text-green-600 font-semibold">$abs</span> ensures that the difference between price and discount always resolves to a positive number.
                    </p>
                </div>

                {/* Additional Dataset for Rounding Operators */}
                <div className="w-full pt-5">
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        Rounding & Precision Operators
                    </h3>
                    <p className="pl-5 mb-5">
                        Let's imagine we have this <span className="font-semibold text-green-600">students</span> collection with decimal scores:
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
db.students.insertMany([
  { "_id": 1, "name": "Ram", "score": 85.7 },
  { "_id": 2, "name": "Tivin", "score": 92.3 },
  { "_id": 3, "name": "Sara", "score": 78.9 }
]);
        `}</code>
                    </pre>
                </div>

                {/* 7. $floor */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">7. $floor</h3>
                    <p className="pl-5 mb-5">
                        This operator returns the largest integer less than or equal to the specified number (always rounds down).
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
db.students.aggregate([
  {
    $project: {
      name: 1,
      floorScore: { $floor: "$score" }
    }
  }
])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, scores like 85.7 and 92.3 are rounded down to <span className="text-sm text-green-600 font-semibold">85</span> and <span className="text-sm text-green-600 font-semibold">92</span>.
                    </p>
                </div>

                {/* 8. $ceil */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">8. $ceil</h3>
                    <p className="pl-5 mb-5">
                        This operator returns the smallest integer greater than or equal to the specified number (always rounds up).
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
db.students.aggregate([
  {
    $project: {
      name: 1,
      ceilScore: { $ceil: "$score" }
    }
  }
])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, scores like 85.7 and 92.3 are rounded up to <span className="text-sm text-green-600 font-semibold">86</span> and <span className="text-sm text-green-600 font-semibold">93</span>.
                    </p>
                </div>

                {/* 9. $round */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">9. $round</h3>
                    <p className="pl-5 mb-5">
                        This operator rounds a number to a whole integer or to a specified decimal place using half-to-even rounding.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
db.students.aggregate([
  {
    $project: {
      name: 1,
      roundScore: { $round: ["$score", 0] }
    }
  }
])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, <span className="text-sm text-green-600 font-semibold">$round</span> rounds 85.7 to <span className="text-sm text-green-600 font-semibold">86</span> and 92.3 to <span className="text-sm text-green-600 font-semibold">92</span> based on the nearest whole number (place 0).
                    </p>
                </div>

                {/* 10. $trunc */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">10. $trunc</h3>
                    <p className="pl-5 mb-5">
                        This operator truncates a number by dropping fractional digits past a specified decimal place without rounding.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
db.students.aggregate([
  {
    $project: {
      name: 1,
      truncScore: { $trunc: "$score" }
    }
  }
])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, <span className="text-sm text-green-600 font-semibold">$trunc</span> removes all digits following the decimal point, converting 85.7 directly to <span className="text-sm text-green-600 font-semibold">85</span> and 78.9 directly to <span className="text-sm text-green-600 font-semibold">78</span>.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ArithmaticOperators;