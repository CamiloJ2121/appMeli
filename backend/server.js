const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const { json } = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

const URL_SEARCH = encodeURI('https://api.mercadolibre.com/sites/MLA/search?q=');
const URL_ID = encodeURI('https://api.mercadolibre.com/items/');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../server/build')));

app.get('/api/items', (req, res) => {
  const search = req.query.q || '';

  fetch(`${URL_SEARCH}${search}`)
    .then(result => {
      console.log(result);
      return result.json();
    })
    .then(body => ( res.json(initModelProduct(body))))
    .catch(error => {
      console.log(error);
      res.status(500);
      res.send('500 Server Error');
    });
  console.log('api/items called!')
});

const initModelProduct = results => {
  return {
      author:{
          name: "Camilo",
          lastname: "Jaime",
      },
      categories: category(results),
      items: modelProduct(results)
  }
}

const modelProduct = ({ results }) => {
  return results.map(key => {
      let amount = 0;
      if(key.prices.prices) { 
        amount = key.prices.prices.find(p => p.currency_id === key.currency_id).amount;
      } 
      return {
      id: key.id,
      title: key.title,
      price: {
              currency: key.currency_id,
              amount,
              decimals: key.price,
      },
      picture: key.thumbnail,
      condition: key.condition,
      free_shipping: key.shipping.free_shipping,
      city: key.address.city_name,
      }
  })
}

const category = ({ available_filters }) => {
  const nameCategory = "category";
  const category = available_filters.find(key => {
      if(key.id === nameCategory) {
        return key;
      }
  });
  if(category) {
    return category.values.sort(function(a, b) {
      const keyA = a.results,
      keyB = b.results;

      if (keyA > keyB) return -1;
      if (keyA < keyB) return 1;
      return 0;
    });
  }
  return [];
}

app.get('/api/items/:id', (req, res) => {
  const id = req.params.id;

  Promise.all([fetch(`${URL_ID}${id}`), fetch(`${URL_ID}${id}/description`)]).then(result => {
    return Promise.all([result[0].json(), result[1].json()]);
  })
  .then(body => res.json(initModelProductForId(body)))
  .catch(error => console.log(`Error in executing ${error}`))
});

const initModelProductForId = results => {
  return {
      author:{
          name: "Camilo",
          lastname: "Jaime",
      },
      item: modelProductForId(results)
  }
}

const modelProductForId = (results ) => {
  const product = results[0];
  const description = results[1].plain_text;
  return {
      id: product.id,
      title: product.title,
      price: {
          currency: product.currency_id,
          amount: product.available_quantity,
          decimals:product.price,
      },
      picture: product.thumbnail,
      condition: product.condition,
      free_shipping: product.shipping.free_shipping,
      sold_quantity: product.sold_quantity,
      description,
  }
}

app.get('/', (req,res) => {
  res.send(`<h1>Server ${port}</h1>`);
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
