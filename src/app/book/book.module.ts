import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookGridElementComponent } from './book-grid-element/book-grid-element.component';
import { BookGridComponent } from './book-grid/book-grid.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookListElementComponent } from './book-list-element/book-list-element.component';
import { ToggleViewModeComponent } from './toggle-view-mode/toggle-view-mode.component';
import { BookAddFormComponent} from './book-add-form/book-add-form.component';
import { FormsModule } from '@angular/forms';
import { BookService } from './core/book.service';
import { BookDashboardComponent } from './book-dashboard/book-dashboard.component';
import { BookRoutingModule } from 'app/book/book.routing.module';
import { BookDetailComponent } from './book-detail/book-detail.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BookRoutingModule
  ],
  declarations: [
    BookGridElementComponent,
    BookGridComponent,
    BookListComponent,
    BookListElementComponent,
    ToggleViewModeComponent,
    BookAddFormComponent,
    BookDashboardComponent,
    BookDetailComponent],
  exports: [
    BookDashboardComponent
  ],
  providers: [
    BookService
  ]
})
export class BookModule { }
