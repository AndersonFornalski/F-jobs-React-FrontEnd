const  produtos = [{
    id:"1",
    name:"Torsilax 30cp",
    laboratorio:"Gsk",
    categoria:"Ético",
    imagem:"http://via.placeholder.com/350x250"
},
{
    id:"2",
    name:"Dipirona 500mg 10cp",
    laboratorio:"Prati",
    categoria:"Similar",
    imagem:"http://via.placeholder.com/350x250"
},
{
    id:"3",
    name:"Paracetamol Caixa 24cp",
    laboratorio:"Prati",
    categoria:"Genérico",
    imagem:"http://via.placeholder.com/350x250"
},
{
    id:"4",
    name:"Pantoprazol 40mg 42cp",
    laboratorio:"Biosintética",
    categoria:"Genérico",
    imagem:"http://via.placeholder.com/350x250"
},
{
    id:"5",
    name:"Pantoprazol 20mg 28cp",
    laboratorio:"Aché",
    categoria:"Ético",
    imagem:"http://via.placeholder.com/350x250"
}]

export const produtoReducer = (state = produtos, action) =>{
    switch(action.type){


        default:
            return state;
    }
}