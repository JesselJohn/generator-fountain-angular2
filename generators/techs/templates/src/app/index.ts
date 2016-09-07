<% if (router === 'uirouter') { -%>
import {provide, NgModule} from '@angular/core';
import {UIRouterConfig, UIROUTER_PROVIDERS, UiView} from 'ui-router-ng2';
import {LocationStrategy, PathLocationStrategy, PlatformLocation} from '@angular/common';
import {BrowserPlatformLocation, BrowserModule} from '@angular/platform-browser';
import {MyUIRouterConfig} from './routes';
<% } else if (router === 'router') { -%>
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';
<% } else { -%>
import {MainComponent} from './app/main';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
<% } -%>
import {TechsModule} from './techs';

import {MainComponent} from './main';
import {HeaderComponent} from './header';
import {TitleComponent} from './title';
import {FooterComponent} from './footer';

@NgModule({
  imports: [
    BrowserModule,
<% if (router === 'router') { -%>
    routing,
<% } -%>
    TechsModule
  ],
  declarations: [
<% if (router === 'uirouter') { -%>
    UiView,
<% } else if (router === 'router') { -%>
    RootComponent,
<% } -%>
    MainComponent,
    HeaderComponent,
    TitleComponent,
    FooterComponent
  ],
<% if (router === 'uirouter') { -%>
  providers: [
    ...UIROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: PathLocationStrategy}),
    provide(PlatformLocation, {useClass: BrowserPlatformLocation}),
    provide(UIRouterConfig, {useClass: MyUIRouterConfig})
  ],
  bootstrap: [UiView]
<% } else if (router === 'router') { -%>
  bootstrap: [RootComponent]
<% } else { -%>
  bootstrap: [MainComponent]
<% } -%>
})
export class AppModule {}