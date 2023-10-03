document.addEventListener('DOMContentLoaded', () => {
    const recipeContainer = document.getElementById('recipeContainer');
    const searchInput = document.getElementById('search');
    const showAllButton = document.getElementById('showAll');
    const showVegButton = document.getElementById('showVeg');
    const showNonVegButton = document.getElementById('showNonVeg');
    const above4_5Radio = document.getElementById('above4.5');
    const below4_0Radio = document.getElementById('below4.0');

    function displayRecipes(recipes) {
        recipeContainer.innerHTML = '';
        recipes.forEach(recipe => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${recipe.imageSrc}" alt="${recipe.name}">
                <h2>${recipe.name}</h2>
                <p>Type: ${recipe.type}</p>
                <p>Time: ${recipe.time}</p>
                <p>Rating: ${recipe.rating}</p>
                <span class="likeButton" data-index="${recipes.indexOf(recipe)}">&#x2665;</span>
            `;
            recipeContainer.appendChild(card);
        });
    }

    let filteredRecipes = [
            {
                "name": "Veggie Delight",
                "imageSrc": "https://source.unsplash.com/random?veggies",
                "time": "30 min",
                "type": "veg",
                "isLiked": false,
                "rating": 4.2
            },
            {
                "name": "Chicken Grill",
                "imageSrc": "https://source.unsplash.com/random?chicken",
                "time": "45 min",
                "type": "non-veg",
                "isLiked": false,
                "rating": 4.5
            },
            {
                "name": "Cheese Pizza",
                "imageSrc": "https://source.unsplash.com/random?pizza",
                "time": "40 min",
                "type": "veg",
                "isLiked": false,
                "rating": 4.1
            },
            {
                "name": "Steak",
                "imageSrc": "https://source.unsplash.com/random?steak",
                "time": "60 min",
                "type": "non-veg",
                "isLiked": false,
                "rating": 4.7
            },
            {
                "name": "Grilled Salmon",
                "imageSrc": "https://source.unsplash.com/random?salmon",
                "time": "50 min",
                "type": "non-veg",
                "isLiked": false,
                "rating": 4.6
            },
            {
                "name": "Tomato Pasta",
                "imageSrc": "https://source.unsplash.com/random?pasta",
                "time": "35 min",
                "type": "veg",
                "isLiked": false,
                "rating": 4.0
            },
            {
                "name": "Vegan Salad",
                "imageSrc": "https://source.unsplash.com/random?salad",
                "time": "20 min",
                "type": "veg",
                "isLiked": false,
                "rating": 3.9
            },
            {
                "name": "Fried Chicken",
                "imageSrc": "https://source.unsplash.com/random?friedChicken",
                "time": "55 min",
                "type": "non-veg",
                "isLiked": false,
                "rating": 4.3
            },
            {
                "name": "Mushroom Risotto",
                "imageSrc": "https://source.unsplash.com/random?risotto",
                "time": "45 min",
                "type": "veg",
                "isLiked": false,
                "rating": 4.5
            },
            {
                "name": "Burger",
                "imageSrc": "https://source.unsplash.com/random?burger",
                "time": "30 min",
                "type": "non-veg",
                "isLiked": false,
                "rating": 4.2
            },
            {
                "name": "Paneer Tikka",
                "imageSrc": "https://source.unsplash.com/random?paneerTikka",
                "time": "40 min",
                "type": "veg",
                "isLiked": false,
                "rating": 4.4
            },
            {
                "name": "BBQ Ribs",
                "imageSrc": "https://source.unsplash.com/random?ribs",
                "time": "70 min",
                "type": "non-veg",
                "isLiked": false,
                "rating": 4.6
            },
            {
                "name": "Caesar Salad",
                "imageSrc": "https://source.unsplash.com/random?caesarSalad",
                "time": "25 min",
                "type": "veg",
                "isLiked": false,
                "rating": 3.8
            },
            {
                "name": "Fish Tacos",
                "imageSrc": "https://source.unsplash.com/random?fishTacos",
                "time": "35 min",
                "type": "non-veg",
                "isLiked": false,
                "rating": 4.3
            },
            {
                "name": "Chocolate Cake",
                "imageSrc": "https://source.unsplash.com/random?chocolateCake",
                "time": "90 min",
                "type": "veg",
                "isLiked": false,
                "rating": 4.9
            }
        
    ]; // Assuming recipes is your provided JSON array

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(query));
        displayRecipes(filteredRecipes);
    });

    showAllButton.addEventListener('click', () => {
        filteredRecipes = [...recipes];
        displayRecipes(filteredRecipes);
    });

    showVegButton.addEventListener('click', () => {
        filteredRecipes = recipes.filter(recipe => recipe.type === 'veg');
        displayRecipes(filteredRecipes);
    });

    showNonVegButton.addEventListener('click', () => {
        filteredRecipes = recipes.filter(recipe => recipe.type === 'non-veg');
        displayRecipes(filteredRecipes);
    });

    above4_5Radio.addEventListener('change', () => {
        filteredRecipes = recipes.filter(recipe => recipe.rating > 4.5);
        displayRecipes(filteredRecipes);
    });

    below4_0Radio.addEventListener('change', () => {
        filteredRecipes = recipes.filter(recipe => recipe.rating < 4.0);
        displayRecipes(filteredRecipes);
    });

    recipeContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('likeButton')) {
            const index = e.target.dataset.index;
            recipes[index].isLiked = !recipes[index].isLiked;
            // Add logic to toggle the like button appearance here if needed
        }
    });

    displayRecipes(filteredRecipes);
});

