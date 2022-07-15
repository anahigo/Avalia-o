$(document).ready(function (){
    $('.ui.form.pivot').form({
        fields: {
            name: {
                identifier: 'namePivot',
                rules: [
                    {
                    type   : 'empty',
                    prompt : 'O campo "Nome" deve ser preenchido'
                    }
                ]
            },
            email: {
                identifier: 'emailPivot',
                rules: [
                    {
                        type   : 'empty',
                        prompt : 'O campo "E-mail" deve ser preenchido'
                    },
                    {
                        type   : 'regExp',
                        value : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
                        prompt : 'O campo "E-mail" deve ser preenchido corretamente'
                    }
                ]
            },
            phone: {
                identifier: 'phonePivot',
                rules: [
                    {
                        type   : 'empty',
                        prompt : 'O campo "Telefone" deve ser preenchido'
                    },
                    {
                        type   : 'regExp',
                        value : /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/i,
                        prompt : 'O campo "Telefone" deve ser preenchido corretamente'
                    }
                ]
            },
            subject: {
                identifier: 'subjectPivot',
                rules: [
                    {
                    type   : 'empty',
                    prompt : 'O campo "Assunto" deve ser preenchido'
                    }
                ]
            },
            message: {
                identifier: 'messagePivot',
                rules: [
                    {
                    type   : 'empty',
                    prompt : 'O campo "Mensagem" deve ser preenchido'
                    }
                ]
            },
        },
    })
    $("#submitPivot").on("click", function(e) {
        e.preventDefault();
        if($('.ui.form.pivot').form('is valid')) {
            var dataPivot = $(".ui.form.pivot").form("get values");
            sessionStorage.setItem('dataPivot', JSON.stringify(dataPivot))
        };
    });
});