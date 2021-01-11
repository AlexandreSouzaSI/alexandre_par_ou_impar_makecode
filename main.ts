let escolha_par_impar = 0
let escolha_maquina = 0
let resultado = 0
let escolha_humana = 0
input.onButtonPressed(Button.A, function () {
    escolha_par_impar = escolha_par_impar + 1
    if (escolha_par_impar == 3) {
        escolha_par_impar = 1
    }
    if (escolha_par_impar == 1) {
        images.createImage(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            # # # # #
            `).showImage(0)
    } else {
        images.createImage(`
            # # # # #
            # . . . #
            # # # # #
            # . . . .
            # . . . .
            `).showImage(0)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    escolha_maquina = randint(1, 4)
    if (escolha_maquina == 1) {
        images.createImage(`
            . # # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `).showImage(0)
    } else if (escolha_maquina == 2) {
        images.createImage(`
            # # # # #
            . . . . #
            # # # # #
            # . . . .
            # # # # #
            `).showImage(0)
    } else if (escolha_maquina == 3) {
        images.createImage(`
            # # # # #
            . . . . #
            # # # # #
            . . . . #
            # # # # #
            `).showImage(0)
    } else {
        images.createImage(`
            # . . . #
            # . . . #
            # # # # #
            . . . . #
            . . . . #
            `).showImage(0)
    }
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    resultado = (escolha_maquina + escolha_humana) % 2
    if (escolha_par_impar == 1) {
        if (resultado == 1) {
            images.createImage(`
                . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `).showImage(0)
        } else {
            images.createImage(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `).showImage(0)
        }
    }
    if (escolha_par_impar == 2) {
        if (resultado != 1) {
            images.createImage(`
                . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `).showImage(0)
        } else {
            images.createImage(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `).showImage(0)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    escolha_humana = escolha_humana + 1
    if (escolha_humana == 5) {
        escolha_humana = 1
    }
    if (escolha_humana == 1) {
        images.createImage(`
            . # # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `).showImage(0)
    } else if (escolha_humana == 2) {
        images.createImage(`
            # # # # #
            . . . . #
            # # # # #
            # . . . .
            # # # # #
            `).showImage(0)
    } else if (escolha_humana == 3) {
        images.createImage(`
            # # # # #
            . . . . #
            . # # # #
            . . . . #
            # # # # #
            `).showImage(0)
    } else {
        images.createImage(`
            # . . . #
            # . . . #
            # # # # #
            . . . . #
            . . . . #
            `).showImage(0)
    }
})
