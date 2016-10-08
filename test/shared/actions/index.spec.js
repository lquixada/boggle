import sinon from 'sinon';
import {List, Map} from 'immutable';
import {bindActionCreators} from 'redux';
import configureStore from '../../../shared/store';
import * as actionCreators from '../../../shared/actions';
import Dictionary from '../../../shared/utils/dictionary';

describe('addCheckedAttempt', () => {
  let actions;
  let store;
  let state;
  let check;

  beforeEach(() => {
    const attempts = [
      {word: 'HEY', score: 3}
    ];

    const matrix = [
      ['O', 'H', 'E', 'Y'],
      ['E', 'E', 'O', 'S'],
      ['N', 'O', 'R', 'M'],
      ['A', 'I', 'X', 'V']
    ];
    
    store = configureStore({ attempts, matrix });
    actions = bindActionCreators(actionCreators, store.dispatch);
    check = sinon.stub(Dictionary.prototype, 'check').returns(true);
  });

  afterEach(() => {
    check.restore();
  });

  it('validates correct word', () => {
    return actions.addCheckedAttempt('norm').then(() => {
      const { attempts } = store.getState();
      expect(attempts).to.include(Map({word: 'NORM', score: 4}));
    });
  });

  it('invalidates word which is not on Board', () => {
    return actions.addCheckedAttempt('fake').then(() => {
      const { attempts } = store.getState();
      expect(attempts).to.include(Map({word: 'FAKE', score: '✘'}));
    });
  });

  it('invalidates word which is already on ScoreList', () => {
    return actions.addCheckedAttempt('hey').then(() => {
      const { attempts } = store.getState();
      expect(attempts).to.include(Map({word: 'HEY', score: '✘'}));
    });
  });

  it('invalidates word not on Dictionary', () => {
    return actions.addCheckedAttempt('hey').then(() => {
      check.returns(false);
    }).then(() => {
      return actions.addCheckedAttempt('smv');
    }).then(() => {
      const { attempts } = store.getState();
      expect(attempts).to.include(Map({word: 'SMV', score: '✘'}));
    });;
  });

});
