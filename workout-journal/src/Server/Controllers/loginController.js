const db = require("../models/workoutModels");

const loginControllers = {
  async createUser(req, res, next) {
    try {
      //returned data
      const values = Object.values(req.body.formState);
      //console.log('REQ VALUES', values)
      const check = await db.query("SELECT * FROM user WHERE username = ($1)", [
        req.body.username,
      ]);
      //console.log('CHECK', check)
      if (check.rowCount === 0) {
        const result = await db.query(
          "INSERT INTO public.user(first_name, last_name, username, password) VALUES ($1, $2, $3, $4) RETURNING *",
          values
        );
        //figure out how to manipulate res from db
        res.locals.user = result.rows;
        //console.log('RESULT', result)
        return next();
      } else {
        res.locals.user = check.rows;
        return next();
      }
    } catch (err) {
      console.log(err);
      return next(err);
    }
  },
};
