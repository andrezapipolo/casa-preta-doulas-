const app = require('./src/app.js');

const PORT = process.env.PORT || 1313


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});