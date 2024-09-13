
[VISIT THE WEBPAGE](https://veg-recipes-founder.netlify.app/)

***

# The GreenWay

The GreenWay is a React-based app that helps users find their favorite vegetarian or vegan recipes from the spoonacular database.

## How it works

On the "Get a recipe" page, you can fill out the form with the ingredient or dish you are seeking.

![App Screenshot](https://i.postimg.cc/MpzKQbxp/Screenshot-2024-09-13-164734.png)

Clicking the button will show a list of recipes.

![App Screenshot](https://i.postimg.cc/s2BTK6ZJ/Screenshot-2024-09-13-173045.png)

Clicking on a single recipe provides all its information.

![App Screenshot](https://i.postimg.cc/Prbp8qGT/Screenshot-2024-09-13-170730.png)

# Its functioning

The app is built with React using **Create-React-App**. It consists of various components in **JSX** that communicate with one another.

I also integrated **React Router**, **Axios**, and **Context API** to enhance functionality and ease of use.
## API Reference

#### Get recipes from query

```http
  https://api.spoonacular.com/recipes/complexSearch
```

| Headers | Parameters |
| :-------- | :------- |
| **Required** `x-api-key`, | diet: `vegetarian, vegan`|

#### Get item from id

```http
  https://api.spoonacular.com/recipes/random
```

| Headers | Parameters |
| :-------- | :------- |
| **Required** `x-api-key`, | includeTags: `vegetarian, vegan`| 


## Running Tests

To run the app, run the following command

```bash
  npm start
```


## License

[MIT](https://choosealicense.com/licenses/mit/)

