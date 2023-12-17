class FoodRatings {
  public foods: string[];
  public cuisines: string[];
  public ratings: number[];

  constructor(foods: string[], cuisines: string[], ratings: number[]) {
    this.foods = foods;
    this.cuisines = cuisines;
    this.ratings = ratings;
  }

  changeRating(food: string, newRating: number): void {
    const idx = this.foods.findIndex((_food) => _food === food);
    this.ratings[idx] = newRating;
  }

  highestRated(cuisine: string): string {
    let highestRatedFood = "",
      highestRating = -Infinity;
    for (let i = 0; i < this.cuisines.length; i++) {
      if (this.cuisines[i] === cuisine) {
        if (this.ratings[i] > highestRating) {
          highestRating = this.ratings[i];
          highestRatedFood = this.foods[i];
        } else if (this.ratings[i] === highestRating) {
          highestRatedFood =
            highestRatedFood + this.foods[i] < this.foods[i] + highestRatedFood
              ? highestRatedFood
              : this.foods[i];
        }
      }
    }
    return highestRatedFood;
  }
}

/**
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */
