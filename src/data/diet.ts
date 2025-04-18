export type MealEvent = {
  label: string;
  start: string; // 24-hr format e.g., '08:30'
  end?: string; // Optional end time
  category: "meal" | "drink" | "supplement" | "workout" | "snack" | "routine";
  items: string[];
};

export type DayPlan = MealEvent[];

export type WeeklyPlan = {
  [day in
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday"]: DayPlan;
};

export const weeklyPlan: WeeklyPlan = {
  Monday: [
    {
      start: "08:30",
      label: "Waking Up",
      category: "routine",
      items: [
        "Aloe vera juice 1 tbsp in 200 ml water",
        "RESET tablet",
        "Nutrition/Probiotic 1 tablet",
        "Soaked almonds 3–4 nos",
      ],
    },
    {
      start: "09:00",
      label: "Morning Drink",
      category: "drink",
      items: ["Black coffee 150 ml"],
    },
    {
      start: "10:15",
      end: "10:30",
      label: "Breakfast",
      category: "meal",
      items: [
        "Vegetable poha 1 cup",
        "Beetroot juice 150g–200g",
        "CoQ10 tablet",
        "Himalaya Gokshura tablet",
      ],
    },
    {
      start: "12:00",
      label: "Midday Beverage",
      category: "drink",
      items: ["Coconut water 200 ml"],
    },
    {
      start: "14:30",
      end: "15:30",
      label: "Lunch",
      category: "meal",
      items: [
        "Rice (Basmati) 150g",
        "Chicken stir fry 1 cup 150g",
        "Any seasonal sabzi 150g–200g",
        "Cucumber carrot sticks (few)",
        "Omega 3 softgel",
        "Ajwain water 500 ml",
      ],
    },
    {
      start: "17:30",
      label: "Snack",
      category: "snack",
      items: ["Protein bar 1 nos", "Water 200 ml", "1 scoop collagen powder"],
    },
    {
      start: "19:45",
      end: "20:15",
      label: "Dinner",
      category: "meal",
      items: [
        "Rice Noodles with veggies & minced meat 200g",
        "Salad bowl 150g",
      ],
    },
    {
      start: "20:30",
      label: "Workout",
      end: "21:30",
      category: "workout",
      items: ["Lime Chia seeds water 500 ml"],
    },
    {
      start: "21:45",
      label: "Post-Workout",
      category: "meal",
      items: ["Protein milkshake (20g protein)"],
    },
    {
      start: "23:30",
      label: "Bedtime",
      category: "supplement",
      items: [
        "HealthyHey/ Magnesium Glycinate 1 tablet",
        "Health Aid/Selenium 1 tablet",
        "CCF water 200 ml",
      ],
    },
  ],
  Tuesday: [
    {
      start: "08:30",
      label: "Waking Up",
      category: "routine",
      items: [
        "Aloe vera juice 1 tbsp in 200 ml water",
        "RESET tablet",
        "Nutrition/Probiotic 1 tablet",
        "Soaked almonds 3–4 nos",
      ],
    },
    {
      start: "09:00",
      label: "Morning Drink",
      category: "drink",
      items: ["Black coffee 150 ml"],
    },
    {
      start: "11:00",
      label: "Breakfast",
      category: "meal",
      items: [
        "Mixed fruit bowl 200g",
        "TIdli 2–4 nos",
        "Sambhar 1 cup",
        "CoQ10 tablet",
        "Himalaya Gokshura tablet",
      ],
    },
    {
      start: "12:00",
      label: "Midday Beverage",
      category: "drink",
      items: ["Coconut water 200 ml"],
    },
    {
      start: "14:00",
      label: "Lunch",
      end: "14:30",
      category: "meal",
      items: [
        "Buttermilk 200 ml",
        "Mixed Dal Khichdi with veggies 200g",
        "Chicken stir fry 1 cup 150g",
        "Cucumber carrot sticks (few)",
        "Omega 3 softgel",
        "Ajwain water 500 ml",
      ],
    },
    {
      start: "17:30",
      label: "Snack",
      category: "snack",
      items: ["Protein bar 1 nos", "Water 200 ml", "1 scoop collagen powder"],
    },
    {
      start: "20:00",
      label: "Dinner",
      end: "20:30",
      category: "meal",
      items: ["Gluten free pasta 1 cup 200g", "Minced meat"],
    },
    {
      start: "20:30",
      label: "Workout",
      end: "21:30",
      category: "workout",
      items: ["Lime Chia seeds water 500 ml"],
    },
    {
      start: "21:45",
      label: "Post-Workout",
      category: "meal",
      items: ["Protein milkshake (20g protein)"],
    },
    {
      start: "23:30",
      label: "Bedtime",
      category: "supplement",
      items: [
        "HealthyHey/ Magnesium Glycinate 1 tablet",
        "Health Aid/Selenium 1 tablet",
        "CCF water 200 ml",
      ],
    },
  ],
  Wednesday: [
    {
      start: "08:30",
      label: "Waking Up",
      category: "routine",
      items: ["Aloe vera juice", "RESET tablet", "Probiotic", "Soaked almonds"],
    },
    {
      start: "09:00",
      label: "Morning Drink",
      category: "drink",
      items: ["Black coffee"],
    },
    {
      start: "10:15",
      end: "10:30",
      label: "Breakfast",
      category: "meal",
      items: ["Vegetable upma", "Beetroot juice", "CoQ10", "Gokshura"],
    },
    {
      start: "12:00",
      label: "Midday Beverage",
      category: "drink",
      items: ["Coconut water"],
    },
    {
      start: "14:30",
      end: "15:30",
      label: "Lunch",
      category: "meal",
      items: [
        "Rice",
        "Rajma or chole",
        "Chicken or paneer",
        "Cucumber sticks",
        "Omega-3",
        "Ajwain water",
      ],
    },
    {
      start: "17:30",
      label: "Snack",
      category: "snack",
      items: ["Protein bar", "Collagen water"],
    },
    {
      start: "19:45",
      end: "20:15",
      label: "Dinner",
      category: "meal",
      items: ["Rice noodles or millet", "Minced chicken/tofu", "Salad bowl"],
    },
    {
      start: "20:30",
      end: "21:30",
      label: "Workout",
      category: "workout",
      items: ["Lime chia water"],
    },
    {
      start: "21:45",
      label: "Post-Workout",
      category: "meal",
      items: ["Protein milkshake"],
    },
    {
      start: "23:30",
      label: "Bedtime",
      category: "supplement",
      items: ["Magnesium glycinate", "Selenium", "CCF water"],
    },
  ],
  Thursday: [
    {
      start: "08:30",
      label: "Waking Up",
      category: "routine",
      items: ["Aloe vera juice", "RESET tablet", "Probiotic", "Soaked almonds"],
    },
    {
      start: "09:00",
      label: "Morning Drink",
      category: "drink",
      items: ["Black coffee"],
    },
    {
      start: "10:15",
      end: "10:30",
      label: "Breakfast",
      category: "meal",
      items: ["Vegetable poha", "Beetroot juice", "CoQ10", "Gokshura"],
    },
    {
      start: "12:00",
      label: "Midday Beverage",
      category: "drink",
      items: ["Coconut water"],
    },
    {
      start: "14:30",
      end: "15:30",
      label: "Lunch",
      category: "meal",
      items: [
        "Rice",
        "Sabzi",
        "Chicken or lentils",
        "Cucumber sticks",
        "Omega-3",
        "Ajwain water",
      ],
    },
    {
      start: "17:30",
      label: "Snack",
      category: "snack",
      items: ["Protein bar", "Collagen water"],
    },
    {
      start: "19:45",
      end: "20:15",
      label: "Dinner",
      category: "meal",
      items: ["Quinoa bowl", "Minced meat or tofu", "Light salad"],
    },
    {
      start: "20:30",
      end: "21:30",
      label: "Workout",
      category: "workout",
      items: ["Lime chia water"],
    },
    {
      start: "21:45",
      label: "Post-Workout",
      category: "meal",
      items: ["Protein milkshake"],
    },
    {
      start: "23:30",
      label: "Bedtime",
      category: "supplement",
      items: ["Magnesium glycinate", "Selenium", "CCF water"],
    },
  ],
  Friday: [
    {
      start: "08:30",
      label: "Waking Up",
      category: "routine",
      items: ["Aloe vera juice", "RESET tablet", "Probiotic", "Soaked almonds"],
    },
    {
      start: "09:00",
      label: "Morning Drink",
      category: "drink",
      items: ["Black coffee"],
    },
    {
      start: "10:15",
      end: "10:30",
      label: "Breakfast",
      category: "meal",
      items: ["Besan chilla", "Beetroot juice", "CoQ10", "Gokshura"],
    },
    {
      start: "12:00",
      label: "Midday Beverage",
      category: "drink",
      items: ["Coconut water"],
    },
    {
      start: "14:30",
      end: "15:30",
      label: "Lunch",
      category: "meal",
      items: [
        "Rice",
        "Green vegetables",
        "Paneer or tofu",
        "Cucumber sticks",
        "Omega-3",
        "Ajwain water",
      ],
    },
    {
      start: "17:30",
      label: "Snack",
      category: "snack",
      items: ["Protein bar", "Collagen water"],
    },
    {
      start: "19:45",
      end: "20:15",
      label: "Dinner",
      category: "meal",
      items: ["Rice noodles", "Minced chicken or meat", "Steamed veggies"],
    },
    {
      start: "20:30",
      end: "21:30",
      label: "Workout",
      category: "workout",
      items: ["Lime chia water"],
    },
    {
      start: "21:45",
      label: "Post-Workout",
      category: "meal",
      items: ["Protein milkshake"],
    },
    {
      start: "23:30",
      label: "Bedtime",
      category: "supplement",
      items: ["Magnesium glycinate", "Selenium", "CCF water"],
    },
  ],
  Saturday: [
    {
      start: "08:30",
      label: "Waking Up",
      category: "routine",
      items: ["Aloe vera juice", "RESET tablet", "Probiotic", "Soaked almonds"],
    },
    {
      start: "09:00",
      label: "Morning Drink",
      category: "drink",
      items: ["Black coffee"],
    },
    {
      start: "10:15",
      end: "10:30",
      label: "Breakfast",
      category: "meal",
      items: ["Oats porridge", "Beetroot juice", "CoQ10", "Gokshura"],
    },
    {
      start: "12:00",
      label: "Midday Beverage",
      category: "drink",
      items: ["Coconut water"],
    },
    {
      start: "14:30",
      end: "15:30",
      label: "Lunch",
      category: "meal",
      items: [
        "Rice",
        "Mixed vegetables",
        "Grilled chicken",
        "Cucumber sticks",
        "Omega-3",
        "Ajwain water",
      ],
    },
    {
      start: "17:30",
      label: "Snack",
      category: "snack",
      items: ["Protein bar", "Collagen water"],
    },
    {
      start: "19:45",
      end: "20:15",
      label: "Dinner",
      category: "meal",
      items: ["Millet pulao", "Minced meat", "Steamed vegetables"],
    },
    {
      start: "20:30",
      end: "21:30",
      label: "Workout",
      category: "workout",
      items: ["Lime chia water"],
    },
    {
      start: "21:45",
      label: "Post-Workout",
      category: "meal",
      items: ["Protein milkshake"],
    },
    {
      start: "23:30",
      label: "Bedtime",
      category: "supplement",
      items: ["Magnesium glycinate", "Selenium", "CCF water"],
    },
  ],
  Sunday: [
    {
      start: "08:30",
      label: "Waking Up",
      category: "routine",
      items: ["Aloe vera juice", "RESET tablet", "Probiotic", "Soaked almonds"],
    },
    {
      start: "09:00",
      label: "Morning Drink",
      category: "drink",
      items: ["Black coffee"],
    },
    {
      start: "10:15",
      end: "10:30",
      label: "Breakfast",
      category: "meal",
      items: [
        "Gluten-free toast with nut butter",
        "Beetroot juice",
        "CoQ10",
        "Gokshura",
      ],
    },
    {
      start: "12:00",
      label: "Midday Beverage",
      category: "drink",
      items: ["Coconut water"],
    },
    {
      start: "14:30",
      end: "15:30",
      label: "Lunch",
      category: "meal",
      items: [
        "Rice",
        "Seasonal sabzi",
        "Tofu/chicken",
        "Cucumber sticks",
        "Omega-3",
        "Ajwain water",
      ],
    },
    {
      start: "17:30",
      label: "Snack",
      category: "snack",
      items: ["Protein bar", "Collagen water"],
    },
    {
      start: "19:45",
      end: "20:15",
      label: "Dinner",
      category: "meal",
      items: ["Quinoa with vegetables", "Minced meat or tofu", "Salad"],
    },
    {
      start: "20:30",
      end: "21:30",
      label: "Workout",
      category: "workout",
      items: ["Lime chia water"],
    },
    {
      start: "21:45",
      label: "Post-Workout",
      category: "meal",
      items: ["Protein milkshake"],
    },
    {
      start: "23:30",
      label: "Bedtime",
      category: "supplement",
      items: ["Magnesium glycinate", "Selenium", "CCF water"],
    },
  ],
};
