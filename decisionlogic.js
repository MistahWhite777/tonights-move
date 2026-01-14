import dishes from "../data/dishes.json"

export function pickDish(answers) {
  if (answers.includes("Vegan")) {
    return dishes.find(d => d.diet === "vegan")
  }

  if (answers.includes("Vegetarian")) {
    return dishes.find(d => d.diet === "vegetarian")
  }

  return dishes[0] // fallback v1 logic
}
