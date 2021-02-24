var spilk = document.querySelector('.spilk'),
    rozvag = document.querySelector('.rozvag'),
    video = document.querySelector('.video'),
    result = document.querySelector('.result'),
    reg = document.querySelector('.reg'),
    alt = document.querySelector('.alt'),
    upsell = document.querySelector('.upsell'),
    main = document.querySelector('.main'),
    back = document.querySelector('.back'),
    fix = document.querySelector('.fix'),
    out = document.querySelector('.out'),
    out_add = document.querySelector('.out_add'),
    quantity = document.querySelector('.quantity')

function region() {
    var r = document.getElementsByName('radio');
        for (var i=0;i<r.length; i++) {
        if (r[i].checked && i == 0) {
            pln = 10
        } else if (r[i].checked && i == 1) {
            pln = 15
        }
        else if (r[i].checked && i == 2) {
            pln = 5
        }
    }
}

function percentCreate() {
    percent = upsell.value / resNum
    bonus = percent.toFixed(2) * resSum
}

result.onclick = function() {
    region()
    x = rozvag.value
    y = video.value
    z = spilk.value
    resSum = (x*30) + (y*50) + (z*20)
    resNum = +x + +y + +z
    reg.innerHTML = 'Разом:' + '<br>' + 'Реєстрацій: ' + resNum + 'шт ' +  '<br>' + ' Бонус: ' + resSum + 'грн '
    if (resNum < pln) {
        plan = pln - resNum
        out.style.color = 'red'
        out.innerHTML = 'Ви зробили меньше ' + pln + ' реєстрацій. Щоб отримати додатковий бонус зареєструйте ще ' + plan + ' СП'
        out_add.innerHTML = ''
    } else if ( upsell.value >= resNum ) {
        restart = resSum*2
        out.innerHTML = 'Додатковий бонус : ' +  resSum + 'грн'
        out_add.innerHTML = 'Загальний бонус : ' +  restart  + 'грн'
    } else {
        percentCreate()
        out.innerHTML = 'Додатковий бонус: ' +  Math.floor(percent.toFixed(2) * resSum) + 'грн'
        out_add.innerHTML = 'Загальний бонус : ' + Math.floor(resSum + bonus) + 'грн'
        
    } 
    
}
alt.onclick = function() {
    location.reload()
}

main.onclick = function() {
    fix.style.display = 'block' 
}

back.onclick = function() {
    fix.style.display = 'none' 
}


  