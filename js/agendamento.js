//AGENDAMENTO

$(document).ready(function(){


    // APLICANDO DADOS DA CLINICA
    let dadosCli = JSON.parse(localStorage.getItem('dadosClinica'));
    let dadosHis = JSON.parse(localStorage.getItem('dadosHistorico'));

    $('input[name="nome-clinica"]').val(dadosCli.nome);

    // dados para o historico
    $('.btn-submit').click(function(event) {
        /* Act on the event */
        event.preventDefault();
        let clinica = $('input[name="nome-clinica"]').val();    
        let servico = $('input[name="servico"]').val();
        let d = new Date();
        let dataAgendamento = d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear();
        let agendadoPara = $('input[name="data-consulta"]').val();
        agendadoPara = agendadoPara.replace(/-/g, '/');
        agendadoPara = agendadoPara.split('/').reverse().join('/');

        let hisDados = {
            clinica: clinica,
            servico: servico,
            dataAgendamento: dataAgendamento,
            agendadoPara, agendadoPara
        };
        dadosHis.historico.unshift(hisDados);
        localStorage.setItem('dadosHistorico', JSON.stringify(dadosHis));
        $( '.overlay-msg' ).css('display', 'flex');
        $('body').css('overflow', 'hidden');
        setTimeout(function(){ window.location.assign('loginPaciente.html'); }, 2500);
        // window.location.assign('loginPaciente.html');
        // console.log(hisDados);
        
    });

    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    $('#cpfP').mask('000.000.000-00');
    $('#contatoP').mask('(00) 00000-0000');
    // $('#dataP').mask('00/00/0000');

    $('#cpfPg').mask('000.000.000-00');

    $('#validade-cartao').mask('00/00');

    $('#prox').click(function( event ) {
        event.preventDefault();
        $(this).parents('.tabs').hide(100);
        $(this).parents('.tabs').next().show(100);
    });

    $('#ant').click(function( event ) {
        event.preventDefault();
        $(this).parents('.tabs').hide(100);
        $(this).parents('.tabs').prev().show(100);
    });
    
    $( '#pg-din' ).click(function(){
        $( '.pg-aut' ).hide(100);
    });

    $( '#pg-aut' ).click(function(){
        $( '.pg-aut' ).show(100);
    });

    $( 'input[name=pgAut]' ).on( "click", function() {
        let id = $( "input[name=pgAut]:checked").val();
        $('.aut-form').hide();
        $('#'+id).show();
    });


});

