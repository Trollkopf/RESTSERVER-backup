const { response, request } = require('express');

const usuariosGet = ('/', (req = request , res = response)=>{

    const { q, nombre, key} = req.query;
    res.json({
        msg: 'get API! - controlador',
        q,
        nombre,
        key
    });
})

const usuariosPost = ('/', (req, res = response)=>{

    const body = req.body;

    res.json({
        msg: 'post API! - controlador',
        body
    });
})

const usuariosPut = ('/', (req, res = response)=>{
    const {id} = req.params;
    res.json({

        msg: 'put API! - controlador',
        id

    });
})

const usuariosPatch = ('/', (req, res = response)=>{
    res.json({
        msg: 'patch API! - controlador'
    });
})

const usuariosDelete = ('/', (req, res = response)=>{
    res.json({
        msg: 'delete API! - controlador'
    });
})




module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}