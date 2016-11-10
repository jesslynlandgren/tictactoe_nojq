
window.addEventListener('load', function(){
    var player = 'one';
    var counter = 0;
    var player1win = 0;
    var player1loss = 0;
    var draw = 0;

    var cells = document.querySelectorAll('.cell');
    var table = document.getElementById('table');
    var turn = document.getElementById('turn');
    table.addEventListener('click', function(event){
        cell = event.target;
        if (cell.textContent === '' && player === 'one'){
            cell.textContent = 'O';
            cell.classList = 'btn btn-info cell';
            player = 'two';
            turn.textContent = "PLAYER 2 - IT'S YOUR MOVE!";
            turn.classList = 'turn text-info';
            counter++;
        } else if (cell.textContent === '' && player === 'two'){
            cell.textContent = 'X';
            cell.classList = 'btn btn-success cell';
            player = 'one';
            turn.textContent = "PLAYER 1 - IT'S YOUR MOVE!";
            turn.classList = 'turn text-info';
            counter++;
        }
        existsWin(makeBoard());
    });

    var pauseModal = document.getElementById('pause-modal');
    var pause = document.getElementById('pause');
    pause.addEventListener('click', function(event){
        pauseModal.style.display = 'block';
    });

    var resume = document.getElementById('resume');
    resume.addEventListener('click', function(event){
        pauseModal.style.display = 'none';
    });

    function makeBoard() {
        var row1 = [];
        var row2 = [];
        var row3 = [];

        var row1cells = document.querySelectorAll('.row1 .cell');
        row1cells.forEach(function (cell){
            row1.push(cell.textContent);
        });
        var row2cells = document.querySelectorAll('.row2 .cell');
        row2cells.forEach(function (cell){
            row2.push(cell.textContent);
        });
        var row3cells = document.querySelectorAll('.row3 .cell');
        row3cells.forEach(function (cell){
            row3.push(cell.textContent);
        });
        var board = [row1, row2, row3];
        console.log(board);
        return board;
    }

    function existsWin(board){
        winner = document.getElementById('winner');
        modalBack = document.getElementById('modalback');
        if(tictactoe(board) === 'O'){
            winner.textContent = 'PLAYER 1 WINSSSSS';
            winner.classList.add('text-info');
            modalBack.classList.add('alert-info');
            ++player1win;
            yesWin();
        } else if(tictactoe(board) === 'X'){
            winner.textContent = 'PLAYER 2 WINSSSSS';
            winner.classList.add('text-success');
            modalBack.classList.add('alert-success');
            ++player1loss;
            yesWin();
        } else if (counter == 9){
            winner.textContent = 'NOOOO ONEEEE WINSSSSS';
            modalBack.classList.add('alert-danger');
            ++draw;
            yesWin();
        }
    }

    var message = document.getElementById('message');
    var winModal = document.getElementById('winmodal');
    var player1WinCount = document.querySelector('.player1 > .wincount');
    var player1LossCount = document.querySelector('.player1 > .losscount');
    var player1DrawCount = document.querySelector('.player1 > .drawcount');
    var player2WinCount = document.querySelector('.player2 > .wincount');
    var player2LossCount = document.querySelector('.player2 > .losscount');
    var player2DrawCount = document.querySelector('.player2 > .drawcount');
    function yesWin(){
        winModal.style.display = 'block';
        turn.textContent = "PLAYER 1 - IT'S YOUR MOVE!";
        turn.classList = 'turn text-info';
        if (player1win > player1loss) {
            message.textContent = 'Player 1 is king';
            message.classList = 'message text-info';
        } else if (player1loss > player1win) {
            message.textContent = 'Player 2 is king';
            message.classList = 'message text-success';
        }
        player1WinCount.textContent = player1win;
        player1LossCount.textContent = player1loss;
        player1DrawCount.textContent = draw;
        player2WinCount.textContent = player1loss;
        player2LossCount.textContent = player1win;
        player2DrawCount.textContent = draw;
    }

    playbutton = document.getElementById('playagain');
    playbutton.addEventListener('click', function(event){
        player = 'one';
        counter = 0;
        for (var i=0; i<cells.length; i++){
            cells[i].textContent = '';
            cells[i].classList = 'btn btn-default cell';
        }
        modalBack.classList = 'alert';
        winModal.style.display = 'none';
    });

    function tictactoe(grid) {
        for(i=0; i<3; i++) {
            if ((grid[i][0] == grid[i][1]) && (grid[i][1]== grid[i][2])) {
                if (grid[i][0] == 'O') {
                    return 'O';
                } else if (grid[i][0] == 'X') {
                    return 'X';
                }
            }
        }
        for(j=0; j<3; j++) {
            if ((grid[0][j] == grid[1][j]) && (grid[1][j]== grid[2][j])) {
                if (grid[0][j] == 'O') {
                    return 'O';
                } else if (grid[0][j] == 'X') {
                    return 'X';
                }
            }
        }
        if ((grid[0][0] == grid[1][1]) && (grid[1][1] == grid [2][2])) {
            if (grid[0][0] == 'O') {
                return 'O';
            } else if (grid[0][0] == 'X') {
                return 'X';
            }
        } else if ((grid[2][0] == grid[1][1]) && (grid[1][1]== grid [0][2])) {
            if (grid[2][0] == 'O') {
                return 'O';
            } else if (grid[2][0] == 'X') {
                return 'X';
            }
        } else {
            return null;
        }
        return null;
    }

});
