import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BindingImageSizeComponent } from './binding-image-size/binding-image-size.component';
import { BasicEventBindingExerciseComponent } from './basic-event-binding-exercise/basic-event-binding-exercise.component';
import { DynamicButtonEventBindingComponent } from './dynamic-button-event-binding/dynamic-button-event-binding.component';
import { BasicNmodelExerciseComponent } from './basic-ngmodel-exercise/basic-ngmodel-exercise.component';
import { InputEventBindingExerciseComponent } from './input-event-binding-exercise/input-event-binding-exercise.component';
import { BasicNifExerciseComponent } from './basic-ngif-exercise/basic-ngif-exercise.component';
import { BasicNifElseExerciseComponent } from './basic-ngif-else-exercise/basic-ngif-else-exercise.component';
import { BasicNStyleExerciseComponent } from './basic-ng-style-exercise/basic-ng-style-exercise.component';
import { DynamicallyChangeContentNgstyleExerciseComponent } from './dynamically-change-content-ngstyle-exercise/dynamically-change-content-ngstyle-exercise.component';
import { OutputEachElement10Component } from './output-each-element10/output-each-element10.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingImageSizeComponent,
    BasicEventBindingExerciseComponent,
    DynamicButtonEventBindingComponent,
    BasicNmodelExerciseComponent,
    InputEventBindingExerciseComponent,
    BasicNifExerciseComponent,
    BasicNifElseExerciseComponent,
    BasicNStyleExerciseComponent,
    DynamicallyChangeContentNgstyleExerciseComponent,
    OutputEachElement10Component,
  ],

  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
