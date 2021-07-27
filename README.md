# csp-node-desafio <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" width="50">

Desafio:
Criar uma API REST em Node e MySQL que gerencie e disponibilize uma agenda de contatos de pessoas. Neste sistema, deve conter:
- Endpoint para cadastro, edição, exclusão e listagem de contatos.
- Cada contato deve conter apenas:
.Id
.Primeiro Nome
.Último Nome
.E-mail
.Telefones (muitos - plural)
- Todos os campos acima são obrigatórios. O usuário deve ter no mínimo 1 telefone.
- Na listagem, deve ser possível realizar filtro por nomes ou email.

### Desafio Realizado : 

Implementei uma Arquiterura Limpa e baseada em SOLID, utilizei docker para facilitar a execução do projeto.

Para iniciar executar use o comando :
```zsh
  foo@bar:~$ docker-compose up
```

EndPoints - Testar com algum API Client 
```zsh
  
  Rotas : 
  
  Get - http://localhost:3000/contato 
  
  Post -  http://localhost:3000/contato 
  
  Put - http://localhost:3000/contato/:id
  
  Delete - http://localhost:3000/contato/:id
 
```

Body cadastrar e atualizar exemplo
```zsh
  {
	"primeiroNome":"Fulano",
	"ultimoNome":"Fulano",
	"email":"fulano@hotmail.com",
	"telefones":["998998989","8787879854"] 
  }
 
  ```
  
  Query parametro listar contatos 
```zsh
  
  nome: fulano
  email: fulano@hotmail.com
 
  
 ```

