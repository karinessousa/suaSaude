let banco = {
	clinicas: [
	{
		nome: 'Clinimagem',
		cidade: 'Quixada',
		coords:  {lat: -4.970555, lng: -39.016127},
		nota: 3,
		contato: '(89) 987651234',
		endereco: 'Av. Dos Namorados, 123, Quixadá',
		servicos: 'MAMOGRAFIA DIGITAL, RAIO X  DIGITAL, LABORATÓRIO, '+
                'ULTRASOM 4D, ULTRASSOM COLORIDO, DENSITOMETRIA ÓSSEA, '+
                'ENDOSCOPIA DIGESTIVA ALTA, ELETROCARDIOGRAMA DIGITAL, '+
                'MAPA, HOLTER, ECOCARDIOGRAMA, DERMATOLOGISTA, OTORRINOLARINGOLOGISTA, '+
                'ORTOPEDISTA, PEDIATRA, GINECOLOGISTA, CLINICO GERAL, '+
                'GASTROENTEROLOGISTA, CARDIOLOGISTA, NEUROLOGISTA.'
	},
	{
		nome: 'Clinica Mais Saúde',
		cidade: 'Quixada',
		coords:  {lat: -4.980555, lng: -39.116127},
		nota: "4",
		contato: '(85) 733556466',
		endereco: 'Av. Paulo Silva, 117, Quixadá',
		servicos: 'ORTOPEDISTA, PEDIATRA, GINECOLOGISTA, CLINICO GERAL, ENDOSCOPIA DIGESTIVA ALTA, ELETROCARDIOGRAMA DIGITAL, ULTRASOM 4D, ULTRASSOM COLORIDO, DENSITOMETRIA ÓSSEA, ENDOSCOPIA DIGESTIVA ALTA, ELETROCARDIOGRAMA DIGITAL, MAPA, HOLTER'
	},
	{
		nome: 'Clinica José Slva',
		cidade: 'Quixada',
		coords:  {lat: -4.970221, lng: -39.008247},
		nota: 2,
		contato: '(85) 232446466',
		endereco: 'R. Rodrigues Júnior, 451, Quixadá',
		servicos: 'MAMOGRAFIA DIGITAL, RAIO X  DIGITAL, LABORATÓRIO, '+
                'ULTRASOM 4D, ULTRASSOM COLORIDO, DENSITOMETRIA ÓSSEA, '+
                'ENDOSCOPIA DIGESTIVA ALTA, ELETROCARDIOGRAMA DIGITAL, '+
                'MAPA, HOLTER, ECOCARDIOGRAMA, DERMATOLOGISTA, OTORRINOLARINGOLOGISTA, '+
                'ORTOPEDISTA, PEDIATRA, GINECOLOGISTA, CLINICO GERAL, '+
                'GASTROENTEROLOGISTA, CARDIOLOGISTA, NEUROLOGISTA.'
	},
	{
		nome: 'Central Lab',
		cidade: 'Quixada',
		coords:  {lat: -4.970115, lng: -39.017045},
		nota: 4,
		contato: '(85) 733556466',
		endereco: 'R. Basílio Pinto, 198, Quixadá',
		servicos: 'MAMOGRAFIA DIGITAL, RAIO X  DIGITAL, LABORATÓRIO, '+
                'ULTRASOM 4D, ULTRASSOM COLORIDO, DENSITOMETRIA ÓSSEA, '+
                'ENDOSCOPIA DIGESTIVA ALTA, ELETROCARDIOGRAMA DIGITAL, '+
                'MAPA, HOLTER, ECOCARDIOGRAMA, DERMATOLOGISTA, OTORRINOLARINGOLOGISTA, '+
                'ORTOPEDISTA, PEDIATRA, GINECOLOGISTA, CLINICO GERAL, '+
                'GASTROENTEROLOGISTA, CARDIOLOGISTA, NEUROLOGISTA.'
	},
	{
		nome: 'Clinica São Lucas',
		cidade: 'Quixada',
		coords:  {lat: -4.980555, lng: -39.116127},
		nota: 1,
		contato: '(85) 733556466',
		endereco: 'Av. Paulo Silva, 117, Quixadá',
		servicos: 'MAMOGRAFIA DIGITAL, RAIO X  DIGITAL, LABORATÓRIO, '+
                'ULTRASOM 4D, ULTRASSOM COLORIDO, DENSITOMETRIA ÓSSEA, '+
                'ENDOSCOPIA DIGESTIVA ALTA, ELETROCARDIOGRAMA DIGITAL, '+
                'MAPA, HOLTER, ECOCARDIOGRAMA, DERMATOLOGISTA, OTORRINOLARINGOLOGISTA, '+
                'ORTOPEDISTA, PEDIATRA, GINECOLOGISTA, CLINICO GERAL, '+
                'GASTROENTEROLOGISTA, CARDIOLOGISTA, NEUROLOGISTA.'
	},
	{
		nome: 'Vera Queiroz',
		cidade: 'Quixada',
		coords:  {lat: -4.980555, lng: -39.116127},
		nota: 3,
		contato: '(85) 733556466',
		endereco: 'Av. Paulo Silva, 117, Quixadá',
		servicos: 'MAMOGRAFIA DIGITAL, CARDIOLOGISTA, LABORATÓRIO, '+
                 'DENSITOMETRIA ÓSSEA, '+
                'ENDOSCOPIA DIGESTIVA ALTA, GASTROENTEROLOGISTA, MAPA, ECOCARDIOGRAMA, DERMATOLOGISTA, OTORRINOLARINGOLOGISTA, '+
                'ULTRASOM 4D,ORTOPEDISTA, PEDIATRA, GINECOLOGISTA, CLINICO GERAL, '+
                'ENDOSCOPIA DIGESTIVA ALTA, ELETROCARDIOGRAMA DIGITAL, '+
                'MAPA, HOLTER, ECOCARDIOGRAMA, DERMATOLOGISTA, OTORRINOLARINGOLOGISTA, '+
                'ORTOPEDISTA, PEDIATRA, GINECOLOGISTA, CLINICO GERAL, '+
                 'NEUROLOGISTA.'
	}

	]
};
console.log(banco.clinicas[0].nome);