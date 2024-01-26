const cabecalho=document.querySelector("#cabecalho");
const home=document.querySelector("#Home");
const nome=document.querySelector("#Nome");
const telefone=document.querySelector("#telefone");
const novos=document.querySelector("#Novos");
const editar=document.querySelector("#Editar");
const adicionar=document.querySelector("#Adicionar");
const pesquisar=document.querySelector("#Pesquisar");
const gestão=documnent.querySelector("#Gestão");
const sobre=document.querySelector("#Sobre");
const principal=document.querySelector("#principal")

btn_home.addEventListener("click",(evt)=>{
    console.log(evt.target);
    window.open("./home.html","if_principal");
});
btn_nome.addEventListener("click",(evt)=>{
    window.open("./nome.html","if_principal");

});
btn_telefone.addEventListener("click",(evt)=>{
    window.open("./telefone.html","if_principal");
});
btn_novos.addEventListener("click",(evt)=>{
    window.open("./novos.html","if_principal");
});
btn_editar.addEventListener("click",(evt)=>{ 
    window.open("./editar.html","if_principal");
});
btn_adicionar.addEventListener("click",(evt)=>{
    window.open("./adicionar.html","if_principal");
});
btn_pesquisar.addEventListener("click",(evt)=>{
    window.open("./pesquisar.html","if_principal");
});
btn_gestão.addEventListener("click",(evt)=>{
    window.open("./gestão.html","if_principal");
});
    btn_sobre.addEventListener("click",(evt)=>{
        window.open("./sobre.html","if_principal");
    });

    const selecionarAba=(el)>{
        const abas=[...document.querySelectorAll(".aba")];
        console.log(abas);
    }








