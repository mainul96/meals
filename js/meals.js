const loadMeals = (search) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
    .then(res => res.json())
    .then(data => mealsDisplay(data.meals))

}

const mealsDisplay = meals =>{
    // console.log(meals)
    const containerBox = document.getElementById('container-box');
    containerBox.innerHTML = '';
    meals.forEach( meal => {
        // console.log(meal)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML =`
        <div class="card" onclick="mealsDetailsShow(${meal.idMeal})">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${meal.strMeal}</h5>
                  <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
              </div>
        `;
        containerBox.appendChild(div);
    });
}

const userGetInput = () =>{
    const inputFieldData = document.getElementById('inputField');
    const inputFieldText = inputFieldData.value;
    loadMeals(inputFieldText);
    inputFieldData.value = '';
}

const mealsDetailsShow = idMeal =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
    .then(res => res.json())
    .then(data=>mealShow(data.meals[0]))

}
const mealShow = meal =>{
    const getMealShowBox = document.getElementById('mealDetails');
    getMealShowBox.innerHTML='';
    const divShow = document.createElement('div');
    divShow.classList.add('col');

    divShow.innerHTML =`
    <div class="card" style="width: 18rem;">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    `;
    getMealShowBox.appendChild(divShow);
}
loadMeals('fish')