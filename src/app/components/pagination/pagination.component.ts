import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent{
  @Input() currentPage = 1;
  @Input() maxPage = 1;
  @Input() pages: number[] | undefined;
  @Output() pageChange = new EventEmitter<number>();

  prevPage(){
    if(this.currentPage > 1){
      this.currentPage--;
      this.pageChange.emit(this.currentPage);
    }
  }

  nextPage(){
    if(this.currentPage < this.maxPage){
      this.currentPage++;
      this.pageChange.emit(this.currentPage);
    }
  }

  goToPage(page: number){
    this.pageChange.emit(page);
  }
}
