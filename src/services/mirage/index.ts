import { ActiveModelSerializer, createServer, Factory, Model, Response } from 'miragejs';
import faker from 'faker';

type Turma = {
    id: number;
    nome: string;
    avisos: string;
    professor: string;
    alunos: string[];
    avaliacoes: string[];
}

type User = {
    id: number;
    nome: string;
    email: string;
    matricula: string;
}

export function makeServer() {
    const server = createServer({
        serializers: {
            application: ActiveModelSerializer,
        },
        
        models: {
            turma: Model.extend<Partial<Turma>>({

            }),
            user: Model.extend<Partial<User>>({

            })
        },

        factories: {
            turma: Factory.extend({
                id(indice: number) {
                    return `${indice +1}`
                },
                nome(i) {
                    return faker.company.companyName();
                },
                avisos(i) {
                    return `Sem avisos ${i + 1}`
                },
                professor(i) {
                    return faker.name.firstName();
                },
                alunos(i) {
                    return faker.name.firstName();
                },
                avaliacoes(i) {
                    return faker.commerce.productName();
                },
            }),
        },

        seeds(server) {
            server.createList('turma', 4);
            server.createList('user', 1);
        },

        routes() {
            this.namespace = 'api';
            this.timing = 750;

            this.get('/turmas');
            this.get('/turmas/:id');
            this.post('/turmas');

            this.post("/auth", function (schema, request) {
                const body = JSON.parse(request.requestBody);

                if(body.matricula != 40028922){
                    return new Response(404, { some: 'header' }, { errors: [ 'Matricula incorreta!'] });
                }


                return {
                    token: "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUEkgZG8gRsOzcnVtIE1hcmNpbyBTcHJpbmciLCJzdWIiOiIxIiwiaWF0IjoxNjMwNjk1NDc1LCJleHAiOjE2MzA3ODE4NzV9.oOA1rhRvj0Ivi0GsQ-AZuUxhxPZHTeKKxLaIyEW_Cpk",
                    tipo: "Bearer",
                    nome: "Marcio Fernandes",
                    id: 1,
                    matricula: '40028922',
                    senha: '123456'
            }
            });

            this.namespace = '';
            this.passthrough();
        }
    })

    return server;
}