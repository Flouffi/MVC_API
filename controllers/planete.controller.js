const Planet = require('../models/planete.model');

    
exports.planete_create = function(req,res){
    let planete = new Planet({
        nom: req.body.nom,
        distance: req.body.distance,
        photo: req.body.photo,
        diametre: req.body.diametre,
        temperature: req.body.temperature,
        masse: req.body.masse,
        revolution: req.body.revolution
    })
planete.save(err=>{
    if(err){
        res.send(err)
    }
res.json({'message':'Planete crée'})
})
}
exports.planete_list = function(req,res){
 Planet.find({}, function(err,planete){
    if(err){
        res.send(err);
    }
    else{
        res.json(planete)
    }
});
}
exports.planete_update = function(req,res){
    Planet.findByIdAndUpdate(req.body._id,req.body,{new:true},(err,planete)=>{
        if(err){
            res.send(err)
        }
        res.json({'product':planete})
    })
}

exports.planete_delete = function(req,res){
    Planet.findByIdAndDelete(req.body._id,(err,planet)=>{
        if(err){
            res.send(err)
        }
        res.json({'message':'Supprimé'})
    })
}

exports.planete_coucou = function(req,res){
    res.json({'message':'coucou'})
}

exports.planete_home = function(req,res){
        Planet.find({}, function(err,planete){
           if(err){
               res.send(err);
           }
           else{
            // Planete = JSON.stringify(planete);
            console.log(planete)

                res.render('index.pug', { title: 'Système Solaire', message:planete})
                res.end();
            
            
           }
       });
       }

