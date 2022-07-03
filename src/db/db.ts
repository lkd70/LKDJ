import Datastore from 'nedb-promises';

export default Datastore.create({ autoload: true, filename: './data.db'});
