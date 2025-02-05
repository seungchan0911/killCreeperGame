const boss = document.querySelector('.boss')
const gageBar = document.querySelector('.gage-bar')
const level = document.querySelector('.level')
let currentIndex = 0
let levelIndex = 0
let click = true
level.textContent = `크리퍼 조지기!`

boss.addEventListener('click', () => {
    if (!click) return;

    let Hp = 100 - (10 * currentIndex)
    gageBar.style.width = Hp + "%"
    currentIndex++
    
    if (Hp < 1) {
        boss.style.opacity = .5
        levelIndex++
        level.textContent = `${levelIndex}번 뒤짐`
        currentIndex = 0
        click = false 

        setTimeout(() => {
            gageBar.style.width = "100%"
            boss.style.opacity = 1
            click = true
        }, 300);
    }
})
