import { createServer, Factory, Model } from 'miragejs';
import faker from 'faker'

type User = {
  name: string;
  email: string;
  created_at: string;
}

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({})
    },

    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i +1}`
        },
        email() {
          return faker.internet.email().toLowerCase()
        },
        createdAt() {
          return faker.date.recent(10)
        },
      })      
    },

    seeds(server) {
      server.createList('user', 10)
    },
    
    routes() {
      // Isso aqui é para chamar as rotas com /api/get, /api/post etc.
      this.namespace = 'api'

      // Toda chamada feita para o mirage vai ter um delay de 750ms
      this.timing = 750

      this.get('/users');
      this.post('/users');

      // Isso aqui é para resetar o namespace api, para não prejudicar as API routes que temos dentro do next, que ficam em uma pasta api, então elas também são /api/alguma-coisa
      this.namespace = ''

      // Isso é para que toda rota que for chamada com o path 'api', mas que nao esteja aqui no server, vai passar direto. Assim, a chamada vai ser feita para o local intencionado
      this.passthrough()
    }
  })

  return server;
}