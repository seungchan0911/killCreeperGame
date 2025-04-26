const container = document.querySelector('.container')
const boss = document.querySelector('.boss')
const gageBar = document.querySelector('.gage-bar')
const level = document.querySelector('.level')
let currentIndex = 0
let levelIndex = 0
let click = true
let tenEffect = true
let fiftyEffect = true
level.textContent = `크리퍼 조지기!`
alert("게임설명 해드릴게여\n크리퍼를 죽일 때마다 랜덤으로 터져여\n100번 조져봐여!")

boss.addEventListener('click', () => {
    if (!click) return;
    
    currentIndex++
    let Hp = 100 - (10 * currentIndex)
    gageBar.style.width = Hp + "%"
    
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
        }, 500);

        let random = Math.floor(Math.random() * 21)
        console.log(random)
        if (random === 0) {
            alert("펑!")
            container.style.display = "none"
        }
    }

    if (levelIndex === 10 && tenEffect === true) {
        alert("오 열번 추카추카")

        tenEffect = false
    }
    if (levelIndex === 50 && fiftyEffect === true) {
        alert("50번 ㅁㅊ다...")
        
        fiftyEffect = false
    }
    if (levelIndex === 100) {
        boss.style.filter = "grayscale(100%)"
    }
})