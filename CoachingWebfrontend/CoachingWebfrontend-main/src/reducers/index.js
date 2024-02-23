import * as loginReducer from './authReducer';
import * as batchReducer from './batchReducer';
import * as categoryReducer from './categoryReducer';
import * as courseReducer from './courseReducer';
import * as subjectsReducer from './subjectsReducer';
import * as studentReducer from './studentReducer';
import * as facultyReducer from './facultyReducer';
import * as timingReducer from './timingReducer'

export default Object.assign(
    batchReducer,
    loginReducer,
    categoryReducer,
    subjectsReducer,
    courseReducer,
    studentReducer,
    facultyReducer,
    timingReducer,
)