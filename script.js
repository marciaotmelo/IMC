    const firstDiv = document.querySelector('.first-step');
    const secondDiv = document.querySelector('.second-step');
    const finalDiv = document.querySelector('.final-step');

    
    function go(currentStep,nextStep)
    {
        let dNone, dBlock;
        if(currentStep == 1)
        {
            dNone = firstDiv;
        }
        else if(currentStep == 2)
        {
            dNone = secondDiv;
        }
        else
        {
            dNone = finalDiv;
        }
        
        dNone.style.display = 'none';

        if(nextStep == 1)
        {
            dBlock = firstDiv;
        }
        else if(nextStep == 2)
        {
            dBlock = secondDiv;
        }
        else
        {
            dBlock = finalDiv;
        }
        dBlock.style.display = 'block';
    }

    function validate()
    {
        const peso   = document.getElementById('peso');
        const altura = document.getElementById('altura');
        peso.style.border   = 'none';
        altura.style.border = 'none';
        if(!peso.value || !altura.value)
        {
            if(!peso.value && !altura.value)
            {
                peso.style.border = '1px solid red';
                altura.style.border = '1px solid red';
            }
            else if(!peso.value)
            {
                peso.style.border = '1px solid red';
            }
            else
            {
                altura.style.border = '1px solid red';
            }
        }
        else
        {
            let imc = peso.value / (altura.value * altura.value);
            const result = document.getElementById('resultado');
            document.getElementById('imc-result').innerHTML = imc.toFixed(2).replace('.', ',');

            if(imc < 16.9)
            {
                console.log('Magreza');
                result.style.color = 'whith';
                result.innerHTML = 'Muito abaixo do peso';
            }
            else if(imc >= 17 && imc < 18.4)
            {
                console.log('Abaixo do Peso');
                result.style.color = 'whith';
                result.innerHTML = 'Abaixo do Peso';
            }
            else if(imc >= 18.5 && imc < 24.9)
            {
                console.log('Peso Normal');
                result.style.color = 'whith';
                result.innerHTML = 'Peso Normal';
            }
            else if(imc >= 25 && imc < 29.9)
            {
                console.log('Acima do Peso');
                result.style.color = 'whith';
                result.innerHTML = 'Acima do Peso';
            }
            else if(imc >= 30 && imc < 34.9)
            {
                console.log('Obesidade: I');
                result.style.color = 'whith';
                result.innerHTML = 'Este valor considera que você está na faixa: OBESIDADE GRAU I';
            }
            else if(imc >= 35 && imc < 40)
            {
                console.log('Obesidade: II');
                result.style.color = 'whith';
                result.innerHTML = 'Este valor considera que você está na faixa: OBESIDADE GRAU II';
            }
            else
            {
                console.log('Obesidade: III');
                result.style.color = 'red';
                result.innerHTML = 'Este valor considera que você está na faixa: OBESIDADE GRAU III';
            }
            go(2,3);
        }
    }