$(document).ready(function (){
    $('#namePivot').keyup(function(){
        var inputName = $(this).val();
        $('#dataNamePivot').text('Name: ' + inputName);
    });
    $('#emailPivot').keyup(function(){
        var inputEmail  = $(this).val();
        $('#dataEmailPivot').text('Email: ' + inputEmail);
    });
    $('#phonePivot').keyup(function(){
        var inputPhone  = $(this).val();
        $('#dataPhonePivot').text('Telefone: ' +  inputPhone);
    });
    $('#subjectPivot').keyup(function(){
        var inputSubject = $(this).val();
        $('#dataSubjectPivot').text('Assunto: ' +  inputSubject);
    });
    $('#messagePivot').keyup(function(){
        var inputMessage = $(this).val();
        $('#dataMessagePivot').text('Mensagem: ' +  inputMessage);
    });
})