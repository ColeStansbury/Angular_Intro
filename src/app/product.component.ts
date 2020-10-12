import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "product",
  templateUrl: "product.component.html",
  styleUrls: ["product.component.css"]
})
export class ProductComponent {
  @Input() product;
  @Output() delete = new EventEmitter();

  onDelete() {
    this.delete.emit(this.product);
  }
}
