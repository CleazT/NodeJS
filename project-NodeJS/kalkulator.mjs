import { parse } from "path";
import readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function kalkulator() {
    input.question("Masukan Angka Pertama", angka1 => {
        console.info(angka1);
        input.question("Masukan Angka Kedua", angka2 => {
            console.info(angka2);
            input.question("Masukan operator (+, -, *, / ) : ", operator => {
                console.info(operator); 
                // if(operator === "+") {
                //     console.info(`Hasil penjumlahan adalah ${parseFloat
                //     (angka1) + parseFloat(angka2)}`);
                // }else if(operator === "-") {
                //     console.info(`Hasil pengurangan adalah ${parseFloat
                //     (angka1) - parseFloat(angka2)}`);
                // }else if(operator === "*") {
                //     console.info(`Hasil perkalian adalah ${parseFloat
                //     (angka1) * parseFloat(angka2)}`);
                // }else if(operator === "/") {
                //     console.info(`Hasil pembagian adalah ${parseFloat
                //     (angka1) / parseFloat(angka2)}`);
                // }else {
                //     console.info(`Operator tidak sesuai`);
                // }
                
                switch (operator) {
                    case "+":
                        console.info(`Hasil penjumlahan adalah ${parseFloat(angka1) + parseFloat(angka2)}`);
                        break;
                    case "-":
                        console.info(`Hasil pengurangan adalah ${parseFloat(angka1) - parseFloat(angka2)}`);
                        break;
                    case "*":
                        console.info(`Hasil perkalian adalah ${parseFloat(angka1) * parseFloat(angka2)}`);
                        break;
                    case "/":
                        console.info(`Hasil pembagian adalah ${parseFloat(angka1) / parseFloat(angka2)}`);
                        break;
                    default:
                        console.info(`Operator tidak sesuai`)
                }
                input.close();
            })
        })
    })
}

kalkulator();