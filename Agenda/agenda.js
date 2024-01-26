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
    abrirPagina(evt.target,"home.html");
   
});
btn_nome.addEventListener("click",(evt)=>{
    abrirPagina(evt.target,"nome.html");
    

});
btn_telefone.addEventListener("click",(evt)=>{
    abrirPagina(evt.target,"/telefone.html");
  
});
btn_editar.addEventListener("click",(evt)=>{  
    abrirPagina(evt.target,"/novos.html");

});
    btn_editar.addEventListener("click",(evt)=>{  
        abrirPagina(evt.target);"/editar.html");

btn_adicionar.addEventListener("click",(evt)=>{
        abrirPagina(evt.target,"/adicionar.html");
});
btn_pesquisar.addEventListener("click",(evt)=>{
        abrirPagina(evt.target,"pesquisar.html");
});
btn_gestão.addEventListener("click",(evt)=>{
        abrirPagina(evt.target,"/gestão.html");
});
    btn_sobre.addEventListener("click",(evt)=>{
        abrirPagina(evt.target,"./sobre.html");
    });

    const abrirPagina=(el,url)=>{
        const abas=[...document.querySelectorAll(".aba")];
        console.log(abas);
        abas.forEach(e=> {
            e.classList.remover("abaSelecionada");
            
        });
            el.classList.add("abaSelecionada");
            window.open(url,"if_principal");

    }








