exports.select = () => new Promise( async (resolve, reject) => {
    try {
        db.query('SELECT * FROM books', (err, result) => {
            if (err) throw err
            resolve(result)
        })
    } catch (error) {
        reject(error)
    }
})

exports.add = (req) => new Promise( async (resolve, reject) => {
    const request = JSON.parse(req)
    const sql = " INSERT INTO `books`(`_id`, `title`, `date`, `author`, `description`, `image`) VALUES ('', '" + request.title + "', '" + request.date + "', '" + request.author + "', '" + request.description + "', '" + request.image + "' ) "
    try {
        db.query(sql, (err, result) => {
            if (err) throw err
            resolve(result)
        })
    } catch (error) {
        reject(error)
    }
})

exports.search = (element, quantity) => new Promise ( async (resolve, reject) => {
    let TOP
    quantity ? TOP = "TOP "+ quantity : TOP = ""
    const sql = "SELECT * FROM books ORDER BY `" + element + "` DESC LIMIT "+ quantity
    try {
        db.query(sql, (err, result) => {
            if(err) throw err
            resolve(result)
        })
    } catch (error) {
        reject(error)
    }
})

exports.filter = (element, filter, quantity) => new Promise ( async (resolve, reject) => {
    const sql = "SELECT * FROM books WHERE `" + element + "` = '" + filter + "'DESC LIMIT "+ quantity
    try {
        db.query(sql, (err, result) => {
            if(err) throw err
            resolve(result)
        })
    } catch (error) {
        reject(errr)
    }
})

exports.put = (id, element, curentElement) => new Promise (async (resolve, reject) => {
    console.log(curentElement);
    
    const curElemObj = JSON.parse(curentElement)
    const sql = "UPDATE books SET `" + element + "` = '" + curElemObj.inner + "' WHERE `books`.`_id` = " + id
    console.log(sql);
    
    try {
        db.query(sql, (err, result) => {
            if(err) throw err
            resolve(result)
        })
    } catch (error) {
        reject(errr)
    }
})