import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { environment } from './../environments/environment';
import { appRoutes } from './../routes';
import { AuthService } from './_services/auth.service';
import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule, TabsModule, BsDatepickerModule, PaginationModule, ButtonsModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { NgxGalleryModule } from 'ngx-gallery';
import { FileUploadModule } from 'ng2-file-upload';
import {TimeAgoPipe} from 'time-ago-pipe';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { tokenName } from '@angular/compiler';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { PhotoEditorComponent } from './members/photo-editor/photo-editor.component';
import { ListResolver } from './_resolvers/lists.resolver';
export function tokenGetter() {
   return localStorage.getItem('token');
}
export class CustomHammerConfig extends HammerGestureConfig  {
   overrides = {
       pinch: { enable: false },
       rotate: { enable: false }
   };
}
@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      MemberListComponent,
      ListsComponent,
      MessagesComponent,
      MemberCardComponent,
      MemberDetailComponent,
      MemberEditComponent,
      PhotoEditorComponent,
      TimeAgoPipe
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      BsDropdownModule.forRoot(),
      BsDatepickerModule.forRoot(),
      PaginationModule.forRoot(),
      ButtonsModule.forRoot(),
      TabsModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      NgxGalleryModule,
      FileUploadModule,
      JwtModule.forRoot({
         config: {
            tokenGetter,
            whitelistedDomains: ['localhost:5007'],
            blacklistedRoutes: ['localhost:5007/api/auth']
         }
      })
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      MemberDetailResolver,
      MemberListResolver,
      MemberEditResolver,
      ListResolver,
      { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig },
      PreventUnsavedChanges
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
