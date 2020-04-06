/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as tslib_1 from "tslib";
import { EmptyOutletComponent } from './components/empty_outlet';
import { PRIMARY_OUTLET } from './shared';
var LoadedRouterConfig = /** @class */ (function () {
    function LoadedRouterConfig(routes, module) {
        this.routes = routes;
        this.module = module;
    }
    return LoadedRouterConfig;
}());
export { LoadedRouterConfig };
export function validateConfig(config, parentPath) {
    if (parentPath === void 0) { parentPath = ''; }
    // forEach doesn't iterate undefined values
    for (var i = 0; i < config.length; i++) {
        var route = config[i];
        var fullPath = getFullPath(parentPath, route);
        validateNode(route, fullPath);
    }
}
function validateNode(route, fullPath) {
    if (!route) {
        throw new Error("\n      Invalid configuration of route '" + fullPath + "': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    ");
    }
    if (Array.isArray(route)) {
        throw new Error("Invalid configuration of route '" + fullPath + "': Array cannot be specified");
    }
    if (!route.component && !route.children && !route.loadChildren &&
        (route.outlet && route.outlet !== PRIMARY_OUTLET)) {
        throw new Error("Invalid configuration of route '" + fullPath + "': a componentless route without children or loadChildren cannot have a named outlet set");
    }
    if (route.redirectTo && route.children) {
        throw new Error("Invalid configuration of route '" + fullPath + "': redirectTo and children cannot be used together");
    }
    if (route.redirectTo && route.loadChildren) {
        throw new Error("Invalid configuration of route '" + fullPath + "': redirectTo and loadChildren cannot be used together");
    }
    if (route.children && route.loadChildren) {
        throw new Error("Invalid configuration of route '" + fullPath + "': children and loadChildren cannot be used together");
    }
    if (route.redirectTo && route.component) {
        throw new Error("Invalid configuration of route '" + fullPath + "': redirectTo and component cannot be used together");
    }
    if (route.path && route.matcher) {
        throw new Error("Invalid configuration of route '" + fullPath + "': path and matcher cannot be used together");
    }
    if (route.redirectTo === void 0 && !route.component && !route.children && !route.loadChildren) {
        throw new Error("Invalid configuration of route '" + fullPath + "'. One of the following must be provided: component, redirectTo, children or loadChildren");
    }
    if (route.path === void 0 && route.matcher === void 0) {
        throw new Error("Invalid configuration of route '" + fullPath + "': routes must have either a path or a matcher specified");
    }
    if (typeof route.path === 'string' && route.path.charAt(0) === '/') {
        throw new Error("Invalid configuration of route '" + fullPath + "': path cannot start with a slash");
    }
    if (route.path === '' && route.redirectTo !== void 0 && route.pathMatch === void 0) {
        var exp = "The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.";
        throw new Error("Invalid configuration of route '{path: \"" + fullPath + "\", redirectTo: \"" + route.redirectTo + "\"}': please provide 'pathMatch'. " + exp);
    }
    if (route.pathMatch !== void 0 && route.pathMatch !== 'full' && route.pathMatch !== 'prefix') {
        throw new Error("Invalid configuration of route '" + fullPath + "': pathMatch can only be set to 'prefix' or 'full'");
    }
    if (route.children) {
        validateConfig(route.children, fullPath);
    }
}
function getFullPath(parentPath, currentRoute) {
    if (!currentRoute) {
        return parentPath;
    }
    if (!parentPath && !currentRoute.path) {
        return '';
    }
    else if (parentPath && !currentRoute.path) {
        return parentPath + "/";
    }
    else if (!parentPath && currentRoute.path) {
        return currentRoute.path;
    }
    else {
        return parentPath + "/" + currentRoute.path;
    }
}
/**
 * Makes a copy of the config and adds any default required properties.
 */
