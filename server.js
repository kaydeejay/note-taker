const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log(`App Listening on PORT: ${PORT}`);
});