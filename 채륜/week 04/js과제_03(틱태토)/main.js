const { body } = document
const $result = document.createElement('div')
let turn = 'O'

const decisionWinner = (target) => {
    let rowIndex = 0
    let cellIndex
    rows.forEach((row, ri) => {
        row.forEach((cell, ci) => {
            if(cell === target) {
                rowIndex = ri
                cellIndex = ci
            }
        })
    })

    let existWinner = false

    if(rows[rowIndex][0].textContent === turn &&
        rows[rowIndex][1].textContent === turn &&
        rows[rowIndex][2].textContent === turn) {
            existWinner = true
        }

    if(rows[0][cellIndex].textContent === turn &&
        rows[1][cellIndex].textContent === turn &&
        rows[2][cellIndex].textContent === turn) {
            existWinner = true
        }

    if(row[0][2].textContent === turn &&
        row[1][1].textContent === turn &&
        row[2][0].textContent === turn) {
            existWinner = true
        }
        return existWinner
}

const rows = []

const turnback = (e) => {
    console.log('clicked')
    if(e.target.textContent !== '') {
        console.log('빈칸이 아닙니다')
        return
    } else {
        console.log('빈칸입니다')
        e.target.textContent = turn

        if(decisionWinner(e.target)) {
            $result.textContent = `${turn} 승리`
            $table.removeEventListener('click', turnback)
            return
        }

        let num = 0
        rows.forEach((row) => {
            row.forEach((cell) => {
                if(cell.textContent) {
                    num += 1
                }
            })
        })
        if(num === 8) {
            $result.textContent = '무승부'
            $table.removeEventListener('click', turnback)
            return
        }

        turn = turn === 'O'? 'X' : 'O'
    }
}

const $table = document.createElement('table')
for(let i = 0; i < 3; i++) {
    const $tr = document.createElement('tr')
    const cells = []
    for(let j = 0; j < 3; j++) {
        const $td = document.createElement('td')
        cells.push($td)
        $tr.append($td)
    }
    rows.push(cells)
    $table.append($tr)
}
$table.addEventListener('click', turnback)
body.append($table)
body.append($result)