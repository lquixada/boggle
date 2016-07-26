import sinon from 'sinon';
import { List, Map } from 'immutable';
import { bindActionCreators } from 'redux'
import configureStore from '../../shared/store';
import * as actionCreators from '../../shared/actions';
import Dictionary from '../../shared/utils/dictionary';

describe('addCheckedAttempt', () => {
  let actions;
  let store;
  let state;
  let check;

  beforeEach(() => {
    const attempts = List([
      Map({word: 'hey', scored: 3})
    ]);

    const matrix = List([
      List(['O', 'H', 'E', 'Y']),
      List(['E', 'E', 'O', 'S']),
      List(['N', 'O', 'R', 'M']),
      List(['A', 'I', 'X', 'V'])
    ]);
    store = configureStore({ attempts, matrix });
    actions = bindActionCreators(actionCreators, store.dispatch);
    check = sinon.stub(Dictionary.prototype, 'check').returns(true);
  });

  afterEach(() => {
    check.restore();
  });

  it('validates correct word', (done) => {
    actions.addCheckedAttempt('norm').then(() => {
      done();

      const { attempts } = store.getState();
      expect(attempts).to.include(Map({word: 'NORM', scored: '4'}));
    });
  });

  it('invalidates word which is not on Board', (done) => {
    actions.addCheckedAttempt('fake').then(() => {
      done();

      const { attempts } = store.getState();
      expect(attempts).to.include(Map({word: 'FAKE', scored: '✘'}));
    });
  });

  it('invalidates word which is on ScoreList', (done) => {
    actions.addCheckedAttempt('hey').then(() => {
      done();

      const { attempts } = store.getState();
      expect(attempts).to.include(Map({word: 'HEY', scored: '✘'}));
    });

  });

  it('invalidates word not on Dictionary', () => {
    actions.addCheckedAttempt('hey').then(() => {
      done();

      check.returns(false);
      actions.addCheckedAttempt('smv');

      const { attempts } = store.getState();
      expect(attempts).to.include(Map({word: 'SMV', scored: '✘'}));
    });
  });

});
