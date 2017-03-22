class Allergies {
  constructor(score) {
    this.score = score;
    this.allergyScores = {
      'cats': 128,
      'pollen': 64,
      'chocolate': 32,
      'tomatoes': 16,
      'strawberries': 8,
      'shellfish': 4,
      'peanuts': 2,
      'eggs': 1
    }
  }

  list() {
    const allergies = [];
    let remaining_score = this.score;

    for (const allergen of Object.keys(this.allergyScores)) {
      const score = this.allergyScores[allergen];

      while (remaining_score >= score) {
        allergies.unshift(allergen);
        remaining_score -= score;
      }
    }
    return [...new Set(allergies)];
  }

  allergicTo(allergen) {
    return this.list().indexOf(allergen) > -1;
  }
}

module.exports = Allergies;
