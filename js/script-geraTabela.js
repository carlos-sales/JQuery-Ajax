$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "nutrition.xml",
        dataType: "xml",
        success: function (xml) {
            //Variável criada para se compor o conteúdo da tabela utilizando tags HTML
            var conteudo= '';

            //Aqui se percorre o XML, transferindo o conteudo para a variável criada acima (juntamente com as tags para formação da tabela)
            $(xml).find('food').each(function () {

                conteudo += '<tr>';

                conteudo += '<td>';
                conteudo += $(this).find('name').text();
                conteudo += '</td>';
                conteudo += '<td>';
                conteudo += $(this).find('mfr').text();
                conteudo += '</td>';
                conteudo += '<td>';
                conteudo += $(this).find('serving').text();;
                conteudo += '</td>';
                conteudo += '<td>';
                conteudo += $(this).find('calories').text();;
                conteudo += '</td>';
                conteudo += '<td>';
                conteudo += $(this).find('total-fat').text();;
                conteudo += '</td>';
                conteudo += '<td>';
                conteudo += $(this).find('saturated-fat').text();;
                conteudo += '</td>';
                conteudo += '<td>';
                conteudo += $(this).find('cholesterol').text();;
                conteudo += '</td>';
                conteudo += '<td>';
                conteudo += $(this).find('sodium').text();;
                conteudo += '</td>';
                conteudo += '<td>';
                conteudo += $(this).find('carb').text();;
                conteudo += '</td>';
                conteudo += '<td>';
                conteudo += $(this).find('fiber').text();;
                conteudo += '</td>';
                conteudo += '<td>';
                conteudo += $(this).find('protein').text();;
                conteudo += '</td>';
                conteudo += '<td>';
                conteudo += $(this).find('vitamins').text();;
                conteudo += '</td>';
                conteudo += '<td>';
                conteudo += $(this).find('minerals').text();;
                conteudo += '</td>';
                
                conteudo += '</tr>';


            });
            
            //#tbody é a identificação do conteúdo gerado pelo XML. Trigger é necessário para método de ordenação da tabela (para atualizar ao se ordernar)
            $("#tbody").append(conteudo).trigger('update');
            $("#tabela").dataTable();             
        },
        error: function () {
            alert("Algo deu errado ao se percorrer o XML.");
        }
    });
});