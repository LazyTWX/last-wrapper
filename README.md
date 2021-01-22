# Last Wrapper

- Um wrapper para facilitar o uso da API do **Last Silence**

- `getBot('ID'): Bot`

```js
const Last = require('last-wrapper');

Last.getBot('ID')
  .then(data => console.log(data))
  .catch(e => console.log(e));
```