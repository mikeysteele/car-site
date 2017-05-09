import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { CarActions } from './actions/carActions';
import { rootReducer } from './reducers';
import { IAppState } from './IAppState';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
@NgModule({
    imports: [
        CommonModule,
        NgReduxModule,
        RouterModule,
    ],
    declarations: [],
    providers: [CarActions]
})
export class StoreModule {
    constructor(
        public store: NgRedux<IAppState>,
        devTools: DevToolsExtension
    ) {

        store.configureStore(
            rootReducer,
            {},
            [createLogger(), thunk],
            devTools.isEnabled() ? [devTools.enhancer()] : []);


    }
}



