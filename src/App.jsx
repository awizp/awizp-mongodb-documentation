import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router';

import RootElement from './layout/RootElement';
import {
  AddFieldOperators,
  AggregateOne,
  AggregateThree,
  AggregateTwo,
  ArrayOperators,
  ArrOperators,
  BucketOperator,
  CapCollections,
  ComparisonOperators,
  ConditionalOperators,
  DatabaseActions,
  DataTypes,
  DateOperators,
  DeleteMany,
  DeleteOne,
  FacetOperator,
  FillOperator,
  Find,
  FindOneAndDelete,
  FindOneAndReplace,
  FindOneAndUpdate,
  GroupOperators,
  InsertMany,
  InsertOne,
  LogicalOperators,
  LookupOperators,
  Operators,
  Overview,
  ReplaceOne,
  StringOperators,
  TypeOperators,
  UpdateMany,
  UpdateOne,
  Validation
} from './pages';
import ArithmaticOperators from './pages/ArithmaticOperators';

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootElement />}>
        <Route path='/' element={<Overview />} />
        <Route path='/data-types' element={<DataTypes />} />
        <Route path='/db-actions' element={<DatabaseActions />} />
        <Route path='/schema' element={<Validation />} />
        <Route path='/insert-one' element={<InsertOne />} />
        <Route path='/insert-many' element={<InsertMany />} />
        <Route path='/find' element={<Find />} />
        <Route path='/find-update-one' element={<FindOneAndUpdate />} />
        <Route path='/find-replace-one' element={<FindOneAndReplace />} />
        <Route path='/find-delete-one' element={<FindOneAndDelete />} />
        <Route path='/update-one' element={<UpdateOne />} />
        <Route path='/update-many' element={<UpdateMany />} />
        <Route path='/replace-one' element={<ReplaceOne />} />
        <Route path='/delete-one' element={<DeleteOne />} />
        <Route path='/delete-many' element={<DeleteMany />} />
        <Route path='/basic-operators' element={<Operators />} />
        <Route path='/aggregate-one' element={<AggregateOne />} />
        <Route path='/aggregate-two' element={<AggregateTwo />} />
        <Route path='/aggregate-three' element={<AggregateThree />} />
        <Route path='/arr-operators' element={<ArrOperators />} />
        <Route path='/arithmatic-operators' element={<ArithmaticOperators />} />
        <Route path='/comparison-operators' element={<ComparisonOperators />} />
        <Route path='/logical-operators' element={<LogicalOperators />} />
        <Route path='/group-operators' element={<GroupOperators />} />
        <Route path='/lookup-operators' element={<LookupOperators />} />
        <Route path='/bucket-operators' element={<BucketOperator />} />
        <Route path='/addfield-operators' element={<AddFieldOperators />} />
        <Route path='/facet-operators' element={<FacetOperator />} />
        <Route path='/fill-operators' element={<FillOperator />} />
        <Route path='/string-operators' element={<StringOperators />} />
        <Route path='/conditional-operators' element={<ConditionalOperators />} />
        <Route path='/date-operators' element={<DateOperators />} />
        <Route path='/array-operators' element={<ArrayOperators />} />
        <Route path='/type-operators' element={<TypeOperators />} />
        <Route path='/cap-collections' element={<CapCollections />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router}></RouterProvider>
  );
};

export default App;