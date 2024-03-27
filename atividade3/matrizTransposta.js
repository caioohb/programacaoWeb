function transporMatriz(A) {
    let i; // linha
    let j; // coluna
    let transposta = []; // matriz transposta

    // Inicializa a matriz transposta com zeros
    for (i = 0; i < A[0].length; i++) {
        transposta[i] = [];
    }

    // Preenche a matriz transposta com os elementos da matriz original
    for (i = 0; i < A.length; i++) {
        for (j = 0; j < A[i].length; j++) {
            transposta[j][i] = A[i][j];
        }
    }

    // Exibe a matriz transposta
    for (i = 0; i < transposta.length; i++) {
        console.log(transposta[i]);
    }
}

const A = [[1, 2], [3, 4], [5, 6]];
transporMatriz(A);
