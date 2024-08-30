import { all, call, put, takeLatest } from 'redux-saga/effects';
import { postCall, getCall } from './apiCalls';
import { PATHS } from './Constants';

// Create an event
export function* createEvent(action) {
  try {
    const response = yield call(postCall, PATHS.DEFAULT_PATH + '/events/create-event', action.payload);
    if (response.status === 201) {
      const data = yield response.json();
      yield put({ type: 'create_event_success', event: data });
    } else {
      throw new Error('Error in creating event');
    }
  } catch (e) {
    console.error('Create Event Error:', e.message);
    yield put({ type: 'create_event_failure', error: e.message });
  }
}

// Get user events
export function* getUserEvents() {
  try {
    const response = yield call(getCall, PATHS.DEFAULT_PATH + '/events/my-events');
    if (response.status === 200) {
      const data = yield response.json();
      yield put({ type: 'set_user_events', userEvents: data });
    } else {
      throw new Error('Error in fetching user events');
    }
  } catch (e) {
    console.error('Get User Events Error:', e.message);
    yield put({ type: 'get_user_events_failure', error: e.message });
  }
}

// Get matched events
export function* getMatchedEvents(action) {
  try {
    const response = yield call(postCall, PATHS.DEFAULT_PATH + '/events/matched-events', action.payload);
    if (response.status === 200) {
      const data = yield response.json();
      yield put({ type: 'set_matched_events', matchedEvents: data });
    } else {
      throw new Error('Error in fetching matched events');
    }
  } catch (e) {
    console.error('Get Matched Events Error:', e.message);
    yield put({ type: 'get_matched_events_failure', error: e.message });
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest('create_event', createEvent),
    takeLatest('user_events', getUserEvents),
    takeLatest('get_matched_events', getMatchedEvents),
  ]);
}
