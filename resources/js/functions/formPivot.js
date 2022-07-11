$(document).ready(function (){
    $('#namePivot').keyup(function(){
        var inputName  = $(this).val();
        sessionStorage.setItem('inputName', inputName);
        $('#dataNamePivot').text('Name: ' +  sessionStorage.getItem('inputName'));
    });
    $('#emailPivot').keyup(function(){
        var inputEmail  = $(this).val();
        sessionStorage.setItem('inputEmail', inputEmail);
        $('#dataEmailPivot').text('Email: ' +  sessionStorage.getItem('inputEmail'));
    });
    $('#phonePivot').keyup(function(){
        var inputPhone  = $(this).val();
        sessionStorage.setItem('inputPhone', inputPhone);
        $('#dataPhonePivot').text('Telefone: ' +  sessionStorage.getItem('inputPhone'));
    });
    $('#subjectPivot').keyup(function(){
        var inputSubject = $(this).val();
        sessionStorage.setItem('inputSubject', inputSubject);
        $('#dataSubjectPivot').text('Assunto: ' +  sessionStorage.getItem('inputSubject'));
    });
    $('#messagePivot').keyup(function(){
        var inputMessage = $(this).val();
        sessionStorage.setItem('inputMessage', inputMessage);
        $('#dataMessagePivot').text('Mensagem: ' +  sessionStorage.getItem('inputMessage'));
    });
})