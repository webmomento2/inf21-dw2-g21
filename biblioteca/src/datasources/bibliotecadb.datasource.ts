import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'bibliotecadb',
  connector: 'mysql',
  url: 'mysql://root:12345678@mysql:3306/bibliotecadb',
  host: '',
  port: 0,
  user: '',
  password: '',
  database: ''
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class BibliotecadbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'bibliotecadb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.bibliotecadb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
