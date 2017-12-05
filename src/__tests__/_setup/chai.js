import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

global.expect = expect;
global.jestExpect = global.expect;
global.before = beforeAll;
global.after = afterEach;
