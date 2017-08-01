const universityController = {};


// if the university matches one of the db , use it if not make api call and store it into the db
universityController.findAll = (id) => {`
do
$do$
begin
     IF EXISTS (SELECT * FROM universities WHERE id = $1) then
     SELECT * FROM universities WHERE id=$1

else INSERT INTO universities VALUES( name , country,webpage_url)

END IF;
END
$do$
`};


module.exports = universityController;