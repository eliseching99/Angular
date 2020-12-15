import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule} from '@angular/router';
import { MainComponent } from './main/main.component';
import { NotmainComponent } from './notmain/notmain.component';
import { BindarrayComponent } from './bindarray/bindarray.component';
import { CollapseComponent } from './collapse/collapse.component';
import { ToggleComponent } from './toggle/toggle.component';
import {HttpClientModule} from '@angular/common/http';
import { TestinputComponent } from './testinput/testinput.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NotmainComponent,
    BindarrayComponent,
    CollapseComponent,
    ToggleComponent,
    TestinputComponent,
    NameEditorComponent,
    ProfileEditorComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
    {path:'notmain',
    component:NotmainComponent}
    ,
  {
    path:'',
    component:MainComponent
  }
    ]),
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
