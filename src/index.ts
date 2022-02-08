/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.get('/', (req, res) => {
	res.send('Bem vindo Ubuntu')
})

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);

	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05

	const nome1:string = 'Ubuntu Marcos';
	const idade1:number = 17;
	const peso1:number = 68;
	const altura1:number = 1.66;
	const ehDev1:boolean = false;

	const nome2:string = 'Ubuntu Théo';
	const idade2:number = 20;
	const peso2:number = 60;
	const altura2:number = 1.55;
	const ehDev2:boolean = true;

	const nome3:string = 'Ubuntu Silva';
	const idade3:number = 33;
	const peso3:number = 78;
	const altura3:number = 1.73;
	const ehDev3:boolean = true;

	// R01
	const soma = idade1 + idade2 + idade3;
	console.log('Soma dos pesos: ', soma);

	// R02
	const names = `${nome1}, ${nome2}, ${nome3}`
	console.log('Nomes dos Ubuntus: ', names);

	// R03
	const heigh = altura1;
    const weigh = peso1;
    const imc = weigh / (heigh * heigh);
	console.log('imc do Ubuntu Marcos: ', imc)

	const heigh2 = altura2;
    const weigh2 = peso2;
    const imc2 = weigh2 / (heigh2 * heigh2);
	console.log('imc do Ubuntu Théo: ', imc2)

	const heigh3 = altura3;
    const weigh3 = peso3;
    const imc3 = weigh3 / (heigh3 * heigh3);
	console.log('imc do Ubuntu Silva: ', imc3)
	
	//R04
	const arr = [ehDev1, ehDev2, ehDev3];
    const count = arr.filter(Boolean).length;
	console.log('O total de Devs é: ', count);

	//R05
	const nomesArray = [nome1.split(' '), nome2.split(' '), nome3.split(' ')];
	const silvas = nomesArray.filter((x:string[]) => x[1] === 'Silva').map((x:string[]) => x[0] + x[1]);
	console.log(silvas)});