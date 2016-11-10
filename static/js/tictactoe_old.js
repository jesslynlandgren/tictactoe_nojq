$(document).ready(function(){

    var player = 'one';
    counter = 0;
    computer = false;

    var player1win = 0;
    var player1loss = 0;
    var draw = 0;

    $('.cell').click(function(){
        if ($(this).text() === '' && player === 'one'){
            $(this).text('O');
            $(this).attr('class', 'btn btn-info cell');
            player = 'two';
            $('.turn').text("PLAYER 2 - IT'S YOUR MOVE!");
            $('.turn').attr('class', 'turn text-info');
            counter++;
        } else if ($(this).text() === '' && player === 'two'){
            $(this).text('X');
            $(this).attr('class', 'btn btn-success cell');
            player = 'one';
            $('.turn').text("PLAYER 1 - IT'S YOUR MOVE!");
            $('.turn').attr('class', 'turn text-info');
            counter++;
        }
        existsWin(makeBoard());
    });

    function makeBoard() {
        var row1 = $('.row1 .cell').text().split('');
        var row2 = $('.row2 .cell').text().split('');
        var row3 = $('.row3 .cell').text().split('');
        var board = [row1, row2, row3];
        return board;
    }

    function existsWin(board){
        if(tictactoe(board) === 'O'){
            $('.winner').text('PLAYER 1 WINSSSSS');
            $('.winner').addClass('text-info');
            $('#modalback').addClass('alert-info');
            ++player1win;
            yesWin();
        } else if(tictactoe(board) === 'X'){
            $('.winner').text('PLAYER 2 WINSSSSS');
            $('.winner').addClass('text-success');
            $('#modalback').addClass('alert-success');
            ++player1loss;
            yesWin();
        } else if (counter == 9){
            $('.winner').text('NO ONE WINSSSSS');
            $('#modalback').addClass('alert-danger');
            ++draw;
            yesWin();
        }
    }

    function yesWin(){
        $('#winmodal').modal('show');
        $('.turn').text("PLAYER 1 - IT'S YOUR MOVE!");
        $('.turn').attr('class', 'turn text-info');
        if (player1win > player1loss) {
            $('.message').text('Player 1 is king');
            $('.message').attr('class', 'message text-info');
        } else if (player1loss > player1win) {
            $('.message').text('Player 2 is king');
            $('.message').attr('class', 'message text-success');
        }
        $('.player1 .wincount').text(player1win);
        $('.player1 .losscount').text(player1loss);
        $('.player1 .drawcount').text(draw);
        $('.player2 .wincount').text(player1loss);
        $('.player2 .losscount').text(player1win);
        $('.player2 .drawcount').text(draw);

    }

    $('.playagain').click(function(){
        player = 'one';
        counter = 0;
        $('.cell').text('');
        $('.cell').attr('class', 'btn btn-default cell');
        $('#modalback').attr('class', 'alert');
        $('#winmodal').modal('hide');
    });

    $('.pause').click(function(){
        $('#pausemodal').modal('show');
    });

    $('.resume').click(function(){
        $('#pausemodal').modal('hide');
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
