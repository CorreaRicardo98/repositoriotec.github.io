M.AutoInit();

$(document).ready(function() {
    $('input#input_text, textarea#textarea2').characterCounter();
  });

  $(document).ready(function(){
    $('input.autocomplete').autocomplete({
      data: {
        "Licenciatura en Administración": null,
        "Contador público": null,
        "Ingeniería Bioquímica": null,
        "Ingeniería Electrónica": null,
        "Ingeniería Eléctrica": null,
        "Ingeniería Industrial": null,
        "Ingeniería Mecatrónica": null,
        "Ingeniería Mecánica": null,
        "Ingeniería en Gestión Empresarial": null,
        "Ingeniería en Materiales": null,
        "Ingeniería en Sistemas Computacionales": null

      },
    });
  });