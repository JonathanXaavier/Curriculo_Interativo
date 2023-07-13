function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("HTML & CSS");
        habilidades[2].classList.add("Pacote Office (Excel, Word e Power Point)");
        habilidades[3].classList.add("Power BI");
        habilidades[4].classList.add("Lógica de Programação");
    }
}
window.onscroll = function(){
    efectoHabilidades();
} 