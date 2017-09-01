import chai, {expect} from 'chai';
import chaiImmutable from 'chai-immutable';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiImmutable);
chai.use(chaiEnzyme());

global.expect = expect;
global.jestExpect = global.expect;
global.before = beforeAll;
global.after = afterEach;