const util = require('./utils');
const expect = require('chai').expect;

describe('utils test suit', () => {
  it('should add 2 numbers', () => {
    var res = util.add(5, 2);

    expect(res)
      .to.equal(7)
      .to.be.a('number');
  });

  it('should square 2 number', () => {
    var res = util.square(5);

    expect(res)
      .to.equal(25)
      .to.be.a('number');
  });

  it('should return first and last name ', () => {
    const user = { age: 28, fullName: 'John Doe' };
    var res = util.setName(user, user.fullName);

    expect(res).to.include({
      firstName: 'John',
      lastName: 'Doe'
    });
  });

  it('should add two numbers async', done => {
    util.addAsync(4, 3, res => {
      expect(res).to.equal(7);
      done();
    });
  });

  
});
