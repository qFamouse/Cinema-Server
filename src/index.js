const express = require('express');
const app = express();

// routers //
const usersRouter = require('./routers/UsersRoute');
const rolesRouter = require('./routers/RolesRoute');
const countriesRouter = require('./routers/CountriesRoute');
const genresRouter = require('./routers/GenresRoute');
const moviesRouter = require('./routers/MoviesRoute');
const seancesRouter = require('./routers/SeancesRoute');
const hallsRouter = require('./routers/HallsRoute');
const placesRouter = require('./routers/PlacesRoute');
const ticketsRouter = require('./routers/TicketsRoute');
const bookingRouter = require('./routers/BookingRoute');

// Database //
const sequelizeDB = require('./database/database');

sequelizeDB.authenticate()
    .then(() => console.log('Successful connection to the database'))
    .catch(e => console.log('Failed connection to the database. Exception: ' + e));

//

app.use(express.json()); // For answers in JSON

app.use(usersRouter);
app.use(rolesRouter);
app.use(countriesRouter);
app.use(genresRouter);
app.use(moviesRouter);
app.use(seancesRouter);
app.use(hallsRouter);
app.use(placesRouter);
app.use(ticketsRouter);
app.use(bookingRouter);

app.listen(8080, () => console.log('server is started'));