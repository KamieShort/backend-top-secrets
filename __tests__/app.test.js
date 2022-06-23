const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const mockUser = {
  firstName: 'firstNameTest',
  lastName: 'lastNameTest',
  email: 'test@user.com',
  password: '12345',
};

const signUpAndLogin = async (userProps = {}) => {
  const password = userProps.password ?? mockUser.password;

  const agent = request.agent(app);

const user = await UserService.create({...mockUser, ...userProps});

};

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('example test - delete me!', () => {
    expect(1).toEqual(1);
  });
  afterAll(() => {
    pool.end();
  });
});