export function standardizeConfig(r) {
    var children = r.children && r.children.map(standardizeConfig);
    var c = children ? tslib_1.__assign({}, r, { children: children }) : tslib_1.__assign({}, r);
    if (!c.component && (children || c.loadChildren) && (c.outlet && c.outlet !== PRIMARY_OUTLET)) {
        c.component = EmptyOutletComponent;
    }
    return c;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcm91dGVyL3NyYy9jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQUtILE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBRS9ELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxVQUFVLENBQUM7QUE2ZHhDO0lBQ0UsNEJBQW1CLE1BQWUsRUFBUyxNQUF3QjtRQUFoRCxXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFBRyxDQUFDO0lBQ3pFLHlCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7O0FBRUQsTUFBTSxVQUFVLGNBQWMsQ0FBQyxNQUFjLEVBQUUsVUFBdUI7SUFBdkIsMkJBQUEsRUFBQSxlQUF1QjtJQUNwRSwyQ0FBMkM7SUFDM0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDdEMsSUFBTSxLQUFLLEdBQVUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLElBQU0sUUFBUSxHQUFXLFdBQVcsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEQsWUFBWSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztLQUMvQjtBQUNILENBQUM7QUFFRCxTQUFTLFlBQVksQ0FBQyxLQUFZLEVBQUUsUUFBZ0I7SUFDbEQsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMsNkNBQ29CLFFBQVEsb1dBUzNDLENBQUMsQ0FBQztLQUNKO0lBQ0QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3hCLE1BQU0sSUFBSSxLQUFLLENBQUMscUNBQW1DLFFBQVEsaUNBQThCLENBQUMsQ0FBQztLQUM1RjtJQUNELElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZO1FBQzFELENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLGNBQWMsQ0FBQyxFQUFFO1FBQ3JELE1BQU0sSUFBSSxLQUFLLENBQ1gscUNBQW1DLFFBQVEsNkZBQTBGLENBQUMsQ0FBQztLQUM1STtJQUNELElBQUksS0FBSyxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFO1FBQ3RDLE1BQU0sSUFBSSxLQUFLLENBQ1gscUNBQW1DLFFBQVEsdURBQW9ELENBQUMsQ0FBQztLQUN0RztJQUNELElBQUksS0FBSyxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsWUFBWSxFQUFFO1FBQzFDLE1BQU0sSUFBSSxLQUFLLENBQ1gscUNBQW1DLFFBQVEsMkRBQXdELENBQUMsQ0FBQztLQUMxRztJQUNELElBQUksS0FBSyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsWUFBWSxFQUFFO1FBQ3hDLE1BQU0sSUFBSSxLQUFLLENBQ1gscUNBQW1DLFFBQVEseURBQXNELENBQUMsQ0FBQztLQUN4RztJQUNELElBQUksS0FBSyxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsU0FBUyxFQUFFO1FBQ3ZDLE1BQU0sSUFBSSxLQUFLLENBQ1gscUNBQW1DLFFBQVEsd0RBQXFELENBQUMsQ0FBQztLQUN2RztJQUNELElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO1FBQy9CLE1BQU0sSUFBSSxLQUFLLENBQ1gscUNBQW1DLFFBQVEsZ0RBQTZDLENBQUMsQ0FBQztLQUMvRjtJQUNELElBQUksS0FBSyxDQUFDLFVBQVUsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRTtRQUM3RixNQUFNLElBQUksS0FBSyxDQUNYLHFDQUFtQyxRQUFRLDhGQUEyRixDQUFDLENBQUM7S0FDN0k7SUFDRCxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxLQUFLLENBQUMsRUFBRTtRQUNyRCxNQUFNLElBQUksS0FBSyxDQUNYLHFDQUFtQyxRQUFRLDZEQUEwRCxDQUFDLENBQUM7S0FDNUc7SUFDRCxJQUFJLE9BQU8sS0FBSyxDQUFDLElBQUksS0FBSyxRQUFRLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO1FBQ2xFLE1BQU0sSUFBSSxLQUFLLENBQUMscUNBQW1DLFFBQVEsc0NBQW1DLENBQUMsQ0FBQztLQUNqRztJQUNELElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLFVBQVUsS0FBSyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQyxFQUFFO1FBQ2xGLElBQU0sR0FBRyxHQUNMLHNGQUFzRixDQUFDO1FBQzNGLE1BQU0sSUFBSSxLQUFLLENBQ1gsOENBQTJDLFFBQVEsMEJBQW1CLEtBQUssQ0FBQyxVQUFVLDBDQUFvQyxHQUFLLENBQUMsQ0FBQztLQUN0STtJQUNELElBQUksS0FBSyxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsU0FBUyxLQUFLLE1BQU0sSUFBSSxLQUFLLENBQUMsU0FBUyxLQUFLLFFBQVEsRUFBRTtRQUM1RixNQUFNLElBQUksS0FBSyxDQUNYLHFDQUFtQyxRQUFRLHVEQUFvRCxDQUFDLENBQUM7S0FDdEc7SUFDRCxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUU7UUFDbEIsY0FBYyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDMUM7QUFDSCxDQUFDO0FBRUQsU0FBUyxXQUFXLENBQUMsVUFBa0IsRUFBRSxZQUFtQjtJQUMxRCxJQUFJLENBQUMsWUFBWSxFQUFFO1FBQ2pCLE9BQU8sVUFBVSxDQUFDO0tBQ25CO0lBQ0QsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUU7UUFDckMsT0FBTyxFQUFFLENBQUM7S0FDWDtTQUFNLElBQUksVUFBVSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRTtRQUMzQyxPQUFVLFVBQVUsTUFBRyxDQUFDO0tBQ3pCO1NBQU0sSUFBSSxDQUFDLFVBQVUsSUFBSSxZQUFZLENBQUMsSUFBSSxFQUFFO1FBQzNDLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQztLQUMxQjtTQUFNO1FBQ0wsT0FBVSxVQUFVLFNBQUksWUFBWSxDQUFDLElBQU0sQ0FBQztLQUM3QztBQUNILENBQUM7QUFFRDs7R0FFRztBQUNILE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxDQUFRO0lBQ3hDLElBQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNqRSxJQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxzQkFBSyxDQUFDLElBQUUsUUFBUSxVQUFBLElBQUUsQ0FBQyxzQkFBSyxDQUFDLENBQUMsQ0FBQztJQUMvQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssY0FBYyxDQUFDLEVBQUU7UUFDN0YsQ0FBQyxDQUFDLFNBQVMsR0FBRyxvQkFBb0IsQ0FBQztLQUNwQztJQUNELE9BQU8sQ0FBQyxDQUFDO0FBQ1gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtOZ01vZHVsZUZhY3RvcnksIE5nTW9kdWxlUmVmLCBUeXBlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7RW1wdHlPdXRsZXRDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9lbXB0eV9vdXRsZXQnO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90fSBmcm9tICcuL3JvdXRlcl9zdGF0ZSc7XG5pbXBvcnQge1BSSU1BUllfT1VUTEVUfSBmcm9tICcuL3NoYXJlZCc7XG5pbXBvcnQge1VybFNlZ21lbnQsIFVybFNlZ21lbnRHcm91cH0gZnJvbSAnLi91cmxfdHJlZSc7XG5cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgcm91dGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIFJvdXRlciBzZXJ2aWNlLlxuICogQW4gYXJyYXkgb2YgYFJvdXRlYCBvYmplY3RzLCB1c2VkIGluIGBSb3V0ZXIuY29uZmlnYCBhbmQgZm9yIG5lc3RlZCByb3V0ZSBjb25maWd1cmF0aW9uc1xuICogaW4gYFJvdXRlLmNoaWxkcmVuYC5cbiAqXG4gKiBAc2VlIGBSb3V0ZWBcbiAqIEBzZWUgYFJvdXRlcmBcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IHR5cGUgUm91dGVzID0gUm91dGVbXTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSByZXN1bHQgb2YgbWF0Y2hpbmcgVVJMcyB3aXRoIGEgY3VzdG9tIG1hdGNoaW5nIGZ1bmN0aW9uLlxuICpcbiAqICogYGNvbnN1bWVkYCBpcyBhbiBhcnJheSBvZiB0aGUgY29uc3VtZWQgVVJMIHNlZ21lbnRzLlxuICogKiBgcG9zUGFyYW1zYCBpcyBhIG1hcCBvZiBwb3NpdGlvbmFsIHBhcmFtZXRlcnMuXG4gKlxuICogQHNlZSBgVXJsTWF0Y2hlcigpYFxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgdHlwZSBVcmxNYXRjaFJlc3VsdCA9IHtcbiAgY29uc3VtZWQ6IFVybFNlZ21lbnRbXTsgcG9zUGFyYW1zPzoge1tuYW1lOiBzdHJpbmddOiBVcmxTZWdtZW50fTtcbn07XG5cbi8qKlxuICogQSBmdW5jdGlvbiBmb3IgbWF0Y2hpbmcgYSByb3V0ZSBhZ2FpbnN0IFVSTHMuIEltcGxlbWVudCBhIGN1c3RvbSBVUkwgbWF0Y2hlclxuICogZm9yIGBSb3V0ZS5tYXRjaGVyYCB3aGVuIGEgY29tYmluYXRpb24gb2YgYHBhdGhgIGFuZCBgcGF0aE1hdGNoYFxuICogaXMgbm90IGV4cHJlc3NpdmUgZW5vdWdoLlxuICpcbiAqIEBwYXJhbSBzZWdtZW50cyBBbiBhcnJheSBvZiBVUkwgc2VnbWVudHMuXG4gKiBAcGFyYW0gZ3JvdXAgQSBzZWdtZW50IGdyb3VwLlxuICogQHBhcmFtIHJvdXRlIFRoZSByb3V0ZSB0byBtYXRjaCBhZ2FpbnN0LlxuICogQHJldHVybnMgVGhlIG1hdGNoLXJlc3VsdCxcbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICpcbiAqIFRoZSBmb2xsb3dpbmcgbWF0Y2hlciBtYXRjaGVzIEhUTUwgZmlsZXMuXG4gKlxuICogYGBgXG4gKiBleHBvcnQgZnVuY3Rpb24gaHRtbEZpbGVzKHVybDogVXJsU2VnbWVudFtdKSB7XG4gKiAgIHJldHVybiB1cmwubGVuZ3RoID09PSAxICYmIHVybFswXS5wYXRoLmVuZHNXaXRoKCcuaHRtbCcpID8gKHtjb25zdW1lZDogdXJsfSkgOiBudWxsO1xuICogfVxuICpcbiAqIGV4cG9ydCBjb25zdCByb3V0ZXMgPSBbeyBtYXRjaGVyOiBodG1sRmlsZXMsIGNvbXBvbmVudDogQW55Q29tcG9uZW50IH1dO1xuICogYGBgXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgdHlwZSBVcmxNYXRjaGVyID0gKHNlZ21lbnRzOiBVcmxTZWdtZW50W10sIGdyb3VwOiBVcmxTZWdtZW50R3JvdXAsIHJvdXRlOiBSb3V0ZSkgPT5cbiAgICBVcmxNYXRjaFJlc3VsdDtcblxuLyoqXG4gKlxuICogUmVwcmVzZW50cyBzdGF0aWMgZGF0YSBhc3NvY2lhdGVkIHdpdGggYSBwYXJ0aWN1bGFyIHJvdXRlLlxuICpcbiAqIEBzZWUgYFJvdXRlI2RhdGFgXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgdHlwZSBEYXRhID0ge1xuICBbbmFtZTogc3RyaW5nXTogYW55XG59O1xuXG4vKipcbiAqXG4gKiBSZXByZXNlbnRzIHRoZSByZXNvbHZlZCBkYXRhIGFzc29jaWF0ZWQgd2l0aCBhIHBhcnRpY3VsYXIgcm91dGUuXG4gKlxuICogQHNlZSBgUm91dGUjcmVzb2x2ZWAuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgdHlwZSBSZXNvbHZlRGF0YSA9IHtcbiAgW25hbWU6IHN0cmluZ106IGFueVxufTtcblxuLyoqXG4gKlxuICogQSBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB0byByZXNvbHZlIGEgY29sbGVjdGlvbiBvZiBsYXp5LWxvYWRlZCByb3V0ZXMuXG4gKiBcbiAqIE9mdGVuIHRoaXMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZCB1c2luZyBhbiBFUyBkeW5hbWljIGBpbXBvcnQoKWAgZXhwcmVzc2lvbi4gRm9yIGV4YW1wbGU6XG4gKiBcbiAqIGBgYFxuICogW3tcbiAqICAgcGF0aDogJ2xhenknLFxuICogICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi9sYXp5LXJvdXRlL2xhenkubW9kdWxlJykudGhlbihtb2QgPT4gbW9kLkxhenlNb2R1bGUpLFxuICogfV07XG4gKiBgYGBcbiAqIFxuICogVGhpcyBmdW5jdGlvbiBfbXVzdF8gbWF0Y2ggdGhlIGZvcm0gYWJvdmU6IGFuIGFycm93IGZ1bmN0aW9uIG9mIHRoZSBmb3JtXG4gKiBgKCkgPT4gaW1wb3J0KCcuLi4nKS50aGVuKG1vZCA9PiBtb2QuTU9EVUxFKWAuXG4gKlxuICogQHNlZSBgUm91dGUjbG9hZENoaWxkcmVuYC5cbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IHR5cGUgTG9hZENoaWxkcmVuQ2FsbGJhY2sgPSAoKSA9PiBUeXBlPGFueT58IE5nTW9kdWxlRmFjdG9yeTxhbnk+fCBPYnNlcnZhYmxlPFR5cGU8YW55Pj58XG4gICAgUHJvbWlzZTxOZ01vZHVsZUZhY3Rvcnk8YW55PnxUeXBlPGFueT58YW55PjtcblxuLyoqXG4gKlxuICogQSBzdHJpbmcgb2YgdGhlIGZvcm0gYHBhdGgvdG8vZmlsZSNleHBvcnROYW1lYCB0aGF0IGFjdHMgYXMgYSBVUkwgZm9yIGEgc2V0IG9mIHJvdXRlcyB0byBsb2FkLFxuICogb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgc3VjaCBhIHNldC5cbiAqXG4gKiBUaGUgc3RyaW5nIGZvcm0gb2YgYExvYWRDaGlsZHJlbmAgaXMgZGVwcmVjYXRlZCAoc2VlIGBEZXByZWNhdGVkTG9hZENoaWxkcmVuYCkuIFRoZSBmdW5jdGlvblxuICogZm9ybSAoYExvYWRDaGlsZHJlbkNhbGxiYWNrYCkgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZC5cbiAqXG4gKiBAc2VlIGBSb3V0ZSNsb2FkQ2hpbGRyZW5gLlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgdHlwZSBMb2FkQ2hpbGRyZW4gPSBMb2FkQ2hpbGRyZW5DYWxsYmFjayB8IERlcHJlY2F0ZWRMb2FkQ2hpbGRyZW47XG5cbi8qKlxuICogQSBzdHJpbmcgb2YgdGhlIGZvcm0gYHBhdGgvdG8vZmlsZSNleHBvcnROYW1lYCB0aGF0IGFjdHMgYXMgYSBVUkwgZm9yIGEgc2V0IG9mIHJvdXRlcyB0byBsb2FkLlxuICpcbiAqIEBzZWUgYFJvdXRlI2xvYWRDaGlsZHJlbmBcbiAqIEBwdWJsaWNBcGlcbiAqIEBkZXByZWNhdGVkIHRoZSBgc3RyaW5nYCBmb3JtIG9mIGBsb2FkQ2hpbGRyZW5gIGlzIGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgdGhlIHByb3Bvc2VkIEVTIGR5bmFtaWNcbiAqIGBpbXBvcnQoKWAgZXhwcmVzc2lvbiwgd2hpY2ggb2ZmZXJzIGEgbW9yZSBuYXR1cmFsIGFuZCBzdGFuZGFyZHMtYmFzZWQgbWVjaGFuaXNtIHRvIGR5bmFtaWNhbGx5XG4gKiBsb2FkIGFuIEVTIG1vZHVsZSBhdCBydW50aW1lLlxuICovXG5leHBvcnQgdHlwZSBEZXByZWNhdGVkTG9hZENoaWxkcmVuID0gc3RyaW5nO1xuXG4vKipcbiAqXG4gKiBIb3cgdG8gaGFuZGxlIHF1ZXJ5IHBhcmFtZXRlcnMgaW4gYSByb3V0ZXIgbGluay5cbiAqIE9uZSBvZjpcbiAqIC0gYG1lcmdlYCA6IE1lcmdlIG5ldyB3aXRoIGN1cnJlbnQgcGFyYW1ldGVycy5cbiAqIC0gYHByZXNlcnZlYCA6IFByZXNlcnZlIGN1cnJlbnQgcGFyYW1ldGVycy5cbiAqXG4gKiBAc2VlIGBSb3V0ZXJMaW5rI3F1ZXJ5UGFyYW1zSGFuZGxpbmdgLlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgdHlwZSBRdWVyeVBhcmFtc0hhbmRsaW5nID0gJ21lcmdlJyB8ICdwcmVzZXJ2ZScgfCAnJztcblxuLyoqXG4gKlxuICogQSBwb2xpY3kgZm9yIHdoZW4gdG8gcnVuIGd1YXJkcyBhbmQgcmVzb2x2ZXJzIG9uIGEgcm91dGUuXG4gKlxuICogQHNlZSBgUm91dGUjcnVuR3VhcmRzQW5kUmVzb2x2ZXJzYFxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgdHlwZSBSdW5HdWFyZHNBbmRSZXNvbHZlcnMgPSAncGF0aFBhcmFtc0NoYW5nZScgfCAncGF0aFBhcmFtc09yUXVlcnlQYXJhbXNDaGFuZ2UnIHxcbiAgICAncGFyYW1zQ2hhbmdlJyB8ICdwYXJhbXNPclF1ZXJ5UGFyYW1zQ2hhbmdlJyB8ICdhbHdheXMnIHxcbiAgICAoKGZyb206IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHRvOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KSA9PiBib29sZWFuKTtcblxuLyoqXG4gKiBBIGNvbmZpZ3VyYXRpb24gb2JqZWN0IHRoYXQgZGVmaW5lcyBhIHNpbmdsZSByb3V0ZS5cbiAqIEEgc2V0IG9mIHJvdXRlcyBhcmUgY29sbGVjdGVkIGluIGEgYFJvdXRlc2AgYXJyYXkgdG8gZGVmaW5lIGEgYFJvdXRlcmAgY29uZmlndXJhdGlvbi5cbiAqIFRoZSByb3V0ZXIgYXR0ZW1wdHMgdG8gbWF0Y2ggc2VnbWVudHMgb2YgYSBnaXZlbiBVUkwgYWdhaW5zdCBlYWNoIHJvdXRlLFxuICogdXNpbmcgdGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBkZWZpbmVkIGluIHRoaXMgb2JqZWN0LlxuICpcbiAqIFN1cHBvcnRzIHN0YXRpYywgcGFyYW1ldGVyaXplZCwgcmVkaXJlY3QsIGFuZCB3aWxkY2FyZCByb3V0ZXMsIGFzIHdlbGwgYXNcbiAqIGN1c3RvbSByb3V0ZSBkYXRhIGFuZCByZXNvbHZlIG1ldGhvZHMuXG4gKlxuICogRm9yIGRldGFpbGVkIHVzYWdlIGluZm9ybWF0aW9uLCBzZWUgdGhlIFtSb3V0aW5nIEd1aWRlXShndWlkZS9yb3V0ZXIpLlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKlxuICogIyMjIFNpbXBsZSBDb25maWd1cmF0aW9uXG4gKlxuICogVGhlIGZvbGxvd2luZyByb3V0ZSBzcGVjaWZpZXMgdGhhdCB3aGVuIG5hdmlnYXRpbmcgdG8sIGZvciBleGFtcGxlLFxuICogYC90ZWFtLzExL3VzZXIvYm9iYCwgdGhlIHJvdXRlciBjcmVhdGVzIHRoZSAnVGVhbScgY29tcG9uZW50XG4gKiB3aXRoIHRoZSAnVXNlcicgY2hpbGQgY29tcG9uZW50IGluIGl0LlxuICpcbiAqIGBgYFxuICogW3tcbiAqICAgcGF0aDogJ3RlYW0vOmlkJyxcbiAgKiAgY29tcG9uZW50OiBUZWFtLFxuICogICBjaGlsZHJlbjogW3tcbiAqICAgICBwYXRoOiAndXNlci86bmFtZScsXG4gKiAgICAgY29tcG9uZW50OiBVc2VyXG4gKiAgIH1dXG4gKiB9XVxuICogYGBgXG4gKlxuICogIyMjIE11bHRpcGxlIE91dGxldHNcbiAqXG4gKiBUaGUgZm9sbG93aW5nIHJvdXRlIGNyZWF0ZXMgc2libGluZyBjb21wb25lbnRzIHdpdGggbXVsdGlwbGUgb3V0bGV0cy5cbiAqIFdoZW4gbmF2aWdhdGluZyB0byBgL3RlYW0vMTEoYXV4OmNoYXQvamltKWAsIHRoZSByb3V0ZXIgY3JlYXRlcyB0aGUgJ1RlYW0nIGNvbXBvbmVudCBuZXh0IHRvXG4gKiB0aGUgJ0NoYXQnIGNvbXBvbmVudC4gVGhlICdDaGF0JyBjb21wb25lbnQgaXMgcGxhY2VkIGludG8gdGhlICdhdXgnIG91dGxldC5cbiAqXG4gKiBgYGBcbiAqIFt7XG4gKiAgIHBhdGg6ICd0ZWFtLzppZCcsXG4gKiAgIGNvbXBvbmVudDogVGVhbVxuICogfSwge1xuICogICBwYXRoOiAnY2hhdC86dXNlcicsXG4gKiAgIGNvbXBvbmVudDogQ2hhdFxuICogICBvdXRsZXQ6ICdhdXgnXG4gKiB9XVxuICogYGBgXG4gKlxuICogIyMjIFdpbGQgQ2FyZHNcbiAqXG4gKiBUaGUgZm9sbG93aW5nIHJvdXRlIHVzZXMgd2lsZC1jYXJkIG5vdGF0aW9uIHRvIHNwZWNpZnkgYSBjb21wb25lbnRcbiAqIHRoYXQgaXMgYWx3YXlzIGluc3RhbnRpYXRlZCByZWdhcmRsZXNzIG9mIHdoZXJlIHlvdSBuYXZpZ2F0ZSB0by5cbiAqXG4gKiBgYGBcbiAqIFt7XG4gKiAgIHBhdGg6ICcqKicsXG4gKiAgIGNvbXBvbmVudDogV2lsZGNhcmRDb21wb25lbnRcbiAqIH1dXG4gKiBgYGBcbiAqXG4gKiAjIyMgUmVkaXJlY3RzXG4gKlxuICogVGhlIGZvbGxvd2luZyByb3V0ZSB1c2VzIHRoZSBgcmVkaXJlY3RUb2AgcHJvcGVydHkgdG8gaWdub3JlIGEgc2VnbWVudCBvZlxuICogYSBnaXZlbiBVUkwgd2hlbiBsb29raW5nIGZvciBhIGNoaWxkIHBhdGguXG4gKlxuICogV2hlbiBuYXZpZ2F0aW5nIHRvICcvdGVhbS8xMS9sZWdhY3kvdXNlci9qaW0nLCB0aGUgcm91dGVyIGNoYW5nZXMgdGhlIFVSTCBzZWdtZW50XG4gKiAnL3RlYW0vMTEvbGVnYWN5L3VzZXIvamltJyB0byAnL3RlYW0vMTEvdXNlci9qaW0nLCBhbmQgdGhlbiBpbnN0YW50aWF0ZXNcbiAqIHRoZSBUZWFtIGNvbXBvbmVudCB3aXRoIHRoZSBVc2VyIGNoaWxkIGNvbXBvbmVudCBpbiBpdC5cbiAqXG4gKiBgYGBcbiAqIFt7XG4gKiAgIHBhdGg6ICd0ZWFtLzppZCcsXG4gKiAgIGNvbXBvbmVudDogVGVhbSxcbiAqICAgY2hpbGRyZW46IFt7XG4gKiAgICAgcGF0aDogJ2xlZ2FjeS91c2VyLzpuYW1lJyxcbiAqICAgICByZWRpcmVjdFRvOiAndXNlci86bmFtZSdcbiAqICAgfSwge1xuICogICAgIHBhdGg6ICd1c2VyLzpuYW1lJyxcbiAqICAgICBjb21wb25lbnQ6IFVzZXJcbiAqICAgfV1cbiAqIH1dXG4gKiBgYGBcbiAqXG4gKiBUaGUgcmVkaXJlY3QgcGF0aCBjYW4gYmUgcmVsYXRpdmUsIGFzIHNob3duIGluIHRoaXMgZXhhbXBsZSwgb3IgYWJzb2x1dGUuXG4gKiBJZiB3ZSBjaGFuZ2UgdGhlIGByZWRpcmVjdFRvYCB2YWx1ZSBpbiB0aGUgZXhhbXBsZSB0byB0aGUgYWJzb2x1dGUgVVJMIHNlZ21lbnQgJy91c2VyLzpuYW1lJyxcbiAqIHRoZSByZXN1bHQgVVJMIGlzIGFsc28gYWJzb2x1dGUsICcvdXNlci9qaW0nLlxuXG4gKiAjIyMgRW1wdHkgUGF0aFxuICpcbiAqIEVtcHR5LXBhdGggcm91dGUgY29uZmlndXJhdGlvbnMgY2FuIGJlIHVzZWQgdG8gaW5zdGFudGlhdGUgY29tcG9uZW50cyB0aGF0IGRvIG5vdCAnY29uc3VtZSdcbiAqIGFueSBVUkwgc2VnbWVudHMuXG4gKlxuICogSW4gdGhlIGZvbGxvd2luZyBjb25maWd1cmF0aW9uLCB3aGVuIG5hdmlnYXRpbmcgdG9cbiAqIGAvdGVhbS8xMWAsIHRoZSByb3V0ZXIgaW5zdGFudGlhdGVzIHRoZSAnQWxsVXNlcnMnIGNvbXBvbmVudC5cbiAqXG4gKiBgYGBcbiAqIFt7XG4gKiAgIHBhdGg6ICd0ZWFtLzppZCcsXG4gKiAgIGNvbXBvbmVudDogVGVhbSxcbiAqICAgY2hpbGRyZW46IFt7XG4gKiAgICAgcGF0aDogJycsXG4gKiAgICAgY29tcG9uZW50OiBBbGxVc2Vyc1xuICogICB9LCB7XG4gKiAgICAgcGF0aDogJ3VzZXIvOm5hbWUnLFxuICogICAgIGNvbXBvbmVudDogVXNlclxuICogICB9XVxuICogfV1cbiAqIGBgYFxuICpcbiAqIEVtcHR5LXBhdGggcm91dGVzIGNhbiBoYXZlIGNoaWxkcmVuLiBJbiB0aGUgZm9sbG93aW5nIGV4YW1wbGUsIHdoZW4gbmF2aWdhdGluZ1xuICogdG8gYC90ZWFtLzExL3VzZXIvamltYCwgdGhlIHJvdXRlciBpbnN0YW50aWF0ZXMgdGhlIHdyYXBwZXIgY29tcG9uZW50IHdpdGhcbiAqIHRoZSB1c2VyIGNvbXBvbmVudCBpbiBpdC5cbiAqXG4gKiBOb3RlIHRoYXQgYW4gZW1wdHkgcGF0aCByb3V0ZSBpbmhlcml0cyBpdHMgcGFyZW50J3MgcGFyYW1ldGVycyBhbmQgZGF0YS5cbiAqXG4gKiBgYGBcbiAqIFt7XG4gKiAgIHBhdGg6ICd0ZWFtLzppZCcsXG4gKiAgIGNvbXBvbmVudDogVGVhbSxcbiAqICAgY2hpbGRyZW46IFt7XG4gKiAgICAgcGF0aDogJycsXG4gKiAgICAgY29tcG9uZW50OiBXcmFwcGVyQ21wLFxuICogICAgIGNoaWxkcmVuOiBbe1xuICogICAgICAgcGF0aDogJ3VzZXIvOm5hbWUnLFxuICogICAgICAgY29tcG9uZW50OiBVc2VyXG4gKiAgICAgfV1cbiAqICAgfV1cbiAqIH1dXG4gKiBgYGBcbiAqXG4gKiAjIyMgTWF0Y2hpbmcgU3RyYXRlZ3lcbiAqXG4gKiBUaGUgZGVmYXVsdCBwYXRoLW1hdGNoIHN0cmF0ZWd5IGlzICdwcmVmaXgnLCB3aGljaCBtZWFucyB0aGF0IHRoZSByb3V0ZXJcbiAqIGNoZWNrcyBVUkwgZWxlbWVudHMgZnJvbSB0aGUgbGVmdCB0byBzZWUgaWYgdGhlIFVSTCBtYXRjaGVzIGEgc3BlY2lmaWVkIHBhdGguXG4gKiBGb3IgZXhhbXBsZSwgJy90ZWFtLzExL3VzZXInIG1hdGNoZXMgJ3RlYW0vOmlkJy5cbiAqXG4gKiBgYGBcbiAqIFt7XG4gKiAgIHBhdGg6ICcnLFxuICogICBwYXRoTWF0Y2g6ICdwcmVmaXgnLCAvL2RlZmF1bHRcbiAqICAgcmVkaXJlY3RUbzogJ21haW4nXG4gKiB9LCB7XG4gKiAgIHBhdGg6ICdtYWluJyxcbiAqICAgY29tcG9uZW50OiBNYWluXG4gKiB9XVxuICogYGBgXG4gKlxuICogWW91IGNhbiBzcGVjaWZ5IHRoZSBwYXRoLW1hdGNoIHN0cmF0ZWd5ICdmdWxsJyB0byBtYWtlIHN1cmUgdGhhdCB0aGUgcGF0aFxuICogY292ZXJzIHRoZSB3aG9sZSB1bmNvbnN1bWVkIFVSTC4gSXQgaXMgaW1wb3J0YW50IHRvIGRvIHRoaXMgd2hlbiByZWRpcmVjdGluZ1xuICogZW1wdHktcGF0aCByb3V0ZXMuIE90aGVyd2lzZSwgYmVjYXVzZSBhbiBlbXB0eSBwYXRoIGlzIGEgcHJlZml4IG9mIGFueSBVUkwsXG4gKiB0aGUgcm91dGVyIHdvdWxkIGFwcGx5IHRoZSByZWRpcmVjdCBldmVuIHdoZW4gbmF2aWdhdGluZyB0byB0aGUgcmVkaXJlY3QgZGVzdGluYXRpb24sXG4gKiBjcmVhdGluZyBhbiBlbmRsZXNzIGxvb3AuXG4gKlxuICogSW4gdGhlIGZvbGxvd2luZyBleGFtcGxlLCBzdXBwbHlpbmcgdGhlICdmdWxsJyBgcGF0Y2hNYXRjaGAgc3RyYXRlZ3kgZW5zdXJlc1xuICogdGhhdCB0aGUgcm91dGVyIGFwcGxpZXMgdGhlIHJlZGlyZWN0IGlmIGFuZCBvbmx5IGlmIG5hdmlnYXRpbmcgdG8gJy8nLlxuICpcbiAqIGBgYFxuICogW3tcbiAqICAgcGF0aDogJycsXG4gKiAgIHBhdGhNYXRjaDogJ2Z1bGwnLFxuICogICByZWRpcmVjdFRvOiAnbWFpbidcbiAqIH0sIHtcbiAqICAgcGF0aDogJ21haW4nLFxuICogICBjb21wb25lbnQ6IE1haW5cbiAqIH1dXG4gKiBgYGBcbiAqXG4gKiAjIyMgQ29tcG9uZW50bGVzcyBSb3V0ZXNcbiAqXG4gKiBZb3UgY2FuIHNoYXJlIHBhcmFtZXRlcnMgYmV0d2VlbiBzaWJsaW5nIGNvbXBvbmVudHMuXG4gKiBGb3IgZXhhbXBsZSwgc3VwcG9zZSB0aGF0IHR3byBzaWJsaW5nIGNvbXBvbmVudHMgc2hvdWxkIGdvIG5leHQgdG8gZWFjaCBvdGhlcixcbiAqIGFuZCBib3RoIG9mIHRoZW0gcmVxdWlyZSBhbiBJRCBwYXJhbWV0ZXIuIFlvdSBjYW4gYWNjb21wbGlzaCB0aGlzIHVzaW5nIGEgcm91dGVcbiAqIHRoYXQgZG9lcyBub3Qgc3BlY2lmeSBhIGNvbXBvbmVudCBhdCB0aGUgdG9wIGxldmVsLlxuICpcbiAqIEluIHRoZSBmb2xsb3dpbmcgZXhhbXBsZSwgJ0NoaWxkQ21wJyBhbmQgJ0F1eENtcCcgYXJlIHNpYmxpbmdzLlxuICogV2hlbiBuYXZpZ2F0aW5nIHRvICdwYXJlbnQvMTAvKGEvL2F1eDpiKScsIHRoZSByb3V0ZSBpbnN0YW50aWF0ZXNcbiAqIHRoZSBtYWluIGNoaWxkIGFuZCBhdXggY2hpbGQgY29tcG9uZW50cyBuZXh0IHRvIGVhY2ggb3RoZXIuXG4gKiBGb3IgdGhpcyB0byB3b3JrLCB0aGUgYXBwbGljYXRpb24gY29tcG9uZW50IG11c3QgaGF2ZSB0aGUgcHJpbWFyeSBhbmQgYXV4IG91dGxldHMgZGVmaW5lZC5cbiAqXG4gKiBgYGBcbiAqIFt7XG4gKiAgICBwYXRoOiAncGFyZW50LzppZCcsXG4gKiAgICBjaGlsZHJlbjogW1xuICogICAgICB7IHBhdGg6ICdhJywgY29tcG9uZW50OiBNYWluQ2hpbGQgfSxcbiAqICAgICAgeyBwYXRoOiAnYicsIGNvbXBvbmVudDogQXV4Q2hpbGQsIG91dGxldDogJ2F1eCcgfVxuICogICAgXVxuICogfV1cbiAqIGBgYFxuICpcbiAqIFRoZSByb3V0ZXIgbWVyZ2VzIHRoZSBwYXJhbWV0ZXJzLCBkYXRhLCBhbmQgcmVzb2x2ZSBvZiB0aGUgY29tcG9uZW50bGVzc1xuICogcGFyZW50IGludG8gdGhlIHBhcmFtZXRlcnMsIGRhdGEsIGFuZCByZXNvbHZlIG9mIHRoZSBjaGlsZHJlbi5cbiAqXG4gKiBUaGlzIGlzIGVzcGVjaWFsbHkgdXNlZnVsIHdoZW4gY2hpbGQgY29tcG9uZW50cyBhcmUgZGVmaW5lZFxuICogd2l0aCBhbiBlbXB0eSBwYXRoIHN0cmluZywgYXMgaW4gdGhlIGZvbGxvd2luZyBleGFtcGxlLlxuICogV2l0aCB0aGlzIGNvbmZpZ3VyYXRpb24sIG5hdmlnYXRpbmcgdG8gJy9wYXJlbnQvMTAnIGNyZWF0ZXNcbiAqIHRoZSBtYWluIGNoaWxkIGFuZCBhdXggY29tcG9uZW50cy5cbiAqXG4gKiBgYGBcbiAqIFt7XG4gKiAgICBwYXRoOiAncGFyZW50LzppZCcsXG4gKiAgICBjaGlsZHJlbjogW1xuICogICAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IE1haW5DaGlsZCB9LFxuICogICAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IEF1eENoaWxkLCBvdXRsZXQ6ICdhdXgnIH1cbiAqICAgIF1cbiAqIH1dXG4gKiBgYGBcbiAqXG4gKiAjIyMgTGF6eSBMb2FkaW5nXG4gKlxuICogTGF6eSBsb2FkaW5nIHNwZWVkcyB1cCBhcHBsaWNhdGlvbiBsb2FkIHRpbWUgYnkgc3BsaXR0aW5nIHRoZSBhcHBsaWNhdGlvblxuICogaW50byBtdWx0aXBsZSBidW5kbGVzIGFuZCBsb2FkaW5nIHRoZW0gb24gZGVtYW5kLlxuICogVG8gdXNlIGxhenkgbG9hZGluZywgcHJvdmlkZSB0aGUgYGxvYWRDaGlsZHJlbmAgcHJvcGVydHkgIGluc3RlYWQgb2YgdGhlIGBjaGlsZHJlbmAgcHJvcGVydHkuXG4gKlxuICogR2l2ZW4gdGhlIGZvbGxvd2luZyBleGFtcGxlIHJvdXRlLCB0aGUgcm91dGVyIHVzZXMgdGhlIHJlZ2lzdGVyZWRcbiAqIGBOZ01vZHVsZUZhY3RvcnlMb2FkZXJgIHRvIGZldGNoIGFuIE5nTW9kdWxlIGFzc29jaWF0ZWQgd2l0aCAndGVhbScuXG4gKiBJdCB0aGVuIGV4dHJhY3RzIHRoZSBzZXQgb2Ygcm91dGVzIGRlZmluZWQgaW4gdGhhdCBOZ01vZHVsZSxcbiAqIGFuZCB0cmFuc3BhcmVudGx5IGFkZHMgdGhvc2Ugcm91dGVzIHRvIHRoZSBtYWluIGNvbmZpZ3VyYXRpb24uXG4gKlxuICogYGBgXG4gKiBbe1xuICogICBwYXRoOiAndGVhbS86aWQnLFxuICogICBjb21wb25lbnQ6IFRlYW0sXG4gKiAgIGxvYWRDaGlsZHJlbjogJ3RlYW0nXG4gKiB9XVxuICogYGBgXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlIHtcbiAgLyoqXG4gICAqIFRoZSBwYXRoIHRvIG1hdGNoIGFnYWluc3QsIGEgVVJMIHN0cmluZyB0aGF0IHVzZXMgcm91dGVyIG1hdGNoaW5nIG5vdGF0aW9uLlxuICAgKiBDYW4gYmUgYSB3aWxkIGNhcmQgKGAqKmApIHRoYXQgbWF0Y2hlcyBhbnkgVVJMIChzZWUgVXNhZ2UgTm90ZXMgYmVsb3cpLlxuICAgKiBEZWZhdWx0IGlzIFwiL1wiICh0aGUgcm9vdCBwYXRoKS5cbiAgICovXG4gIHBhdGg/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgcGF0aC1tYXRjaGluZyBzdHJhdGVneSwgb25lIG9mICdwcmVmaXgnIG9yICdmdWxsJy5cbiAgICogRGVmYXVsdCBpcyAncHJlZml4Jy5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgdGhlIHJvdXRlciBjaGVja3MgVVJMIGVsZW1lbnRzIGZyb20gdGhlIGxlZnQgdG8gc2VlIGlmIHRoZSBVUkxcbiAgICogbWF0Y2hlcyBhIGdpdmVuICBwYXRoLCBhbmQgc3RvcHMgd2hlbiB0aGVyZSBpcyBhIG1hdGNoLiBGb3IgZXhhbXBsZSxcbiAgICogJy90ZWFtLzExL3VzZXInIG1hdGNoZXMgJ3RlYW0vOmlkJy5cbiAgICpcbiAgICogVGhlIHBhdGgtbWF0Y2ggc3RyYXRlZ3kgJ2Z1bGwnIG1hdGNoZXMgYWdhaW5zdCB0aGUgZW50aXJlIFVSTC5cbiAgICogSXQgaXMgaW1wb3J0YW50IHRvIGRvIHRoaXMgd2hlbiByZWRpcmVjdGluZyBlbXB0eS1wYXRoIHJvdXRlcy5cbiAgICogT3RoZXJ3aXNlLCBiZWNhdXNlIGFuIGVtcHR5IHBhdGggaXMgYSBwcmVmaXggb2YgYW55IFVSTCxcbiAgICogdGhlIHJvdXRlciB3b3VsZCBhcHBseSB0aGUgcmVkaXJlY3QgZXZlbiB3aGVuIG5hdmlnYXRpbmdcbiAgICogdG8gdGhlIHJlZGlyZWN0IGRlc3RpbmF0aW9uLCBjcmVhdGluZyBhbiBlbmRsZXNzIGxvb3AuXG4gICAqXG4gICAqL1xuICBwYXRoTWF0Y2g/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBIFVSTC1tYXRjaGluZyBmdW5jdGlvbiB0byB1c2UgYXMgYSBjdXN0b20gc3RyYXRlZ3kgZm9yIHBhdGggbWF0Y2hpbmcuXG4gICAqIElmIHByZXNlbnQsIHN1cGVyc2VkZXMgYHBhdGhgIGFuZCBgcGF0aE1hdGNoYC5cbiAgICovXG4gIG1hdGNoZXI/OiBVcmxNYXRjaGVyO1xuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB0byBpbnN0YW50aWF0ZSB3aGVuIHRoZSBwYXRoIG1hdGNoZXMuXG4gICAqIENhbiBiZSBlbXB0eSBpZiBjaGlsZCByb3V0ZXMgc3BlY2lmeSBjb21wb25lbnRzLlxuICAgKi9cbiAgY29tcG9uZW50PzogVHlwZTxhbnk+O1xuICAvKipcbiAgICogQSBVUkwgdG8gd2hpY2ggdG8gcmVkaXJlY3Qgd2hlbiBhIHRoZSBwYXRoIG1hdGNoZXMuXG4gICAqIEFic29sdXRlIGlmIHRoZSBVUkwgYmVnaW5zIHdpdGggYSBzbGFzaCAoLyksIG90aGVyd2lzZSByZWxhdGl2ZSB0byB0aGUgcGF0aCBVUkwuXG4gICAqIFdoZW4gbm90IHByZXNlbnQsIHJvdXRlciBkb2VzIG5vdCByZWRpcmVjdC5cbiAgICovXG4gIHJlZGlyZWN0VG8/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBOYW1lIG9mIGEgYFJvdXRlck91dGxldGAgb2JqZWN0IHdoZXJlIHRoZSBjb21wb25lbnQgY2FuIGJlIHBsYWNlZFxuICAgKiB3aGVuIHRoZSBwYXRoIG1hdGNoZXMuXG4gICAqL1xuICBvdXRsZXQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBkZXBlbmRlbmN5LWluamVjdGlvbiB0b2tlbnMgdXNlZCB0byBsb29rIHVwIGBDYW5BY3RpdmF0ZSgpYFxuICAgKiBoYW5kbGVycywgaW4gb3JkZXIgdG8gZGV0ZXJtaW5lIGlmIHRoZSBjdXJyZW50IHVzZXIgaXMgYWxsb3dlZCB0b1xuICAgKiBhY3RpdmF0ZSB0aGUgY29tcG9uZW50LiBCeSBkZWZhdWx0LCBhbnkgdXNlciBjYW4gYWN0aXZhdGUuXG4gICAqL1xuICBjYW5BY3RpdmF0ZT86IGFueVtdO1xuICAvKipcbiAgICogQW4gYXJyYXkgb2YgREkgdG9rZW5zIHVzZWQgdG8gbG9vayB1cCBgQ2FuQWN0aXZhdGVDaGlsZCgpYCBoYW5kbGVycyxcbiAgICogaW4gb3JkZXIgdG8gZGV0ZXJtaW5lIGlmIHRoZSBjdXJyZW50IHVzZXIgaXMgYWxsb3dlZCB0byBhY3RpdmF0ZVxuICAgKiBhIGNoaWxkIG9mIHRoZSBjb21wb25lbnQuIEJ5IGRlZmF1bHQsIGFueSB1c2VyIGNhbiBhY3RpdmF0ZSBhIGNoaWxkLlxuICAgKi9cbiAgY2FuQWN0aXZhdGVDaGlsZD86IGFueVtdO1xuICAvKipcbiAgICogQW4gYXJyYXkgb2YgREkgdG9rZW5zIHVzZWQgdG8gbG9vayB1cCBgQ2FuRGVhY3RpdmF0ZSgpYFxuICAgKiBoYW5kbGVycywgaW4gb3JkZXIgdG8gZGV0ZXJtaW5lIGlmIHRoZSBjdXJyZW50IHVzZXIgaXMgYWxsb3dlZCB0b1xuICAgKiBkZWFjdGl2YXRlIHRoZSBjb21wb25lbnQuIEJ5IGRlZmF1bHQsIGFueSB1c2VyIGNhbiBkZWFjdGl2YXRlLlxuICAgKlxuICAgKi9cbiAgY2FuRGVhY3RpdmF0ZT86IGFueVtdO1xuICAvKipcbiAgICogQW4gYXJyYXkgb2YgREkgdG9rZW5zIHVzZWQgdG8gbG9vayB1cCBgQ2FuTG9hZCgpYFxuICAgKiBoYW5kbGVycywgaW4gb3JkZXIgdG8gZGV0ZXJtaW5lIGlmIHRoZSBjdXJyZW50IHVzZXIgaXMgYWxsb3dlZCB0b1xuICAgKiBsb2FkIHRoZSBjb21wb25lbnQuIEJ5IGRlZmF1bHQsIGFueSB1c2VyIGNhbiBsb2FkLlxuICAgKi9cbiAgY2FuTG9hZD86IGFueVtdO1xuICAvKipcbiAgICogQWRkaXRpb25hbCBkZXZlbG9wZXItZGVmaW5lZCBkYXRhIHByb3ZpZGVkIHRvIHRoZSBjb21wb25lbnQgdmlhXG4gICAqIGBBY3RpdmF0ZWRSb3V0ZWAuIEJ5IGRlZmF1bHQsIG5vIGFkZGl0aW9uYWwgZGF0YSBpcyBwYXNzZWQuXG4gICAqL1xuICBkYXRhPzogRGF0YTtcbiAgLyoqXG4gICAqIEEgbWFwIG9mIERJIHRva2VucyB1c2VkIHRvIGxvb2sgdXAgZGF0YSByZXNvbHZlcnMuIFNlZSBgUmVzb2x2ZWAuXG4gICAqL1xuICByZXNvbHZlPzogUmVzb2x2ZURhdGE7XG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBjaGlsZCBgUm91dGVgIG9iamVjdHMgdGhhdCBzcGVjaWZpZXMgYSBuZXN0ZWQgcm91dGVcbiAgICogY29uZmlndXJhdGlvbi5cbiAgICovXG4gIGNoaWxkcmVuPzogUm91dGVzO1xuICAvKipcbiAgICogQSBgTG9hZENoaWxkcmVuYCBvYmplY3Qgc3BlY2lmeWluZyBsYXp5LWxvYWRlZCBjaGlsZCByb3V0ZXMuXG4gICAqL1xuICBsb2FkQ2hpbGRyZW4/OiBMb2FkQ2hpbGRyZW47XG4gIC8qKlxuICAgKiBEZWZpbmVzIHdoZW4gZ3VhcmRzIGFuZCByZXNvbHZlcnMgd2lsbCBiZSBydW4uIE9uZSBvZlxuICAgKiAtIGBwYXJhbXNPclF1ZXJ5UGFyYW1zQ2hhbmdlYCA6IFJ1biB3aGVuIHF1ZXJ5IHBhcmFtZXRlcnMgY2hhbmdlLlxuICAgKiAtIGBhbHdheXNgIDogUnVuIG9uIGV2ZXJ5IGV4ZWN1dGlvbi5cbiAgICogQnkgZGVmYXVsdCwgZ3VhcmRzIGFuZCByZXNvbHZlcnMgcnVuIG9ubHkgd2hlbiB0aGUgbWF0cml4XG4gICAqIHBhcmFtZXRlcnMgb2YgdGhlIHJvdXRlIGNoYW5nZS5cbiAgICovXG4gIHJ1bkd1YXJkc0FuZFJlc29sdmVycz86IFJ1bkd1YXJkc0FuZFJlc29sdmVycztcbiAgLyoqXG4gICAqIEZpbGxlZCBmb3Igcm91dGVzIHdpdGggYGxvYWRDaGlsZHJlbmAgb25jZSB0aGUgbW9kdWxlIGhhcyBiZWVuIGxvYWRlZFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIF9sb2FkZWRDb25maWc/OiBMb2FkZWRSb3V0ZXJDb25maWc7XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkZWRSb3V0ZXJDb25maWcge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcm91dGVzOiBSb3V0ZVtdLCBwdWJsaWMgbW9kdWxlOiBOZ01vZHVsZVJlZjxhbnk+KSB7fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVDb25maWcoY29uZmlnOiBSb3V0ZXMsIHBhcmVudFBhdGg6IHN0cmluZyA9ICcnKTogdm9pZCB7XG4gIC8vIGZvckVhY2ggZG9lc24ndCBpdGVyYXRlIHVuZGVmaW5lZCB2YWx1ZXNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25maWcubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCByb3V0ZTogUm91dGUgPSBjb25maWdbaV07XG4gICAgY29uc3QgZnVsbFBhdGg6IHN0cmluZyA9IGdldEZ1bGxQYXRoKHBhcmVudFBhdGgsIHJvdXRlKTtcbiAgICB2YWxpZGF0ZU5vZGUocm91dGUsIGZ1bGxQYXRoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZU5vZGUocm91dGU6IFJvdXRlLCBmdWxsUGF0aDogc3RyaW5nKTogdm9pZCB7XG4gIGlmICghcm91dGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFxuICAgICAgSW52YWxpZCBjb25maWd1cmF0aW9uIG9mIHJvdXRlICcke2Z1bGxQYXRofSc6IEVuY291bnRlcmVkIHVuZGVmaW5lZCByb3V0ZS5cbiAgICAgIFRoZSByZWFzb24gbWlnaHQgYmUgYW4gZXh0cmEgY29tbWEuXG5cbiAgICAgIEV4YW1wbGU6XG4gICAgICBjb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICAgICAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJy9kYXNoYm9hcmQnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxuICAgICAgICB7IHBhdGg6ICdkYXNoYm9hcmQnLCAgY29tcG9uZW50OiBEYXNoYm9hcmRDb21wb25lbnQgfSwsIDw8IHR3byBjb21tYXNcbiAgICAgICAgeyBwYXRoOiAnZGV0YWlsLzppZCcsIGNvbXBvbmVudDogSGVyb0RldGFpbENvbXBvbmVudCB9XG4gICAgICBdO1xuICAgIGApO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHJvdXRlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBjb25maWd1cmF0aW9uIG9mIHJvdXRlICcke2Z1bGxQYXRofSc6IEFycmF5IGNhbm5vdCBiZSBzcGVjaWZpZWRgKTtcbiAgfVxuICBpZiAoIXJvdXRlLmNvbXBvbmVudCAmJiAhcm91dGUuY2hpbGRyZW4gJiYgIXJvdXRlLmxvYWRDaGlsZHJlbiAmJlxuICAgICAgKHJvdXRlLm91dGxldCAmJiByb3V0ZS5vdXRsZXQgIT09IFBSSU1BUllfT1VUTEVUKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEludmFsaWQgY29uZmlndXJhdGlvbiBvZiByb3V0ZSAnJHtmdWxsUGF0aH0nOiBhIGNvbXBvbmVudGxlc3Mgcm91dGUgd2l0aG91dCBjaGlsZHJlbiBvciBsb2FkQ2hpbGRyZW4gY2Fubm90IGhhdmUgYSBuYW1lZCBvdXRsZXQgc2V0YCk7XG4gIH1cbiAgaWYgKHJvdXRlLnJlZGlyZWN0VG8gJiYgcm91dGUuY2hpbGRyZW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbnZhbGlkIGNvbmZpZ3VyYXRpb24gb2Ygcm91dGUgJyR7ZnVsbFBhdGh9JzogcmVkaXJlY3RUbyBhbmQgY2hpbGRyZW4gY2Fubm90IGJlIHVzZWQgdG9nZXRoZXJgKTtcbiAgfVxuICBpZiAocm91dGUucmVkaXJlY3RUbyAmJiByb3V0ZS5sb2FkQ2hpbGRyZW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbnZhbGlkIGNvbmZpZ3VyYXRpb24gb2Ygcm91dGUgJyR7ZnVsbFBhdGh9JzogcmVkaXJlY3RUbyBhbmQgbG9hZENoaWxkcmVuIGNhbm5vdCBiZSB1c2VkIHRvZ2V0aGVyYCk7XG4gIH1cbiAgaWYgKHJvdXRlLmNoaWxkcmVuICYmIHJvdXRlLmxvYWRDaGlsZHJlbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEludmFsaWQgY29uZmlndXJhdGlvbiBvZiByb3V0ZSAnJHtmdWxsUGF0aH0nOiBjaGlsZHJlbiBhbmQgbG9hZENoaWxkcmVuIGNhbm5vdCBiZSB1c2VkIHRvZ2V0aGVyYCk7XG4gIH1cbiAgaWYgKHJvdXRlLnJlZGlyZWN0VG8gJiYgcm91dGUuY29tcG9uZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW52YWxpZCBjb25maWd1cmF0aW9uIG9mIHJvdXRlICcke2Z1bGxQYXRofSc6IHJlZGlyZWN0VG8gYW5kIGNvbXBvbmVudCBjYW5ub3QgYmUgdXNlZCB0b2dldGhlcmApO1xuICB9XG4gIGlmIChyb3V0ZS5wYXRoICYmIHJvdXRlLm1hdGNoZXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbnZhbGlkIGNvbmZpZ3VyYXRpb24gb2Ygcm91dGUgJyR7ZnVsbFBhdGh9JzogcGF0aCBhbmQgbWF0Y2hlciBjYW5ub3QgYmUgdXNlZCB0b2dldGhlcmApO1xuICB9XG4gIGlmIChyb3V0ZS5yZWRpcmVjdFRvID09PSB2b2lkIDAgJiYgIXJvdXRlLmNvbXBvbmVudCAmJiAhcm91dGUuY2hpbGRyZW4gJiYgIXJvdXRlLmxvYWRDaGlsZHJlbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEludmFsaWQgY29uZmlndXJhdGlvbiBvZiByb3V0ZSAnJHtmdWxsUGF0aH0nLiBPbmUgb2YgdGhlIGZvbGxvd2luZyBtdXN0IGJlIHByb3ZpZGVkOiBjb21wb25lbnQsIHJlZGlyZWN0VG8sIGNoaWxkcmVuIG9yIGxvYWRDaGlsZHJlbmApO1xuICB9XG4gIGlmIChyb3V0ZS5wYXRoID09PSB2b2lkIDAgJiYgcm91dGUubWF0Y2hlciA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW52YWxpZCBjb25maWd1cmF0aW9uIG9mIHJvdXRlICcke2Z1bGxQYXRofSc6IHJvdXRlcyBtdXN0IGhhdmUgZWl0aGVyIGEgcGF0aCBvciBhIG1hdGNoZXIgc3BlY2lmaWVkYCk7XG4gIH1cbiAgaWYgKHR5cGVvZiByb3V0ZS5wYXRoID09PSAnc3RyaW5nJyAmJiByb3V0ZS5wYXRoLmNoYXJBdCgwKSA9PT0gJy8nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGNvbmZpZ3VyYXRpb24gb2Ygcm91dGUgJyR7ZnVsbFBhdGh9JzogcGF0aCBjYW5ub3Qgc3RhcnQgd2l0aCBhIHNsYXNoYCk7XG4gIH1cbiAgaWYgKHJvdXRlLnBhdGggPT09ICcnICYmIHJvdXRlLnJlZGlyZWN0VG8gIT09IHZvaWQgMCAmJiByb3V0ZS5wYXRoTWF0Y2ggPT09IHZvaWQgMCkge1xuICAgIGNvbnN0IGV4cCA9XG4gICAgICAgIGBUaGUgZGVmYXVsdCB2YWx1ZSBvZiAncGF0aE1hdGNoJyBpcyAncHJlZml4JywgYnV0IG9mdGVuIHRoZSBpbnRlbnQgaXMgdG8gdXNlICdmdWxsJy5gO1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEludmFsaWQgY29uZmlndXJhdGlvbiBvZiByb3V0ZSAne3BhdGg6IFwiJHtmdWxsUGF0aH1cIiwgcmVkaXJlY3RUbzogXCIke3JvdXRlLnJlZGlyZWN0VG99XCJ9JzogcGxlYXNlIHByb3ZpZGUgJ3BhdGhNYXRjaCcuICR7ZXhwfWApO1xuICB9XG4gIGlmIChyb3V0ZS5wYXRoTWF0Y2ggIT09IHZvaWQgMCAmJiByb3V0ZS5wYXRoTWF0Y2ggIT09ICdmdWxsJyAmJiByb3V0ZS5wYXRoTWF0Y2ggIT09ICdwcmVmaXgnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW52YWxpZCBjb25maWd1cmF0aW9uIG9mIHJvdXRlICcke2Z1bGxQYXRofSc6IHBhdGhNYXRjaCBjYW4gb25seSBiZSBzZXQgdG8gJ3ByZWZpeCcgb3IgJ2Z1bGwnYCk7XG4gIH1cbiAgaWYgKHJvdXRlLmNoaWxkcmVuKSB7XG4gICAgdmFsaWRhdGVDb25maWcocm91dGUuY2hpbGRyZW4sIGZ1bGxQYXRoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRGdWxsUGF0aChwYXJlbnRQYXRoOiBzdHJpbmcsIGN1cnJlbnRSb3V0ZTogUm91dGUpOiBzdHJpbmcge1xuICBpZiAoIWN1cnJlbnRSb3V0ZSkge1xuICAgIHJldHVybiBwYXJlbnRQYXRoO1xuICB9XG4gIGlmICghcGFyZW50UGF0aCAmJiAhY3VycmVudFJvdXRlLnBhdGgpIHtcbiAgICByZXR1cm4gJyc7XG4gIH0gZWxzZSBpZiAocGFyZW50UGF0aCAmJiAhY3VycmVudFJvdXRlLnBhdGgpIHtcbiAgICByZXR1cm4gYCR7cGFyZW50UGF0aH0vYDtcbiAgfSBlbHNlIGlmICghcGFyZW50UGF0aCAmJiBjdXJyZW50Um91dGUucGF0aCkge1xuICAgIHJldHVybiBjdXJyZW50Um91dGUucGF0aDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYCR7cGFyZW50UGF0aH0vJHtjdXJyZW50Um91dGUucGF0aH1gO1xuICB9XG59XG5cbi8qKlxuICogTWFrZXMgYSBjb3B5IG9mIHRoZSBjb25maWcgYW5kIGFkZHMgYW55IGRlZmF1bHQgcmVxdWlyZWQgcHJvcGVydGllcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YW5kYXJkaXplQ29uZmlnKHI6IFJvdXRlKTogUm91dGUge1xuICBjb25zdCBjaGlsZHJlbiA9IHIuY2hpbGRyZW4gJiYgci5jaGlsZHJlbi5tYXAoc3RhbmRhcmRpemVDb25maWcpO1xuICBjb25zdCBjID0gY2hpbGRyZW4gPyB7Li4uciwgY2hpbGRyZW59IDogey4uLnJ9O1xuICBpZiAoIWMuY29tcG9uZW50ICYmIChjaGlsZHJlbiB8fCBjLmxvYWRDaGlsZHJlbikgJiYgKGMub3V0bGV0ICYmIGMub3V0bGV0ICE9PSBQUklNQVJZX09VVExFVCkpIHtcbiAgICBjLmNvbXBvbmVudCA9IEVtcHR5T3V0bGV0Q29tcG9uZW50O1xuICB9XG4gIHJldHVybiBjO1xufVxuIl19