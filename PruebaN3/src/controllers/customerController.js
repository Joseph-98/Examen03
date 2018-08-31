const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM Red_Biblioteca', (err, customers) => {
     if (err) {
      res.json(err);
     }
     res.render('customers', {
        data: customers
     });
    });
  });
};

controller.save=(req, res)=>{
  req.getConnection((error, conectar)=>{
    const datos=req.body;
    conectar.query('Insert into Red_Biblioteca set ?',datos,(error, data)=>{
      if(error) throw error;
      res.redirect('/')
    })
  });

}

controller.edit = (req, res) => {
  const  id = req.params.id_ciclovia;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM Red_Biblioteca WHERE Codigo = ?", [id], (err, rows) => {
      res.render('customers_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const id = req.params.id_ciclovia;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE Red_Biblioteca set ? where Codigo = ?', [newCustomer, id], (err, rows) => {
    res.redirect('/');
  });
  });
};

controller.delete = (req, res) => {
  const  id= req.params.id_ciclovia;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM Red_Biblioteca WHERE Codigo = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
}

module.exports = controller;
