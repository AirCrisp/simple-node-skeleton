class ApplicationRepository {
    constructor(db, sql) {
        this.db = db;
        this.addKeys = [];
        this.sql = sql;
    }

    add(values) {
        let valuesNeeded = {};
        this.addKeys.forEach((key)=>{
            valuesNeeded[key] = values[key];
        });
        return this.db.one(this.sql.add, valulesNeeded);
    }

    // remove(id) {
    //     return this.db.result('DELETE FROM products WHERE id = $1', +id, r => r.rowCount);
    // }

    // find(values) {
    //     return this.db.oneOrNone(sql.find, {
    //         userId: +values.userId,
    //         productName: values.name
    //     });
    // }

    all() {
        return this.db.any(this.sql.all);
    }
}

module.exports = ApplicationRepository;