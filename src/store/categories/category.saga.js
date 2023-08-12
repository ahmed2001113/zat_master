 import { GETCollection } from "../../firebase/firebaseMtethods/addCollectionAndDocuments";
  import { FETCHCATEGORIESFAILD, FetchCategoriesSuccess } from "./category.action";
import{categoriesTypes} from './category.action.types'
import{all,call,put,takeLatest} from 'redux-saga/effects'
import { categoryActions } from "./category.reducer";
import { FetchCategories } from "@/src/lib/FeatchCategories";
 
 
function* FetchCategorySagaAsync(){
 
        const catogries = yield  call(FetchCategories);
    console.log(catogries)
 
try{

    yield put(categoryActions.FetchCategoriesSuccess(catogries))
}
    
    catch(err){
        console.log(err.response.data)
         yield put(categoryActions.FETCH_CATEGORIES_FAILD(err))

    }
}
function* OnFetchSaga( ){
     yield takeLatest(categoriesTypes.FETCH_CATEGORIES_start,FetchCategorySagaAsync)
}

export  function* categorySaga (){
    yield all([call(OnFetchSaga)])
}


