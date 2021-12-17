import { ActiveModelSerializer, createServer, Factory, Model, Response } from 'miragejs';
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
      server.createList('user', 200)
    },

    serializers: {
      application: ActiveModelSerializer
    },

    routes() {
      // Isso aqui é para chamar as rotas com /api/get, /api/post etc.
      this.namespace = 'api'

      // Toda chamada feita para o mirage vai ter um delay de 750ms
      this.timing = 750

      // A função passada como segundo parâmetro foi criada para configurar a paginação dos dados da API
      this.get('/users', function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams

        const total = schema.all('user').length;

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page)

        const users = this.serialize(schema.all('user'))
        .users
        .slice(pageStart, pageEnd)

        return new Response(
          200,
          // Aqui o nome do header pode ser qualquer coisa, é só um padrao chamar assim
          { 'x-total-count': String(total) },
          { users }
        )
      });

      this.get('/users/:id');
      
      this.post('/users');

      // Isso aqui é para resetar o namespace api, para não prejudicar as API routes que temos dentro do next, que ficam em uma pasta api, então elas também são /api/alguma-coisa
      this.namespace = ''

      // Isso é para que toda rota que for chamada com o path 'api', mas que nao esteja aqui no server, vai passar direto. Assim, a chamada vai ser feita para o local intencionado
      this.passthrough()
    }
  })

  return server;
}