/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModuleFactory as R3NgModuleFactory } from '../render3/ng_module_ref';
import { stringify } from '../util/stringify';
/**
 * Used to load ng module factories.
 *
 * @publicApi
 * @deprecated the `string` form of `loadChildren` is deprecated, and `NgModuleFactoryLoader` is
 * part of its implementation. See `LoadChildren` for more details.
 */
var NgModuleFactoryLoader = /** @class */ (function () {
    function NgModuleFactoryLoader() {
    }
    return NgModuleFactoryLoader;
}());
export { NgModuleFactoryLoader };
/**
 * Map of module-id to the corresponding NgModule.
 * - In pre Ivy we track NgModuleFactory,
 * - In post Ivy we track the NgModuleType
 */
var modules = new Map();
/**
 * Registers a loaded module. Should only be called from generated NgModuleFactory code.
 * @publicApi
 */
export function registerModuleFactory(id, factory) {
    var existing = modules.get(id);
    assertSameOrNotExisting(id, existing && existing.moduleType, factory.moduleType);
    modules.set(id, factory);
}
function assertSameOrNotExisting(id, type, incoming) {
    if (type && type !== incoming) {
        throw new Error("Duplicate module registered for " + id + " - " + stringify(type) + " vs " + stringify(type.name));
    }
}
export function registerNgModuleType(id, ngModuleType) {
    var existing = modules.get(id);
    assertSameOrNotExisting(id, existing, ngModuleType);
    modules.set(id, ngModuleType);
}
export function clearModulesForTest() {
    modules.clear();
}
export function getModuleFactory__PRE_R3__(id) {
    var factory = modules.get(id);
    if (!factory)
        throw noModuleError(id);
    return factory;
}
export function getModuleFactory__POST_R3__(id) {
    var type = modules.get(id);
    if (!type)
        throw noModuleError(id);
    return new R3NgModuleFactory(type);
}
/**
 * Returns the NgModuleFactory with the given id, if it exists and has been loaded.
 * Factories for modules that do not specify an `id` cannot be retrieved. Throws if the module
 * cannot be found.
 * @publicApi
 */
