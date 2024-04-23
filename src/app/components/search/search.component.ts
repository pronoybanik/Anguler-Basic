import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',

})

export class SearchComponent {
  @Output() searchValue = new EventEmitter<string>();

  text = "";

  inputChange(event: any) {
    console.log("input search value", event.target.value);
    this.text = event.target.value;
  }
  onSearch() {
    console.log("on click button");
    this.searchValue.emit(this.text)
  }
}
