import type { BasicPackDefinition } from '../../types';
import type { ExecutionContext } from '../../api_types';
import type { FetchRequest } from '../../api_types';
import type { FetchResponse } from '../../api_types';
import type { FormulaSpecification } from '../types';
import type { GenericSyncFormulaResult } from '../../api';
import type { PackFormulaResult } from '../../api_types';
import type { ParamDefs } from '../../api_types';
import type { ParamValues } from '../../api_types';
import type { SyncExecutionContext } from '../../api_types';
import type { SyncFormulaSpecification } from '../types';
export { marshalValue } from '../common/marshaling';
export { unmarshalValue } from '../common/marshaling';
/**
 * The thunk entrypoint - the first code that runs inside the v8 isolate once control is passed over.
 */
export declare function findAndExecutePackFunction<T extends FormulaSpecification>(params: ParamValues<ParamDefs>, formulaSpec: T, manifest: BasicPackDefinition, executionContext: ExecutionContext | SyncExecutionContext, shouldWrapError?: boolean): Promise<T extends SyncFormulaSpecification ? GenericSyncFormulaResult : PackFormulaResult>;
export declare function ensureSwitchUnreachable(value: never): never;
export declare function handleErrorAsync(func: () => Promise<any>): Promise<any>;
export declare function handleError(func: () => any): any;
export declare function handleFetcherStatusError(fetchResult: FetchResponse, fetchRequest: FetchRequest): void;
export declare function setUpBufferForTest(): void;