export var getModuleFactory = getModuleFactory__PRE_R3__;
function noModuleError(id) {
    return new Error("No module with ID " + id + " loaded");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdfbW9kdWxlX2ZhY3RvcnlfbG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGlua2VyL25nX21vZHVsZV9mYWN0b3J5X2xvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFHSCxPQUFPLEVBQUMsZUFBZSxJQUFJLGlCQUFpQixFQUFlLE1BQU0sMEJBQTBCLENBQUM7QUFDNUYsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBSzVDOzs7Ozs7R0FNRztBQUNIO0lBQUE7SUFFQSxDQUFDO0lBQUQsNEJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7QUFFRDs7OztHQUlHO0FBQ0gsSUFBTSxPQUFPLEdBQUcsSUFBSSxHQUFHLEVBQTZDLENBQUM7QUFFckU7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLHFCQUFxQixDQUFDLEVBQVUsRUFBRSxPQUE2QjtJQUM3RSxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBeUIsQ0FBQztJQUN6RCx1QkFBdUIsQ0FBQyxFQUFFLEVBQUUsUUFBUSxJQUFJLFFBQVEsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pGLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzNCLENBQUM7QUFFRCxTQUFTLHVCQUF1QixDQUFDLEVBQVUsRUFBRSxJQUFxQixFQUFFLFFBQW1CO0lBQ3JGLElBQUksSUFBSSxJQUFJLElBQUksS0FBSyxRQUFRLEVBQUU7UUFDN0IsTUFBTSxJQUFJLEtBQUssQ0FDWCxxQ0FBbUMsRUFBRSxXQUFNLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBTyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRyxDQUFDLENBQUM7S0FDOUY7QUFDSCxDQUFDO0FBRUQsTUFBTSxVQUFVLG9CQUFvQixDQUFDLEVBQVUsRUFBRSxZQUEwQjtJQUN6RSxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBd0IsQ0FBQztJQUN4RCx1QkFBdUIsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ2hDLENBQUM7QUFFRCxNQUFNLFVBQVUsbUJBQW1CO0lBQ2pDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNsQixDQUFDO0FBRUQsTUFBTSxVQUFVLDBCQUEwQixDQUFDLEVBQVU7SUFDbkQsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQStCLENBQUM7SUFDOUQsSUFBSSxDQUFDLE9BQU87UUFBRSxNQUFNLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN0QyxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDO0FBRUQsTUFBTSxVQUFVLDJCQUEyQixDQUFDLEVBQVU7SUFDcEQsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQXdCLENBQUM7SUFDcEQsSUFBSSxDQUFDLElBQUk7UUFBRSxNQUFNLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNuQyxPQUFPLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUVEOzs7OztHQUtHO0FBQ0gsTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBQXlDLDBCQUEwQixDQUFDO0FBRWpHLFNBQVMsYUFBYSxDQUFDLEVBQVU7SUFDL0IsT0FBTyxJQUFJLEtBQUssQ0FBQyx1QkFBcUIsRUFBRSxZQUFTLENBQUMsQ0FBQztBQUNyRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1R5cGV9IGZyb20gJy4uL2ludGVyZmFjZS90eXBlJztcbmltcG9ydCB7TmdNb2R1bGVGYWN0b3J5IGFzIFIzTmdNb2R1bGVGYWN0b3J5LCBOZ01vZHVsZVR5cGV9IGZyb20gJy4uL3JlbmRlcjMvbmdfbW9kdWxlX3JlZic7XG5pbXBvcnQge3N0cmluZ2lmeX0gZnJvbSAnLi4vdXRpbC9zdHJpbmdpZnknO1xuXG5pbXBvcnQge05nTW9kdWxlRmFjdG9yeX0gZnJvbSAnLi9uZ19tb2R1bGVfZmFjdG9yeSc7XG5cblxuLyoqXG4gKiBVc2VkIHRvIGxvYWQgbmcgbW9kdWxlIGZhY3Rvcmllcy5cbiAqXG4gKiBAcHVibGljQXBpXG4gKiBAZGVwcmVjYXRlZCB0aGUgYHN0cmluZ2AgZm9ybSBvZiBgbG9hZENoaWxkcmVuYCBpcyBkZXByZWNhdGVkLCBhbmQgYE5nTW9kdWxlRmFjdG9yeUxvYWRlcmAgaXNcbiAqIHBhcnQgb2YgaXRzIGltcGxlbWVudGF0aW9uLiBTZWUgYExvYWRDaGlsZHJlbmAgZm9yIG1vcmUgZGV0YWlscy5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE5nTW9kdWxlRmFjdG9yeUxvYWRlciB7XG4gIGFic3RyYWN0IGxvYWQocGF0aDogc3RyaW5nKTogUHJvbWlzZTxOZ01vZHVsZUZhY3Rvcnk8YW55Pj47XG59XG5cbi8qKlxuICogTWFwIG9mIG1vZHVsZS1pZCB0byB0aGUgY29ycmVzcG9uZGluZyBOZ01vZHVsZS5cbiAqIC0gSW4gcHJlIEl2eSB3ZSB0cmFjayBOZ01vZHVsZUZhY3RvcnksXG4gKiAtIEluIHBvc3QgSXZ5IHdlIHRyYWNrIHRoZSBOZ01vZHVsZVR5cGVcbiAqL1xuY29uc3QgbW9kdWxlcyA9IG5ldyBNYXA8c3RyaW5nLCBOZ01vZHVsZUZhY3Rvcnk8YW55PnxOZ01vZHVsZVR5cGU+KCk7XG5cbi8qKlxuICogUmVnaXN0ZXJzIGEgbG9hZGVkIG1vZHVsZS4gU2hvdWxkIG9ubHkgYmUgY2FsbGVkIGZyb20gZ2VuZXJhdGVkIE5nTW9kdWxlRmFjdG9yeSBjb2RlLlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJNb2R1bGVGYWN0b3J5KGlkOiBzdHJpbmcsIGZhY3Rvcnk6IE5nTW9kdWxlRmFjdG9yeTxhbnk+KSB7XG4gIGNvbnN0IGV4aXN0aW5nID0gbW9kdWxlcy5nZXQoaWQpIGFzIE5nTW9kdWxlRmFjdG9yeTxhbnk+O1xuICBhc3NlcnRTYW1lT3JOb3RFeGlzdGluZyhpZCwgZXhpc3RpbmcgJiYgZXhpc3RpbmcubW9kdWxlVHlwZSwgZmFjdG9yeS5tb2R1bGVUeXBlKTtcbiAgbW9kdWxlcy5zZXQoaWQsIGZhY3RvcnkpO1xufVxuXG5mdW5jdGlvbiBhc3NlcnRTYW1lT3JOb3RFeGlzdGluZyhpZDogc3RyaW5nLCB0eXBlOiBUeXBlPGFueT58IG51bGwsIGluY29taW5nOiBUeXBlPGFueT4pOiB2b2lkIHtcbiAgaWYgKHR5cGUgJiYgdHlwZSAhPT0gaW5jb21pbmcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBEdXBsaWNhdGUgbW9kdWxlIHJlZ2lzdGVyZWQgZm9yICR7aWR9IC0gJHtzdHJpbmdpZnkodHlwZSl9IHZzICR7c3RyaW5naWZ5KHR5cGUubmFtZSl9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyTmdNb2R1bGVUeXBlKGlkOiBzdHJpbmcsIG5nTW9kdWxlVHlwZTogTmdNb2R1bGVUeXBlKSB7XG4gIGNvbnN0IGV4aXN0aW5nID0gbW9kdWxlcy5nZXQoaWQpIGFzIE5nTW9kdWxlVHlwZSB8IG51bGw7XG4gIGFzc2VydFNhbWVPck5vdEV4aXN0aW5nKGlkLCBleGlzdGluZywgbmdNb2R1bGVUeXBlKTtcbiAgbW9kdWxlcy5zZXQoaWQsIG5nTW9kdWxlVHlwZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhck1vZHVsZXNGb3JUZXN0KCk6IHZvaWQge1xuICBtb2R1bGVzLmNsZWFyKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb2R1bGVGYWN0b3J5X19QUkVfUjNfXyhpZDogc3RyaW5nKTogTmdNb2R1bGVGYWN0b3J5PGFueT4ge1xuICBjb25zdCBmYWN0b3J5ID0gbW9kdWxlcy5nZXQoaWQpIGFzIE5nTW9kdWxlRmFjdG9yeTxhbnk+fCBudWxsO1xuICBpZiAoIWZhY3RvcnkpIHRocm93IG5vTW9kdWxlRXJyb3IoaWQpO1xuICByZXR1cm4gZmFjdG9yeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vZHVsZUZhY3RvcnlfX1BPU1RfUjNfXyhpZDogc3RyaW5nKTogTmdNb2R1bGVGYWN0b3J5PGFueT4ge1xuICBjb25zdCB0eXBlID0gbW9kdWxlcy5nZXQoaWQpIGFzIE5nTW9kdWxlVHlwZSB8IG51bGw7XG4gIGlmICghdHlwZSkgdGhyb3cgbm9Nb2R1bGVFcnJvcihpZCk7XG4gIHJldHVybiBuZXcgUjNOZ01vZHVsZUZhY3RvcnkodHlwZSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgTmdNb2R1bGVGYWN0b3J5IHdpdGggdGhlIGdpdmVuIGlkLCBpZiBpdCBleGlzdHMgYW5kIGhhcyBiZWVuIGxvYWRlZC5cbiAqIEZhY3RvcmllcyBmb3IgbW9kdWxlcyB0aGF0IGRvIG5vdCBzcGVjaWZ5IGFuIGBpZGAgY2Fubm90IGJlIHJldHJpZXZlZC4gVGhyb3dzIGlmIHRoZSBtb2R1bGVcbiAqIGNhbm5vdCBiZSBmb3VuZC5cbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNvbnN0IGdldE1vZHVsZUZhY3Rvcnk6IChpZDogc3RyaW5nKSA9PiBOZ01vZHVsZUZhY3Rvcnk8YW55PiA9IGdldE1vZHVsZUZhY3RvcnlfX1BSRV9SM19fO1xuXG5mdW5jdGlvbiBub01vZHVsZUVycm9yKGlkOiBzdHJpbmcsICk6IEVycm9yIHtcbiAgcmV0dXJuIG5ldyBFcnJvcihgTm8gbW9kdWxlIHdpdGggSUQgJHtpZH0gbG9hZGVkYCk7XG59XG4iXX0=